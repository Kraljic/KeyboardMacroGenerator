import { Macro } from "./Macro";
import { MemoryGenerator } from './MemoryGenerator';
import { MacroMap, MACRO_MAP } from './MacroMappings';

export class Main {



  constructor() {
    
    let macros: Macro[] = [ ];

    MACRO_MAP.forEach((macro: MacroMap) => macros.push(new Macro(macro.macro, ...macro.keyCombination)))

    macros.sort((a, b) => a.getTrigger() - b.getTrigger());
    // macros.forEach((m) => console.log(m.toString()));
    new MemoryGenerator(macros).generate();
  }
}

export const Test = {
  run: new Main(),
};
