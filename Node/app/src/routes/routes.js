import express from "express";

const API_ROOT = '/api';

import { createRating, getRating, updateRating, deleteRating } from "../controllers/ratings-controller.js";
import { createFavourite, getFavourite, getFavouriteByUserId, deleteFavourite } from "../controllers/favourites-controller.js";
import { createRanking, getRanking, getRankingByUserId } from "../controllers/rankings-controller.js"
import { createReview, getReview, getReviewByUserId } from "../controllers/review-controller.js"

const router = express.Router();

router.post(`${API_ROOT}/rating`, createRating);
router.get(`${API_ROOT}/rating/:userId/:movieId`, getRating);
router.patch(`${API_ROOT}/rating/:id`, updateRating);
router.delete(`${API_ROOT}/rating/:id`, deleteRating);

router.post(`${API_ROOT}/favourite`, createFavourite);
router.get(`${API_ROOT}/:userId`, getFavourite);
router.get(`${API_ROOT}/favourite/:userId`, getFavouriteByUserId);
router.delete(`${API_ROOT}/favourite/:userId/:movieId`, deleteFavourite);

router.post(`${API_ROOT}/ranking`, createRanking);
router.get(`${API_ROOT}/rankingall/:userId`, getRanking);
router.get(`${API_ROOT}/ranking/:userId`, getRankingByUserId);

router.post(`${API_ROOT}/review`, createReview);
router.get(`${API_ROOT}/reviewall/:userId`, getReview);
router.get(`${API_ROOT}/review/:userId`, getReviewByUserId);

export default router;