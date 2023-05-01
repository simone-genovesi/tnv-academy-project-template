import { INET, INTEGER, Sequelize } from "sequelize"; 
import db from "../../config/config.js";
 
const { DataTypes } = Sequelize;

const favoriteMovie = db.define('favorites', {
  userId: {
    type: DataTypes.INTEGER
  },
  movieId: {
    type: DataTypes.INTEGER
  },
  movieTitle: {
    type: DataTypes.STRING
  },
  posterPath: {
    type: DataTypes.STRING
  },
  review: {
    type: DataTypes.STRING
  },
  rating: {
    type: DataTypes.INTEGER
  }
}, {
  freezeTableName: true,
});
 
export default favoriteMovie;