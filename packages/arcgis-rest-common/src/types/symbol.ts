/* Copyright (c) 2018 Environmental Systems Research Institute, Inc.
 * Apache-2.0 */

/**
 *
 */
export type SymbolType =
  | "esriSLS"
  | "esriSMS"
  | "esriSFS"
  | "esriPMS"
  | "esriPFS"
  | "esriTS";

/**
 *
 */
export interface ISymbol {
  type: SymbolType;
  style?: string;
}
