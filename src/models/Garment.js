import { Schema, model, version } from "mongoose";

const garmentSchema = new Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    price: Number,
    image: { type: String, default:'https://rod-storage-test.s3.ap-northeast-1.amazonaws.com/497276-1200-auto.webp' },
    promoPrice: { type: Number, default: 0 },
},{
    timestamps: true,
    versionKey: false
})


export default model("Garment", garmentSchema);