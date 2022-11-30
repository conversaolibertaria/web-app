/* eslint-disable @typescript-eslint/no-explicit-any */
import { Result } from 'oxide.ts'

import { appResult, AppSettings } from './app-settings'
import { firebaseResult, FirebaseSettings } from './firebase-settings'

export class SettingsSingleton {
  private static _instance: SettingsSingleton

  public readonly app!: AppSettings
  public readonly firebase!: FirebaseSettings

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  private constructor(props: SettingsSingleton) {
    Object.assign(this, props)
  }

  public static new() {
    const settings: Result<unknown, Error>[] = [appResult, firebaseResult]

    if (!this._instance) {
      const errors = settings
        .filter((setting) => setting.isErr())
        .map((invalidSetting) => invalidSetting.unwrapErr())

      if (errors.length) throw errors

      this._instance = new SettingsSingleton({
        app: appResult.unwrap(),
        firebase: firebaseResult.unwrap(),
      })
    }

    return this._instance
  }
}

export const Settings = Object.freeze(SettingsSingleton.new())
