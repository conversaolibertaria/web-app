import { Result } from "oxide.ts";

export interface LoginService {
  login(email: string, password: string): Promise<Result<string, string>>;
}
