import { HID_KEYS } from "../../../macro/HidKeyCode";
import { IKeyboardApi } from "../../../macro/IKeyboardApi";
import { MAVEN_COMMANDS } from "../../../macro/maps/MavenMap";
import { IMacroBuilder } from '../../IMacroBuilder';
import { IMacroMapper } from '../../IMacroMapper';
import { MacroMapper } from '../MacroMapper';

const MAVEN_KEYPRESS_DELAY = 1;

export class MavenBuilder {
  constructor(private _macroMapper: MacroMapper) {
  }

  startBuild(): MavenBuilder_BuildPlugin {
    return new MavenBuilder_BuildPlugin(this._macroMapper);
  }

  changeVersion(): MavenBuilder_VersionPlugin {
    return new MavenBuilder_VersionPlugin(this._macroMapper);
  }
}

class MavenBuilder_BuildPlugin {
  private _command = "mvn ";

  constructor(
    private _macroMapper: MacroMapper
  ) {}

  clean(): this {
    this.write(MAVEN_COMMANDS.BUILD.clean);
    return this;
  }

  install(): this {
    this.write(MAVEN_COMMANDS.BUILD.install);
    return this;
  }

  package(): this {
    this.write(MAVEN_COMMANDS.BUILD.package);
    return this;
  }

  skipTests(): this {
    this.write(MAVEN_COMMANDS.BUILD.FLAGS.skipTests);
    return this;
  }

  execute(): IMacroMapper {
    this._macroMapper.keyStream(this._command.trim(), MAVEN_KEYPRESS_DELAY);
    this._macroMapper.keyPress(HID_KEYS.KEY_ENTER);
    return this._macroMapper;
  }

  private write(param) {
    this._command += param + " ";
  }
}

class MavenBuilder_VersionPlugin {
  private _command = "mvn ";

  constructor(
    private _macroMapper: MacroMapper
  ) {}

  setNew(version?: string): this {
    if (!version) this.write(MAVEN_COMMANDS.VERSION.newVersion);
    else this.write(MAVEN_COMMANDS.VERSION.newVersion + version);
    return this;
  }

  setRelease(): this {
    this.write(MAVEN_COMMANDS.VERSION.releaseVersion);
    return this;
  }

  setNextSnapshot(): this {
    this.write(MAVEN_COMMANDS.VERSION.nextSnapshotVersion);
    return this;
  }

  commit(): this {
    this.write(MAVEN_COMMANDS.VERSION.commitVersion);
    return this;
  }

  execute(): IMacroMapper {
    this._macroMapper.keyStream(this._command.trim(), MAVEN_KEYPRESS_DELAY);
    this._macroMapper.keyPress(HID_KEYS.KEY_ENTER);
    return this._macroMapper;
  }
  
  private write(param) {
    this._command += param + " ";
  }
}
