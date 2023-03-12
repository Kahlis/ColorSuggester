import Vibrant from 'node-vibrant';
import fs from "fs";

const postSuggestion = async (req, res) => {
    const vibrant = new Vibrant(req.file.path);
    const p = await vibrant.getPalettes();
    const palletes = p["default"];

    let colors = [];
    for (let pallete in palletes)
        if (palletes.hasOwnProperty(pallete) && palletes[pallete])
            colors.push({name: pallete, hex: palletes[pallete].hex})

    let colorsJson = {
        colors
    }

    fs.unlinkSync(req.file.path);
    return res.status(201).json(colorsJson);
};

export { postSuggestion };