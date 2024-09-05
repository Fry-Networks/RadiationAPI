import mongoose from 'mongoose';

const dataRowSchema = new mongoose.Schema({
  date: { type: String, required: true },
  cpm: { type: String },
  acpm: { type: String },
  usv_h: { type: String },
  latitude: { type: String },
  longitude: { type: String },
});

const GmcMapSchema = new mongoose.Schema({
  paramID: { type: String, required: true },
  minerKey: { type: String, required: true },
  data: [dataRowSchema],
}, { timestamps: true });

export const GmcMapData = mongoose.model('GmcMap', GmcMapSchema);
