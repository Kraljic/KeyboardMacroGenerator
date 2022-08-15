import { HID_KEYS, HidKey } from "../macro/HidKeyCode";
import { Command } from "../macro/CommandEnum";
import { KeyEventUtil } from "../utils/KeyEventUtil";
import { DelayEventUtil } from "../utils/DelayEventUtil";
import { KeyStreamUtil } from "../utils/KeyStreamUtil";
import { NumberUtil } from "../utils/NumberUtil";
import { MacroProfile, MacroProfileUtil } from '../utils/MacroProfileUtil';

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

  /**
   * @deprecated Use keyStreamV2 instead
   */
  keyStream(text: string, delayTicks: number): MacroGenerator {
    return this.append(KeyStreamUtil.keyStream(text, delayTicks));
  }

  keyStreamV2(text: string, delayTicks: number): MacroGenerator {
    return this.append(KeyStreamUtil.keyStreamV2(text, delayTicks));
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
