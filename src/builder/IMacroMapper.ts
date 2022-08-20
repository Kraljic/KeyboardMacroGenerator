import { HidKey } from "../macro/HidKeyCode";
import { Macro } from "../macro/Macro";

export interface IMacroMapper {
  map(...hidKeys: HidKey[]): Macro;
}
