import { type AppRouter } from "./src/root";
import { type inferRouterInputs, type inferRouterOutputs } from "@trpc/server";

export { appRouter, type AppRouter } from "./src/root";
export { createTRPCContext } from "./src/context";

/**
 * Inference helpers for input types
 * @example type HelloInput = RouterInputs['example']['hello']
 **/
export type RouterInputs = inferRouterInputs<AppRouter>;

/**
 * Inference helpers for output types
 * @example type HelloOutput = RouterOutputs['example']['hello']
 **/
export type RouterOutputs = inferRouterOutputs<AppRouter>;