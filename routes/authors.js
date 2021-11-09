const express = require('express');
const router = express.Router();

const dbCon = require('../db/db')

router.get('/authors', async (req, res, next) => {

    try {

        const authorList = await dbCon("authors")
            .select()

        console.log(authorList);

        res.status(200).json(authorList)

    }
    catch (err) {
        console.log(err);
        res.status(500).json([])
    }


})

router.get('/author/:id', async (req, res, next) => {

    try {

        const id = req.params.id

        const specificAuthor = await dbCon("authors")
            .select()
            .where({
                id
            })

        if (!specificAuthor.length) throw Error("author not found")

        res.status(200).json(specificAuthor[0])

    }
    catch (err) {
        console.log(err);
        let status = 500
        if (err.message == "author not found") status = 404
        res.status(status).json({})
    }

})

router.post('/author', async (req, res, next) => {

    try {

        const firstName = req.body.firstName
        const lastName = req.body.lastName

        const createRes = await dbCon("authors")
            .insert({
                firstName,
                lastName
            })


        res.json({
            status: "ok"
        })

    } catch (err) {

        console.log(err);
        res.json({
            status: err.message
        })
    }

})

module.exports = router;
