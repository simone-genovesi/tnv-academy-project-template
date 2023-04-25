import Ranking from "../models/ranking.js"

export const createRanking = async (req, res) => {
    try {
        const ranking = await Ranking.create(req.body);
        console.log(req.body)
        res.json({
            "message": "Classifica creata",
            data: ranking
        });
    } catch (err) {
        console.log(err);
        res.sendStatus(500);
    }
}

export const getRanking = async (req, res) => {
    try{
        const ranking = await Ranking.findAll();
        if (ranking) {
            res.send(ranking);
        } else {
            res.sendStatus(404);
        }
    } catch (err) {
        console.log(err);
        res.sendStatus(500);
    }
}

export const getRankingByUserId = async (req, res) => {
    try {
        const ranking = await Ranking.findOne({
            where: {
                userId: req.params.userId,
                }
        });
        if (ranking) {
            res.send(ranking);
        } else {
            res.sendStatus(404);
        }
    } catch (err) {
        console.log(err);
        res.sendStatus(500);
    }
}


export const updateRanking = async (req, res) => {
    try {

        const gamePoints = req.body.gamePoints;

        console.log("Recupero gamepoints");
        console.log(`punteggi: ${gamePoints}`);
        console.log(`userID: ${req.params.userId}`);

        const ranking = await Ranking.findOne({
            where: {
                userId: req.params.userId,
            }
        });

        console.log("Recupero ranking");

        // Aggiornamento del valore "rating" sommandolo a quello esistente
        const updatedRanking = ranking.gamePoints + gamePoints;

        console.log("Somma punteggi");

        await ranking.update({ gamePoints: updatedRanking });
        //await ranking.save();

        res.json({
            "message": "Valutazione aggiornata",
            data: updatedRanking
        });
    } catch (err) {
        console.log(err);
        res.sendStatus(500);
    }
}