import FavouriteMovie from "../models/favourite.js";

export const createFavourite = async (req, res) => {
    try {
        const favourite = await FavouriteMovie.create(req.body);
        console.log(req.body)
        res.json({
            "message": "Creato preferito",
            data: favourite
        });
    } catch (err) {
        console.log(err);
        res.sendStatus(500);
    }
}

export const deleteFavourite = async (req, res) => {
    try {
        await FavouriteMovie.destroy({
            where: {
                userId: req.params.userId,
                movieId: req.params.movieId
            }
        });
        res.json({
            "message": "Il film è stato rimosso dai favoriti"
        });
    } catch (err) {
        console.log(err);
        res.sendStatus(500);
    }
}

export const getFavourite = async (req, res) => {
    try {
        const favourite = await FavouriteMovie.findOne({
            where: {
                userId: req.params.userId,
                movieId: req.params.movieId,
            }
        });
        if (favourite) {
            res.send(favourite);
        } else {
            res.sendStatus(404);
        }
    } catch (err) {
        console.log(err);
        res.sendStatus(500);
    }
}

export const getFavouriteByUserId = async (req, res) => {
    try {
        const favourite = await FavouriteMovie.findAll({
            where: {
                userId: req.params.userId,
            }
        });
        if (favourite) {
            res.send(favourite);
        } else {
            res.sendStatus(404);
        }
    } catch (err) {
        console.log(err);
        res.sendStatus(500);
    }
}