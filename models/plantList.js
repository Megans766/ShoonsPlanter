import mongoose from "mongoose";

const Schema = mongoose.Schema

const plantListSchema = new Schema({
  name: { type: String, required: true },
  owner: { type: Schema.Types.ObjectId, ref: 'Profile' },
  about: [{ type: Schema.Types.ObjectId, ref: 'About' }]
},{
  timestamps: true,
})

const PlantList = mongoose.model('PlantList', plantListSchema)

export { PlantList }