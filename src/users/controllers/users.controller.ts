import { Controller, Get, Post, Param, Body, Delete, Put } from '@nestjs/common';
import { ApiUseTags, ApiResponse, ApiOperation } from '@nestjs/swagger';
import { UserIdRequestParamsDto } from '../dtos/common.dto';
import { UserDto } from '../dtos/common.dto';
import { UsersService } from '../services/users.service';

@Controller('users')
@ApiUseTags('Users')
export class UsersController {
  constructor(private readonly usersService: UsersService) { }

  /* Create User */
  /*--------------------------------------------*/
  @ApiOperation({ title: 'Create User' })
  @ApiResponse({ status: 200, description: 'Create User.' })
  @Post()
  async create(@Body() userDto: UserDto): Promise<UserDto> {
    return this.usersService.createUser(userDto);
  }

  /* Update User */
  /*--------------------------------------------*/
  @ApiOperation({ title: 'Update User' })
  @ApiResponse({ status: 200, description: 'Update User.' })
  @Put(':user_id')
  async update(@Param() userId: UserIdRequestParamsDto, @Body() userDto: Partial<UserDto>) {
    return this.usersService.updateUser(userDto);
  }

  /* Delete User */
  /*--------------------------------------------*/
  @ApiOperation({ title: 'Delete User' })
  @ApiResponse({ status: 200, description: 'Delete User.' })
  @Delete(':user_id')
  async delete(@Param() userId: UserIdRequestParamsDto) {
    return this.usersService.deleteUser(userId);
  }

  /* List Users */
  /*--------------------------------------------*/
  @ApiOperation({ title: 'List Users' })
  @ApiResponse({ status: 200, description: 'List Users.' })
  @Get()
  async find(@Param() param) {
    return this.usersService.findUsers(param);
  }

  /* Find User */
  /*--------------------------------------------*/
  @ApiOperation({ title: 'Get User' })
  @ApiResponse({ status: 200, description: 'Get User.' })
  @Get(':user_id')
  async findOne(@Param() userId: UserIdRequestParamsDto) {
    return this.usersService.findUsers(userId);
  }
}
