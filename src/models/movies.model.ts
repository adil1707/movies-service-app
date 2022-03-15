import { Movie } from './../interfaces/movies.interface';
import mongoose from 'mongoose';

const movieSchema: mongoose.Schema = new mongoose.Schema({
  name: {
    type: String,
    unique: true,
    minLength: 5,
    maxLength: 255,
    trim: true,
    required: true,
  },
  genre: {
    type: String,
    minLength: 5,
    maxLength: 55,
    trim: true,
    required: true,
  },
  rating: {
    type: Number,
    min: 0,
    max: 10,
    default: undefined,
  }
});

const movieModel = mongoose.model<Movie & mongoose.Document>('Movie', movieSchema);

export default movieModel;
