import { type News, type Tips } from "@shared/schema";
import { randomUUID } from "crypto";

// Mock User types since they are missing from schema.ts
export interface User {
  id: string;
  username: string;
}

export type InsertUser = Omit<User, "id">;

export interface IStorage {
  getUser(id: string): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  getNews(): Promise<News[]>;
  createNews(news: News): Promise<News>;
  getTips(): Promise<Tips[]>;
  createTips(tips: Tips): Promise<Tips>;
}

export class MemStorage implements IStorage {
  private users: Map<string, User>;
  private news: Map<string, News>;
  private tips: Map<string, Tips>;

  constructor() {
    this.users = new Map();
    this.news = new Map();
    this.tips = new Map();
  }

  async getUser(id: string): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = randomUUID();
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }

  async getNews(): Promise<News[]> {
    return Array.from(this.news.values());
  }

  async createNews(news: News): Promise<News> {
    this.news.set(news.id, news);
    return news;
  }

  async getTips(): Promise<Tips[]> {
    return Array.from(this.tips.values());
  }

  async createTips(tips: Tips): Promise<Tips> {
    this.tips.set(tips.id, tips);
    return tips;
  }
}

export const storage = new MemStorage();
