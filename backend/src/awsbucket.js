//first isko dekhna nahi hu to
// import multer from 'multer';
// import path from 'path';

// const stoarge=multer.diskStorage({
// 	destination:'./upload/images',
// 	filename:(req,file,cb)=>{
//         return cb(null,`${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`)
// 	}
// })
// const upload=multer({
// 	storage:stoarge
// })
// module.exports=upload



// import config from './config';
// import multer from 'multer';
// import AWS from 'aws-sdk';
// import multerS3 from 'multer-s3'

// AWS.config.update({
//     accessKeyId: config.app.AWS_ACCESS_KEY,
//     secretAccessKey: config.app.AWS_SECRET_KEY,
//     region: config.app.AWS_REGION
// })

// const s3 = new AWS.S3();
// const fileFilter = (req, file, cb) => {
//     if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
//         cb(null, true)
//     } else {
//         cb(new Error('Invalid Mime Type, only JPEG and PNG'), false);
//     }
// }

// var upload = multer({
//     storage: multerS3({
//         fileFilter,
//         s3: s3,
//         bucket: config.app.AWS_BUCKET,
//         metadata: function (req, file, cb) {
//             cb(null, { fieldName: 'abhi_meta_data' });
//         },
//         key: function (req, file, cb) {
//             cb(null, file.originalname)
//         }
//     })
// })

// module.exports = upload;





//`${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`

import config from './config';
import multer from 'multer';
import AWS from 'aws-sdk';
import multerS3 from 'multer-s3'

AWS.config.update({
    accessKeyId: config.app.AWS_ACCESS_KEY,
    secretAccessKey: config.app.AWS_SECRET_KEY,
    region: config.app.AWS_REGION,
	correctClockSkew: true
})

const s3 = new AWS.S3();
const fileFilter = (req, file, cb) => {
    if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
        cb(null, true)
    } else {
        cb(new Error('Invalid Mime Type, only JPEG and PNG'), false);
    }
}

var upload = multer({
    storage: multerS3({
        fileFilter,
        s3: s3,
        bucket: config.app.AWS_BUCKET,
		contentType: multerS3.AUTO_CONTENT_TYPE,
        metadata: function (req, file, cb) {
            cb(null, { fieldName: 'abhi_meta_data' });
        },
        key: function (req, file, cb) {
            cb(null, file.originalname)
        }
    })
})

module.exports = upload;
