import { MacroProfile } from "../utils/MacroProfileUtil";
import { HidKey } from "./HidKeyCode";

export interface IKeyboardApi {
  keyDown(...hidKeys: HidKey[]): this;

  keyUp(...hidKeys: HidKey[]): this;

  keyPress(...hidKeys: HidKey[]): this;

  delay(timeMs: number): this;

  delayShort(ticks: number): this;

  delayLong(ticks: number): this;

  delayLongLong(ticks: number): this;

  /**
   * @deprecated Use keyStreamV2 instead
   */
  keyStream(text: string, delayTicks: number): this;

  keyStreamV2(text: string, delayTicks: number): this;

  setActiveProfile(selectedProfile: MacroProfile): this;
}
