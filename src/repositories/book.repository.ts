import {DefaultCrudRepository} from '@loopback/repository';
import {Book, BookRelations} from '../models';
import {MysqlDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class BookRepository extends DefaultCrudRepository<
  Book,
  typeof Book.prototype.title,
  BookRelations
> {
  constructor(
    @inject('datasources.mysql') dataSource: MysqlDataSource,
  ) {
    super(Book, dataSource);
  }
}
