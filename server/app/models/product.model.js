module.exports = (sequelize, Sequelize) => {
    const Product = sequelize.define("product", {
        name: {
            type: Sequelize.STRING
        },
        photo: {
            type: Sequelize.STRING
        },
        price: {
            type: Sequelize.REAL
        },
        description: {
            type: Sequelize.TEXT
        },
        type: {
            type: Sequelize.STRING}
    });
    return Product;
};
