const express = require('express');
const router = express.Router();

const dbCon = require('../db/db')

router.get('/books', async (req, res, next) => {

    try {

        const bookList = await dbCon("books")
            .select()

        console.log(bookList);

        res.status(200).json(bookList)

    }
    catch (err) {
        console.log(err);
        res.status(500).json([])
    }

})

router.get('/book/:id', async (req, res, next) => {

    try {

        const id = req.params.id

        const specificBook = await dbCon("books")
            .select()
            .where({
                id
            })

        if (!specificBook.length) throw Error("book not found")

        res.status(200).json(specificBook[0])

    }
    catch (err) {
        console.log(err);
        let status = 500
        if (err.message == "book not found") status = 404
        res.status(status).json({})
    }

})

router.post('/book', (req, res, next) => {



})

module.exports = router;
