import { isNull } from "util";
import { HID_KEYS, HidKey } from './HidKeyCode';
import { MacroGenerator } from "./MacroGenerator";
import { MacroProfile } from "./MacroProfileUtil";

export type MacroMap = {
  keyCombination: HidKey[];
  macro: MacroGenerator;
};

const PROFILE_INTELLIJ = MacroProfile.PROFILE_0;
const PROFILE_INTELLIJ_KEY = new HidKey(PROFILE_INTELLIJ, false);
const PROFILE_VSCODE = MacroProfile.PROFILE_1;
const PROFILE_VSCODE_KEY = new HidKey(PROFILE_VSCODE, false);

const selectProfile_default   = selectProfile(HID_KEYS.KEY_ESC, MacroProfile.PROFILE_DEFAULT);
const selectProfile_intellij  = selectProfile(HID_KEYS.KEY_NUMLOCK, PROFILE_INTELLIJ);
const selectProfile_vsCode    = selectProfile(HID_KEYS.KEY_KPSLASH, PROFILE_VSCODE);

const intellij_build                    = intellijDo(HID_KEYS.KEY_KPDOT,    keyPress(HID_KEYS.KEY_MOD_LCTRL, HID_KEYS.KEY_F9));
const intellij_run                      = intellijDo(HID_KEYS.KEY_KPENTER,  keyPress(HID_KEYS.KEY_MOD_LSHIFT, HID_KEYS.KEY_F10));
const intellij_stop                     = intellijDo(HID_KEYS.KEY_KPMINUS,  keyPress(HID_KEYS.KEY_MOD_LCTRL, HID_KEYS.KEY_F2));
const intellij_debug                    = intellijDo(HID_KEYS.KEY_KPPLUS,   keyPress(HID_KEYS.KEY_MOD_LSHIFT, HID_KEYS.KEY_F9));
const intellij_debug_breakpoint         = intellijDo(HID_KEYS.KEY_KP1,      keyPress(HID_KEYS.KEY_MOD_LCTRL, HID_KEYS.KEY_F8));
const intellij_debug_muteBreakpoints    = intellijDo(HID_KEYS.KEY_KP2,      keyPress(HID_KEYS.KEY_MOD_LCTRL, HID_KEYS.KEY_MOD_LALT, HID_KEYS.KEY_F10));
const intellij_debug_showBreakpoints    = intellijDo(HID_KEYS.KEY_KP3,      keyPress(HID_KEYS.KEY_MOD_LCTRL, HID_KEYS.KEY_MOD_LSHIFT, HID_KEYS.KEY_F8));
const intellij_debug_stepover           = intellijDo(HID_KEYS.KEY_KP7,      keyPress(HID_KEYS.KEY_F8));
const intellij_debug_stepinto           = intellijDo(HID_KEYS.KEY_KP8,      keyPress(HID_KEYS.KEY_F7));
const intellij_debug_stepout            = intellijDo(HID_KEYS.KEY_KP9,      keyPress(HID_KEYS.KEY_MOD_LSHIFT, HID_KEYS.KEY_F8));
const intellij_debug_runToCursor        = intellijDo(HID_KEYS.KEY_KP4,      keyPress(HID_KEYS.KEY_MOD_LALT, HID_KEYS.KEY_F9));
const intellij_debug_evalExpDialog      = intellijDo(HID_KEYS.KEY_KP5,      keyPress(HID_KEYS.KEY_MOD_LALT, HID_KEYS.KEY_F8));
const intellij_debug_resume             = intellijDo(HID_KEYS.KEY_KP6,      keyPress(HID_KEYS.KEY_F9));
const intellij_debug_evalExpNow         = intellijDo(null,                  keyPress(HID_KEYS.KEY_MOD_LCTRL, HID_KEYS.KEY_MOD_LALT, HID_KEYS.KEY_F8));

