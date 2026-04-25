const mongoose = require('mongoose');

const product_schema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: [true,"name is reuired"],
            trim:true,
        },
        price: {
            type: Number,
            required: [true, "please enter price"],
        },
        image: {
            type: String,
            required: true,
        },
        category: {
            type: String,
            required: true,
            enum: ["coffee", "tea", "snacks", "dessert"],
        },
        isAvailable: {
            type: Boolean,
            default: true,
        },
        
        rating: {
            type: Number,
            default: 0,
        },
        
        numReviews: {
            type: Number,
            default: 0,
        },
        reviews: [
            {
                user: {
                    type: mongoose.Schema.Types.ObjectId,
                    ref: "User",
                },
                comment: String,
                rating: Number,
            },
        ],
    }
);

const productmodel = mongoose.model("product_model",productschema);

module.exports = productmodel;