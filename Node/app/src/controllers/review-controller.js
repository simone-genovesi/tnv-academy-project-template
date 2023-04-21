import Review from "../models/review.js"

export const createReview = async (req, res) => {
    try {
        const review = await Review.create(req.body);
        console.log(req.body)
        res.json({
            "message": "Recensione creata",
            data: review
        });
    } catch (err) {
        console.log(err);
        res.sendStatus(500);
    }
}

export const getReview = async (req, res) => {
    try{
        const review = await Review.findAll();
        if (review) {
            res.send(review);
        } else {
            res.sendStatus(404);
        }
    } catch (err) {
        console.log(err);
        res.sendStatus(500);
    }
}

export const getReviewByUserId = async (req, res) => {
    try {
        const review = await Review.findOne({
            where: {
                userId: req.params.userId,
                }
        });
        if (review) {
            res.send(review);
        } else {
            res.sendStatus(404);
        }
    } catch (err) {
        console.log(err);
        res.sendStatus(500);
    }
}