import { httpRouter } from "convex/server";
import { authComponent, createAuth } from "./auth";

const http = httpRouter();

try {
  authComponent.registerRoutes(http, createAuth, {
    cors: true,
  });
} catch (error) {
  console.error("Failed to register auth routes:", error);
}

export default http;
