module.exports = (sequelize, DataTypes) => {
const data = sequelize.define("data", {

    id: {

        type: DataTypes.INTEGER,

        autoIncrement: true,



        primaryKey: true,

    },

    title: {

        type: DataTypes.STRING,

        allowNull: false,

    },

    category: {

        type: DataTypes.STRING,

        allowNull: false,

    },

    text: {

        type: DataTypes.STRING,

        allowNull: false,

    },



    date: {

        type: DataTypes.STRING,

        allowNull: false,

    },

});

return data;
};
