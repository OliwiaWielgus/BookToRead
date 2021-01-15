const express = require('express');
const router = express.Router();

const BookController = require('../controllers/books');
const multer = require('multer');
const checkAuth = require('../middleware/check-auth');

const fileFilter = (req, file, cb) =>{
if(file.mimetype === 'image/jpeg' || file.mimetype === 'image/png'){
    cb(null, true);
}else {
    cb(null, false);
}
};
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './uploads')
    },
    filename: function (req, file, cb) {
      cb(null, new Date().toISOString().replace(":", "_").replace(":","_") 
      + file.originalname);
    }
  });

  const upload = multer({
      storage: storage,
      limits: {fileSize: 1024*1024*5},
      fileFilter: fileFilter

});

router.get('/', BookController.books_get_all);

router.post('/',checkAuth, upload.single('bookImage'),  BookController.books_create);
router.get('/:bookId', BookController.books_get);

router.patch('/:bookId', BookController.books_update);
router.delete('/:bookId', BookController.book_delete);
module.exports = router;