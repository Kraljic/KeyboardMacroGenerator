import { Command } from "../macro/CommandEnum";
import { HidKey } from "../macro/HidKeyCode";
import { DelayEventUtil } from "../utils/DelayEventUtil";
import { KeyEventUtil } from "../utils/KeyEventUtil";
import { KeyStreamUtil } from "../utils/KeyStreamUtil";
import { MacroProfile, MacroProfileUtil } from '../utils/MacroProfileUtil';
import { NumberUtil } from "../utils/NumberUtil";
import { IMacroGenerator } from './IMacroGenerator';

export class MacroGenerator implements IMacroGenerator {
  private macroBuffer: number[];
  private buildDone: boolean;

  constructor() {
    this.macroBuffer = [];
    this.buildDone = false;
  }

  getMacroBuffer(): number[] {
    return this.macroBuffer;
  }

  public keyDown(...hidKeys: HidKey[]): this {
    return this.append(KeyEventUtil.keyEventCommand(Command.KEY_DOWN, hidKeys));
  }

  public keyUp(...hidKeys: HidKey[]): this {
    return this.append(KeyEventUtil.keyEventCommand(Command.KEY_UP, hidKeys));
  }

  public keyPress(...hidKeys: HidKey[]): this {
    return this.append(
      KeyEventUtil.keyEventCommand(Command.KEY_PRESS, hidKeys)
    );
  }

  public delay(timeMs: number): this {
    return this.append(DelayEventUtil.delayGuess(timeMs));
  }

  public delayShort(ticks: number): this {
    return this.append(DelayEventUtil.delay(Command.DELAY_SHORT, ticks));
  }

  public delayLong(ticks: number): this {
    return this.append(DelayEventUtil.delay(Command.DELAY_LONG, ticks));
  }

  public delayLongLong(ticks: number): this {
    return this.append(DelayEventUtil.delay(Command.DELAY_LONG_LONG, ticks));
  }

  public keyStream(text: string, delayTicks: number): this {
    return this.append(KeyStreamUtil.keyStream(text, delayTicks));
  }

  public keyStreamV2(text: string, delayTicks: number): this {
    return this.append(KeyStreamUtil.keyStreamV2(text, delayTicks));
  }

  public setActiveProfile(selectedProfile: MacroProfile): this {
    return this.append(MacroProfileUtil.selectProfile(selectedProfile));
  }

  private end(): this {
    this.append([Command.END]);
    return this;
  }

  build(): number[] {
    this.end();
    this.buildDone = true;

    return this.macroBuffer;
  }

  public print(): void {
    console.log(NumberUtil.toHexArr(this.macroBuffer));
  }

  private append(command: number[]): this {
    if (this.buildDone) throw "Object already built!";

    new Uint8Array(command).forEach((b) => this.macroBuffer.push(b));

    return this;
  }
}
