import { Router } from "express";
import multer from "multer";
import { postSuggestion } from "../controllers/suggest.controller";

const suggestRoutes = Router();


const upload = multer({
    dest: 'public/uploads/'
    // you might also want to set some limits: https://github.com/expressjs/multer#limits
});

suggestRoutes.post('/', upload.single("file"), postSuggestion);

export default suggestRoutes;