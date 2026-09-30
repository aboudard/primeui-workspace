import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Todo } from './todo.entity';

@Injectable()
export class TodosService {
  constructor(
    @InjectRepository(Todo)
    private readonly todoRepository: Repository<Todo>,
  ) {}

  findAll(): Promise<Todo[]> {
    return this.todoRepository.find();
  }

  create(todoData: Partial<Todo>): Promise<Todo> {
    const newTodo = this.todoRepository.create(todoData);
    return this.todoRepository.save(newTodo);
  }

  async update(id: number, updateData: Partial<Todo>): Promise<Todo> {
    // 1. On cherche si le Todo existe
    const todo = await this.todoRepository.findOneBy({ id });
    if (!todo) {
      throw new NotFoundException(`Le Todo avec l'id #${id} n'existe pas.`);
    }

    // 2. On fusionne les modifications et on sauvegarde
    Object.assign(todo, updateData);
    return this.todoRepository.save(todo);
  }

  async remove(id: number): Promise<{ deleted: boolean }> {
    // On supprime directement par ID
    const result = await this.todoRepository.delete(id);

    // Si aucune ligne n'a été affectée, c'est que l'ID n'existait pas
    if (result.affected === 0) {
      throw new NotFoundException(`Le Todo avec l'id #${id} n'existe pas.`);
    }

    return { deleted: true };
  }
}
