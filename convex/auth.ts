import { createClient, type GenericCtx } from "@convex-dev/better-auth";
import { convex, crossDomain } from "@convex-dev/better-auth/plugins";
import { components } from "./_generated/api";
import { DataModel } from "./_generated/dataModel";
import { query } from "./_generated/server";
import { betterAuth, type BetterAuthOptions } from "better-auth/minimal";
import authConfig from "./auth.config";

const siteUrl = process.env.SITE_URL || 
  (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : "http://localhost:3000");

// The component client has methods needed for integrating Convex with Better Auth,
// as well as helper methods for general use.
export const authComponent = createClient<DataModel>(components.betterAuth);

export const createAuth = (ctx: GenericCtx<DataModel>) => {
  const config: BetterAuthOptions = {
    trustedOrigins: [siteUrl],
    database: authComponent.adapter(ctx),
    // Configure simple, non-verified email/password to get started
    emailAndPassword: {
      enabled: true,
      requireEmailVerification: false,
    },
  };

  // Only add crossDomain plugin if siteUrl is properly configured
  if (siteUrl && siteUrl !== "http://localhost:3000") {
    config.plugins = [
      crossDomain({ siteUrl }),
      convex({ authConfig }),
    ];
  } else {
    config.plugins = [
      convex({ authConfig }),
    ];
  }

  return betterAuth(config);
};

export const getCurrentUser = query({
  args: {},
  handler: async (ctx) => {
    try {
      return authComponent.getAuthUser(ctx);
    } catch (error) {
      console.error("Error in getCurrentUser:", error);
      return null;
    }
  },
});
