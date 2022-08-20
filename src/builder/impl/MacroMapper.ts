import { IMacroMapper } from "../IMacroMapper";
import { HidKey, HID_KEYS } from '../../macro/HidKeyCode';
import { Macro } from "../../macro/Macro";
import { IMacroGenerator } from '../../generator/IMacroGenerator';
import { MacroProfile } from '../../utils/MacroProfileUtil';
import { MacroGenerator } from '../../generator/MacroGenerator';

export class MacroMapper extends MacroGenerator implements IMacroMapper {

  constructor(private _selectedProfile?: MacroProfile) {
    super();

    if (!_selectedProfile) {
      _selectedProfile = MacroProfile.PROFILE_DEFAULT;
    }
  }

  map(...hidKeys: HidKey[]): Macro {
    if (!hidKeys) {
      // throw new Error("Hid keys can not be null.");
      return null;
    }
    if (!Array.isArray(hidKeys)) {
      hidKeys = [hidKeys];
    }

    if (hidKeys.length == 0) {
      // throw new Error("At least one hid key must be provided.");
      return null;
    } else if (hidKeys.some((k) => !k)) {
      // throw new Error("Hid keys can not contain null values.");
      return null;
    }

    if (this._selectedProfile) {
      hidKeys.push(new HidKey(this._selectedProfile, false));
    }

    return new Macro(this.build(), ...hidKeys);
  }
}
