import { z } from "zod";
import { Err, Ok, Result } from "oxide.ts";

const userSchema = z.object({
  email: z.string().email(),
  token: z.string(),
});

export type UserProps = z.infer<typeof userSchema>;

export function User(props: UserProps): Result<UserProps, Error> {
  const validation = userSchema.safeParse(props);

  if (!validation.success) {
    return Err(validation.error);
  }

  return Ok(validation.data);
}
