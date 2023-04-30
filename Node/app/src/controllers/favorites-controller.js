import favoriteMovie from "../models/favorite.js";

export const createfavorite = async (req, res) => {
    try {
        const favorite = await favoriteMovie.create(req.body);
        console.log(req.body)
        res.json({
            "message": "Preferito creato",
            data: favorite
        });
    } catch (err) {
        console.log(err);
        res.sendStatus(500);
    }
}

export const deletefavorite = async (req, res) => {
    try {
        await favoriteMovie.destroy({
            where: {
                userId: req.params.userId,
                movieId: req.params.movieId
            }
        });
        res.json({
            "message": "Il preferuti è stato rimosso"
        });
    } catch (err) {
        console.log(err);
        res.sendStatus(500);
    }
}

export const getfavorite = async (req, res) => {
    try {
        const favorite = await favoriteMovie.findOne({
            where: {
                userId: req.params.userId,
                movieId: req.params.movieId,
            }
        });
        if (favorite) {
            res.send(favorite);
        } else {
            res.sendStatus(404);
        }
    } catch (err) {
        console.log(err);
        res.sendStatus(500);
    }
}

export const getfavoriteByUserId = async (req, res) => {
    try {
        const favorite = await favoriteMovie.findAll({
            where: {
                userId: req.params.userId,
            }
        });
        if (favorite) {
            res.send(favorite);
        } else {
            res.sendStatus(404);
        }
    } catch (err) {
        console.log(err);
        res.sendStatus(500);
    }
}