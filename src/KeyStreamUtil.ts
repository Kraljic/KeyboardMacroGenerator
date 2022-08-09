import { Command } from "./CommandEnum.js";
import { NumberUtil } from "./NumberUtil.js";

export class KeyStreamUtil {
  static keyStream(text: string, delayTicks: number) {
    let commandBuffer = [];
    commandBuffer.push(Command.KEY_STREAM);
    commandBuffer.push(delayTicks);
    let sizeByteArr = NumberUtil.shortToArray(text.length);
    sizeByteArr.forEach((b) => commandBuffer.push(b));
    text.split("").forEach((c) => commandBuffer.push(c.charCodeAt(0)));

    return commandBuffer;
  }

  static keyStreamV2(text: string, delayTicks: number) {
    let commandBuffer = [];
    commandBuffer.push(Command.KEY_STREAM_V2);
    commandBuffer.push(delayTicks);

    let sizeByteArr = NumberUtil.shortToArray(text.length);
    sizeByteArr.forEach((b) => commandBuffer.push(b));
    text.split("").forEach((c) => commandBuffer.push(c.charCodeAt(0)));

    return commandBuffer;
  }
}
