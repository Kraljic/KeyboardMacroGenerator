import { MacroProfile } from "../utils/MacroProfileUtil";
import { IntellijBuilder } from './impl/intellij/IntellijBuilder';
import { MacroMapper } from "./impl/MacroMapper";
import { MacroBuilder } from './impl/MacroBuilder';
import { HID_KEYS, HidKey } from '../macro/HidKeyCode';
import { IMacroMapper } from './IMacroMapper';

export class MacroFactory {
  
    public static readonly INTELLIJ_PROFILE = MacroProfile.PROFILE_0;
    public static readonly VSCODE_PROFILE = MacroProfile.PROFILE_1;

    static new(): MacroBuilder {
        let macroMapper = new MacroMapper();
        
        return new MacroBuilder(macroMapper);
    }

    static intellij(): IntellijBuilder {
        let macroMapper = new MacroMapper(this.INTELLIJ_PROFILE);
        
        return new IntellijBuilder(macroMapper);
    }

    static windowsRun(command: string): IMacroMapper {
        return this.new()
            .keyPress(HID_KEYS.KEY_MOD_LMETA, HID_KEYS.KEY_R)
            .delayLong(1)
            .keyStream(command, 0)
            .keyPress(HID_KEYS.KEY_ENTER)
            .build();
    }
    
    
    static mapKey(key: HidKey): IMacroMapper {
        return this.new()
            .keyPress(key)
            .build();
    }

    static selectProfile(profile: MacroProfile): IMacroMapper {
        return this.new()
            .setActiveProfile(profile)
            .build();
    }
}
