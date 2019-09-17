import { Entity } from '@loopback/repository';
export declare class Book extends Entity {
    title?: string;
    author?: string;
    id?: number;
    constructor(data?: Partial<Book>);
}
export interface BookRelations {
}
export declare type BookWithRelations = Book & BookRelations;
