import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
} from '@nestjs/common';
import { Todo } from './todo.entity';
import { TodosService } from './todos.service';

@Controller('todos')
export class TodosController {
  constructor(private readonly todosService: TodosService) {}

  @Get()
  getAll(): Promise<Todo[]> {
    return this.todosService.findAll();
  }

  @Post()
  create(@Body() body: { title: string; content?: string }): Promise<Todo> {
    return this.todosService.create(body);
  }

  @Patch(':id')
  update(
    @Param('id', ParseIntPipe) id: number, // Convertit automatiquement la chaîne en nombre
    @Body() body: Partial<Todo>,
  ): Promise<Todo> {
    return this.todosService.update(id, body);
  }

  @Delete(':id')
  delete(@Param('id', ParseIntPipe) id: number): Promise<{ deleted: boolean }> {
    return this.todosService.remove(id);
  }
}
