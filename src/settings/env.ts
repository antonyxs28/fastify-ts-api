import {TypeOf, z} from "zod";

const envScheme = z.object({
    PORT: z.number().optional()
})

type EnvScheme = z.infer<typeof envScheme>

declare global {
  namespace NodeJS {
    interface ProcessEnv extends EnvScheme {}
  }
}

const parsedEnv = envScheme.parse(process.env);
process.env=Object.create({...process.env, ...parsedEnv
})