const intellij_goToClass                = intellijDo(null,                  keyPress(HID_KEYS.KEY_MOD_LCTRL, HID_KEYS.KEY_N));
const intellij_goToFile                 = intellijDo(null,                  keyPress(HID_KEYS.KEY_MOD_LCTRL, HID_KEYS.KEY_MOD_LSHIFT, HID_KEYS.KEY_N));
const intellij_goToSymbol               = intellijDo(null,                  keyPress(HID_KEYS.KEY_MOD_LCTRL, HID_KEYS.KEY_MOD_LALT, HID_KEYS.KEY_MOD_LSHIFT, HID_KEYS.KEY_N));
const intellij_goToLine                 = intellijDo(null,                  keyPress(HID_KEYS.KEY_MOD_LCTRL, HID_KEYS.KEY_G));
const intellij_viewImplementation       = intellijDo(null,                  keyPress(HID_KEYS.KEY_MOD_LCTRL, HID_KEYS.KEY_MOD_LALT, HID_KEYS.KEY_B));
const intellij_viewDecleration          = intellijDo(null,                  keyPress(HID_KEYS.KEY_MOD_LCTRL, HID_KEYS.KEY_U));
const intellij_lastToolWindow           = intellijDo(null,                  keyPress(HID_KEYS.KEY_F12));
const intellij_focusEditor              = intellijDo(null,                  keyPress(HID_KEYS.KEY_ESC));
const intellij_quickDefLookup           = intellijDo(null,                  keyPress(HID_KEYS.KEY_MOD_LCTRL, HID_KEYS.KEY_MOD_LSHIFT, HID_KEYS.KEY_I));
const intellij_bookmark                 = intellijDo(null,                  keyPress(HID_KEYS.KEY_F11));

const intellij_toolWindowProject        = intellijDo(HID_KEYS.KEY_1,        keyPress(HID_KEYS.KEY_MOD_LALT, HID_KEYS.KEY_1));
const intellij_toolWindowCommit         = intellijDo(HID_KEYS.KEY_2,        keyPress(HID_KEYS.KEY_MOD_LALT, HID_KEYS.KEY_0));
const intellij_toolWindowVsc            = intellijDo(HID_KEYS.KEY_3,        keyPress(HID_KEYS.KEY_MOD_LALT, HID_KEYS.KEY_9));
const intellij_toolWindowRun            = intellijDo(HID_KEYS.KEY_4,        keyPress(HID_KEYS.KEY_MOD_LALT, HID_KEYS.KEY_4));
const intellij_toolWindowService        = intellijDo(HID_KEYS.KEY_5,        keyPress(HID_KEYS.KEY_MOD_LALT, HID_KEYS.KEY_F8));
const intellij_toolWindowDebug          = intellijDo(HID_KEYS.KEY_6,        keyPress(HID_KEYS.KEY_MOD_LALT, HID_KEYS.KEY_5));
const intellij_toolWindowTerminal       = intellijDo(HID_KEYS.KEY_7,        keyPress(HID_KEYS.KEY_MOD_LALT, HID_KEYS.KEY_F12));
const intellij_toolWindowBookmarks      = intellijDo(HID_KEYS.KEY_8,        keyPress(HID_KEYS.KEY_MOD_LSHIFT, HID_KEYS.KEY_F11));
const intellij_toolWindowFinde          = intellijDo(HID_KEYS.KEY_9,        keyPress(HID_KEYS.KEY_MOD_LALT, HID_KEYS.KEY_3));

const intellij_parameterInfo            = intellijDo(null,                  keyPress(HID_KEYS.KEY_MOD_LCTRL, HID_KEYS.KEY_P));
const intellij_extendSelection          = intellijDo(null,                  keyPress(HID_KEYS.KEY_MOD_LCTRL, HID_KEYS.KEY_W));
const intellij_shrinkSelection          = intellijDo(null,                  keyPress(HID_KEYS.KEY_MOD_LCTRL, HID_KEYS.KEY_MOD_LSHIFT, HID_KEYS.KEY_W));
const intellij_commentLines             = intellijDo(null,                  keyPress(HID_KEYS.KEY_MOD_LCTRL, HID_KEYS.KEY_KPSLASH));
const intellij_comentSelected           = intellijDo(null,                  keyPress(HID_KEYS.KEY_MOD_LCTRL, HID_KEYS.KEY_MOD_LSHIFT, HID_KEYS.KEY_KPSLASH));

