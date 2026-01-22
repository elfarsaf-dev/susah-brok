import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { newsSchema, tipsSchema } from "@shared/schema";

export async function registerRoutes(app: Express): Promise<Server> {
  // News endpoints
  app.get("/api/news", async (_req, res) => {
    try {
      // In a real app, you would fetch from GitHub here
      // For now, we'll return mock data that can be updated
      const news = await storage.getNews();
      res.json(news);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch news" });
    }
  });

  app.post("/api/news", async (req, res) => {
    try {
      const data = newsSchema.parse(req.body);
      const news = await storage.createNews(data);
      res.json(news);
    } catch (error) {
      res.status(400).json({ message: "Invalid news data" });
    }
  });

  // Tips endpoints
  app.get("/api/tips", async (_req, res) => {
    try {
      const tips = await storage.getTips();
      res.json(tips);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch tips" });
    }
  });

  app.post("/api/tips", async (req, res) => {
    try {
      const data = tipsSchema.parse(req.body);
      const tip = await storage.createTips(data);
      res.json(tip);
    } catch (error) {
      res.status(400).json({ message: "Invalid tips data" });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
