export interface SliceError {
  message: string;
}

export interface DirectusError {
  errors: SliceError[];
}
