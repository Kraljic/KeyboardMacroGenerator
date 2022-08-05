import { HID_KEYS, HidKey } from "./HidKeyCode.js";
import { Command } from "./CommandEnum.js";
import { KeyEventUtil } from "./KeyEventUtil.js";
import { DelayEventUtil } from "./DelayEventUtil.js";
import { KeyStreamUtil } from "./KeyStreamUtil.js";
import { NumberUtil } from "./NumberUtil.js";

export class MacroGenerator {
  private macroBuffer: number[];
  private buildDone: boolean;

  constructor() {
    this.macroBuffer = [];
    this.buildDone = false;
  }

  getMacroBuffer(): number[] {
    return this.macroBuffer;
  }

  keyDown(...hidKeys: HidKey[]): MacroGenerator {
    return this.append(KeyEventUtil.keyEventCommand(Command.KEY_DOWN, hidKeys));
  }

  keyUp(...hidKeys: HidKey[]): MacroGenerator {
    return this.append(KeyEventUtil.keyEventCommand(Command.KEY_UP, hidKeys));
  }

  keyPress(...hidKeys: HidKey[]): MacroGenerator {
    return this.append(
      KeyEventUtil.keyEventCommand(Command.KEY_PRESS, hidKeys)
    );
  }

  delay(timeMs: number): MacroGenerator {
    return this.append(DelayEventUtil.delayGuess(timeMs));
  }

  delayShort(ticks: number): MacroGenerator {
    return this.append(DelayEventUtil.delay(Command.DELAY_SHORT, ticks));
  }

  delayLong(ticks: number): MacroGenerator {
    return this.append(DelayEventUtil.delay(Command.DELAY_LONG, ticks));
  }

  delayLongLong(ticks: number): MacroGenerator {
    return this.append(DelayEventUtil.delay(Command.DELAY_LONG_LONG, ticks));
  }

  keyStream(text: string, delayTicks: number): MacroGenerator {
    return this.append(KeyStreamUtil.keyStream(text, delayTicks));
  }

  private end(): MacroGenerator {
    this.append([Command.END]);
    return this;
  }

  build(): MacroGenerator {
    this.end();
    this.buildDone = true;

    return this;
  }
  public print(): void {
    console.log(NumberUtil.toHexArr(this.macroBuffer));
  }

  private append(command: number[]): MacroGenerator {
    if (this.buildDone) throw "Object already built!";

    new Uint8Array(command).forEach((b) => this.macroBuffer.push(b));

    return this;
  }
}
