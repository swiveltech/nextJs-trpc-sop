import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

export const nameRouter =createTRPCRouter({
    getName:publicProcedure.query(()=>{
        return "Swivel Tech";

    })
})