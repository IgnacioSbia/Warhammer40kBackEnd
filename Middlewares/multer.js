const multer = require('multer');
const path =  require('path');
const storage = multer.diskStorage({
    destination: (req, file, cb) =>{
        cb(null, '../Images/')
    
    },
    filename: (req, file, cb) =>{
        console.log(file)
        cb(null, Date.now() + path.extname(file.originalname))
    }
    
})

const upload = multer({storage:storage});

//export default upload;