import {inject} from '@loopback/core';
import {juggler} from '@loopback/repository';
import * as config from './traveldb.datasource.json';

export class TraveldbDataSource extends juggler.DataSource {
  static dataSourceName = 'traveldb';

  constructor(
    @inject('datasources.config.traveldb', {optional: true})
    dsConfig: object = config,
  ) {
    super(dsConfig);
  }
}
