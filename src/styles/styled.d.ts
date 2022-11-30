/* eslint-disable @typescript-eslint/no-empty-interface */
import "styled-components";

import { ThemeType } from "@/styles/themes"; // Import type from above file

declare module "styled-components" {
  export interface DefaultTheme extends ThemeType {} // extends the global DefaultTheme with our ThemeType.
}

export {};
