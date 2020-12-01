/**
 * Copyright © 2020 Hip Skop Jump, All Rights Reserved
 */

import express from 'express';

import debug from './debug/index';
import { authMiddlware } from "../auth";

const router = express.Router();

// Middlewares
router.use(express.json());
router.use(authMiddlware);

router.get('/healthcheck', (req, res) => {
    res.send('Running okay!');
});

router.use('/debug', debug);

export default router;
