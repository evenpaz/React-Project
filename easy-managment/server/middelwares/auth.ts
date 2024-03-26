// import express from "express";
// import jwt, { JwtPayload } from "jsonwebtoken";

// interface UserPayload {
//   personalId: string;
// }

// declare global {
//   namespace Express {
//     interface Request {
//       user?: UserPayload;
//     }
//   }
// }

// export const USER_TOKENS = {} as any;

// export const authMiddleware = (
//   req: express.Request,
//   res: express.Response,
//   next: express.NextFunction
// ) => {
//   const authHeader = req.headers.authorization;
//   const accessToken = authHeader?.split(" ")?.[1];
//   try {
//     const userPayload = jwt.verify(
//       accessToken || "",
//       process.env.ACCESS_TOKEN_SECRET as string
//     );
//     if (
//       userPayload &&
//       USER_TOKENS[
//         (userPayload as UserPayload).personalId
//       ]?.accessToken?.includes(accessToken)
//     ) {
//       req.user = userPayload as UserPayload;
//       next();
//       return;
//     }
//     res.status(401).send("unauthorized token");
//     return;
//   } catch (error) {
//     res.status(401).send("unauthorized token");
//   }
// };

// export const addUserTokens = (
//   personalId: string,
//   accessToken: string,
//   refreshToken: string
// ) => {
//   if (!USER_TOKENS[personalId]) {
//     USER_TOKENS[personalId] = { accessToken: [], refreshToken: [] };
//   }
//   USER_TOKENS[personalId].accessToken.push(accessToken);
//   USER_TOKENS[personalId].refreshToken.push(refreshToken);
// };
// export const removeUserToken = (
//   personalId: string,
//   accessToken: string,
//   refreshToken: string
// ) => {
//   const userTokens = USER_TOKENS[personalId];
//   if (userTokens) {
//     if (accessToken && Array.isArray(userTokens?.accessToken)) {
//       userTokens.accessToken = userTokens.accessToken.filter(
//         (userAccessToken: string) => userAccessToken != accessToken
//       );
//     }
//     if (refreshToken && Array.isArray(userTokens?.refreshTokens)) {
//       userTokens.refreshTokens = userTokens.refreshTokens.filter(
//         (userRefreshToken: string) => userRefreshToken != refreshToken
//       );
//     }
//   }
// };
