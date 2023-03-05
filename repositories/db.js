import Sequelize from 'sequelize';

const sequelize = new Sequelize(
  'postgres://fitcqzrd:BVun-jUhs1Fg9FXTZCOh7hMttWQEKJPF@tiny.db.elephantsql.com/fitcqzrd',
  {
    dialect: 'postgres',
    define: {
      timestamps: false,
    },
  }
);

export default sequelize;
