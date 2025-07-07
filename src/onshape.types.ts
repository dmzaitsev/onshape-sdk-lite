export type OnshapeId = string; //24-char ID string
export type OnshapeHref = string; // Any URL string
export type OnshapeDate = string; // YYYY-MM-DDThh:mm:ss.mmm

export enum OnshapeWVMType {
  WORKSPACE = 'w',
  VERSION = 'v',
  MICROVERSION = 'm'
}

export type OnshapeEmptyAPIResponse = {};

export type DeepPartial<T> = {
  [P in keyof T]?: T[P] extends object
  ? T[P] extends Function
  ? T[P]
  : DeepPartial<T[P]>
  : T[P];
};