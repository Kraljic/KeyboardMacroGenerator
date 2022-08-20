import { MacroGenerator } from "../generator/MacroGenerator.js";
import { HidKey } from "./HidKeyCode.js";
import { TriggerCodeUtil } from "../utils/TriggerCodeUtil.js";
import { NumberUtil } from "../utils/NumberUtil.js";

export class Macro {
  private trigger: number;
  private macroData: number[];

  constructor(macroData: MacroGenerator | number[], ...triggerKeys: HidKey[]) {
    if (Array.isArray(macroData)) {
      this.macroData = macroData;
    } else {
      this.macroData = macroData.getMacroBuffer();
    }
    this.trigger = TriggerCodeUtil.getTriggerCode(triggerKeys);
  }


  getTrigger(): number {
    return this.trigger;
  }
  getMacro(): number[] {
    return this.macroData;
  }

  toString(): string {
    let triggerBytes = NumberUtil.intToArray(this.trigger);

    return `{
    {${this.macroData.length}, ${NumberUtil.toHexArr(
      triggerBytes
    )} }, 
    {${NumberUtil.toHexArr(this.macroData)} },
},`;
  }
}
