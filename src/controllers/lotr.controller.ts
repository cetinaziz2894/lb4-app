// Uncomment these imports to begin using these cool features!

import {inject} from '@loopback/core';
import {get} from '@loopback/rest';
import {Lotr} from '../services';
// import {inject} from '@loopback/core';

// @authenticate('jwt')
export class LotrController {
  constructor(
    @inject('services.Lotr')
    protected lotrService: Lotr,
  ) { }

  @get('/character')
  async getStarWarCharacter(
  ): Promise<object> {
    let data = await this.lotrService.getCharacter();
    return JSON.parse(JSON.stringify(data)).body.docs;
  }
}
