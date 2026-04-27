import mongoose from 'mongoose';

const ServiceSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Please provide a service title'],
  },
  description: {
    type: String,
    required: [true, 'Please provide a service description'],
  },
  image_url: {
    type: String,
    required: [true, 'Please provide an image URL for the service'],
  },
}, {
  timestamps: true,
});

export default mongoose.models.Service || mongoose.model('Service', ServiceSchema);
