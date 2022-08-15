import { Macro } from "./macro/Macro";
import { MemoryGenerator } from './builder/MemoryGenerator';
import { MacroMap, MACRO_MAP } from './builder/MacroMappings';

export class Main {
  constructor() {
    
    let macros: Macro[] = [ ];

    MACRO_MAP.forEach((macro: MacroMap) => macros.push(new Macro(macro.macro.build(), ...macro.keyCombination)))

    macros.sort((a, b) => a.getTrigger() - b.getTrigger());
    // macros.forEach((m) => console.log(m.toString()));
    new MemoryGenerator(macros).generate();
  }
}

export const Test = {
  run: new Main(),
};
