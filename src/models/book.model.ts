import {Entity, model, property} from '@loopback/repository';

@model({settings: {}})
export class Book extends Entity {
  @property({
    type: 'string',
  })
  title?: string;

  @property({
    type: 'string',
  })
  author?: string;

  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  id?: number;


  constructor(data?: Partial<Book>) {
    super(data);
  }
}

export interface BookRelations {
  // describe navigational properties here
}

export type BookWithRelations = Book & BookRelations;
