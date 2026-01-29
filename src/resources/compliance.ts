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
   * Get compliance check results.
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

    results: Array<Entity.Result>;

    ubo: Entity.Ubo | null;

    country?: string | null;
  }

  export namespace Entity {
    /**
     * Compliance entity result serializer.
     */
    export interface Result {
      addresses: Array<Result.Address>;

      created_at: string;

      external_id: string;

      name: string;

      /**
       * - `sanction` - Sanction
       * - `pep` - Politically Exposed Person
       * - `adverse_media` - Adverse media
       * - `enforcement` - Enforcement
       * - `govt_owned` - Government owned
       */
      result_type: 'sanction' | 'pep' | 'adverse_media' | 'enforcement' | 'govt_owned';

      sources: Array<Result.Source>;

      tags: Array<Result.Tag>;

      confidence?: number | null;

      formatted_text?: string | null;

      formatted_text_en?: string | null;

      formatted_title?: string | null;

      formatted_title_en?: string | null;

      image?: string | null;

      language?:
        | 'af'
        | 'ar'
        | 'az'
        | 'bg'
        | 'be'
        | 'bn'
        | 'br'
        | 'bs'
        | 'ca'
        | 'cs'
        | 'cy'
        | 'da'
        | 'de'
        | 'el'
        | 'en'
        | 'eo'
        | 'es'
        | 'et'
        | 'eu'
        | 'fa'
        | 'fi'
        | 'fr'
        | 'fy'
        | 'ga'
        | 'gd'
        | 'gl'
        | 'he'
        | 'hi'
        | 'hr'
        | 'hu'
        | 'hy'
        | 'ia'
        | 'id'
        | 'ig'
        | 'io'
        | 'is'
        | 'it'
        | 'ja'
        | 'ka'
        | 'kk'
        | 'km'
        | 'no'
        | 'kn'
        | 'ko'
        | 'ky'
        | 'lb'
        | 'lt'
        | 'lv'
        | 'mk'
        | 'ml'
        | 'mn'
        | 'mr'
        | 'my'
        | 'ne'
        | 'nl'
        | 'os'
        | 'pa'
        | 'pl'
        | 'pt'
        | 'ro'
        | 'ru'
        | 'sk'
        | 'sl'
        | 'sq'
        | 'sr'
        | 'sv'
        | 'sw'
        | 'ta'
        | 'te'
        | 'tg'
        | 'th'
        | 'tk'
        | 'tr'
        | 'tt'
        | 'uk'
        | 'ur'
        | 'uz'
        | 'vi'
        | 'zh'
        | ''
        | null;

      source_date?: string | null;

      source_name?: string | null;

      text?: string | null;

      text_en?: string | null;

      title?: string | null;

      title_en?: string | null;

      url?: string | null;
    }

    export namespace Result {
      /**
       * Compliance entity result address serializer.
       */
      export interface Address {
        city?: string | null;

        country?:
          | 'AF'
          | 'AX'
          | 'AL'
          | 'DZ'
          | 'AS'
          | 'AD'
          | 'AO'
          | 'AI'
          | 'AQ'
          | 'AG'
          | 'AR'
          | 'AM'
          | 'AW'
          | 'AU'
          | 'AT'
          | 'AZ'
          | 'BS'
          | 'BH'
          | 'BD'
          | 'BB'
          | 'BY'
          | 'BE'
          | 'BZ'
          | 'BJ'
          | 'BM'
          | 'BT'
          | 'BO'
          | 'BQ'
          | 'BA'
          | 'BW'
          | 'BV'
          | 'BR'
          | 'IO'
          | 'BN'
          | 'BG'
          | 'BF'
          | 'BI'
          | 'CV'
          | 'KH'
          | 'CM'
          | 'CA'
          | 'KY'
          | 'CF'
          | 'TD'
          | 'CL'
          | 'CN'
          | 'CX'
          | 'CC'
          | 'CO'
          | 'KM'
          | 'CG'
          | 'CD'
          | 'CK'
          | 'CR'
          | 'CI'
          | 'HR'
          | 'CU'
          | 'CW'
          | 'CY'
          | 'CZ'
          | 'DK'
          | 'DJ'
          | 'DM'
          | 'DO'
          | 'EC'
          | 'EG'
          | 'SV'
          | 'GQ'
          | 'ER'
          | 'EE'
          | 'SZ'
          | 'ET'
          | 'FK'
          | 'FO'
          | 'FJ'
          | 'FI'
          | 'FR'
          | 'GF'
          | 'PF'
          | 'TF'
          | 'GA'
          | 'GM'
          | 'GE'
          | 'DE'
          | 'GH'
          | 'GI'
          | 'GR'
          | 'GL'
          | 'GD'
          | 'GP'
          | 'GU'
          | 'GT'
          | 'GG'
          | 'GN'
          | 'GW'
          | 'GY'
          | 'HT'
          | 'HM'
          | 'VA'
          | 'HN'
          | 'HK'
          | 'HU'
          | 'IS'
          | 'IN'
          | 'ID'
          | 'IR'
          | 'IQ'
          | 'IE'
          | 'IM'
          | 'IL'
          | 'IT'
          | 'JM'
          | 'JP'
          | 'JE'
          | 'JO'
          | 'KZ'
          | 'KE'
          | 'KI'
          | 'KP'
          | 'KR'
          | 'KW'
          | 'KG'
          | 'LA'
          | 'LV'
          | 'LB'
          | 'LS'
          | 'LR'
          | 'LY'
          | 'LI'
          | 'LT'
          | 'LU'
          | 'MO'
          | 'MG'
          | 'MW'
          | 'MY'
          | 'MV'
          | 'ML'
          | 'MT'
          | 'MH'
          | 'MQ'
          | 'MR'
          | 'MU'
          | 'YT'
          | 'MX'
          | 'FM'
          | 'MD'
          | 'MC'
          | 'MN'
          | 'ME'
          | 'MS'
          | 'MA'
          | 'MZ'
          | 'MM'
          | 'NA'
          | 'NR'
          | 'NP'
          | 'NL'
          | 'NC'
          | 'NZ'
          | 'NI'
          | 'NE'
          | 'NG'
          | 'NU'
          | 'NF'
          | 'MK'
          | 'MP'
          | 'NO'
          | 'OM'
          | 'PK'
          | 'PW'
          | 'PS'
          | 'PA'
          | 'PG'
          | 'PY'
          | 'PE'
          | 'PH'
          | 'PN'
          | 'PL'
          | 'PT'
          | 'PR'
          | 'QA'
          | 'RE'
          | 'RO'
          | 'RU'
          | 'RW'
          | 'BL'
          | 'SH'
          | 'KN'
          | 'LC'
          | 'MF'
          | 'PM'
          | 'VC'
          | 'WS'
          | 'SM'
          | 'ST'
          | 'SA'
          | 'SN'
          | 'RS'
          | 'SC'
          | 'SL'
          | 'SG'
          | 'SX'
          | 'SK'
          | 'SI'
          | 'SB'
          | 'SO'
          | 'ZA'
          | 'GS'
          | 'SS'
          | 'ES'
          | 'LK'
          | 'SD'
          | 'SR'
          | 'SJ'
          | 'SE'
          | 'CH'
          | 'SY'
          | 'TW'
          | 'TJ'
          | 'TZ'
          | 'TH'
          | 'TL'
          | 'TG'
          | 'TK'
          | 'TO'
          | 'TT'
          | 'TN'
          | 'TR'
          | 'TM'
          | 'TC'
          | 'TV'
          | 'UG'
          | 'UA'
          | 'AE'
          | 'GB'
          | 'UM'
          | 'US'
          | 'UY'
          | 'UZ'
          | 'VU'
          | 'VE'
          | 'VN'
          | 'VG'
          | 'VI'
          | 'WF'
          | 'EH'
          | 'YE'
          | 'ZM'
          | 'ZW'
          | ''
          | null;

        postal_code?: string | null;

        street?: string | null;
      }

      /**
       * Compliance entity result source serializer.
       */
      export interface Source {
        url: string;

        description?: string | null;

        document?: string | null;

        domain?: string | null;

        publication_date?: string | null;

        title?: string | null;
      }

      /**
       * Compliance entity result tag serializer.
       */
      export interface Tag {
        tag: string;
      }
    }

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

  directors_screening_enabled?: boolean;

  ownership_screening_threshold?: number;
}

export declare namespace Compliance {
  export {
    type ComplianceCheckScoreEnum as ComplianceCheckScoreEnum,
    type ComplianceCreateResponse as ComplianceCreateResponse,
    type ComplianceRetrieveResponse as ComplianceRetrieveResponse,
    type ComplianceCreateParams as ComplianceCreateParams,
  };
}
