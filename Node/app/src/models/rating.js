import { Sequelize } from "sequelize"; 
import db from "../../config/config.js";
 
const { DataTypes } = Sequelize;

const Rating = db.define('ratings', {
  userId: {
    type: DataTypes.INTEGER
  },
  movieId: {
    type: DataTypes.STRING
  },
  rating: {
    type: DataTypes.INTEGER
  }
}, {
  freezeTableName: true,
  timestamps: false,
  underscored: 0
});
 
export default Rating;