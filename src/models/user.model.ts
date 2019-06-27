import {Entity, model, property} from '@loopback/repository';

@model({settings: {strict: false}})
export class User extends Entity {
  @property({
    type: 'number',
    id: true,
    required: true,
  })
  id: number;

  @property({
    type: 'string',
  })
  fullname?: string;

  @property({
    type: 'number',
  })
  country_id?: number;

  @property({
    type: 'string',
  })
  about?: string;

  @property({
    type: 'string',
  })
  profile_picture_url?: string;

  @property({
    type: 'string',
    required: true,
  })
  username: string;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<User>) {
    super(data);
  }
}

export interface UserRelations {
  // describe navigational properties here
}

export type UserWithRelations = User & UserRelations;
