import mongoose from 'mongoose';

const EventGallerySchema = new mongoose.Schema({
  occasionType: {
    type: String,
    required: [true, 'Please provide an occasion type'],
  },
  images: [{
    type: String, // Cloudinary URLs
    required: [true, 'Please provide image URLs'],
  }],
}, {
  timestamps: true,
});

export default mongoose.models.EventGallery || mongoose.model('EventGallery', EventGallerySchema);
