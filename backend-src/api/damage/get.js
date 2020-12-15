/**
 * Copyright © 2020 Hip Skop Jump, All Rights Reserved
 */

import { Damage } from "../../db";

export default async (req, res) => {
    const damages = await Damage.findAll().catch(() => {
        res.status(500).json({ "error": "Cannot get damages from database" });
    });
    if (!damages) {
        return;
    }
    res.status(200).json(damages);
};
