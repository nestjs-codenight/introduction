import {IsEmail, IsNumber, IsString, Length} from "class-validator";

export class CreateUserDto {
  @IsNumber({}, {message: "this value not a number"})
  id: number;
  @IsString()
  @Length(3, 15, {message: "name should more than 3 and less than 15"})
  name: string;
  @IsString()
  @Length(5, 20, {message: "job should more than 5 and less than 20"})
  job: string;
}

export class LoginDto {
  @IsEmail({}, {message: "invalid email format"})
  email: string;
}
