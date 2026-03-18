import { z } from "zod";
const envScheme = z.object({
    PORT: z.number().optional()
});
const parsedEnv = envScheme.parse(process.env);
process.env = Object.create({ ...process.env, ...parsedEnv
});
//# sourceMappingURL=env.js.map