var express = require('express');
var router = express.Router();


router.get('/books', (req, res, next) => {

    try {



    }
    catch (err) {
        console.log(err);
    }

})

router.get('/book/:id', (req, res, next) => {

    try {

        const id = req.params.id




    }
    catch (err) {
        console.log(err);
    }

})

router.post('/book', (req, res, next) => {



})

module.exports = router;
