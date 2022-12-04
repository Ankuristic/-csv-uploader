const fileController = require('./FileController');

const uploadedFileNames = fileController.uploadedFileNames;
//array containing the csv filename
const array = uploadedFileNames();  
module.exports.home = function(req,res){
    return res.render('home',{
        files: array
    });
}
