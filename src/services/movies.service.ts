import { HttpException } from '@exceptions/HttpException';
import { isEmpty } from '@utils/util';
import { CreateMovieDto } from './../dtos/movies.dto';
import { Movie } from './../interfaces/movies.interface';
import movieModel from '@/models/movies.model';

class MovieService {
  public movies = movieModel;

  public async findAllMovie(): Promise<Movie[]> {
    const movies: Movie[] = await this.movies.find();

    return movies;
  }

  public async findMovieById(movieId: string): Promise<Movie> {
    if (isEmpty(movieId)) throw new HttpException(400, "You're not movieId.");

    const findMovie: Movie = await this.movies.findById(movieId);
    if (!findMovie) throw new HttpException(404, "Movie with the ID was not found.");

    return findMovie;
  }

  public async createMovie(movieData: CreateMovieDto): Promise<Movie> {
    if (isEmpty(movieData)) throw new HttpException(400, 'Movie data is invalid.');

    const findMovie: Movie = await this.movies.findOne({ name: movieData.name });
    if (findMovie) throw new HttpException(400, 'Movie with the given name already exist.');

    const createMovieData: Movie = await this.movies.create(movieData);

    return createMovieData;
  }

  public async updateMovie(movieId: string, movieData: CreateMovieDto): Promise<Movie> {
    if (isEmpty(movieData)) throw new HttpException(400, "You're not movie movieData.");

    const updateMovieById: Movie = await this.movies.findByIdAndUpdate(movieId, movieData, { new: true });
    if (!updateMovieById) throw new HttpException(404, 'Movie with the given ID was not found.');

    return updateMovieById;
  }

  public async deleteMovie(movieId: string): Promise<Movie> {
    const deleteMovieById: Movie = await this.movies.findByIdAndRemove(movieId);
    if (!deleteMovieById) throw new HttpException(404, "Movie with the given ID was not found.");

    return deleteMovieById
  }
}

export default MovieService;
