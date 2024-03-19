import mongoose from 'mongoose';

const ProductSchema = new mongoose.Schema(
    {
        title: { type: String, required: true },
        price: { type: Number, required: true },
        description: { type: String, required: false },
        category: { type: String, required: false },
        image: { type: String, required: false },
        rating: { type: Number, required: false }
    },
    { timestamps: true }
);

export default mongoose.models.Products || mongoose.model('Products', ProductSchema);

