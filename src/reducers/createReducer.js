/* @flow */
type ActionHandler<T> = (state: T, action: Action<any>) => T;

type ActionHandlers<T> = { [string]: ActionHandler<T> };

export default function createReducer<T>(initialState: T, actionHandlers: ActionHandlers<T>) {
    return (state: T = initialState, action: Action<any>): T => {
        return actionHandlers.hasOwnProperty(action.type)
            ? (actionHandlers[action.type](state, action): T)
            : state;
    };
}
