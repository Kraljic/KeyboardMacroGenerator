import { HidKey } from "./HidKeyCode.js";
import { Command } from "./CommandEnum.js";

export class KeyEventUtil {
  static keyCommandHeader(cmd: number, hidKeys: HidKey[]): number {
    if (hidKeys.length == 0) return null;

    let keys = KeyEventUtil.generateKeyArray(hidKeys);
    cmd |= keys.length;

    let modKeys = KeyEventUtil.getModKeys(hidKeys);
    if (modKeys != 0x00) {
      cmd |= Command.IS_MOD;
    }

    return cmd;
  }

  static generateKeyArray(hidKeys: HidKey[]): number[] {
    let keyBuffer: number[] = [];

    let modKeys = KeyEventUtil.getModKeys(hidKeys);
    let normalKeys = hidKeys.filter((k) => !k.isModKey());

    if (modKeys != 0x00) {
      keyBuffer.push(modKeys);
    }
    normalKeys.forEach((k) => keyBuffer.push(k.hidCode()));

    return keyBuffer;
  }

  static getModKeys(hidKeys: HidKey[]): number {
    let modKeys = hidKeys.filter((k) => k.isModKey());

    let modKeyVal = 0x00;
    modKeys.forEach((k) => (modKeyVal |= k.hidCode()));

    return modKeyVal;
  }

  static keyEventCommand(cmd: number, hidKeys: HidKey[]): number[] {
    if (hidKeys.length == 0) return null;

    let commandBuffer: number[] = [];
    let cmdHeader = KeyEventUtil.keyCommandHeader(cmd, hidKeys);
    let keys = KeyEventUtil.generateKeyArray(hidKeys);

    commandBuffer.push(cmdHeader);
    keys.forEach((k) => commandBuffer.push(k));

    return commandBuffer;
  }
}
