import {NextFunction, Request, Response} from "express";

export function LoggerFunction(
  req: Request,
  res: Response,
  next: NextFunction
) {
  console.log(`this is a logger function - Hello Request - ${req.method}: ${req.path}`);
  next();
}
