import { MacroProfile } from '../utils/MacroProfileUtil';
export class HidKey {
  private _hidCode: number;
  private _isMod: boolean;

  constructor(hidCode: number, isMod: boolean) {
    this._hidCode = hidCode;
    this._isMod = isMod;
  }

  hidCode() {
    return this._hidCode;
  }

  isModKey() {
    return this._isMod;
  }
}

export const HID_KEYS = (function () {
  return {
    PROFILE_DEFAULT: new HidKey(MacroProfile.PROFILE_DEFAULT, false),
    PROFILE_0: new HidKey(MacroProfile.PROFILE_0, false),
    PROFILE_1: new HidKey(MacroProfile.PROFILE_1, false),
    PROFILE_2: new HidKey(MacroProfile.PROFILE_2, false),
    PROFILE_3: new HidKey(MacroProfile.PROFILE_3, false),

    KEY_MOD_LCTRL: new HidKey(0x01, true),
    KEY_MOD_LSHIFT: new HidKey(0x02, true),
    KEY_MOD_LALT: new HidKey(0x04, true),
    KEY_MOD_LMETA: new HidKey(0x08, true),
    KEY_MOD_RCTRL: new HidKey(0x10, true),
    KEY_MOD_RSHIFT: new HidKey(0x20, true),
    KEY_MOD_RALT: new HidKey(0x40, true),
    KEY_MOD_RMETA: new HidKey(0x80, true),

    /**
     * Scan codes - last N slots in the HID report (usually 6).
     * 0x00 if no key pressed.
     *
     * If more than N keys are pressed, the HID reports
     * KEY_ERR_OVF in all slots to indicate this condition.
     */

    KEY_NONE: new HidKey(0x00, false), // No key pressed
    KEY_ERR_OVF: new HidKey(0x01, false), //  Keyboard Error Roll Over - used for all slots if too many keys are pressed ("Phantom key")
    // 0x02 //  Keyboard POST Fail
    // 0x03 //  Keyboard Error Undefined
    KEY_A: new HidKey(0x04, false), // Keyboard a and A
    KEY_B: new HidKey(0x05, false), // Keyboard b and B
    KEY_C: new HidKey(0x06, false), // Keyboard c and C
    KEY_D: new HidKey(0x07, false), // Keyboard d and D
    KEY_E: new HidKey(0x08, false), // Keyboard e and E
    KEY_F: new HidKey(0x09, false), // Keyboard f and F
    KEY_G: new HidKey(0x0a, false), // Keyboard g and G
    KEY_H: new HidKey(0x0b, false), // Keyboard h and H
    KEY_I: new HidKey(0x0c, false), // Keyboard i and I
    KEY_J: new HidKey(0x0d, false), // Keyboard j and J
    KEY_K: new HidKey(0x0e, false), // Keyboard k and K
    KEY_L: new HidKey(0x0f, false), // Keyboard l and L
    KEY_M: new HidKey(0x10, false), // Keyboard m and M
    KEY_N: new HidKey(0x11, false), // Keyboard n and N
    KEY_O: new HidKey(0x12, false), // Keyboard o and O
    KEY_P: new HidKey(0x13, false), // Keyboard p and P
    KEY_Q: new HidKey(0x14, false), // Keyboard q and Q
    KEY_R: new HidKey(0x15, false), // Keyboard r and R
    KEY_S: new HidKey(0x16, false), // Keyboard s and S
    KEY_T: new HidKey(0x17, false), // Keyboard t and T
    KEY_U: new HidKey(0x18, false), // Keyboard u and U
    KEY_V: new HidKey(0x19, false), // Keyboard v and V
    KEY_W: new HidKey(0x1a, false), // Keyboard w and W
    KEY_X: new HidKey(0x1b, false), // Keyboard x and X
    KEY_Y: new HidKey(0x1c, false), // Keyboard y and Y
    KEY_Z: new HidKey(0x1d, false), // Keyboard z and Z

    KEY_1: new HidKey(0x1e, false), // Keyboard 1 and !
    KEY_2: new HidKey(0x1f, false), // Keyboard 2 and @
    KEY_3: new HidKey(0x20, false), // Keyboard 3 and #
    KEY_4: new HidKey(0x21, false), // Keyboard 4 and $
    KEY_5: new HidKey(0x22, false), // Keyboard 5 and %
    KEY_6: new HidKey(0x23, false), // Keyboard 6 and ^
    KEY_7: new HidKey(0x24, false), // Keyboard 7 and &
    KEY_8: new HidKey(0x25, false), // Keyboard 8 and *
    KEY_9: new HidKey(0x26, false), // Keyboard 9 and (
    KEY_0: new HidKey(0x27, false), // Keyboard 0 and )

    KEY_ENTER: new HidKey(0x28, false), // Keyboard Return (ENTER)
    KEY_ESC: new HidKey(0x29, false), // Keyboard ESCAPE
    KEY_BACKSPACE: new HidKey(0x2a, false), // Keyboard DELETE (Backspace)
    KEY_TAB: new HidKey(0x2b, false), // Keyboard Tab
    KEY_SPACE: new HidKey(0x2c, false), // Keyboard Spacebar
    KEY_MINUS: new HidKey(0x2d, false), // Keyboard - and _
    KEY_EQUAL: new HidKey(0x2e, false), // Keyboard = and +
    KEY_LEFTBRACE: new HidKey(0x2f, false), // Keyboard [ and {
    KEY_RIGHTBRACE: new HidKey(0x30, false), // Keyboard ] and }
    KEY_BACKSLASH: new HidKey(0x31, false), // Keyboard \ and |
    KEY_HASHTILDE: new HidKey(0x32, false), // Keyboard Non-US # and ~
    KEY_SEMICOLON: new HidKey(0x33, false), // Keyboard ; and :
    KEY_APOSTROPHE: new HidKey(0x34, false), // Keyboard ' and "
    KEY_GRAVE: new HidKey(0x35, false), // Keyboard ` and ~
    KEY_COMMA: new HidKey(0x36, false), // Keyboard , and <
    KEY_DOT: new HidKey(0x37, false), // Keyboard . and >
    KEY_SLASH: new HidKey(0x38, false), // Keyboard / and ?
    KEY_CAPSLOCK: new HidKey(0x39, false), // Keyboard Caps Lock

    KEY_F1: new HidKey(0x3a, false), // Keyboard F1
    KEY_F2: new HidKey(0x3b, false), // Keyboard F2
    KEY_F3: new HidKey(0x3c, false), // Keyboard F3
    KEY_F4: new HidKey(0x3d, false), // Keyboard F4
    KEY_F5: new HidKey(0x3e, false), // Keyboard F5
    KEY_F6: new HidKey(0x3f, false), // Keyboard F6
    KEY_F7: new HidKey(0x40, false), // Keyboard F7
    KEY_F8: new HidKey(0x41, false), // Keyboard F8
    KEY_F9: new HidKey(0x42, false), // Keyboard F9
    KEY_F10: new HidKey(0x43, false), // Keyboard F10
    KEY_F11: new HidKey(0x44, false), // Keyboard F11
    KEY_F12: new HidKey(0x45, false), // Keyboard F12

    KEY_SYSRQ: new HidKey(0x46, false), // Keyboard Print Screen
    KEY_SCROLLLOCK: new HidKey(0x47, false), // Keyboard Scroll Lock
    KEY_PAUSE: new HidKey(0x48, false), // Keyboard Pause
    KEY_INSERT: new HidKey(0x49, false), // Keyboard Insert
    KEY_HOME: new HidKey(0x4a, false), // Keyboard Home
    KEY_PAGEUP: new HidKey(0x4b, false), // Keyboard Page Up
    KEY_DELETE: new HidKey(0x4c, false), // Keyboard Delete Forward
    KEY_END: new HidKey(0x4d, false), // Keyboard End
    KEY_PAGEDOWN: new HidKey(0x4e, false), // Keyboard Page Down
    KEY_RIGHT: new HidKey(0x4f, false), // Keyboard Right Arrow
    KEY_LEFT: new HidKey(0x50, false), // Keyboard Left Arrow
    KEY_DOWN: new HidKey(0x51, false), // Keyboard Down Arrow
    KEY_UP: new HidKey(0x52, false), // Keyboard Up Arrow

    KEY_NUMLOCK: new HidKey(0x53, false), // Keyboard Num Lock and Clear
    KEY_KPSLASH: new HidKey(0x54, false), // Keypad /
    KEY_KPASTERISK: new HidKey(0x55, false), // Keypad *
    KEY_KPMINUS: new HidKey(0x56, false), // Keypad -
    KEY_KPPLUS: new HidKey(0x57, false), // Keypad +
    KEY_KPENTER: new HidKey(0x58, false), // Keypad ENTER
    KEY_KP1: new HidKey(0x59, false), // Keypad 1 and End
    KEY_KP2: new HidKey(0x5a, false), // Keypad 2 and Down Arrow
    KEY_KP3: new HidKey(0x5b, false), // Keypad 3 and PageDn
    KEY_KP4: new HidKey(0x5c, false), // Keypad 4 and Left Arrow
    KEY_KP5: new HidKey(0x5d, false), // Keypad 5
    KEY_KP6: new HidKey(0x5e, false), // Keypad 6 and Right Arrow
    KEY_KP7: new HidKey(0x5f, false), // Keypad 7 and Home
    KEY_KP8: new HidKey(0x60, false), // Keypad 8 and Up Arrow
    KEY_KP9: new HidKey(0x61, false), // Keypad 9 and Page Up
    KEY_KP0: new HidKey(0x62, false), // Keypad 0 and Insert
    KEY_KPDOT: new HidKey(0x63, false), // Keypad . and Delete

    KEY_102ND: new HidKey(0x64, false), // Keyboard Non-US \ and |
    KEY_COMPOSE: new HidKey(0x65, false), // Keyboard Application
    KEY_POWER: new HidKey(0x66, false), // Keyboard Power
    KEY_KPEQUAL: new HidKey(0x67, false), // Keypad =

    KEY_F13: new HidKey(0x68, false), // Keyboard F13
    KEY_F14: new HidKey(0x69, false), // Keyboard F14
    KEY_F15: new HidKey(0x6a, false), // Keyboard F15
    KEY_F16: new HidKey(0x6b, false), // Keyboard F16
    KEY_F17: new HidKey(0x6c, false), // Keyboard F17
    KEY_F18: new HidKey(0x6d, false), // Keyboard F18
    KEY_F19: new HidKey(0x6e, false), // Keyboard F19
    KEY_F20: new HidKey(0x6f, false), // Keyboard F20
    KEY_F21: new HidKey(0x70, false), // Keyboard F21
    KEY_F22: new HidKey(0x71, false), // Keyboard F22
    KEY_F23: new HidKey(0x72, false), // Keyboard F23
    KEY_F24: new HidKey(0x73, false), // Keyboard F24
  };
})();
