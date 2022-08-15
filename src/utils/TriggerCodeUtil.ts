import { HidKey } from "../macro/HidKeyCode.js";

export class TriggerCodeUtil {
  static getTriggerCode(keys: HidKey[]): number {
    let modKeys = keys
      .filter((k) => k.isModKey())
      .map((k) => k.hidCode())
      .reduce((a, b) => a | b, 0x00);

    let normalKeys = keys
      .filter((k) => !k.isModKey())
      .map((k) => k.hidCode())
      .sort((a, b) => b - a);

    let triggerCode = modKeys << 24;
    for (let i = 0; i < 3; i++) {
      triggerCode |= normalKeys[i] << (8 * i);
    }

    return triggerCode;
  }
}
