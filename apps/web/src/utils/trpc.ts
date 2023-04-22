import type { AppRouter } from "@gamut/api";

import { createTRPCReact } from "@trpc/react-query";

export const trpc = createTRPCReact<AppRouter>();
