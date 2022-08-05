import { Macro } from './Macro';
import { NumberUtil } from './NumberUtil';
import *  as fs from 'fs';

const OUTPUT_DIR = "./out_memory/";

const MEM_SIZE = 2048;
const MACRO_META_INFO_SIZE = 16;
const MACRO_HEADER_SIZE = 8;

export class MemoryGenerator {
    private readonly MACRO_NUM: number;
    private readonly MACRO_DATA_ADDR: number;

    private readonly MEMORY: Uint8Array;
    private memPointer: number;

    constructor(private macros: Macro[]) {
        this.MACRO_NUM = macros.length;
        this.MACRO_DATA_ADDR = (MACRO_META_INFO_SIZE + MACRO_HEADER_SIZE * this.MACRO_NUM);

        this.MEMORY = new Uint8Array(MEM_SIZE);
        this.memPointer = 0;
    }

    public generate() {
        this.writeMetaInfo();
        this.writeMacroHeaders();
        this.writeMacroData();

        if (fs.existsSync(OUTPUT_DIR) == false) {
            fs.mkdir(OUTPUT_DIR,  function(err) { if (err) console.error(err); });
        }
        fs.writeFile(OUTPUT_DIR + "macros.bin", this.MEMORY,  "binary", function(err) { if (err) console.error(err); });
    }
    private writeMetaInfo() {
        this.writeInt32(MACRO_META_INFO_SIZE);
        this.writeInt32(this.MACRO_DATA_ADDR);
        this.writeInt32(MEM_SIZE);
        this.writeInt32(this.MACRO_NUM);
    }

    private writeMacroHeaders() {
        let macroPtr = 0;
        for (let i in this.macros) {
            let macro = this.macros[i];

            this.writeInt32(macro.getTrigger());
            this.writeInt32(this.MACRO_DATA_ADDR + macroPtr);

            macroPtr += macro.getMacro().length;
        }
    }

    private writeMacroData() {
        for (let i in this.macros) {
            let macro = this.macros[i];

            let macroData = macro.getMacro();
            for (let j = 0; j < macroData.length; j++) {
                this.writeInt8(macroData[j]);
            }
        }
    }

    private writeInt64(val: number) {
        this.writeBytes(val, 8);
    }

    private writeInt32(val: number) {
        this.writeBytes(val, 4);
    }

    private writeInt16(val: number) {
        this.writeBytes(val, 2);
    }

    private writeInt8(val: number) {
        this.writeBytes(val, 1);
    }

    private writeBytes(val: number, n: number) {
        for (let i = n; i--; ) {
            this.MEMORY[this.memPointer++] = val & 255;
            val = val >> 8;
        }
    }

    toString(): string {
        let data = '';
        for (let i = 0; i < this.MEMORY.length; i++) {
            if (i > 0 && i % 16 == 0) {
                data += '\n';
            }

            data += NumberUtil.toHex(this.MEMORY[i]) + ', ';
        }

        return data;
    }
}