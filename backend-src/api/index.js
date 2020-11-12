/**
 * Copyright © 2020 Hip Skop Jump, All Rights Reserved
 */

import express from 'express';

const router = express.Router();

router.get('/healthcheck', (req, res) => {
    res.send('Running okay!');
});
