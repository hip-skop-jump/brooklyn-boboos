/**
 * Copyright © 2020 Hip Skop Jump, All Rights Reserved
 */

import express from 'express';

import get from "./get";

const router = express.Router();

router.get('/get', get);

export default router;
