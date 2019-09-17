import { Count, Filter, Where } from '@loopback/repository';
import { Book } from '../models';
import { BookRepository } from '../repositories';
export declare class BookController {
    bookRepository: BookRepository;
    constructor(bookRepository: BookRepository);
    create(book: Omit<Book, 'id'>): Promise<Book>;
    count(where?: Where<Book>): Promise<Count>;
    find(filter?: Filter<Book>): Promise<Book[]>;
    updateAll(book: Book, where?: Where<Book>): Promise<Count>;
    findById(id: number): Promise<Book>;
    updateById(id: number, book: Book): Promise<void>;
    replaceById(id: number, book: Book): Promise<void>;
    deleteById(id: number): Promise<void>;
}
