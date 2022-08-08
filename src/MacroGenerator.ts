import { HID_KEYS, HidKey } from "./HidKeyCode";
import { Command } from "./CommandEnum";
import { KeyEventUtil } from "./KeyEventUtil";
import { DelayEventUtil } from "./DelayEventUtil";
import { KeyStreamUtil } from "./KeyStreamUtil";
import { NumberUtil } from "./NumberUtil";
import { MacroProfile, MacroProfileUtil } from './MacroProfileUtil';

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

  setActiveProfile(selectedProfile: MacroProfile): MacroGenerator {
    return this.append(MacroProfileUtil.selectProfile(selectedProfile));
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
