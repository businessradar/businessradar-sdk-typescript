// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class Compliance extends APIResource {
  /**
   * Create a new compliance check.
   */
  create(
    body: ComplianceCreateParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ComplianceCreateResponse> {
    return this._client.post('/ext/v3/compliance', { body, ...options });
  }

  /**
   * Get compliance check details.
   */
  retrieve(externalID: string, options?: RequestOptions): APIPromise<ComplianceRetrieveResponse> {
    return this._client.get(path`/ext/v3/compliance/${externalID}`, options);
  }
}

/**
 * - `low` - Low
 * - `medium` - Medium
 * - `high` - High
 */
export type ComplianceCheckScoreEnum = 'low' | 'medium' | 'high';

/**
 * Compliance check create serializer.
 */
export interface ComplianceCreateResponse {
  external_id: string;
}

export interface ComplianceRetrieveResponse {
  entities: Array<ComplianceRetrieveResponse.Entity>;

  external_id: string;

  progress: number;

  activity_score?: 'low' | 'medium' | 'high' | '' | null;

  adverse_media_score?: 'low' | 'medium' | 'high' | '' | null;

  compliance_score?: 'low' | 'medium' | 'high' | '' | null;

  country_score?: 'low' | 'medium' | 'high' | '' | null;

  pep_score?: 'low' | 'medium' | 'high' | '' | null;

  sanction_score?: 'low' | 'medium' | 'high' | '' | null;

  /**
   * - `pending` - Pending
   * - `queued` - Queued
   * - `in_progress` - In Progress
   * - `searching_directors` - Searching Directors
   * - `completed` - Completed
   * - `failed` - Failed
   */
  status?: 'pending' | 'queued' | 'in_progress' | 'searching_directors' | 'completed' | 'failed';
}

export namespace ComplianceRetrieveResponse {
  export interface Entity {
    /**
     * - `ubo` - Ultimate Beneficial Owner
     * - `director` - Director
     * - `company` - Company
     * - `manually_added` - Manually added
     */
    entity_role: 'ubo' | 'director' | 'company' | 'manually_added';

    /**
     * - `individual` - Individual
     * - `company` - Company
     */
    entity_type: 'individual' | 'company';

    external_id: string;

    name: string;

    /**
     * - `on_hold` - On Hold
     * - `queued` - Queued
     * - `in_progress` - In Progress
     * - `completed` - Completed
     * - `skipped` - Skipped
     * - `failed` - Failed
     */
    status: 'on_hold' | 'queued' | 'in_progress' | 'completed' | 'skipped' | 'failed';

    ubo: Entity.Ubo | null;

    country?: string | null;

    gender?: 'male' | 'female' | '' | null;
  }

  export namespace Entity {
    export interface Ubo {
      name: string;

      beneficial_ownership_percentage?: number | null;

      birth_date?: string | null;

      degree_of_separation?: number | null;

      direct_ownership_percentage?: number | null;

      implied_beneficial_ownership_percentage?: number | null;

      implied_direct_ownership_percentage?: number | null;

      implied_indirect_ownership_percentage?: number | null;

      indirect_ownership_percentage?: number | null;

      is_beneficiary?: boolean | null;

      is_person_with_significant_control?: boolean | null;
    }
  }
}

export interface ComplianceCreateParams {
  /**
   * If enabled all found entities UBOs, directors, shareholders will be screened.
   * This can have an high cost impact.
   */
  all_entities_screening_enabled?: boolean;

  company_id?: string | null;

  /**
   * If directors should be screened.
   */
  directors_screening_enabled?: boolean;

  entities?: Array<ComplianceCreateParams.Entity>;

  /**
   * The threshold for ultimate ownership to enable for screening.
   */
  ownership_screening_threshold?: number | null;
}

export namespace ComplianceCreateParams {
  /**
   * Compliance entity request serializer.
   */
  export interface Entity {
    name: string;

    country?: string | null;

    date_of_birth?: string | null;

    /**
     * - `individual` - Individual
     * - `company` - Company
     */
    entity_type?: 'individual' | 'company';

    first_name?: string | null;

    last_name?: string | null;

    middle_name?: string | null;
  }
}

export declare namespace Compliance {
  export {
    type ComplianceCheckScoreEnum as ComplianceCheckScoreEnum,
    type ComplianceCreateResponse as ComplianceCreateResponse,
    type ComplianceRetrieveResponse as ComplianceRetrieveResponse,
    type ComplianceCreateParams as ComplianceCreateParams,
  };
}
