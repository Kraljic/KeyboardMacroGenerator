export enum Command {
  END = 0x00,
  KEY_DOWN = 0x10,
  KEY_UP = 0x20,
  KEY_PRESS = 0x30,
  DELAY_SHORT = 0x40,
  DELAY_LONG = 0x50,
  DELAY_LONG_LONG = 0x60,

  // Extended 
  KEY_STREAM = 0x81,
  PROFILE_SELECT = 0x82,
  KEY_STREAM_V2 = 0x83,

  IS_MOD = 0x08,
}
