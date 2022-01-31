const express = require('express');
const {upload} = require('../helpers/filehelper');
const {singleFileUpload, getallSingleFiles} = require('../controllers/fileuploadController');
const router = express.Router();


router.post('/singleFile', upload.single('file'), singleFileUpload);

// to get all single files using get method

router.get('getSingleFiles', getallSingleFiles);

module.exports = {
    routes: router
}
