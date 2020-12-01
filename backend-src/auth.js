/**
 * Copyright © 2020 Hip Skop Jump, All Rights Reserved
 */

import { User } from "./db";

import config from "./config";

async function authMiddlware (req, res, next) {
    const user = {};
    if (req.headers.authorization) {
        user.isAdmin = req.headers.authorization === config.authentication.adminKey;
    }
    req.user = user;
    next();
}
export {
    authMiddlware,
};
