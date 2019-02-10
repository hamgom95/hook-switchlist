// mark react hook return value
type Hook<R> = R & { readonly __tag: "react-hook" };

type InitList<T> = () => Array<T> | Array<T>;
type SetState<T> = (state: T) => T | T;

type SwitchList<T> = {
    used: Array<T>,
    unused: Array<T>,
    setUsed: SetState<Array<T>>,
    setUnused: SetState<Array<T>>,
    toggle: (value: T) => boolean,
};

export function useSwitchList<T>(initUsed: InitList<T>, initUnused: InitList<T>): Hook<SwitchList<T>>; 
