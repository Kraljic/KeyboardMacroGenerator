import { MacroFactory } from '../builder/MacroFactory';
import { HidKey, HID_KEYS } from '../macro/HidKeyCode';
import { Macro } from '../macro/Macro';
import { MacroProfile } from "../utils/MacroProfileUtil";
import { MacroGenerator } from "./MacroGenerator";
import { MacroMap } from './MacroMap';


const selectProfile_default   = MacroFactory.selectProfile(MacroProfile.PROFILE_DEFAULT).map(HID_KEYS.KEY_ESC);
const selectProfile_intellij  = MacroFactory.selectProfile(MacroFactory.INTELLIJ_PROFILE).map(HID_KEYS.KEY_NUMLOCK);
const selectProfile_vsCode    = MacroFactory.selectProfile(MacroFactory.VSCODE_PROFILE).map(HID_KEYS.KEY_KPSLASH);

const intellij_build                    = MacroFactory.intellij().ide().run().build().map(HID_KEYS.KEY_KPDOT);
const intellij_run                      = MacroFactory.intellij().ide().run().run().map(HID_KEYS.KEY_KPENTER);
const intellij_stop                     = MacroFactory.intellij().ide().run().stop().map(HID_KEYS.KEY_KPMINUS);
const intellij_debug                    = MacroFactory.intellij().ide().run().debug().map(HID_KEYS.KEY_KPPLUS);

const intellij_debug_breakpoint         = MacroFactory.intellij().debugger().breakpoint().map(HID_KEYS.KEY_KP1);
const intellij_debug_muteBreakpoints    = MacroFactory.intellij().debugger().muteBreakpoints().map(HID_KEYS.KEY_KP2);
const intellij_debug_showBreakpoints    = MacroFactory.intellij().debugger().showBreakpoints().map(HID_KEYS.KEY_KP3);
const intellij_debug_stepover           = MacroFactory.intellij().debugger().stepover().map(HID_KEYS.KEY_KP7);
const intellij_debug_stepinto           = MacroFactory.intellij().debugger().stepinto().map(HID_KEYS.KEY_KP8);
const intellij_debug_stepout            = MacroFactory.intellij().debugger().stepout().map(HID_KEYS.KEY_KP9);
const intellij_debug_runToCursor        = MacroFactory.intellij().debugger().runToCursor().map(HID_KEYS.KEY_KP4);
const intellij_debug_evalExpDialog      = MacroFactory.intellij().debugger().evalExpDialog().map(HID_KEYS.KEY_KP5);
const intellij_debug_resume             = MacroFactory.intellij().debugger().resume().map(HID_KEYS.KEY_KP6);
const intellij_debug_evalExpNow         = MacroFactory.intellij().debugger().evalExpNow().map(null);

const intellij_goToClass                = MacroFactory.intellij().ide().actions().goToClass().map(null);
const intellij_goToFile                 = MacroFactory.intellij().ide().actions().goToFile().map(null);
const intellij_goToSymbol               = MacroFactory.intellij().ide().actions().goToSymbol().map(null);
const intellij_goToLine                 = MacroFactory.intellij().ide().actions().goToLine().map(null);
const intellij_viewImplementation       = MacroFactory.intellij().ide().actions().viewImplementation().map(null);
const intellij_viewDecleration          = MacroFactory.intellij().ide().actions().viewDecleration().map(null);
const intellij_lastToolWindow           = MacroFactory.intellij().ide().actions().lastToolWindow().map(null);
const intellij_focusEditor              = MacroFactory.intellij().ide().actions().focusEditor().map(null);
const intellij_quickDefLookup           = MacroFactory.intellij().ide().actions().quickDefLookup().map(null);
const intellij_bookmark                 = MacroFactory.intellij().ide().actions().bookmark().map(null);
const intellij_showBookmarks            = MacroFactory.intellij().ide().actions().showBookmarks().map(null);

const intellij_toolWindowProject        = MacroFactory.intellij().ide().toolWindows().toolWindowProject().map(HID_KEYS.KEY_1);
const intellij_toolWindowCommit         = MacroFactory.intellij().ide().toolWindows().toolWindowCommit().map(HID_KEYS.KEY_2);
const intellij_toolWindowVsc            = MacroFactory.intellij().ide().toolWindows().toolWindowVsc().map(HID_KEYS.KEY_3);
const intellij_toolWindowRun            = MacroFactory.intellij().ide().toolWindows().toolWindowRun().map(HID_KEYS.KEY_4);
const intellij_toolWindowService        = MacroFactory.intellij().ide().toolWindows().toolWindowService().map(HID_KEYS.KEY_5);
const intellij_toolWindowDebug          = MacroFactory.intellij().ide().toolWindows().toolWindowDebug().map(HID_KEYS.KEY_6);
const intellij_toolWindowTerminal       = MacroFactory.intellij().ide().toolWindows().toolWindowTerminal().map(HID_KEYS.KEY_7);
const intellij_toolWindowBookmarks      = MacroFactory.intellij().ide().toolWindows().toolWindowBookmarks().map(HID_KEYS.KEY_8);
const intellij_toolWindowFind           = MacroFactory.intellij().ide().toolWindows().toolWindowFind().map(HID_KEYS.KEY_9);

const intellij_parameterInfo            = MacroFactory.intellij().code().parameterInfo().map(null);
const intellij_extendSelection          = MacroFactory.intellij().code().extendSelection().map(null);
const intellij_shrinkSelection          = MacroFactory.intellij().code().shrinkSelection().map(null);
const intellij_commentLines             = MacroFactory.intellij().code().commentLines().map(null);
const intellij_commentSelected           = MacroFactory.intellij().code().commentSelected().map(null);
const intellij_refactor                 = MacroFactory.intellij().code().refactor().map(null);
const intellij_rename                   = MacroFactory.intellij().code().rename().map(null);
const intellij_changeSignature          = MacroFactory.intellij().code().changeSignature().map(null);

