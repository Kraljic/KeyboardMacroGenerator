import { MACRO_MAP } from "./generator/MacroMappings";
import { MemoryGenerator } from "./generator/MemoryGenerator";
import { Macro } from "./macro/Macro";

export class Main {
  constructor() {
    let macros: Macro[] = [...MACRO_MAP];

    macros.sort((a, b) => a.getTrigger() - b.getTrigger());
    macros.forEach((m) => console.log(m.toString()));
    new MemoryGenerator(macros).generate();
  }
}

export const Test = {
  run: new Main(),
};
