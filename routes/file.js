const express = require('express');
const router = express.Router();

const fileController = require('../controllers/FileController');

router.post('/upload',fileController.upload);   //route for uploading new file
router.get('/open',fileController.open);        //route for opening already uploaded file display all cssv file
router.get('/delete',fileController.delete);    //route for deleting a particular file

module.exports = router;