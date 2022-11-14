import { Result } from "oxide.ts/dist";

import { appResult, AppSettings } from "./app-settings";
import { firebaseResult, FirebaseSettings } from "./firebase-settings";

interface SettingsProps {
  app: AppSettings;
  firebase: FirebaseSettings;
}

const Settings: SettingsProps = {} as SettingsProps;

type ResultLit = { setting: string; result: Result<unknown, Error> }[];

const resultList: ResultLit = [
  {
    setting: "app",
    result: appResult,
  },
  {
    setting: "firebase",
    result: firebaseResult,
  },
];

function loadSettings() {
  resultList.forEach(({ setting, result }) => {
    if (result.isErr()) throw result.unwrapErr();

    console.log("setting", setting);

    Settings[setting] = result.unwrap();
  });
}

console.log(
  process.env.NEXT_PUBLIC_APP_ENV,
);

loadSettings();

export { Settings };
