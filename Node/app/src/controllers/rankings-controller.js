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
      const userId = req.params.userId;
      const lastPoints = req.body.lastPoints;
  
      let ranking = await Ranking.findOne({
        where: {
          userId: userId,
        }
      });
  
      const updatedRanking = ranking.gamePoints + lastPoints;
      await ranking.update({ gamePoints: updatedRanking });
  
      res.json({
          message: "Valutazione aggiornata",
          data: updatedRanking,
        });
    } catch (err) {
      console.log(err);
      res.status(400).json({ error: "Errore interno del server" });
    }
  };

  export const updateLastPoints = async (req, res) => {
    try {
      const userId = req.params.userId;
      const lastPoints = req.body.lastPoints;
  
      let [ranking, created] = await Ranking.findOrCreate({
        where: {
          userId: userId,
        },
        defaults: {
          gamePoints: 0,
          lastPoints: 0,
        },
      });
  
      const updatedRanking = lastPoints;
      await ranking.update({ lastPoints: updatedRanking });
  
      if (created) {
        res.status(201).json({
          message: "Nuovo ranking creato",
          data: updatedRanking,
        });
      } else {
        res.json({
          message: "Valutazione aggiornata",
          data: updatedRanking,
        });
      }
    } catch (err) {
      console.log(err);
      res.status(500).json({ error: "Errore interno del server" });
    }
  };