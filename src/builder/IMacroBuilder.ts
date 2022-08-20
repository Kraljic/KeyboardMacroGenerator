import { IMacroMapper } from "./IMacroMapper";

export interface IMacroBuilder {
  build(): IMacroMapper;
}
