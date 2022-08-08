import { Command } from "./CommandEnum";

export class MacroProfileUtil {
  static selectProfile(selectedProfile: MacroProfile) {
    let commandBuffer = [];
    commandBuffer.push(Command.PROFILE_SELECT);
    commandBuffer.push(selectedProfile.toFixed(0));

    return commandBuffer;
  }
}

export enum MacroProfile {
  PROFILE_DEFAULT = 0x00,
  PROFILE_0 = 0x90,
  PROFILE_1 = 0x91,
  PROFILE_2 = 0x92,
  PROFILE_3 = 0x93,
}
