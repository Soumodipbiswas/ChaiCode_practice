import { z } from "zod";

const envSchema = z.object({
    PORT: z.string().optional()
})

function createEnv(env: NodeJS.ProcessEnv) {
    const safeparseResult = envSchema.safeParse(env);
    if (!safeparseResult.success) {
        throw new Error(safeparseResult.error.message);
    }

    return safeparseResult.data;
}

export const env = createEnv(process.env)