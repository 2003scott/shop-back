import Garment from "../../../models/Garment.js"

export const getGarments = async (req, res) => {
    try {
        const data = await Garment.find();
        return res.status(200).json(data)
    } catch (error) {
        return res.status(500).json(error)
    }
}

export const addGarment = async (req,res) => {
    try {
        const { name, description, price, image, promoPrice } = req.body;
        const newGarment = new Garment({ name, description, price, image, promoPrice })
        await newGarment.save();
        return res.status(200).json(newGarment)
    } catch (error) {
        return res.status(500).json(error)
    }
}