'use strict';
module.exports = {
    up: function (queryInterface, Sequelize) {
        return (queryInterface.addColumn('Orders','userId' ,{
// userID column added to the order table so on payment checkout we can sort out the
//orders regarding their order
            type: Sequelize.INTEGER,
            onDelete:'CASCADE',
            references:{
                model:'Users',
                key:'id',
                as:'userId'
            }

        }),queryInterface.addColumn('Orders','catId' ,{
// catId added as column in order b/c it hasMany relation in it
            type: Sequelize.INTEGER,
            onDelete:'CASCADE',
            references:{
                model:'Categories',
                key:'id',
                as:'catId'
            }

        }),queryInterface.addColumn('Products','catId' ,{

            type: Sequelize.INTEGER,
            onDelete:'CASCADE',
            references:{
                model:'Categories',
                key:'id',
                as:'catId'
            }


        });
      );

    }

};
