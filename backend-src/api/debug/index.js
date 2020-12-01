/**
 * Copyright © 2020 Hip Skop Jump, All Rights Reserved
 */

import express from 'express';

import nyc311opendata from "./nyc311opendata";

const router = express.Router();

router.post('/nyc311opendata', nyc311opendata);

export default router;
