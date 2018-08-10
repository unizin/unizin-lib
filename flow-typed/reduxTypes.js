/* @flow */
declare type Action<T: {} = {}> = {
    type: string,
} & T;

declare type ThunkAction<T = void> = (
    dispatch: (Action<{}> | ThunkAction<T>) => Promise<any> | void,
    getState: () => Object
) => T | Promise<T> | void;
