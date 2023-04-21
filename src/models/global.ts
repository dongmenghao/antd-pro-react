import type { Effect, Reducer } from "umi";

export interface GlobalModelState {
  count: number;
}

export interface GlobalModelType {
  namespace: 'global';
  state: GlobalModelState;
  reducers: {
    add: Reducer<GlobalModelState>;
    minus: Reducer<GlobalModelState>;
    addValue: Reducer<GlobalModelState>;
  },
  effects: {
    addAsync: Effect;
  },
}
const GlobalModel: GlobalModelType = {
  namespace: 'global',
  state:  {
    count: 1,
  },
  reducers: {
    // @ts-ignore
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    add(state: GlobalModelState, action) {
      return { ...state, count: state.count + 1 };
    },
    // @ts-ignore
    // eslint-disable-next-line
    minus(state: GlobalModelState, action) {
      return { ...state, count: state.count - 1 };
    },
    // @ts-ignore
    addValue(state: GlobalModelState, action) {
      return { ...state, count: state.count + action.payload };
    }
  },
  effects: {
    *addAsync(action, { put }) {
      yield delay(1000);
      yield put({ type: 'add' });
    }
  }
}

function delay(timeout: number) {
  return new Promise(resolve => {
    setTimeout(resolve, timeout);
  });
}

export default GlobalModel;
