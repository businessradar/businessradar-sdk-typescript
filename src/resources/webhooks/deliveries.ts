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
   * List deliveries newest first.
   *
   * The default cursor pagination ignores the queryset ordering and applies its own
   * `ordering` attribute, so set it on the paginator here. The `-id` tiebreaker
   * keeps cursor paging stable when deliveries share a `created_at` timestamp.
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
   * - `compliance_check.results.new` - Compliance Check Results New
   * - `company_registration.status_changed` - Company Registration Status Changed
   * - `company_registration.status_registered` - Company Registration Status
   *   Registered
   * - `company.updated` - Company Updated
   */
  event_type?:
    | 'compliance_check.status_changed'
    | 'compliance_check.status_completed'
    | 'compliance_check.results.new'
    | 'company_registration.status_changed'
    | 'company_registration.status_registered'
    | 'company.updated';
}

export declare namespace Deliveries {
  export { type DeliveryListParams as DeliveryListParams, type DeliveryTestParams as DeliveryTestParams };
}

export { type WebhookDeliveriesNextKey };
