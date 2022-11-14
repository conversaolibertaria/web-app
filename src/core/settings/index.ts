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

    Settings[setting] = result.unwrap();
  });
}

loadSettings();

export { Settings };
