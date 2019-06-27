import {Entity, model, property} from '@loopback/repository';

@model({settings: {strict: false}})
export class Story extends Entity {
  @property({
    type: 'number',
    id: true,
    required: true,
  })
  id: number;

  @property({
    type: 'string',
    required: true,
  })
  title: string;

  @property({
    type: 'string',
    required: true,
  })
  body: string;

  @property({
    type: 'string',
  })
  cover_image?: string;

  @property({
    type: 'string',
    required: true,
  })
  adventure_type: string;

  @property({
    type: 'number',
    required: true,
  })
  user_id: number;

  @property({
    type: 'date',
    required: true,
  })
  updated_at: string;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Story>) {
    super(data);
  }
}

export interface StoryRelations {
  // describe navigational properties here
}

export type StoryWithRelations = Story & StoryRelations;
