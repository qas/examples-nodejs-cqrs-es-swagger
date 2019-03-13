import { IsString } from 'class-validator';

export class UserIdRequestParamsDto {
  @IsString()
  readonly user_id!: string;
}

export class UserDto {
  @IsString()
  readonly id!: string;
  @IsString()
  readonly name!: string;
}