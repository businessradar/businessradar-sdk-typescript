// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import type { BusinessRadar } from '../client';

export abstract class APIResource {
  protected _client: BusinessRadar;

  constructor(client: BusinessRadar) {
    this._client = client;
  }
}
