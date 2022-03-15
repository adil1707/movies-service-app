import { CreateMovieDto } from './../dtos/movies.dto';
import validationMiddleware from '@middlewares/validation.middleware';
import { Router, Request, Response } from 'express';
import { Routes } from '@interfaces/routes.interface';
import MoviesController from '@/controllers/movies.controller';

class MoviesRoute implements Routes {
  public path = '/api/movies';
  public router: Router = Router();
  public moviesController = new MoviesController();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get(`${this.path}`, this.moviesController.getMovies);
    this.router.get(`${this.path}/:id`, this.moviesController.getMovieById);
    this.router.post(`${this.path}`, validationMiddleware(CreateMovieDto, 'body'), this.moviesController.createMovie);
    this.router.put(`${this.path}/:id`, validationMiddleware(CreateMovieDto, 'body', true), this.moviesController.updateMovie);
    this.router.delete(`${this.path}/:id`, this.moviesController.deleteMovie);
  }
}

export default MoviesRoute;
