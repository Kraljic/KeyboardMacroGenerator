import { HID_KEYS, HidKey } from "./HidKeyCode";
import { MacroGenerator } from "./MacroGenerator";

export type MacroMap = {
  keyCombination: HidKey[];
  macro: MacroGenerator;
};

const mvnCleanInstall = mvnMacro("mvn clean install");
const mvnCleanPackage = mvnMacro("mvn clean package");

const intelliJ_build                    = keyPress(HID_KEYS.KEY_MOD_LCTRL, HID_KEYS.KEY_F9);
const intelliJ_run                      = keyPress(HID_KEYS.KEY_MOD_LSHIFT, HID_KEYS.KEY_F10);
const intelliJ_debug                    = keyPress(HID_KEYS.KEY_MOD_LSHIFT, HID_KEYS.KEY_F9);
const intelliJ_debug_breakpoint         = keyPress(HID_KEYS.KEY_MOD_LCTRL, HID_KEYS.KEY_F8);
const intelliJ_debug_muteBreakpoint     = keyPress(HID_KEYS.KEY_MOD_LCTRL, HID_KEYS.KEY_MOD_LSHIFT, HID_KEYS.KEY_F8);
const intelliJ_debug_stepover           = keyPress(HID_KEYS.KEY_F8);
const intelliJ_debug_stepinto           = keyPress(HID_KEYS.KEY_F7);
const intelliJ_debug_stepout            = keyPress(HID_KEYS.KEY_MOD_LSHIFT, HID_KEYS.KEY_F8);
const intelliJ_debug_runToCursor        = keyPress(HID_KEYS.KEY_MOD_LALT, HID_KEYS.KEY_F9);
const intelliJ_debug_resume             = keyPress(HID_KEYS.KEY_F9);
const intelliJ_debug_stop               = keyPress(HID_KEYS.KEY_MOD_LCTRL, HID_KEYS.KEY_F2);
const intelliJ_debug_evalExpDialog      = keyPress(HID_KEYS.KEY_MOD_LALT, HID_KEYS.KEY_F8);
const intelliJ_debug_evalExpNow         = keyPress(HID_KEYS.KEY_MOD_LCTRL, HID_KEYS.KEY_MOD_LALT, HID_KEYS.KEY_F8);

export const MACRO_MAP: MacroMap[] = [
    {
        macro: intelliJ_build,
        keyCombination: [HID_KEYS.KEY_MOD_LCTRL, HID_KEYS.KEY_Q],
    },
    {
        macro: intelliJ_run,
        keyCombination: [HID_KEYS.KEY_INSERT],
    },
    {
        macro: intelliJ_debug,
        keyCombination: [HID_KEYS.KEY_HOME],
    },
    {
        macro: intelliJ_debug_breakpoint,
        keyCombination: [HID_KEYS.KEY_PAGEUP],
    },
    {
        macro: intelliJ_debug_stepover,
        keyCombination: [HID_KEYS.KEY_DELETE],
    },
    {
        macro: intelliJ_debug_stepinto,
        keyCombination: [HID_KEYS.KEY_END],
    },
    {
        macro: intelliJ_debug_stepout,
        keyCombination: [HID_KEYS.KEY_PAGEDOWN],
    },
];

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
