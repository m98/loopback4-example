import { Entity, model, property, belongsTo } from '@loopback/repository';
import { User, UserWithRelations } from './user.model';

@model({ settings: { strict: false } })
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


  @belongsTo(() => User, { keyTo: 'id' })
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
  user?: UserWithRelations;
}

export type StoryWithRelations = Story & StoryRelations;
