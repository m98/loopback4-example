import { DefaultCrudRepository, BelongsToAccessor, repository } from '@loopback/repository';
import { Story, StoryRelations, User } from '../models';
import { TraveldbDataSource } from '../datasources';
import { inject, Getter } from '@loopback/core';
import { UserRepository } from '.';

export class StoryRepository extends DefaultCrudRepository<
  Story,
  typeof Story.prototype.id,
  StoryRelations
  > {
  public readonly user: BelongsToAccessor<
    User,
    typeof User.prototype.id
  >;

  constructor(
    @inject('datasources.traveldb') dataSource: TraveldbDataSource,
    @repository.getter('UserRepository')
    userRepositoryGetter: Getter<UserRepository>,
  ) {
    super(Story, dataSource);
    this.user = this.createBelongsToAccessorFor(
      'user',
      userRepositoryGetter,
    );
  }
}
