import { NextMiddlewareResult } from "next/dist/server/web/types";
import { NextFetchEvent, NextRequest } from "next/server";

export declare type NextMiddleware = (
  request: NextRequest,
  event: NextFetchEvent,
) => NextMiddlewareResult | Promise<NextMiddlewareResult>;

export type MiddlewareFactory = (middleware: NextMiddleware) => NextMiddleware;
