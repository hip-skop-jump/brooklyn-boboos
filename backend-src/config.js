/**
 * Copyright © 2020 Hip Skop Jump, All Rights Reserved
 */

const env = process.env;

export default {
    database: {
        connection: env.DATABASE_CONNECTION || 'sqlite:database.db',
    },
    server: {
        port: env.PORT || 3000,
    },
};
