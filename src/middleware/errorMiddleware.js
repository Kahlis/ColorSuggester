import { NextFunction, Request, Response } from 'express';

const errorMiddleware = (error, req, res, next) => {
  const message = error.message
    ? error.message
    : 'Internal Server Error';
  return res.status(500).json({ message });
};

export default errorMiddleware;