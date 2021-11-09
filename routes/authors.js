var express = require('express');
var router = express.Router();

router.get('/authors', (req, res, next) => {

    try {



    }
    catch (err) {
        console.log(err);
    }

})

router.get('/author/:id', (req, res, next) => {

    try {

        const id = req.params.id




    }
    catch (err) {
        console.log(err);
    }

})

router.post('/author', (req, res, next) => {

    

})

module.exports = router;
