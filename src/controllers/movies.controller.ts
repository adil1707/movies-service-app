import { CreateMovieDto } from './../dtos/movies.dto';
import { Movie } from './../interfaces/movies.interface';
import { Request, Response, NextFunction } from 'express';
import movieService from '@services/movies.service';

class MoviesController {
  public movieService = new movieService();

  public getMovies = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const findAllMoviesData: Movie[] = await this.movieService.findAllMovie();

      res.status(200).json({ data: findAllMoviesData, message: 'findAll' });
    } catch (error) {
      next(error);
    }
  };

  public getMovieById = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const movieId: string = req.params.id;
      const findOneMovieData: Movie = await this.movieService.findMovieById(movieId);
      
      res.status(200).json({ data: findOneMovieData, message: 'findOne' });
    } catch (error) {
      next(error);
    }
  };

  public createMovie = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const movieData: CreateMovieDto = req.body;
      const createMovieData: Movie = await this.movieService.createMovie(movieData);

      res.status(200).json({ data: createMovieData, message: 'created' });
    } catch (error) {
      next(error);
    }
  };

  public updateMovie = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const movieId: string = req.params.id;
      const movieData: CreateMovieDto = req.body;
      const updateMovieData: Movie = await this.movieService.updateMovie(movieId, movieData);

      res.status(200).json({ data: updateMovieData, message: 'updated' });
    } catch (error) {
      next(error);
    }
  }

  public deleteMovie = async (req: Request, res: Response, next: NextFunction) => {
    try { 
      const movieId: string = req.params.id;
      const deleteMovieData: Movie = await this.movieService.deleteMovie(movieId);

      res.status(200).json({ data: deleteMovieData, message: 'deleted' });
    } catch (error) {
      next(error);
    }
  }
}

export default MoviesController;
