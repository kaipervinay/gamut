import { protectedProcedure, publicProcedure, createTRPCRouter } from "../trpc";
import { z } from "zod";

const createUserInput = z.object({
  name: z.string(),
});

export const userRouter = createTRPCRouter({
  create: protectedProcedure
    .input(createUserInput)
    .mutation(({ ctx, input }) => {
      return ctx.prisma.user.create({
        data: {
          name: input.name,
        },
      });
    }),

  list: publicProcedure.query(() => {
    return ["vinay"];
  }),
});
