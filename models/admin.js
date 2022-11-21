const { Model, DataTypes } = require('sequelize');
const bcrypt = require('bcrypt');
const sequelize = require('../configuration/connection');

class Admin extends Model {
    checkEmail(loginEmail){
        return bcrypt.compareSync(loginEmail, this.admin_email);
    }
    checkPassword(loginPW) {
        return bcrypt.compareSync(loginPW, this.admin_password);
    }
}

Admin.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        admin_email: {
            type: DataTypes.STRING,
            allowNull: false,
            // unique applies a filter that restricts duplicate values in the data series
            unique: true,
        },
        admin_password: {
            type: DataTypes.STRING,
            allowNull: false,
        }
    },
    {
        hooks:{
            beforeCreate: async (userData) => {
                userData.admin_email = await bcrypt.hash(userData.admin_email, 15)
                userData.admin_password = await bcrypt.hash(userData.user_password, 15);
                return userData; 
            },
            beforeUpdate: async (updatedUserData) => {
                updatedUserData.admin_email = await bcrypt.hash(updatedUserData.admin_email, 15)
                updatedUserData.admin_password = await bcrypt.hash(updatedUserData.user_password, 15);
                return updatedUserData;
            },
        },
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'admin',
        
    }
);

module.exports = Admin;