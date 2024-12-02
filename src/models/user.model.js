import { DataTypes } from "sequelize";
export const createUserModel = (sequelize) => {
  const User = sequelize.define("user", {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      isLowercase: true,
      validate: {
        isEmail: true,
      },
    },
    designation: {
      type: DataTypes.STRING,
      allowNull: false,
      // validate: {
      //     isIn: [['Engineer', 'Designer', 'Manager']],
      // }
    },
    empId: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      //   validate: {
      //     isString: true,
      //   },
    },
  });

  return User;
};
