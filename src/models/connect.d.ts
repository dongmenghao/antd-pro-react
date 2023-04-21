import { GlobalModelState } from './global';

export { GlobalModelState }

export interface Loading {
  global: boolean;
  effects: { [key: string]: boolean | undefined };
  models: {
    global?: boolean;
  }
}

export interface ConnectState {
  global: GlobalModelState;
  loading: Loading;
}


