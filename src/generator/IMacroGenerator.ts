import { IKeyboardApi } from '../macro/IKeyboardApi';

export interface IMacroGenerator extends IKeyboardApi {
    build(): number[];
}