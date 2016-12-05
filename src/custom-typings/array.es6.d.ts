interface Array<T> {
    includes(item: T): boolean;
    find(fn: (item: T, index: number, array: T[]) => boolean): T;
}