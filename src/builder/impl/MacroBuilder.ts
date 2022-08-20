import { HidKey } from "../../macro/HidKeyCode";
import { IKeyboardApi } from '../../macro/IKeyboardApi';
import { MacroProfile } from "../../utils/MacroProfileUtil";
import { IMacroBuilder } from '../IMacroBuilder';
import { IMacroMapper } from '../IMacroMapper';
import { MacroMapper } from './MacroMapper';

export class MacroBuilder implements IKeyboardApi, IMacroBuilder {
  constructor(private _macroMapper: MacroMapper) {
    
  }

  keyDown(...hidKeys: HidKey[]): this {
    this._macroMapper.keyDown(...hidKeys);
    return this;
  }

  keyUp(...hidKeys: HidKey[]) {
    this._macroMapper.keyUp(...hidKeys);
    return this;
  }

  keyPress(...hidKeys: HidKey[]) {
    this._macroMapper.keyPress(...hidKeys);
    return this;
  }

  delay(timeMs: number) {
    this._macroMapper.delay(timeMs);
    return this;
  }

  delayShort(ticks: number) {
    this._macroMapper.delayShort(ticks);
    return this;
  }

  delayLong(ticks: number) {
    this._macroMapper.delayLong(ticks);
    return this;
  }

  delayLongLong(ticks: number) {
    this._macroMapper.delayLongLong(ticks);
    return this;
  }

  keyStream(text: string, delayTicks: number) {
    this._macroMapper.keyStream(text, delayTicks);
    return this;
  }

  keyStreamV2(text: string, delayTicks: number) {
    this._macroMapper.keyStreamV2(text, delayTicks);
    return this;
  }

  setActiveProfile(selectedProfile: MacroProfile) {
    this._macroMapper.setActiveProfile(selectedProfile);
    return this;
  }

  build(): IMacroMapper {
    return this._macroMapper;
  }
}