const intellij_refactor                 = intellijDo(null,                  keyPress(HID_KEYS.KEY_MOD_LCTRL, HID_KEYS.KEY_MOD_LALT, HID_KEYS.KEY_MOD_LSHIFT, HID_KEYS.KEY_T));
const intellij_rename                   = intellijDo(null,                  keyPress(HID_KEYS.KEY_MOD_LSHIFT, HID_KEYS.KEY_F6));
const intellij_changeSignature          = intellijDo(null,                  keyPress(HID_KEYS.KEY_MOD_LCTRL, HID_KEYS.KEY_F6));

const intellij_commitChanges            = intellijDo(null,                  keyPress(HID_KEYS.KEY_MOD_LCTRL, HID_KEYS.KEY_K));
const intellij_push                     = intellijDo(null,                  keyPress(HID_KEYS.KEY_MOD_LCTRL, HID_KEYS.KEY_MOD_LSHIFT, HID_KEYS.KEY_K));
const intellij_rollback                 = intellijDo(null,                  keyPress(HID_KEYS.KEY_MOD_LCTRL, HID_KEYS.KEY_MOD_LALT, HID_KEYS.KEY_Z));
const intellij_history                  = intellijDo(null,                  keyPress());

const intellij_mvnCleanInstall         = intellijDo(null,                   mvnMacro("mvn clean install -DskipTests=true"));
const intellij_mvnCleanPackage         = intellijDo(HID_KEYS.KEY_KP0,       mvnMacro("mvn clean package -DskipTests=true"));
const intellij_mvnVersion              = intellijDo(HID_KEYS.KEY_HASHTILDE, mvnMacro("mvn versions:set -DnewVersion="));
const intellij_mvnVersionNextSnapshot  = intellijDo(HID_KEYS.KEY_1,         mvnMacro("mvn versions:set -DnextSnapshot=true versions:commit"));
const intellij_mvnVersionRelease       = intellijDo(HID_KEYS.KEY_2,         mvnMacro("mvn versions:set -DremoveSnapshot=true versions:commit"));

const chrome_google     = keyboardDo(HID_KEYS.KEY_F1, runMacro("chrome google.com"));
const chrome_youtube    = keyboardDo(HID_KEYS.KEY_F2, runMacro("chrome youtube.com"));
const chrome_gmail      = keyboardDo(HID_KEYS.KEY_F3, runMacro("chrome gmail.com"));

const open_fileExplorer       = keyboardDo(HID_KEYS.KEY_F4, runMacro("explorer"));
const open_windowsTerminal    = keyboardDo(HID_KEYS.KEY_F5, runMacro("wt"));
const open_putty              = keyboardDo(HID_KEYS.KEY_F6, runMacro("putty"));
const open_settings           = keyboardDo(HID_KEYS.KEY_F7, runMacro("ms-settings:s"));
const open_bluetoothSettings  = keyboardDo(HID_KEYS.KEY_F8, runMacro("ms-settings:bluetooth"));

const open_vsCode             = keyboardDo(HID_KEYS.KEY_INSERT, runMacro("code"));
const open_intelliJ           = keyboardDo(HID_KEYS.KEY_HOME,   runMacro("idea64"));
const open_cLion              = keyboardDo(HID_KEYS.KEY_PAGEUP, runMacro("clion64"));

const generic_enter     = keyboardPassThrough(HID_KEYS.KEY_ENTER);
const generic_space     = keyboardPassThrough(HID_KEYS.KEY_SPACE);
const generic_backspace = keyboardPassThrough(HID_KEYS.KEY_BACKSPACE);
const generic_up        = keyboardPassThrough(HID_KEYS.KEY_UP);
const generic_down      = keyboardPassThrough(HID_KEYS.KEY_DOWN);
const generic_left      = keyboardPassThrough(HID_KEYS.KEY_LEFT);
const generic_right     = keyboardPassThrough(HID_KEYS.KEY_RIGHT);

