import { signInWithEmailAndPassword } from "firebase/auth";
import { Err, Ok, Result } from "oxide.ts";

import { LoginService } from "@/core/services/login-service";

import { auth } from "./client";

export class FirebaseLoginService implements LoginService {
  async login(
    email: string,
    password: string,
  ): Promise<Result<string, string>> {
    try {
      const res = await signInWithEmailAndPassword(auth, email, password);

      const token = await res.user.getIdToken();

      return Ok(token);
    } catch (error) {
      return Err(JSON.stringify(error));
    }
  }
}
