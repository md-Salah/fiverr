const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please Enter book Name"],
        trim: true,
    },
    description: {
        type: String,
        required: [true, "Please Enter book Description"]
    },
    price: {
        type: Number,
        required: [true, "Please Enter book Price"],
        maxlength: [8, "Price can't excess 8 characters"]
    },
    rating: {
        type: Number,
        default: 0
    },
    images: [{
        public_id: {
            type: String,
            required: true,
        },
        url: {
            type: String,
            required: true,
        }
    }],
    category: {
        type: String,
        require: [true, "Please enter book Category"],
    },
    Stock: {
        type: Number,
        required: [true, "Please enter book Stock"],
        maxlength: [4, "Stock can't exceed 4 characters"],
        default: 1,
    },
    numOfReviews: {
        type: Number,
        default: 0,
    },
    review: [
        {
            name: {
                type: String,
                required: true,
            },
            rating: {
                type: Number,
                required: true,
            },
            comment: {
                type: String,
                required: true,
            }
        }
    ],
    createdAt: {
        type: Date,
        default: Date.now
    }
})

const productModel = mongoose.model("Product", productSchema);

module.exports = productModel;