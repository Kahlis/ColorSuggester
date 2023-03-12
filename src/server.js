import app from "./app";
import mkdirp from "mkdirp";

mkdirp('public/uploads/');
(async () => {
    app.listen(3000, () => {
        console.log("Servidor executando");
    });
})();