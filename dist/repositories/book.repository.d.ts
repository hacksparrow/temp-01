import { DefaultCrudRepository } from '@loopback/repository';
import { Book, BookRelations } from '../models';
import { MysqlDataSource } from '../datasources';
export declare class BookRepository extends DefaultCrudRepository<Book, typeof Book.prototype.title, BookRelations> {
    constructor(dataSource: MysqlDataSource);
}
