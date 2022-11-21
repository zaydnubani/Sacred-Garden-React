const { Model, DataTypes } = require('sequelize');
const bcrypt = require('bcrypt');
const sequelize = require('../configuration/connection');

class User extends Model {
    checkWallet(loginWallet){
        return bcrypt.compareSync(loginWallet, this.user_wallet);
    }
    checkEmail(loginEmail){
        return bcrypt.compareSync(loginEmail, this.user_email);
    }
    checkPassword(loginPW) {
        return bcrypt.compareSync(loginPW, this.user_password);
    }
}

User.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        user_email: {
            type: DataTypes.STRING,
            allowNull: false,
            // unique applies a filter that restricts duplicate values in the data series
            unique: true,
        },
        user_wallet: {
            type: DataTypes.STRING,
            allowNull: true,
            // unique applies a filter that restricts duplicate values in the data series
            unique: true,
        },
        user_password: {
            type: DataTypes.STRING,
            allowNull: false,
        }
    },
    {
        hooks:{
            beforeCreate: async (userData) => {
                userData.user_wallet = await bcrypt.hash(userData.user_wallet, 15)
                userData.user_email = await bcrypt.hash(userData.user_email, 15)
                userData.user_password = await bcrypt.hash(userData.user_password, 15);
                return userData; 
            },
            beforeUpdate: async (updatedUserData) => {
                updatedUserData.user_wallet = await bcrypt.hash(updatedUserData.user_wallet, 15)
                updatedUserData.user_email = await bcrypt.hash(updatedUserData.user_email, 15)
                updatedUserData.user_password = await bcrypt.hash(updatedUserData.user_password, 15);
                return updatedUserData;
            },
        },
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'user',
    }
);

module.exports = User