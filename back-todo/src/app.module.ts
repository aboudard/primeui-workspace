import { Module } from '@nestjs/common';
import { createObserveModule } from '@nestjs/observe';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller.js';
import { AppService } from './app.service.js';
import { Todo } from './features/todo/todo.entity.js';
import { TodosModule } from './features/todo/todo.module.js';

export const { ObserveModule, ObserveInstrument } = createObserveModule();

@Module({
  imports: [
    // Distributed tracing, auto-correlated logs, request/job metrics, error
    // telemetry, alarms, and more — out of the box. Sign up at https://observe.nestjs.com
    ObserveModule.forRoot({
      appKey: '8lS8YOCFaWa6sm3i',
      appSecret: '7TxWyB2JjbwUAG2lS2t3GtuAJ&WcsHeyDpd6Emo6RXC3!',
      serviceId: 'todo-backend',
    }),
    TypeOrmModule.forRoot({
      type: 'better-sqlite3',
      database: ':memory:', // Base de données volatile en mémoire
      entities: [Todo],
      synchronize: true, // Crée les tables automatiquement
      logging: false,
    }),
    TodosModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
