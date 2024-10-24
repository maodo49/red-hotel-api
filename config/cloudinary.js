const cloudinary = require('cloudinary').v2;
require('dotenv').config();

// Configuration Cloudinary
cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
});
// Exemple de téléchargement d'une image
// cloudinary.uploader.upload("image_path.jpg", function (error, result) {
//     console.log(result, error);
// });

module.exports = cloudinary;