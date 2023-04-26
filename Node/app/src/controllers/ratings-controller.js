import Rating from "../models/rating.js";

export const createRating = async (req, res) => {
    try {
        const rating = await Rating.create(req.body);
        console.log(req.body)
        res.json({
            "message": "Valutazione creata",
            data: rating
        });
    } catch (err) {
        console.log(err);
        res.sendStatus(500);
    }
}

export const deleteRating = async (req, res) => {
    try {
        await Rating.destroy({
            where: {
                id: req.params.id
            }
        });
        res.json({
            "message": "Valutazione cancellata"
        });
    } catch (err) {
        console.log(err);
        res.sendStatus(500);
    }
}

export const getRating = async (req, res) => {
    try {
        const rating = await Rating.findOne({
            where: {
                userId: req.params.userId,
                movieId: req.params.movieId,
            }
        });
        
        if (rating) {
            res.send(rating);
        } else {
            res.sendStatus(404);
        }
    } catch (err) {
        console.log(err);
        res.sendStatus(500);
    }
}

export const getRatingsByUserId = async (req, res) => {
    try {
        const rating = await Rating.findAll({
            where: {
                userId: req.params.userId,
            }
        });
        
        if (rating) {
            res.send(rating);
        } else {
            res.sendStatus(404);
        }
    } catch (err) {
        console.log(err);
        res.sendStatus(500);
    }
}

export const updateRating = async (req, res) => {
    try {
        const rating = await Rating.update(req.body, {
            where: {
                id: req.params.id
            }
        });
        res.json({
            "message": "Valutazione aggiornata",
            data: rating
        });
    } catch (err) {
        console.log(err);
        res.sendStatus(500);
    }
}