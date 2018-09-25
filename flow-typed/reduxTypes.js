/* @flow */
declare type Action<J: {} = {}> = J & {
    type: string,
};

declare type ThunkAction<L: Promise<any> | void = void> = (
    dispatch: (Action<{}> | ThunkAction<>) => Promise<any> | void,
    getState: () => Object
) => L;
