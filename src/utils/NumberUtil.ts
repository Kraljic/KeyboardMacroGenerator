export enum Endian {
  LITTLE = 0,
  BIG = 1,
}
export class NumberUtil {
  public static readonly DEFAULT_ENDIAN: Endian = Endian.BIG;

  private static numToArray(
    val: number,
    nBytes: number,
    endian: Endian
  ): number[] {
    let numArray = [];

    for (let i = 0; i < nBytes; i++) {
      let byte = 0;
      if (endian === Endian.LITTLE) {
        byte = (val >> ((nBytes - i - 1) * 8)) & 0xff;
      } else {
        byte = (val >> (8 * i)) & 0xff;
      }

      numArray.push(byte & 0xff);
    }

    return numArray;
  }

  /** Save 2 bytes to array. */
  static shortToArray(val: number, endian: Endian = NumberUtil.DEFAULT_ENDIAN) {
    return NumberUtil.numToArray(val, 2, endian);
  }

  /** Save 4 bytes to array. */
  static intToArray(val: number, endian: Endian = NumberUtil.DEFAULT_ENDIAN) {
    return NumberUtil.numToArray(val, 4, endian);
  }

  /** Save 8 bytes to array. */
  static longIntToArray(
    val: number,
    endian: Endian = NumberUtil.DEFAULT_ENDIAN
  ) {
    return NumberUtil.numToArray(val, 8, endian);
  }

  static toHex(val: number): string {
    return "0x" + ("00" + val.toString(16)).slice(-2);
  }

  static toHexArr(val: number[]): string {
    let data = Array.prototype.map
      .call(new Uint8Array(val), NumberUtil.toHex)
      .join(", ");

    return data;
  }
}
