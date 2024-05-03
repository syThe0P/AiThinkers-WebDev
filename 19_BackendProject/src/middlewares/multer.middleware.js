// Importing the 'multer' library which is a middleware for handling multipart/form-data, primarily used for uploading files.
import multer from 'multer';

// Setting up disk storage using multer.diskStorage() function.
const storage = multer.diskStorage({
    // The 'destination' function determines the folder where uploaded files will be stored.
    destination: function (req, file, cb) {
        // In this case, storing files in the "./public/temp" directory.
        cb(null, "./public/temp");
    },
    // The 'filename' function determines the name of the uploaded file.
    filename: function(req, file, cb) {
        // Using the original name of the file as its name when saved.
        cb(null, file.originalname);
    }
});

// Exporting a configured multer middleware with the defined storage settings.
export const upload = multer({
    storage, // Using the storage configuration defined above.
});
