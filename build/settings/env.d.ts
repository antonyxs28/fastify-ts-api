import { z } from "zod";
declare const envScheme: z.ZodObject<{
    PORT: z.ZodOptional<z.ZodNumber>;
}, z.core.$strip>;
type EnvScheme = z.infer<typeof envScheme>;
declare global {
    namespace NodeJS {
        interface ProcessEnv extends EnvScheme {
        }
    }
}
export {};
//# sourceMappingURL=env.d.ts.map