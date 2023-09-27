import { colors } from "./colors";
import { devices } from "./devices";
import { globalVars } from "./globalVars";
import { spacing } from "./spacing";

export const theme = {
  colors: { ...colors },
  spacing: { ...spacing },
  devices: { ...devices },
  globalVars: { ...globalVars },
};

export type Theme = typeof theme;
