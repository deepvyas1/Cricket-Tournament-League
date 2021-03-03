"use strict"

const userRouter = require("./server/user/userRoutes").userRouter;
const adminRoute = require("./server/admin/adminRoutes").adminRouter;
const isUserJWTAuthenticated = require("./server/utils/middlewares").isUserJWTAuthenticated;


module.exports = function (app) {

    // Note: For testing purpose middleware can be removed

    app.use("/v1/api/user/cricket", [isUserJWTAuthenticated], userRouter);

    app.use("/v1/api/admin", [isUserJWTAuthenticated], adminRoute);
}