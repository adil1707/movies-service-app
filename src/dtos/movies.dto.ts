import { IsString, IsNumber, IsOptional , MinLength, MaxLength, Min, Max } from 'class-validator';

export class CreateMovieDto {

    @IsString()
    @MinLength(5, {
        message: 'Name is too short',
    })
    @MaxLength(255, {
        message: 'Name is too long',
    })
    public name: string;

    @IsString()
    @MinLength(5, {
        message: 'Genre is too short',
    })
    @MaxLength(255, {
        message: 'Genre is too long',
    })
    public genre: string;

    @IsOptional()
    @IsNumber()
    @Min(0, {
        message: 'Rating should not be less than 0',
    })
    @Max(10, {
        message: 'Rating should not be greater than 10',
    })
    public rating: number;
}