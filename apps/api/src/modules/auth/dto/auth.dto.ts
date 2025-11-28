import { IsEmail, IsString, MinLength, IsOptional } from 'class-validator';

export class LoginDto {
  @IsEmail()
  email: string;

  @IsString()
  @MinLength(8)
  password: string;
}

export class RegisterDto {
  @IsEmail()
  email: string;

  @IsString()
  @MinLength(8)
  password: string;

  @IsOptional()
  @IsString()
  firstName?: string;

  @IsOptional()
  @IsString()
  lastName?: string;
}

export class RefreshTokenDto {
  @IsString()
  refreshToken: string;
}

export class EnableTwoFactorDto {
  @IsString()
  token: string;
}

export class VerifyTwoFactorDto {
  @IsString()
  token: string;
}

