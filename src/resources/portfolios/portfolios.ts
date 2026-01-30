// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as CompaniesAPI from './companies';
import {
  Companies,
  CompanyCreateParams,
  CompanyDeleteParams,
  CompanyListParams,
  CompanyListResponse,
  CompanyListResponsesNextKey,
} from './companies';
import { APIPromise } from '../../core/api-promise';
import { NextKey, type NextKeyParams, PagePromise } from '../../core/pagination';
import { RequestOptions } from '../../internal/request-options';

export class Portfolios extends APIResource {
  companies: CompaniesAPI.Companies = new CompaniesAPI.Companies(this._client);

  /**
   * ### Portfolios
   *
   * Manage collections of companies. This view allows you to list existing
   * portfolios associated with your profile or create new ones.
   */
  create(body: PortfolioCreateParams, options?: RequestOptions): APIPromise<Portfolio> {
    return this._client.post('/ext/v3/portfolios', { body, ...options });
  }

  /**
   * ### Portfolios
   *
   * Manage collections of companies. This view allows you to list existing
   * portfolios associated with your profile or create new ones.
   */
  list(
    query: PortfolioListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<PortfoliosNextKey, Portfolio> {
    return this._client.getAPIList('/ext/v3/portfolios', NextKey<Portfolio>, { query, ...options });
  }
}

export type PortfoliosNextKey = NextKey<Portfolio>;

/**
 * - `view_only` - Only Viewing Access
 * - `write` - View and Write Access
 * - `admin` - View, Write and Admin Access
 * - `owner` - Portfolio Owner
 */
export type PermissionEnum = 'view_only' | 'write' | 'admin' | 'owner';

/**
 * ### Portfolio
 *
 * Represents a collection of companies (a portfolio) managed by a user or profile.
 * Includes basic metadata and default permission settings.
 */
export interface Portfolio {
  external_id: string;

  name: string;

  /**
   * Customer reference for the client to understand relationship.
   */
  customer_reference?: string | null;

  /**
   * Default permission for all users in organization.
   *
   * - `view_only` - Only Viewing Access
   * - `write` - View and Write Access
   * - `admin` - View, Write and Admin Access
   * - `owner` - Portfolio Owner
   */
  default_permission?: 'view_only' | 'write' | 'admin' | 'owner' | '' | null;
}

export interface PortfolioCreateParams {
  name: string;

  /**
   * Customer reference for the client to understand relationship.
   */
  customer_reference?: string | null;

  /**
   * Default permission for all users in organization.
   *
   * - `view_only` - Only Viewing Access
   * - `write` - View and Write Access
   * - `admin` - View, Write and Admin Access
   * - `owner` - Portfolio Owner
   */
  default_permission?: 'view_only' | 'write' | 'admin' | 'owner' | '' | null;
}

export interface PortfolioListParams extends NextKeyParams {}

Portfolios.Companies = Companies;

export declare namespace Portfolios {
  export {
    type PermissionEnum as PermissionEnum,
    type Portfolio as Portfolio,
    type PortfoliosNextKey as PortfoliosNextKey,
    type PortfolioCreateParams as PortfolioCreateParams,
    type PortfolioListParams as PortfolioListParams,
  };

  export {
    Companies as Companies,
    type CompanyListResponse as CompanyListResponse,
    type CompanyListResponsesNextKey as CompanyListResponsesNextKey,
    type CompanyCreateParams as CompanyCreateParams,
    type CompanyListParams as CompanyListParams,
    type CompanyDeleteParams as CompanyDeleteParams,
  };
}
