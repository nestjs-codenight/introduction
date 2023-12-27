import {
  ArgumentMetadata,
  BadRequestException,
  Injectable,
  PipeTransform,
} from "@nestjs/common";

@Injectable()
export class EmailValidationPipe implements PipeTransform {
  transform(value: any) {
    console.log(value);

    const emailRegexp =
      /^[a-zA-Z0-9_.]{3,30}@[a-zA-Z0-9]{2,30}\.[a-zA-Z]{2,20}$/;
    console.log(emailRegexp.test(value));
    if (emailRegexp.test(value)) return value;
    throw new BadRequestException("invalid email format");
  }
}
