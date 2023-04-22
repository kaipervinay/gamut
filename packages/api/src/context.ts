import { prisma } from "@gamut/db";

import type {
  SignedInAuthObject,
  SignedOutAuthObject,
} from "@clerk/nextjs/api";
import { getAuth } from "@clerk/nextjs/server";
import { inferAsyncReturnType } from "@trpc/server";
import { type CreateNextContextOptions } from "@trpc/server/adapters/next";

interface AuthContext {
  auth: SignedInAuthObject | SignedOutAuthObject;
}

const createInnerTRPCContext = ({ auth }: AuthContext) => {
  return {
    auth,
    prisma,
  };
};

export const createTRPCContext = async (options: CreateNextContextOptions) => {
  return createInnerTRPCContext({ auth: getAuth(options.req) });
};

export type Context = inferAsyncReturnType<typeof createTRPCContext>;
