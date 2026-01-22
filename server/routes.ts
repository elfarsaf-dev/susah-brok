import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { newsSchema, tipsSchema } from "@shared/schema";
import { Octokit } from "octokit";

export async function registerRoutes(app: Express): Promise<Server> {
  const GITHUB_OWNER = "SAFELFAR05";
  const GITHUB_REPO = "Yiv";
  const GITHUB_PATH = "components.json";

  // Helper to fetch from GitHub
  async function fetchFromGithub(token: string) {
    const octokit = new Octokit({ auth: token });
    const { data }: any = await octokit.rest.repos.getContent({
      owner: GITHUB_OWNER,
      repo: GITHUB_REPO,
      path: GITHUB_PATH,
    });
    const content = Buffer.from(data.content, "base64").toString();
    return { content: JSON.parse(content), sha: data.sha };
  }

  // Helper to push to GitHub
  async function pushToGithub(token: string, content: any, sha: string, message: string) {
    const octokit = new Octokit({ auth: token });
    await octokit.rest.repos.createOrUpdateFileContents({
      owner: GITHUB_OWNER,
      repo: GITHUB_REPO,
      path: GITHUB_PATH,
      message,
      content: Buffer.from(JSON.stringify(content, null, 2)).toString("base64"),
      sha,
    });
  }

  // News endpoints
  app.get("/api/news", async (req, res) => {
    try {
      const token = req.headers.authorization?.split(" ")[1];
      if (!token) return res.status(401).json({ message: "No token provided" });
      
      const { content } = await fetchFromGithub(token);
      // Ensure we only return news if it exists, otherwise empty array
      res.json(content.news || []);
    } catch (error: any) {
      console.error("Github fetch error:", error);
      res.status(500).json({ message: "Failed to fetch news from GitHub" });
    }
  });

  app.post("/api/news", async (req, res) => {
    try {
      const { githubToken, ...data } = req.body;
      if (!githubToken) return res.status(401).json({ message: "No token provided" });
      
      const validatedData = newsSchema.parse(data);
      const { content, sha } = await fetchFromGithub(githubToken);
      
      const updatedContent = {
        ...content,
        news: [...(content.news || []), validatedData]
      };

      await pushToGithub(githubToken, updatedContent, sha, `Add news: ${validatedData.title}`);
      res.json(validatedData);
    } catch (error: any) {
      console.error("Github push error:", error);
      res.status(400).json({ message: error.message || "Invalid news data" });
    }
  });

  // Tips endpoints
  app.get("/api/tips", async (req, res) => {
    try {
      const token = req.headers.authorization?.split(" ")[1];
      if (!token) return res.status(401).json({ message: "No token provided" });
      
      const { content } = await fetchFromGithub(token);
      res.json(content.tips || []);
    } catch (error: any) {
      res.status(500).json({ message: "Failed to fetch tips from GitHub" });
    }
  });

  app.post("/api/tips", async (req, res) => {
    try {
      const { githubToken, ...data } = req.body;
      if (!githubToken) return res.status(401).json({ message: "No token provided" });

      const validatedData = tipsSchema.parse(data);
      const { content, sha } = await fetchFromGithub(githubToken);

      const updatedContent = {
        ...content,
        tips: [...(content.tips || []), validatedData]
      };

      await pushToGithub(githubToken, updatedContent, sha, `Add tip: ${validatedData.title}`);
      res.json(validatedData);
    } catch (error: any) {
      res.status(400).json({ message: error.message || "Invalid tips data" });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
