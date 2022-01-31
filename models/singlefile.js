const mongoose = require('mongoose');


const Schema  = mongoose.Schema;

const singleFileSchema = new Schema({
    fileName: {
        type: string,
        required: true
    },
    filePath: {
        type: string,
        required: true

    },
    fileType: {
        type: string,
        required: true
    },
    fileSize: {
        type: string,
        required:true
    },
}, {timestamps: true});

        module.exports = mongoose.model('SingleFile', singleFileSchema);
