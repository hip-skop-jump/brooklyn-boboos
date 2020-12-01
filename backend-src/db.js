import { Sequelize, DataTypes, Model } from 'sequelize';
import config from "./config";

// init sqlite database
const sequelize = new Sequelize(config.database.connection);

class User extends Model {}
User.init({
    username: DataTypes.STRING,
    uuid: {
        primaryKey: true,
        type: DataTypes.UUIDV4,
    },
}, {
    sequelize,
    modelName: 'User',
});

// Road Damage
class Damage extends Model {}
Damage.consts = {
    type: {
        pothole: 0,
        street_condition: 1,
    },
    source: {
        userReport: 0,
        ny311OpenData: 1,
    },
};
Damage.init({
    longitude: DataTypes.DOUBLE,
    latitude: DataTypes.DOUBLE,
    timeReported: DataTypes.TIME,
    timeFixed: DataTypes.TIME,
    fixed: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
    },
    dataSource: {
        type: DataTypes.INTEGER,
        validate: {
            isIn: [Object.values(Damage.consts.source)],
        },
    },
    uniqueKey: DataTypes.STRING,
    type: {
        type: DataTypes.INTEGER,
        validate: {
            isIn: [Object.values(Damage.consts.type)],
        },
    },
}, {
    sequelize,
    modelName: 'Damage',
});

// synchronize database with schema
sequelize.sync({
    alter: true,
});

export {
    User,
    Damage,
};
