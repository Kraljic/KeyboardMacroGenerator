import { HID_KEYS } from "../../../macro/HidKeyCode";
import { INTELLIJ_KEYBINDINGS } from "../../../macro/maps/IntellijMap";
import { IMacroMapper } from "../../IMacroMapper";
import { MacroMapper } from "../MacroMapper";
import { MavenBuilder } from "../maven/MavenBuilder";

export class IntellijBuilder {
  constructor(private _macroMapper: MacroMapper) {}

  public maven(): MavenBuilder {
    this._macroMapper
      .keyPress(HID_KEYS.KEY_MOD_LCTRL)
      .keyPress(HID_KEYS.KEY_MOD_LCTRL)
      .delayLong(1);

    return new MavenBuilder(this._macroMapper);
  }

  public vcs(): IntellijVsc {
    return new IntellijVsc(this._macroMapper);
  }

  public code(): IntellijCode {
    return new IntellijCode(this._macroMapper);
  }

  public debugger(): IntellijDebugger {
    return new IntellijDebugger(this._macroMapper);
  }

  public ide(): IntellijIde {
    return new IntellijIde(this._macroMapper);
  }
}

class IntellijVsc {
  constructor(private _macroMapper: MacroMapper) {}
  
  commitChanges(): IMacroMapper {
    return this._macroMapper.keyPress(...INTELLIJ_KEYBINDINGS.VSC.commitChanges);
  } 
  push(): IMacroMapper {
    return this._macroMapper.keyPress(...INTELLIJ_KEYBINDINGS.VSC.push);
  }
  rollback(): IMacroMapper {
    return this._macroMapper.keyPress(...INTELLIJ_KEYBINDINGS.VSC.rollback);
  }
  history(): IMacroMapper{
    return this._macroMapper.keyPress(...INTELLIJ_KEYBINDINGS.VSC.history);
  }
}

class IntellijCode {
  constructor(private _macroMapper: MacroMapper) {}
  
  changeSignature(): IMacroMapper {
    return this._macroMapper.keyPress(...INTELLIJ_KEYBINDINGS.CODE.changeSignature);
  }
  commentSelected(): IMacroMapper {
    return this._macroMapper.keyPress(...INTELLIJ_KEYBINDINGS.CODE.commentSelected);
  }
  commentLines(): IMacroMapper {
    return this._macroMapper.keyPress(...INTELLIJ_KEYBINDINGS.CODE.commentLines);
  }
  extendSelection(): IMacroMapper {
    return this._macroMapper.keyPress(...INTELLIJ_KEYBINDINGS.CODE.extendSelection);
  }
  parameterInfo(): IMacroMapper {
    return this._macroMapper.keyPress(...INTELLIJ_KEYBINDINGS.CODE.parameterInfo);
  }
  refactor(): IMacroMapper {
    return this._macroMapper.keyPress(...INTELLIJ_KEYBINDINGS.CODE.refactor);
  }
  rename(): IMacroMapper {
    return this._macroMapper.keyPress(...INTELLIJ_KEYBINDINGS.CODE.rename);
  }
  shrinkSelection(): IMacroMapper {
    return this._macroMapper.keyPress(...INTELLIJ_KEYBINDINGS.CODE.shrinkSelection);
  }
}

class IntellijDebugger{
  constructor(private _macroMapper: MacroMapper) {}
  
  breakpoint(): IMacroMapper {
    return this._macroMapper.keyPress(...INTELLIJ_KEYBINDINGS.DEBUGGER.breakpoint);
  } 
  evalExpDialog(): IMacroMapper {
    return this._macroMapper.keyPress(...INTELLIJ_KEYBINDINGS.DEBUGGER.evalExpDialog);
  } 
  evalExpNow(): IMacroMapper {
    return this._macroMapper.keyPress(...INTELLIJ_KEYBINDINGS.DEBUGGER.evalExpNow);
  } 
  muteBreakpoints(): IMacroMapper {
    return this._macroMapper.keyPress(...INTELLIJ_KEYBINDINGS.DEBUGGER.muteBreakpoints);
  } 
  resume(): IMacroMapper {
    return this._macroMapper.keyPress(...INTELLIJ_KEYBINDINGS.DEBUGGER.resume);
  } 
  runToCursor(): IMacroMapper {
    return this._macroMapper.keyPress(...INTELLIJ_KEYBINDINGS.DEBUGGER.runToCursor);
  } 
  showBreakpoints(): IMacroMapper {
    return this._macroMapper.keyPress(...INTELLIJ_KEYBINDINGS.DEBUGGER.showBreakpoints);
  } 
  stepinto(): IMacroMapper {
    return this._macroMapper.keyPress(...INTELLIJ_KEYBINDINGS.DEBUGGER.stepinto);
  } 
  stepout(): IMacroMapper {
    return this._macroMapper.keyPress(...INTELLIJ_KEYBINDINGS.DEBUGGER.stepout);
  } 
  stepover(): IMacroMapper {
    return this._macroMapper.keyPress(...INTELLIJ_KEYBINDINGS.DEBUGGER.stepover);
  }
}

