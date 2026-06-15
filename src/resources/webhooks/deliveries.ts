// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as WebhooksAPI from './webhooks';
import { WebhookDeliveriesNextKey } from './webhooks';
import { APIPromise } from '../../core/api-promise';
import { NextKey, type NextKeyParams, PagePromise } from '../../core/pagination';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Deliveries extends APIResource {
  /**
   * List delivery history for a specific webhook.
   */
  list(
    webhookExternalID: string,
    query: DeliveryListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<WebhookDeliveriesNextKey, WebhooksAPI.WebhookDelivery> {
    return this._client.getAPIList(
      path`/ext/v3/webhooks/${webhookExternalID}/deliveries/`,
      NextKey<WebhooksAPI.WebhookDelivery>,
      { query, ...options },
    );
  }

  /**
   * Queue a synthetic test event by creating a pending WebhookDelivery.
   */
  test(
    webhookExternalID: string,
    body: DeliveryTestParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<WebhooksAPI.WebhookDelivery> {
    return this._client.post(path`/ext/v3/webhooks/${webhookExternalID}/deliveries/test/`, {
      body,
      ...options,
    });
  }
}

export interface DeliveryListParams extends NextKeyParams {}

export interface DeliveryTestParams {
  /**
   * - `compliance_check.status_changed` - Compliance Check Status Changed
   * - `compliance_check.status_completed` - Compliance Check Status Completed
   * - `company_registration.status_changed` - Company Registration Status Changed
   * - `company_registration.status_registered` - Company Registration Status
   *   Registered
   */
  event_type?:
    | 'compliance_check.status_changed'
    | 'compliance_check.status_completed'
    | 'company_registration.status_changed'
    | 'company_registration.status_registered';
}

export declare namespace Deliveries {
  export { type DeliveryListParams as DeliveryListParams, type DeliveryTestParams as DeliveryTestParams };
}

export { type WebhookDeliveriesNextKey };