const intellij_commitChanges            = MacroFactory.intellij().vcs().commitChanges().map(null);
const intellij_push                     = MacroFactory.intellij().vcs().push().map(null);
const intellij_rollback                 = MacroFactory.intellij().vcs().rollback().map(null);
const intellij_history                  = MacroFactory.intellij().vcs().history().map(null);

const intellij_mvnCleanPackage         = MacroFactory.intellij().maven()
                                          .startBuild().clean().package().skipTests().execute()
                                          .map(HID_KEYS.KEY_KP0);
const intellij_mvnCleanInstall         = MacroFactory.intellij().maven()
                                          .startBuild().clean().install().skipTests().execute()
                                          .map(HID_KEYS.KEY_TAB);
const intellij_mvnVersion              = MacroFactory.intellij().maven()
                                          .changeVersion().setNew().commit().execute()
                                          .map(HID_KEYS.KEY_Q);
const intellij_mvnVersionNextSnapshot  = MacroFactory.intellij().maven()
                                          .changeVersion().setNextSnapshot().commit().execute()
                                          .map(HID_KEYS.KEY_W);
const intellij_mvnVersionRelease       = MacroFactory.intellij().maven()
                                          .changeVersion().setRelease().commit().execute()
                                          .map(HID_KEYS.KEY_E);

const chrome_google     = MacroFactory.windowsRun("chrome google.com").map(HID_KEYS.KEY_F1);
const chrome_youtube    = MacroFactory.windowsRun("chrome youtube.com").map(HID_KEYS.KEY_F2);
const chrome_gmail      = MacroFactory.windowsRun("chrome gmail.com").map(HID_KEYS.KEY_F3);

const open_fileExplorer       = MacroFactory.windowsRun("explorer").map(HID_KEYS.KEY_F4);
const open_windowsTerminal    = MacroFactory.windowsRun("wt").map(HID_KEYS.KEY_F5);
const open_putty              = MacroFactory.windowsRun("putty").map(HID_KEYS.KEY_F6);
const open_settings           = MacroFactory.windowsRun("ms-settings:s").map(HID_KEYS.KEY_F7);
const open_bluetoothSettings  = MacroFactory.windowsRun("ms-settings:bluetooth").map(HID_KEYS.KEY_F8);

const open_vsCode             = MacroFactory.windowsRun("code").map(HID_KEYS.KEY_INSERT);
const open_intelliJ           = MacroFactory.windowsRun("idea64").map(HID_KEYS.KEY_HOME);
const open_cLion              = MacroFactory.windowsRun("clion64").map(HID_KEYS.KEY_PAGEUP);

const generic_enter     = MacroFactory.mapKey(HID_KEYS.KEY_ENTER).map(HID_KEYS.KEY_ENTER)
const generic_space     = MacroFactory.mapKey(HID_KEYS.KEY_SPACE).map(HID_KEYS.KEY_SPACE)
const generic_backspace = MacroFactory.mapKey(HID_KEYS.KEY_BACKSPACE).map(HID_KEYS.KEY_BACKSPACE)
const generic_up        = MacroFactory.mapKey(HID_KEYS.KEY_UP).map(HID_KEYS.KEY_UP)
const generic_down      = MacroFactory.mapKey(HID_KEYS.KEY_DOWN).map(HID_KEYS.KEY_DOWN)
const generic_left      = MacroFactory.mapKey(HID_KEYS.KEY_LEFT).map(HID_KEYS.KEY_LEFT)
const generic_right     = MacroFactory.mapKey(HID_KEYS.KEY_RIGHT).map(HID_KEYS.KEY_RIGHT)

export const MACRO_MAP: ( Macro)[] = [

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
    intellij_toolWindowFind,

    intellij_parameterInfo,
    intellij_extendSelection,
    intellij_shrinkSelection,
    intellij_commentLines,
    intellij_commentSelected,
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
  return keyboardDo(activatingKeys, new MacroGenerator().setActiveProfile(selectedProfile));
}

function keyPress(...hidKeys: HidKey[]) {
  return new MacroGenerator().keyPress(...hidKeys);
}

function loginMacro(username: string, password: string) {
  let macro = new MacroGenerator()
    .keyStreamV2(username, 1)
    .keyPress(HID_KEYS.KEY_TAB)
    .delayLong(2)
    .keyStreamV2(password, 1)
    .delayLong(1)
    .keyPress(HID_KEYS.KEY_ENTER);

  return macro;
}

function mvnMacro(mvnCmd: string) {
  let macro = new MacroGenerator()
    .keyPress(HID_KEYS.KEY_MOD_LCTRL)
    .keyPress(HID_KEYS.KEY_MOD_LCTRL)
    .keyStream(mvnCmd, 1);

  return macro;
}

function mvnMacroExec(mvnCmd: string) {
  let macro = mvnMacro(mvnCmd).keyPress(HID_KEYS.KEY_ENTER);

  return macro;
}

function runMacro(runCommand: string) {
  return new MacroGenerator()
    .keyPress(HID_KEYS.KEY_MOD_LMETA, HID_KEYS.KEY_R)
    .delayLong(3)
    .keyStreamV2(runCommand, 0)
    .delayShort(10)
    .keyPress(HID_KEYS.KEY_ENTER);
}