export const MACRO_MAP: MacroMap[] = [
    selectProfile_default,
    selectProfile_intellij,
    selectProfile_vsCode,

    chrome_google,
    chrome_youtube,
    chrome_gmail,
    open_fileExplorer,

    open_windowsTerminal,
    open_putty,
    open_settings,
    open_bluetoothSettings,

    open_vsCode,
    open_intelliJ,
    open_cLion,

    intellij_build,
    intellij_run, 
    intellij_debug,
    intellij_stop, 
    intellij_debug_breakpoint,
    intellij_debug_muteBreakpoints,
    intellij_debug_showBreakpoints,
    intellij_debug_stepover,
    intellij_debug_stepinto,
    intellij_debug_stepout,
    intellij_debug_runToCursor,
    intellij_debug_evalExpDialog,
    intellij_debug_evalExpNow,
    intellij_debug_resume,

    intellij_goToClass,
    intellij_goToFile,
    intellij_goToSymbol,
    intellij_goToLine,
    intellij_viewImplementation,
    intellij_viewDecleration,
    intellij_lastToolWindow,
    intellij_focusEditor,
    intellij_quickDefLookup,
    intellij_bookmark,

    intellij_toolWindowBookmarks,
    intellij_toolWindowProject,
    intellij_toolWindowCommit,
    intellij_toolWindowVsc,
    intellij_toolWindowTerminal,
    intellij_toolWindowRun,
    intellij_toolWindowDebug,
    intellij_toolWindowService,
    intellij_toolWindowFinde,

    intellij_parameterInfo,
    intellij_extendSelection,
    intellij_shrinkSelection,
    intellij_commentLines,
    intellij_comentSelected,
    intellij_refactor,
    intellij_rename,
    intellij_changeSignature,

    intellij_commitChanges,
    intellij_push,
    intellij_rollback,
    intellij_history,
    
    intellij_mvnCleanPackage,
    intellij_mvnCleanInstall,
    intellij_mvnVersion,
    intellij_mvnVersionNextSnapshot,
    intellij_mvnVersionRelease,


    generic_enter,
    generic_space,
    generic_backspace,
    generic_up,
    generic_down,
    generic_left,
    generic_right,

].filter(m => m != null);

function keyboardDo(activatingKeys: HidKey | HidKey[], macro: MacroGenerator) : MacroMap {
  if (activatingKeys == null) {
    return null;
  }

  if (Array.isArray(activatingKeys)) {
    return {
      keyCombination: activatingKeys,
      macro: macro
    };
  } else {
    return {
      keyCombination: [activatingKeys],
      macro: macro
    };
  }
}

function keyboardPassThrough(activatingKey: HidKey) : MacroMap {
  return {
    keyCombination: [activatingKey],
    macro: keyPress(activatingKey)
  };
}

function selectProfile(activatingKeys: HidKey | HidKey[], selectedProfile: MacroProfile) : MacroMap  {
  return keyboardDo(activatingKeys, new MacroGenerator().setActiveProfile(selectedProfile).build());
}

function intellijDo(activatingKey: HidKey, macro: MacroGenerator) : MacroMap {
  if (activatingKey == null) {
    return null;
  }

  return keyboardDo([PROFILE_INTELLIJ_KEY, activatingKey], macro);
}

function vsCodeDo(activatingKey: HidKey, macro: MacroGenerator) : MacroMap {
  if (activatingKey == null) {
    return null;
  }

  return keyboardDo([PROFILE_VSCODE_KEY, activatingKey], macro);
}

function keyPress(...hidKeys: HidKey[]) {
  return new MacroGenerator().keyPress(...hidKeys).build();
}

function loginMacro(username: string, password: string) {
  let macro = new MacroGenerator()
    .keyStreamV2(username, 1)
    .keyPress(HID_KEYS.KEY_TAB)
    .delayLong(2)
    .keyStreamV2(password, 1)
    .delayLong(1)
    .keyPress(HID_KEYS.KEY_ENTER)
    .build();

  return macro;
}

function mvnMacro(mvnCmd: string) {
  let macro = new MacroGenerator()
    .keyPress(HID_KEYS.KEY_MOD_LCTRL)
    .keyPress(HID_KEYS.KEY_MOD_LCTRL)
    // .delayLong(5)
    .keyStream(mvnCmd, 1)
    // .delayLong(1)
    .keyPress(HID_KEYS.KEY_ENTER)
    .build();

  return macro;
}

function runMacro(runCommand: string) {
  let macro = new MacroGenerator()
    .keyPress(HID_KEYS.KEY_MOD_LMETA, HID_KEYS.KEY_R)
    .delayLong(3)
    .keyStreamV2(runCommand, 0)
    .delayShort(10)
    .keyPress(HID_KEYS.KEY_ENTER)
    .build();

  return macro;
}
