import { z } from "zod";
import { Err, Ok, Result } from "oxide.ts";

const firebaseSchema = z.object({
  // shared
  projectId: z.string(),
  authDomain: z.string(),
  apiKey: z.string(),
  storageBucket: z.string(),
  messagingSenderId: z.string(),
  appId: z.string(),
  measurementId: z.string(),
});

export type FirebaseSettings = z.infer<typeof firebaseSchema>;

const firebaseSettings: FirebaseSettings = {
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  apiKey: process.env.NEXT_PUBLIC_API_KEY,
  storageBucket: process.env.NEXT_PUBLIC_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_APP_ID,
  measurementId: process.env.NEXT_PUBLIC_MEASUREMENT_ID,
};

const validation = firebaseSchema.safeParse(firebaseSettings);

export const firebaseResult: Result<FirebaseSettings, Error> =
  validation.success ? Ok(validation.data) : Err(validation.error);
