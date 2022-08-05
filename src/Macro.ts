import { MacroGenerator } from "./MacroGenerator.js";
import { HidKey } from "./HidKeyCode.js";
import { TriggerCodeUtil } from "./TriggerCodeUtil.js";
import { NumberUtil } from "./NumberUtil.js";

export class Macro {
  private trigger: number;
  private macro: MacroGenerator;

  constructor(macro: MacroGenerator, ...triggerKeys: HidKey[]) {
    this.macro = macro;
    this.trigger = TriggerCodeUtil.getTriggerCode(triggerKeys);
  }

  getTrigger(): number {
    return this.trigger;
  }
  getMacro(): number[] {
    return this.macro.getMacroBuffer();
  }

  toString(): string {
    let triggerBytes = NumberUtil.intToArray(this.trigger);

    return `{
    {${this.macro.getMacroBuffer().length}, ${NumberUtil.toHexArr(
      triggerBytes
    )} }, 
    {${NumberUtil.toHexArr(this.macro.getMacroBuffer())} },
},`;
  }
}
