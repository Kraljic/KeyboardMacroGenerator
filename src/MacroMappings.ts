import { HID_KEYS, HidKey } from "./HidKeyCode";
import { MacroGenerator } from "./MacroGenerator";
import { MacroProfile } from "./MacroProfileUtil";

export type MacroMap = {
  keyCombination: HidKey[];
  macro: MacroGenerator;
};

const PROFILE_INTELLIJ = MacroProfile.PROFILE_0;
const PROFILE_INTELLIJ_KEY = new HidKey(PROFILE_INTELLIJ, false);

const selectProfile_default = selectProfile(MacroProfile.PROFILE_DEFAULT);
const selectProfile_IntelliJ = selectProfile(PROFILE_INTELLIJ);

const mvnCleanInstall = mvnMacro("mvn clean install -DskipTests=true");
const mvnCleanPackage = mvnMacro("mvn clean package -DskipTests=true");

const intelliJ_build                    = keyPress(HID_KEYS.KEY_MOD_LCTRL, HID_KEYS.KEY_F9);
const intelliJ_run                      = keyPress(HID_KEYS.KEY_MOD_LSHIFT, HID_KEYS.KEY_F10);
const intelliJ_stop                     = keyPress(HID_KEYS.KEY_MOD_LCTRL, HID_KEYS.KEY_F2);
const intelliJ_debug                    = keyPress(HID_KEYS.KEY_MOD_LSHIFT, HID_KEYS.KEY_F9);
const intelliJ_debug_breakpoint         = keyPress(HID_KEYS.KEY_MOD_LCTRL, HID_KEYS.KEY_F8);
const intelliJ_debug_muteBreakpoints    = keyPress(HID_KEYS.KEY_MOD_LCTRL, HID_KEYS.KEY_MOD_LALT, HID_KEYS.KEY_F10);
const intelliJ_debug_showBreakpoints    = keyPress(HID_KEYS.KEY_MOD_LCTRL, HID_KEYS.KEY_MOD_LSHIFT, HID_KEYS.KEY_F8);
const intelliJ_debug_stepover           = keyPress(HID_KEYS.KEY_F8);
const intelliJ_debug_stepinto           = keyPress(HID_KEYS.KEY_F7);
const intelliJ_debug_stepout            = keyPress(HID_KEYS.KEY_MOD_LSHIFT, HID_KEYS.KEY_F8);
const intelliJ_debug_runToCursor        = keyPress(HID_KEYS.KEY_MOD_LALT, HID_KEYS.KEY_F9);
const intelliJ_debug_resume             = keyPress(HID_KEYS.KEY_F9);
const intelliJ_debug_evalExpDialog      = keyPress(HID_KEYS.KEY_MOD_LALT, HID_KEYS.KEY_F8);
const intelliJ_debug_evalExpNow         = keyPress(HID_KEYS.KEY_MOD_LCTRL, HID_KEYS.KEY_MOD_LALT, HID_KEYS.KEY_F8);

export const MACRO_MAP: MacroMap[] = [
    {
        macro: selectProfile_default,
        keyCombination: [HID_KEYS.KEY_ESC],
    },
    {
        macro: selectProfile_IntelliJ,
        keyCombination: [HID_KEYS.KEY_NUMLOCK],
    },

    {
        macro: intelliJ_build,
        keyCombination: [PROFILE_INTELLIJ_KEY, HID_KEYS.KEY_KPDOT],
    },
    {
        macro: intelliJ_run,
        keyCombination: [PROFILE_INTELLIJ_KEY, HID_KEYS.KEY_KPENTER],
    },
    {
        macro: intelliJ_debug,
        keyCombination: [PROFILE_INTELLIJ_KEY, HID_KEYS.KEY_KPPLUS],
    },
    {
        macro: intelliJ_stop,
        keyCombination: [PROFILE_INTELLIJ_KEY, HID_KEYS.KEY_KPMINUS],
    },
    {
        macro: mvnCleanPackage,
        keyCombination: [PROFILE_INTELLIJ_KEY, HID_KEYS.KEY_KP0],
    },
    {
        macro: intelliJ_debug_breakpoint,
        keyCombination: [PROFILE_INTELLIJ_KEY, HID_KEYS.KEY_KP1],
    },
    {
        macro: intelliJ_debug_muteBreakpoints,
        keyCombination: [PROFILE_INTELLIJ_KEY, HID_KEYS.KEY_KP2],
    },
    {
        macro: intelliJ_debug_showBreakpoints,
        keyCombination: [PROFILE_INTELLIJ_KEY, HID_KEYS.KEY_KP3],
    },
    {
        macro: intelliJ_debug_stepover,
        keyCombination: [PROFILE_INTELLIJ_KEY, HID_KEYS.KEY_KP7],
    },
    {
        macro: intelliJ_debug_stepinto,
        keyCombination: [PROFILE_INTELLIJ_KEY, HID_KEYS.KEY_KP8],
    },
    {
        macro: intelliJ_debug_stepout,
        keyCombination: [PROFILE_INTELLIJ_KEY, HID_KEYS.KEY_KP9],
    },
    {
        macro: intelliJ_debug_runToCursor,
        keyCombination: [PROFILE_INTELLIJ_KEY, HID_KEYS.KEY_KP4],
    },
    {
        macro: intelliJ_debug_evalExpDialog,
        keyCombination: [PROFILE_INTELLIJ_KEY, HID_KEYS.KEY_KP5],
    },
    {
        macro: intelliJ_debug_resume,
        keyCombination: [PROFILE_INTELLIJ_KEY, HID_KEYS.KEY_KP6],
    },
];

function selectProfile(selectedProfile: MacroProfile) {
  return new MacroGenerator().setActiveProfile(selectedProfile).build();
}

function keyPress(...hidKeys: HidKey[]) {
  return new MacroGenerator().keyPress(...hidKeys).build();
}

function loginMacro(username: string, password: string) {
  let macro = new MacroGenerator()
    .keyStream(username, 1)
    .keyPress(HID_KEYS.KEY_TAB)
    .delayLong(2)
    .keyStream(password, 1)
    .delayLong(1)
    .keyPress(HID_KEYS.KEY_ENTER)
    .build();

  return macro;
}

function mvnMacro(mvnCmd: string) {
  let macro = new MacroGenerator()
    .keyPress(HID_KEYS.KEY_MOD_LCTRL)
    .keyPress(HID_KEYS.KEY_MOD_LCTRL)
    .delayLong(5)
    .keyStream(mvnCmd, 1)
    .delayLong(1)
    .keyPress(HID_KEYS.KEY_ENTER)
    .build();

  return macro;
}

function runMacro(runCommand: string) {
  let macro = new MacroGenerator()
    .keyPress(HID_KEYS.KEY_MOD_LMETA, HID_KEYS.KEY_R)
    .delayLong(5)
    .keyStream(runCommand, 1)
    .delayLong(1)
    .keyPress(HID_KEYS.KEY_ENTER)
    .build();

  return macro;
}
