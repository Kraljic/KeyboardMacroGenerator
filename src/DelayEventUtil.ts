import { Command } from "./CommandEnum.js";
import { NumberUtil } from "./NumberUtil.js";
export class DelayEventUtil {
  static delay(delayCmd: number, ticks: number): number[] {
    let commandBuffer: number[] = [];

    commandBuffer.push(delayCmd);

    switch (delayCmd) {
      case Command.DELAY_SHORT:
      case Command.DELAY_LONG:
        commandBuffer.push(ticks);
        break;
      case Command.DELAY_LONG_LONG:
        let numBytes = NumberUtil.intToArray(ticks);
        numBytes.forEach((b) => commandBuffer.push(b));
        break;
    }

    return commandBuffer;
  }

  static delayGuess(timeMs: number): number[] {
    let ticks = timeMs / 10;

    if (ticks < 256) {
      return DelayEventUtil.delay(ticks, Command.DELAY_SHORT);
    } else if (ticks % 10 == 0) {
      return DelayEventUtil.delay(timeMs / 10, Command.DELAY_LONG);
    } else {
      return DelayEventUtil.delay(ticks, Command.DELAY_LONG_LONG);
    }
  }
}
