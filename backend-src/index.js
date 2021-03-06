/**
 * Copyright © 2020 Hip Skop Jump, All Rights Reserved
 */

import path from 'path';
import express from 'express';

import api from './api/index';
import config from "./config";
import initCron from "./data-import/index";

const appRoot = path.dirname(require.main.filename);
const appName = require('../package.json').name;
const app = express();
const port = config.server.port;

// Use API router for all requests under /api
app.use('/api', api);

// Serve the index page on access to /
app.get('/', (req, res) => {
    res.sendFile(path.join(appRoot, '..', 'static', 'index.html'));
});

// Serve from built version of frontend-src for anything else
app.use(express.static(path.join(appRoot, '..', 'static')));

app.listen(port, () => {
    console.log(`${appName} started on port ${port}`);
});

initCron();
