import express from "express";

const API_ROOT = '/api';

import { createfavorite, getfavorite, getfavoriteByUserId, deletefavorite } from "../controllers/favorites-controller.js";
import { createRanking, getRanking, getRankingByUserId, updateRanking } from "../controllers/rankings-controller.js"


const router = express.Router();

router.post(`${API_ROOT}/favorite`, createfavorite);
router.get(`${API_ROOT}/:userId`, getfavorite);
router.get(`${API_ROOT}/favorite/:userId`, getfavoriteByUserId);
router.delete(`${API_ROOT}/favorite/:userId/:movieId`, deletefavorite);

router.post(`${API_ROOT}/ranking`, createRanking);
router.get(`${API_ROOT}/rankingall/:userId`, getRanking);
router.get(`${API_ROOT}/ranking/:userId`, getRankingByUserId);
router.patch(`${API_ROOT}/updateranking/:userId`, updateRanking);

export default router;