import mongoose from 'mongoose';

const PackageSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please provide a package name'],
    enum: ['Basic Elegance', 'Classic Luxe', 'Royal Premium'],
  },
  price: {
    type: Number,
    required: [true, 'Please provide a package price'],
  },
  guestCount: {
    type: Number,
    default: 100,
  },
  coreServices: [{
    type: String,
  }],
  premiumAddons: [{
    type: String,
  }],
}, {
  timestamps: true,
});

export default mongoose.models.Package || mongoose.model('Package', PackageSchema);
