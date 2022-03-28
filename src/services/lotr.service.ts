import {inject, Provider} from '@loopback/core';
import {getService} from '@loopback/service-proxy';
import {LotrDataSource} from '../datasources';

export interface Lotr {
  // this is where you define the Node.js methods that will be
  // mapped to REST/SOAP/gRPC operations as stated in the datasource
  // json file.
  getCharacter(): Promise<object>;
}

export class LotrProvider implements Provider<Lotr> {
  constructor(
    // lotr must match the name property in the datasource json file
    @inject('datasources.lotr')
    protected dataSource: LotrDataSource = new LotrDataSource(),
  ) { }

  value(): Promise<Lotr> {
    return getService(this.dataSource);
  }
}
