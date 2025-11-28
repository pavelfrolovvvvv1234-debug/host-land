import { IsString, IsObject, MinLength, MaxLength } from 'class-validator';

export class CreateServerDto {
  @IsString()
  @MinLength(1)
  @MaxLength(100)
  name: string;

  @IsObject()
  specs: {
    cpu?: number;
    ram?: number;
    disk?: number;
    [key: string]: any;
  };
}

