import { z } from "zod";
import { Err, Ok, Result } from "oxide.ts";

function handleEnv(env: string) {
  if (env.includes("dev")) return "development";
  if (env.includes("prod")) return "production";
  if (env.includes("stag")) return "staging";
}

const appSchema = z.object({
  nodeEnv: z.string().refine(handleEnv),
  basePath: z.string(),
});

export type AppSettings = z.infer<typeof appSchema>;

const appSettings: AppSettings = {
  nodeEnv: process.env.NEXT_PUBLIC_APP_ENV,
  basePath: process.env.NEXT_PUBLIC_BASEPATH,
};

const validation = appSchema.safeParse(appSettings);

export const appResult: Result<AppSettings, Error> = validation.success
  ? Ok(validation.data)
  : Err(validation.error);
