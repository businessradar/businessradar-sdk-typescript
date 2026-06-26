// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as DeliveriesAPI from './deliveries';
import { Deliveries, DeliveryListParams, DeliveryTestParams } from './deliveries';
import * as SubscriptionsAPI from './subscriptions';
import {
  SubscriptionCreateParams,
  SubscriptionDeleteParams,
  SubscriptionListParams,
  Subscriptions,
} from './subscriptions';
import { APIPromise } from '../../core/api-promise';
import { NextKey, type NextKeyParams, PagePromise } from '../../core/pagination';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Webhooks extends APIResource {
  deliveries: DeliveriesAPI.Deliveries = new DeliveriesAPI.Deliveries(this._client);
  subscriptions: SubscriptionsAPI.Subscriptions = new SubscriptionsAPI.Subscriptions(this._client);

  /**
   * List and create webhooks for the active profile.
   */
  create(body: WebhookCreateParams, options?: RequestOptions): APIPromise<Webhook> {
    return this._client.post('/ext/v3/webhooks/', { body, ...options });
  }

  /**
   * Retrieve, update, or delete a single webhook.
   */
  retrieve(webhookExternalID: string, options?: RequestOptions): APIPromise<Webhook> {
    return this._client.get(path`/ext/v3/webhooks/${webhookExternalID}/`, options);
  }

  /**
   * Retrieve, update, or delete a single webhook.
   */
  update(
    webhookExternalID: string,
    body: WebhookUpdateParams,
    options?: RequestOptions,
  ): APIPromise<Webhook> {
    return this._client.put(path`/ext/v3/webhooks/${webhookExternalID}/`, { body, ...options });
  }

  /**
   * List and create webhooks for the active profile.
   */
  list(
    query: WebhookListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<WebhooksNextKey, Webhook> {
    return this._client.getAPIList('/ext/v3/webhooks/', NextKey<Webhook>, { query, ...options });
  }

  /**
   * Retrieve, update, or delete a single webhook.
   */
  delete(webhookExternalID: string, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/ext/v3/webhooks/${webhookExternalID}/`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Retrieve, update, or delete a single webhook.
   */
  partialUpdate(
    webhookExternalID: string,
    body: WebhookPartialUpdateParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<Webhook> {
    return this._client.patch(path`/ext/v3/webhooks/${webhookExternalID}/`, { body, ...options });
  }

  /**
   * Rotate the secret. The new value is returned once and never shown again.
   */
  regenerateSecret(
    webhookExternalID: string,
    options?: RequestOptions,
  ): APIPromise<WebhookRegenerateSecretResponse> {
    return this._client.post(path`/ext/v3/webhooks/${webhookExternalID}/regenerate_secret/`, options);
  }

  /**
   * Return all available webhook event types.
   */
  retrieveEventTypes(options?: RequestOptions): APIPromise<void> {
    return this._client.get('/ext/v3/webhooks/event_types/', {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export type WebhooksNextKey = NextKey<Webhook>;

export type WebhookDeliveriesNextKey = NextKey<WebhookDelivery>;

export type WebhookSubscriptionsNextKey = NextKey<WebhookSubscription>;

export interface Webhook {
  created_at: string;

  external_id: string;

  subscriptions: Array<WebhookSubscription>;

  updated_at: string;

  url: string;

  enabled?: boolean;
}

export interface WebhookDelivery {
  attempt_count: number;

  created_at: string;

  data: unknown;

  error_details: string | null;

  external_id: string;

  /**
   * - `pending` - Pending
   * - `in_progress` - In Progress
   * - `completed` - Completed
   * - `failed` - Failed
   */
  status: WebhookDeliveryStatusEnum;

  updated_at: string;
}

/**
 * - `pending` - Pending
 * - `in_progress` - In Progress
 * - `completed` - Completed
 * - `failed` - Failed
 */
export type WebhookDeliveryStatusEnum = 'pending' | 'in_progress' | 'completed' | 'failed';

export interface WebhookSubscription {
  /**
   * - `compliance_check.status_changed` - Compliance Check Status Changed
   * - `compliance_check.status_completed` - Compliance Check Status Completed
   * - `compliance_check.results.new` - Compliance Check Results New
   * - `company_registration.status_changed` - Company Registration Status Changed
   * - `company_registration.status_registered` - Company Registration Status
   *   Registered
   * - `company.updated` - Company Updated
   */
  event_type:
    | 'compliance_check.status_changed'
    | 'compliance_check.status_completed'
    | 'compliance_check.results.new'
    | 'company_registration.status_changed'
    | 'company_registration.status_registered'
    | 'company.updated';

  external_id: string;

  /**
   * Portfolio external_id. Required for portfolio-scoped events (e.g.
   * company.updated); must be omitted for all other events.
   */
  portfolio?: string | null;
}

export interface WebhookSubscriptionRequest {
  /**
   * - `compliance_check.status_changed` - Compliance Check Status Changed
   * - `compliance_check.status_completed` - Compliance Check Status Completed
   * - `compliance_check.results.new` - Compliance Check Results New
   * - `company_registration.status_changed` - Company Registration Status Changed
   * - `company_registration.status_registered` - Company Registration Status
   *   Registered
   * - `company.updated` - Company Updated
   */
  event_type:
    | 'compliance_check.status_changed'
    | 'compliance_check.status_completed'
    | 'compliance_check.results.new'
    | 'company_registration.status_changed'
    | 'company_registration.status_registered'
    | 'company.updated';

  /**
   * Portfolio external_id. Required for portfolio-scoped events (e.g.
   * company.updated); must be omitted for all other events.
   */
  portfolio?: string | null;
}

export interface WebhookRegenerateSecretResponse {
  secret: string;
}

export interface WebhookCreateParams {
  subscriptions: Array<WebhookSubscriptionRequest>;

  url: string;

  enabled?: boolean;
}

export interface WebhookUpdateParams {
  subscriptions: Array<WebhookSubscriptionRequest>;

  url: string;

  enabled?: boolean;
}

export interface WebhookListParams extends NextKeyParams {}

export interface WebhookPartialUpdateParams {
  enabled?: boolean;

  subscriptions?: Array<WebhookSubscriptionRequest>;

  url?: string;
}

Webhooks.Deliveries = Deliveries;
Webhooks.Subscriptions = Subscriptions;

export declare namespace Webhooks {
  export {
    type Webhook as Webhook,
    type WebhookDelivery as WebhookDelivery,
    type WebhookDeliveryStatusEnum as WebhookDeliveryStatusEnum,
    type WebhookSubscription as WebhookSubscription,
    type WebhookSubscriptionRequest as WebhookSubscriptionRequest,
    type WebhookRegenerateSecretResponse as WebhookRegenerateSecretResponse,
    type WebhooksNextKey as WebhooksNextKey,
    type WebhookCreateParams as WebhookCreateParams,
    type WebhookUpdateParams as WebhookUpdateParams,
    type WebhookListParams as WebhookListParams,
    type WebhookPartialUpdateParams as WebhookPartialUpdateParams,
  };

  export {
    Deliveries as Deliveries,
    type DeliveryListParams as DeliveryListParams,
    type DeliveryTestParams as DeliveryTestParams,
  };

  export {
    Subscriptions as Subscriptions,
    type SubscriptionCreateParams as SubscriptionCreateParams,
    type SubscriptionListParams as SubscriptionListParams,
    type SubscriptionDeleteParams as SubscriptionDeleteParams,
  };
}
