import {inject, lifeCycleObserver, LifeCycleObserver} from '@loopback/core';
import {juggler} from '@loopback/repository';

const config = {
  name: 'lotr',
  connector: 'rest',
  baseURL: 'https://the-one-api.dev/v2/',
  crud: false,
  "options": {
    "headers": {
      "accept": "application/json",
      "Authorization": "Bearer F6GdG8G_eHoQQKKNRtxc",
      "X-RateLimit-Limit": 5000,
      "content-type": "application/json"
    }
  },
  "operations": [
    {
      "template": {
        "method": "GET",
        "fullResponse": true,
        "url": "https://the-one-api.dev/v2/character"
      },
      "functions": {
        "getCharacter": []
      }
    }
  ]
};



// Observe application's life cycle to disconnect the datasource when
// application is stopped. This allows the application to be shut down
// gracefully. The `stop()` method is inherited from `juggler.DataSource`.
// Learn more at https://loopback.io/doc/en/lb4/Life-cycle.html
@lifeCycleObserver('datasource')
export class LotrDataSource extends juggler.DataSource
  implements LifeCycleObserver {
  static dataSourceName = 'lotr';
  static readonly defaultConfig = config;

  constructor(
    @inject('datasources.config.lotr', {optional: true})
    dsConfig: object = config,
  ) {
    super(dsConfig);
  }
}
