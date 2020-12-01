/**
 * Copyright © 2020 Hip Skop Jump, All Rights Reserved
 */

import nyc311opendata from "../../data-import/nyc311opendata";

export default async (req, res) => {
    if (!req.user.isAdmin) {
        res.status(500).send("Admin key is incorrect or not provided");
        return;
    }
    const promises = await nyc311opendata();
    // Wait until all the database writes are done and remove any that were already found in the database.
    const newData = await Promise.all(promises).filter(e => !!e);
    res.status(200).send(newData);
};
