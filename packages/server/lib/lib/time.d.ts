export declare type DateLike = number | string | Date;
export declare const wait: (seconds: number) => Promise<unknown>;
export declare const addTime: (fromDate: DateLike, minutes: number, hours?: number, days?: number) => number;
export declare const subTime: (fromDate: DateLike, minutes: number, hours?: number, days?: number) => number;
