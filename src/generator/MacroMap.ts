import { HidKey } from '../macro/HidKeyCode';
import { MacroGenerator } from './MacroGenerator';

export type MacroMap = {
    keyCombination: HidKey[];
    macro: MacroGenerator;
  };
  