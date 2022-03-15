import { ArrayContains, IsEmail, IsString } from 'class-validator';

export class CreateUserDto {
  @IsEmail()
  public email: string;

  @IsString()
  public password: string;

  // @ArrayContains()
  // public array: Array;
}
