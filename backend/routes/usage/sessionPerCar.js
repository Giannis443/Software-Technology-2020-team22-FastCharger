const express = require('express');
const mysql = require('mysql');
const router = express.Router();
const db = require('../../dbconnect');
const moment = require('moment');

//Gets all
router.get('/:id/:from/:to', (req, res) => {


	
	let startDate= moment(`${req.params.from}`).format("yyyy-MM-DD HH:mm:ss");
        let finishDate = moment(`${req.params.to}`).format("yyyy-MM-DD HH:mm:ss");
    
	let sql = `SELECT * FROM transaction INNER JOIN carChargedTransaction INNER JOIN car ON carChargedTransaction.idCar=car.idCar ON carChargedTransaction.idTransaction=transaction.idTransaction  WHERE car.idCar=${req.params.id} AND transaction.time>='${startDate}' AND transaction.time<='${finishDate}'`;
    let query = db.query(sql, (err, results) => {
        if (err) throw err;
        res.json(results);
    });

	
	//res.send(startDate);
});
module.exports = router;
