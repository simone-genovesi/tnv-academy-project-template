import { INET, INTEGER, Sequelize } from "sequelize"; 
import db from "../../config/config.js";
 
const { DataTypes } = Sequelize;

const FavouriteMovie = db.define('favourites', {
  userId: {
    type: DataTypes.INTEGER
  },
  movieId: {
    type: DataTypes.STRING
  }
}, {
  freezeTableName: true,
  timestamps: false,
  underscored: 0
});
 
export default FavouriteMovie;