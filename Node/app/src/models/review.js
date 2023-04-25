import { Sequelize } from "sequelize"; 
import db from "../../config/config.js";
 
const { DataTypes } = Sequelize;

const Review = db.define('review', {
  userId: {
    type: DataTypes.INTEGER
  },
  movieId: {
    type: DataTypes.INTEGER
  },
  review: {
    type: DataTypes.STRING
  }
}, {
  freezeTableName: true,
  timestamps: false,
  underscored: 0
});
 
export default Review;