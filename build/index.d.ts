export interface LogDescriptor {
    class?: string;
    data?: string[];
}
export interface LoggerOptions {
    enabled?: boolean;
    hidden?: LogDescriptor[];
    pipe?: {
        path: string;
        filter: LogDescriptor;
    }[];
}
export declare function verboseLog(name: string): (...args: any[]) => number | false;
export declare class Logger {
    options: LoggerOptions;
    verboseLogs: any;
    constructor(options?: LoggerOptions);
    log(_class: any, ...data: any): void;
    matches(log: LogDescriptor, filter: LogDescriptor): boolean;
    matchesAll(log: LogDescriptor, filter: LogDescriptor[]): boolean;
    bm<T>(promise: Promise<T>, name: string): Promise<T>;
}
export declare const log: (className: string, ...args: any[]) => void;
export declare const configureLogs: (options: LoggerOptions) => Logger;
export { cold, highlight, danger, warning } from "termx";