class IntellijIde {
  constructor(private _macroMapper: MacroMapper) {}
  
  actions(): IntellijActions {
    return new IntellijActions(this._macroMapper);
  }

  run(): IntellijRun {
    return new IntellijRun(this._macroMapper);
  }

  toolWindows(): IntellijToolWindows {
    return new IntellijToolWindows(this._macroMapper);
  }
}

class IntellijActions {
  constructor(private _macroMapper: MacroMapper) {}
  
  bookmark(): IMacroMapper {
    return this._macroMapper.keyPress(...INTELLIJ_KEYBINDINGS.IDE.ACTIONS.bookmark);
  }
  focusEditor(): IMacroMapper {
    return this._macroMapper.keyPress(...INTELLIJ_KEYBINDINGS.IDE.ACTIONS.focusEditor);
  }
  goToClass(): IMacroMapper {
    return this._macroMapper.keyPress(...INTELLIJ_KEYBINDINGS.IDE.ACTIONS.goToClass);
  }
  goToFile(): IMacroMapper {
    return this._macroMapper.keyPress(...INTELLIJ_KEYBINDINGS.IDE.ACTIONS.goToFile);
  }
  goToLine(): IMacroMapper {
    return this._macroMapper.keyPress(...INTELLIJ_KEYBINDINGS.IDE.ACTIONS.goToLine);
  }
  goToSymbol(): IMacroMapper {
    return this._macroMapper.keyPress(...INTELLIJ_KEYBINDINGS.IDE.ACTIONS.goToSymbol);
  }
  lastToolWindow(): IMacroMapper {
    return this._macroMapper.keyPress(...INTELLIJ_KEYBINDINGS.IDE.ACTIONS.lastToolWindow);
  }
  quickDefLookup(): IMacroMapper {
    return this._macroMapper.keyPress(...INTELLIJ_KEYBINDINGS.IDE.ACTIONS.quickDefLookup);
  }
  showBookmarks(): IMacroMapper {
    return this._macroMapper.keyPress(...INTELLIJ_KEYBINDINGS.IDE.ACTIONS.showBookmarks);
  }
  viewDecleration(): IMacroMapper {
    return this._macroMapper.keyPress(...INTELLIJ_KEYBINDINGS.IDE.ACTIONS.viewDecleration);
  }
  viewImplementation(): IMacroMapper {
    return this._macroMapper.keyPress(...INTELLIJ_KEYBINDINGS.IDE.ACTIONS.viewImplementation);
  }
}
class IntellijRun {
  constructor(private _macroMapper: MacroMapper) {}
  
  build(): IMacroMapper {
    return this._macroMapper.keyPress(...INTELLIJ_KEYBINDINGS.IDE.RUN.build);
  }
  debug(): IMacroMapper {
    return this._macroMapper.keyPress(...INTELLIJ_KEYBINDINGS.IDE.RUN.debug);
  }
  run(): IMacroMapper {
    return this._macroMapper.keyPress(...INTELLIJ_KEYBINDINGS.IDE.RUN.run);
  }
  stop(): IMacroMapper {
    return this._macroMapper.keyPress(...INTELLIJ_KEYBINDINGS.IDE.RUN.stop);
  }
}
class IntellijToolWindows {
  constructor(private _macroMapper: MacroMapper) {}
  
  toolWindowBookmarks(): IMacroMapper {
    return this._macroMapper.keyPress(...INTELLIJ_KEYBINDINGS.IDE.TOOL_WINDOWS.toolWindowBookmarks);
  }
  toolWindowCommit(): IMacroMapper {
    return this._macroMapper.keyPress(...INTELLIJ_KEYBINDINGS.IDE.TOOL_WINDOWS.toolWindowCommit);
  }
  toolWindowDebug(): IMacroMapper {
    return this._macroMapper.keyPress(...INTELLIJ_KEYBINDINGS.IDE.TOOL_WINDOWS.toolWindowDebug);
  }
  toolWindowFind(): IMacroMapper {
    return this._macroMapper.keyPress(...INTELLIJ_KEYBINDINGS.IDE.TOOL_WINDOWS.toolWindowFind);
  }
  toolWindowProject(): IMacroMapper {
    return this._macroMapper.keyPress(...INTELLIJ_KEYBINDINGS.IDE.TOOL_WINDOWS.toolWindowProject);
  }
  toolWindowRun(): IMacroMapper {
    return this._macroMapper.keyPress(...INTELLIJ_KEYBINDINGS.IDE.TOOL_WINDOWS.toolWindowRun);
  }
  toolWindowService(): IMacroMapper {
    return this._macroMapper.keyPress(...INTELLIJ_KEYBINDINGS.IDE.TOOL_WINDOWS.toolWindowService);
  }
  toolWindowTerminal(): IMacroMapper {
    return this._macroMapper.keyPress(...INTELLIJ_KEYBINDINGS.IDE.TOOL_WINDOWS.toolWindowTerminal);
  }
  toolWindowVsc(): IMacroMapper {
    return this._macroMapper.keyPress(...INTELLIJ_KEYBINDINGS.IDE.TOOL_WINDOWS.toolWindowVsc);
  }
}