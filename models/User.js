// What do we need to require here?
const {Model, DataTypes} = require('sequelize')
const bycript = require('bcrypt')
const sequelize = require('../config/config')


// create our User model
class User extends Model {
  // set up method to run on instance data (per user) to check password
checkPassword(loginPw) {
  return bycript.compareSync(loginPw, this.password)
}
}

User.init(
  {
  //  What needs to go in the User expression here?
  id: {
    type: DataTypes.INTERGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true
  },
  username: {
    type: DataTypes.String,
    allowNull: false
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      len: [4]
    }
  }
  },
  {
    hooks: {
      // How do we set up the hook functionality?
      beforeCreate: async (newUserData) => {
        newUserData.password = await bycript.hash(newUserData.password, 10)
        return newUserData
      },
      beforeUpdate: async (updateUserData) => {
        updateUserData.password = await bycript.hash(updateUserData.password, 10)
        return updateUserData
      }
    
    },
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'User'
  }
);

module.exports = User;
