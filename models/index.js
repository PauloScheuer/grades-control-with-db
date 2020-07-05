import mongoose from 'mongoose';
import dotenv from 'dotenv'
dotenv.config();
const db = {};
db.mongoose = mongoose;
db.url = process.env.MONGODB;


const studentSchema = db.mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  subject: {
    type: String,
    required: true
  },
  type: {
    type: String,
    required: true
  },
  value: {
    type: Number,
    required: true,
    validate(value) {
      if (value < 0) throw new Error("bah meu")
    }
  },
  lastModified: {
    type: Date,
    default: Date.Now
  }
});
db.studentModel = mongoose.model('student', studentSchema);
export { db };
