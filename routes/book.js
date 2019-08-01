var express = require('express');
var router = express.Router();
var book_controller = require('../controllers/bookController')


/* GET services listing. */
router.get('/all', book_controller.book_all_get);
router.get('/:id',  book_controller.book_detail_get);
router.post('/',  book_controller.book_insert);


module.exports = router;