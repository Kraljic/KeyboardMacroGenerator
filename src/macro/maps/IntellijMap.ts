import { HID_KEYS } from '../HidKeyCode';

export const INTELLIJ_KEYBINDINGS = {
    CODE: {
        parameterInfo: [HID_KEYS.KEY_MOD_LCTRL, HID_KEYS.KEY_P],
        extendSelection: [HID_KEYS.KEY_MOD_LCTRL, HID_KEYS.KEY_W],
        shrinkSelection: [HID_KEYS.KEY_MOD_LCTRL, HID_KEYS.KEY_MOD_LSHIFT, HID_KEYS.KEY_W],
        commentLines: [HID_KEYS.KEY_MOD_LCTRL, HID_KEYS.KEY_KPSLASH],
        commentSelected: [HID_KEYS.KEY_MOD_LCTRL, HID_KEYS.KEY_MOD_LSHIFT, HID_KEYS.KEY_KPSLASH],

        refactor: [HID_KEYS.KEY_MOD_LCTRL, HID_KEYS.KEY_MOD_LALT, HID_KEYS.KEY_MOD_LSHIFT, HID_KEYS.KEY_T],
        rename: [HID_KEYS.KEY_MOD_LSHIFT, HID_KEYS.KEY_F6],
        changeSignature: [HID_KEYS.KEY_MOD_LCTRL, HID_KEYS.KEY_F6],
    },
    IDE: {
        RUN: {
            build: [HID_KEYS.KEY_MOD_LCTRL, HID_KEYS.KEY_F9],
            run: [HID_KEYS.KEY_MOD_LSHIFT, HID_KEYS.KEY_F10],
            debug: [HID_KEYS.KEY_MOD_LSHIFT, HID_KEYS.KEY_F9],
            stop: [HID_KEYS.KEY_MOD_LCTRL, HID_KEYS.KEY_F2],
        },
        TOOL_WINDOWS: {
            toolWindowProject: [HID_KEYS.KEY_MOD_LALT, HID_KEYS.KEY_1],
            toolWindowCommit: [HID_KEYS.KEY_MOD_LALT, HID_KEYS.KEY_0],
            toolWindowVsc: [HID_KEYS.KEY_MOD_LALT, HID_KEYS.KEY_9],
            toolWindowRun: [HID_KEYS.KEY_MOD_LALT, HID_KEYS.KEY_4],
            toolWindowService: [HID_KEYS.KEY_MOD_LALT, HID_KEYS.KEY_8],
            toolWindowDebug: [HID_KEYS.KEY_MOD_LALT, HID_KEYS.KEY_5],
            toolWindowTerminal: [HID_KEYS.KEY_MOD_LALT, HID_KEYS.KEY_F12],
            toolWindowBookmarks: [HID_KEYS.KEY_MOD_LALT, HID_KEYS.KEY_2],
            toolWindowFind: [HID_KEYS.KEY_MOD_LALT, HID_KEYS.KEY_3],
        },
        ACTIONS: {            
            goToClass: [HID_KEYS.KEY_MOD_LCTRL, HID_KEYS.KEY_N],
            goToFile: [HID_KEYS.KEY_MOD_LCTRL, HID_KEYS.KEY_MOD_LSHIFT, HID_KEYS.KEY_N],
            goToSymbol: [HID_KEYS.KEY_MOD_LCTRL, HID_KEYS.KEY_MOD_LALT, HID_KEYS.KEY_MOD_LSHIFT, HID_KEYS.KEY_N],
            goToLine: [HID_KEYS.KEY_MOD_LCTRL, HID_KEYS.KEY_G],
            viewImplementation: [HID_KEYS.KEY_MOD_LCTRL, HID_KEYS.KEY_MOD_LALT, HID_KEYS.KEY_B],
            viewDecleration: [HID_KEYS.KEY_MOD_LCTRL, HID_KEYS.KEY_U],
            lastToolWindow: [HID_KEYS.KEY_F12],
            focusEditor: [HID_KEYS.KEY_ESC],
            quickDefLookup: [HID_KEYS.KEY_MOD_LCTRL, HID_KEYS.KEY_MOD_LSHIFT, HID_KEYS.KEY_I],
            bookmark: [HID_KEYS.KEY_F11],
            showBookmarks: [HID_KEYS.KEY_MOD_LSHIFT, HID_KEYS.KEY_F11],
        }

    },
    DEBUGGER: {                
        breakpoint: [HID_KEYS.KEY_MOD_LCTRL, HID_KEYS.KEY_F8],
        muteBreakpoints: [HID_KEYS.KEY_MOD_LCTRL, HID_KEYS.KEY_MOD_LALT, HID_KEYS.KEY_F10],
        showBreakpoints: [HID_KEYS.KEY_MOD_LCTRL, HID_KEYS.KEY_MOD_LSHIFT, HID_KEYS.KEY_F8],
        stepover: [HID_KEYS.KEY_F8],
        stepinto: [HID_KEYS.KEY_F7],
        stepout: [HID_KEYS.KEY_MOD_LSHIFT, HID_KEYS.KEY_F8],
        runToCursor: [HID_KEYS.KEY_MOD_LALT, HID_KEYS.KEY_F9],
        evalExpDialog: [HID_KEYS.KEY_MOD_LALT, HID_KEYS.KEY_F8],
        resume: [HID_KEYS.KEY_F9],
        evalExpNow: [HID_KEYS.KEY_MOD_LCTRL, HID_KEYS.KEY_MOD_LALT, HID_KEYS.KEY_F8],
    },
    VSC: {
        commitChanges: [HID_KEYS.KEY_MOD_LCTRL, HID_KEYS.KEY_K],
        push: [HID_KEYS.KEY_MOD_LCTRL, HID_KEYS.KEY_MOD_LSHIFT, HID_KEYS.KEY_K],
        rollback: [HID_KEYS.KEY_MOD_LCTRL, HID_KEYS.KEY_MOD_LALT, HID_KEYS.KEY_Z],
        history: [],
    }    
}