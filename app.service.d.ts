import { OnModuleInit } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Todo } from './src/todo.entity.js';
export declare class AppService implements OnModuleInit {
    private readonly todoRepository;
    constructor(todoRepository: Repository<Todo>);
    onModuleInit(): Promise<void>;
    getTodos(): Promise<Todo[]>;
}
