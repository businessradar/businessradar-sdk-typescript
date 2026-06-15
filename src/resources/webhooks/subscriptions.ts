// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as WebhooksAPI from './webhooks';
import { WebhookSubscriptionsNextKey } from './webhooks';
import { APIPromise } from '../../core/api-promise';
import { NextKey, type NextKeyParams, PagePromise } from '../../core/pagination';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Subscriptions extends APIResource {
  /**
   * List and add subscriptions on a specific webhook.
   */
  create(
    webhookExternalID: string,
    body: SubscriptionCreateParams,
    options?: RequestOptions,
  ): APIPromise<WebhooksAPI.WebhookSubscription> {
    return this._client.post(path`/ext/v3/webhooks/${webhookExternalID}/subscriptions/`, {
      body,
      ...options,
    });
  }

  /**
   * List and add subscriptions on a specific webhook.
   */
  list(
    webhookExternalID: string,
    query: SubscriptionListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<WebhookSubscriptionsNextKey, WebhooksAPI.WebhookSubscription> {
    return this._client.getAPIList(
      path`/ext/v3/webhooks/${webhookExternalID}/subscriptions/`,
      NextKey<WebhooksAPI.WebhookSubscription>,
      { query, ...options },
    );
  }

  /**
   * Remove a single subscription from a webhook.
   */
  delete(
    subscriptionExternalID: string,
    params: SubscriptionDeleteParams,
    options?: RequestOptions,
  ): APIPromise<void> {
    const { webhook_external_id } = params;
    return this._client.delete(
      path`/ext/v3/webhooks/${webhook_external_id}/subscriptions/${subscriptionExternalID}/`,
      { ...options, headers: buildHeaders([{ Accept: '*/*' }, options?.headers]) },
    );
  }
}

export interface SubscriptionCreateParams {
  /**
   * - `compliance_check.status_changed` - Compliance Check Status Changed
   * - `compliance_check.status_completed` - Compliance Check Status Completed
   * - `company_registration.status_changed` - Company Registration Status Changed
   * - `company_registration.status_registered` - Company Registration Status
   *   Registered
   */
  event_type:
    | 'compliance_check.status_changed'
    | 'compliance_check.status_completed'
    | 'company_registration.status_changed'
    | 'company_registration.status_registered';
}

export interface SubscriptionListParams extends NextKeyParams {}

export interface SubscriptionDeleteParams {
  webhook_external_id: string;
}

export declare namespace Subscriptions {
  export {
    type SubscriptionCreateParams as SubscriptionCreateParams,
    type SubscriptionListParams as SubscriptionListParams,
    type SubscriptionDeleteParams as SubscriptionDeleteParams,
  };
}

export { type WebhookSubscriptionsNextKey };
