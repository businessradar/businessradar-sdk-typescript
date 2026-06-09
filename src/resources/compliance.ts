// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as CompaniesAPI from './companies';
import { APIPromise } from '../core/api-promise';
import { NextKey, type NextKeyParams, PagePromise } from '../core/pagination';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class Compliance extends APIResource {
  /**
   * ### Create Compliance Check (Asynchronous)
   *
   * Initiate a new compliance screening using one of two methods:
   *
   * 1. **Company-based screening**: Provide a `company_id` to screen the company.
   *    Optionally enable screening of related entities (UBOs and directors) via
   *    `ubo_screening_enabled` and `directors_screening_enabled`. You can optionally
   *    include a list of additional `entities` to be screened alongside the company.
   *
   * 2. **Custom entity screening**: Provide a list of `entities` without a
   *    `company_id` to screen specific individuals or organizations that are not
   *    necessarily affiliated with a company in our database.
   *
   * Once posted, Business Radar processes the request in the background.
   *
   * To check the progress and/or retrieve the final result, you can use the
   * [GET /compliance/{external_id}](/ext/v3/#/ext/ext_v3_compliance_retrieve)
   * endpoint.
   */
  create(
    body: ComplianceCreateParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ComplianceCreateResponse> {
    return this._client.post('/ext/v3/compliance', { body, ...options });
  }

  /**
   * ### Compliance Check Status
   *
   * Check the current status, progress, and high-level scores of a specific
   * compliance check.
   */
  retrieve(externalID: string, options?: RequestOptions): APIPromise<ComplianceRetrieveResponse> {
    return this._client.get(path`/ext/v3/compliance/${externalID}`, options);
  }

  /**
   * ### Compliance Checks
   *
   * **GET** — Retrieve a paginated list of compliance checks created via this API
   * key. Supports filtering by status and date ranges, and sorting by key
   * timestamps.
   *
   * **POST** — Initiate a new compliance screening using one of two methods:
   *
   * 1. **Company-based screening**: Provide a `company_id` to screen the company.
   *    Optionally enable screening of related entities (UBOs and directors) via
   *    `ubo_screening_enabled` and `directors_screening_enabled`. You can also
   *    include additional custom `entities` to be screened alongside the company.
   *
   * 2. **Custom entity screening**: Provide a list of `entities` without a
   *    `company_id` to screen specific individuals or organizations that are not
   *    necessarily affiliated with a company in our database.
   */
  list(
    query: ComplianceListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<ComplianceListResponsesNextKey, ComplianceListResponse> {
    return this._client.getAPIList('/ext/v3/compliance', NextKey<ComplianceListResponse>, {
      query,
      ...options,
    });
  }

  /**
   * ### List Compliance Results
   *
   * Retrieve all findings for a compliance check. Results can be filtered by entity,
   * type of finding (e.g., Sanction, PEP), and confidence score.
   */
  listResults(
    externalID: string,
    query: ComplianceListResultsParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<ComplianceListResultsResponsesNextKey, ComplianceListResultsResponse> {
    return this._client.getAPIList(
      path`/ext/v3/compliance/${externalID}/results`,
      NextKey<ComplianceListResultsResponse>,
      { query, ...options },
    );
  }
}

export type ComplianceListResponsesNextKey = NextKey<ComplianceListResponse>;

export type ComplianceListResultsResponsesNextKey = NextKey<ComplianceListResultsResponse>;

/**
 * - `low` - Low
 * - `medium` - Medium
 * - `high` - High
 */
export type ComplianceCheckScoreEnum = 'low' | 'medium' | 'high';

export interface ComplianceEntityRetrieve {
  adverse_media_monitoring_enabled: boolean;

  aliases: Array<string>;

  entity_role: string;

  /**
   * - `individual` - Individual
   * - `company` - Company
   */
  entity_type: 'individual' | 'company';

  external_id: string;

  name: string;

  sanction_monitoring_enabled: boolean;

  /**
   * - `on_hold` - On Hold
   * - `queued` - Queued
   * - `in_progress` - In Progress
   * - `completed` - Completed
   * - `skipped` - Skipped
   * - `failed` - Failed
   */
  status: 'on_hold' | 'queued' | 'in_progress' | 'completed' | 'skipped' | 'failed';

  ubo: Ubo | null;

  country?: string | null;

  date_of_birth?: string | null;

  gender?: 'male' | 'female' | '' | null;
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

/**
 * ### Compliance Check
 *
 * Used for creating a minimal compliance check record.
 */
export interface ComplianceCreateResponse {
  external_id: string;
}

export interface ComplianceRetrieveResponse {
  entities: Array<ComplianceEntityRetrieve>;

  external_id: string;

  progress: number;

  activity_score?: 'low' | 'medium' | 'high' | '' | null;

  adverse_media_score?: 'low' | 'medium' | 'high' | '' | null;

  compliance_score?: 'low' | 'medium' | 'high' | '' | null;

  country_score?: 'low' | 'medium' | 'high' | '' | null;

  /**
   * Custom name for this compliance check.
   */
  name?: string | null;

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

/**
 * ### Compliance Check (List)
 *
 * Lightweight representation used in list responses.
 */
export interface ComplianceListResponse {
  company: ComplianceListResponse.Company | null;

  created_at: string;

  external_id: string;

  activity_score?: 'low' | 'medium' | 'high' | '' | null;

  adverse_media_score?: 'low' | 'medium' | 'high' | '' | null;

  compliance_score?: 'low' | 'medium' | 'high' | '' | null;

  country_score?: 'low' | 'medium' | 'high' | '' | null;

  finished_at?: string | null;

  /**
   * Custom name for this compliance check.
   */
  name?: string | null;

  pep_score?: 'low' | 'medium' | 'high' | '' | null;

  results_changed_at?: string | null;

  /**
   * Number of results across all entities that have been reviewed by a user.
   */
  reviewed_results_count?: number;

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

  /**
   * Number of results across all entities that are open and not yet reviewed.
   */
  unreviewed_results_count?: number;
}

export namespace ComplianceListResponse {
  export interface Company {
    /**
     * - `AF` - Afghanistan
     * - `AX` - Aland Islands
     * - `AL` - Albania
     * - `DZ` - Algeria
     * - `AS` - American Samoa
     * - `AD` - Andorra
     * - `AO` - Angola
     * - `AI` - Anguilla
     * - `AQ` - Antarctica
     * - `AG` - Antigua and Barbuda
     * - `AR` - Argentina
     * - `AM` - Armenia
     * - `AW` - Aruba
     * - `AU` - Australia
     * - `AT` - Austria
     * - `AZ` - Azerbaijan
     * - `BS` - Bahamas
     * - `BH` - Bahrain
     * - `BD` - Bangladesh
     * - `BB` - Barbados
     * - `BY` - Belarus
     * - `BE` - Belgium
     * - `BZ` - Belize
     * - `BJ` - Benin
     * - `BM` - Bermuda
     * - `BT` - Bhutan
     * - `BO` - Bolivia
     * - `BQ` - Bonaire
     * - `BA` - Bosnia and Herzegovina
     * - `BW` - Botswana
     * - `BV` - Bouvet Island
     * - `BR` - Brazil
     * - `IO` - British Indian Ocean Territory
     * - `BN` - Brunei Darussalam
     * - `BG` - Bulgaria
     * - `BF` - Burkina Faso
     * - `BI` - Burundi
     * - `CV` - Cabo Verde
     * - `KH` - Cambodia
     * - `CM` - Cameroon
     * - `CA` - Canada
     * - `KY` - Cayman Islands
     * - `CF` - Central African Republic
     * - `TD` - Chad
     * - `CL` - Chile
     * - `CN` - China
     * - `CX` - Christmas Island
     * - `CC` - Cocos Keeling Islands
     * - `CO` - Colombia
     * - `KM` - Comoros
     * - `CG` - Congo
     * - `CD` - Congo Democratic Republic
     * - `CK` - Cook Islands
     * - `CR` - Costa Rica
     * - `CI` - Cote d'Ivoire
     * - `HR` - Croatia
     * - `CU` - Cuba
     * - `CW` - Curacao
     * - `CY` - Cyprus
     * - `CZ` - Czechia
     * - `DK` - Denmark
     * - `DJ` - Djibouti
     * - `DM` - Dominica
     * - `DO` - Dominican Republic
     * - `EC` - Ecuador
     * - `EG` - Egypt
     * - `SV` - El Salvador
     * - `GQ` - Equatorial Guinea
     * - `ER` - Eritrea
     * - `EE` - Estonia
     * - `SZ` - Eswatini
     * - `ET` - Ethiopia
     * - `FK` - Falkland Islands
     * - `FO` - Faroe Islands
     * - `FJ` - Fiji
     * - `FI` - Finland
     * - `FR` - France
     * - `GF` - French Guiana
     * - `PF` - French Polynesia
     * - `TF` - French Southern Territories
     * - `GA` - Gabon
     * - `GM` - Gambia
     * - `GE` - Georgia
     * - `DE` - Germany
     * - `GH` - Ghana
     * - `GI` - Gibraltar
     * - `GR` - Greece
     * - `GL` - Greenland
     * - `GD` - Grenada
     * - `GP` - Guadeloupe
     * - `GU` - Guam
     * - `GT` - Guatemala
     * - `GG` - Guernsey
     * - `GN` - Guinea
     * - `GW` - Guinea-Bissau
     * - `GY` - Guyana
     * - `HT` - Haiti
     * - `HM` - Heard Island and McDonald Islands
     * - `VA` - Holy See
     * - `HN` - Honduras
     * - `HK` - Hong Kong
     * - `HU` - Hungary
     * - `IS` - Iceland
     * - `IN` - India
     * - `ID` - Indonesia
     * - `IR` - Iran (Islamic Republic of)
     * - `IQ` - Iraq
     * - `IE` - Ireland
     * - `IM` - Isle of Man
     * - `IL` - Israel
     * - `IT` - Italy
     * - `JM` - Jamaica
     * - `JP` - Japan
     * - `JE` - Jersey
     * - `JO` - Jordan
     * - `KZ` - Kazakhstan
     * - `KE` - Kenya
     * - `KI` - Kiribati
     * - `KP` - Korea (the Democratic People's Republic of)
     * - `KR` - Korea (the Republic of)
     * - `KW` - Kuwait
     * - `KG` - Kyrgyzstan
     * - `LA` - Lao People's Democratic Republic
     * - `LV` - Latvia
     * - `LB` - Lebanon
     * - `LS` - Lesotho
     * - `LR` - Liberia
     * - `LY` - Libya
     * - `LI` - Liechtenstein
     * - `LT` - Lithuania
     * - `LU` - Luxembourg
     * - `MO` - Macao
     * - `MG` - Madagascar
     * - `MW` - Malawi
     * - `MY` - Malaysia
     * - `MV` - Maldives
     * - `ML` - Mali
     * - `MT` - Malta
     * - `MH` - Marshall Islands
     * - `MQ` - Martinique
     * - `MR` - Mauritania
     * - `MU` - Mauritius
     * - `YT` - Mayotte
     * - `MX` - Mexico
     * - `FM` - Micronesia
     * - `MD` - Moldova
     * - `MC` - Monaco
     * - `MN` - Mongolia
     * - `ME` - Montenegro
     * - `MS` - Montserrat
     * - `MA` - Morocco
     * - `MZ` - Mozambique
     * - `MM` - Myanmar
     * - `NA` - Namibia
     * - `NR` - Nauru
     * - `NP` - Nepal
     * - `NL` - Netherlands
     * - `NC` - New Caledonia
     * - `NZ` - New Zealand
     * - `NI` - Nicaragua
     * - `NE` - Niger
     * - `NG` - Nigeria
     * - `NU` - Niue
     * - `NF` - Norfolk Island
     * - `MK` - North Macedonia
     * - `MP` - Northern Mariana Islands
     * - `NO` - Norway
     * - `OM` - Oman
     * - `PK` - Pakistan
     * - `PW` - Palau
     * - `PS` - Palestine, State of
     * - `PA` - Panama
     * - `PG` - Papua New Guinea
     * - `PY` - Paraguay
     * - `PE` - Peru
     * - `PH` - Philippines
     * - `PN` - Pitcairn
     * - `PL` - Poland
     * - `PT` - Portugal
     * - `PR` - Puerto Rico
     * - `QA` - Qatar
     * - `RE` - Réunion
     * - `RO` - Romania
     * - `RU` - Russian Federation
     * - `RW` - Rwanda
     * - `BL` - Saint Barthélemy
     * - `SH` - Saint Helena
     * - `KN` - Saint Kitts and Nevis
     * - `LC` - Saint Lucia
     * - `MF` - Saint Martin
     * - `PM` - Saint Pierre and Miquelon
     * - `VC` - Saint Vincent and the Grenadines
     * - `WS` - Samoa
     * - `SM` - San Marino
     * - `ST` - Sao Tome and Principe
     * - `SA` - Saudi Arabia
     * - `SN` - Senegal
     * - `RS` - Serbia
     * - `SC` - Seychelles
     * - `SL` - Sierra Leone
     * - `SG` - Singapore
     * - `SX` - Sint Maarten
     * - `SK` - Slovakia
     * - `SI` - Slovenia
     * - `SB` - Solomon Islands
     * - `SO` - Somalia
     * - `ZA` - South Africa
     * - `GS` - South Georgia and the South Sandwich Islands
     * - `SS` - South Sudan
     * - `ES` - Spain
     * - `LK` - Sri Lanka
     * - `SD` - Sudan
     * - `SR` - Suriname
     * - `SJ` - Svalbard and Jan Mayen
     * - `SE` - Sweden
     * - `CH` - Switzerland
     * - `SY` - Syrian Arab Republic
     * - `TW` - Taiwan
     * - `TJ` - Tajikistan
     * - `TZ` - Tanzania
     * - `TH` - Thailand
     * - `TL` - Timor-Leste
     * - `TG` - Togo
     * - `TK` - Tokelau
     * - `TO` - Tonga
     * - `TT` - Trinidad and Tobago
     * - `TN` - Tunisia
     * - `TR` - Turkey
     * - `TM` - Turkmenistan
     * - `TC` - Turks and Caicos Islands
     * - `TV` - Tuvalu
     * - `UG` - Uganda
     * - `UA` - Ukraine
     * - `AE` - United Arab Emirates
     * - `GB` - United Kingdom
     * - `UM` - United States Minor Outlying Islands
     * - `US` - United States of America
     * - `UY` - Uruguay
     * - `UZ` - Uzbekistan
     * - `VU` - Vanuatu
     * - `VE` - Venezuela
     * - `VN` - Viet Nam
     * - `VG` - Virgin Islands
     * - `VI` - Virgin Islands
     * - `WF` - Wallis and Futuna
     * - `EH` - Western Sahara
     * - `YE` - Yemen
     * - `ZM` - Zambia
     * - `ZW` - Zimbabwe
     */
    country: CompaniesAPI.CountryEnum;

    name: string;

    external_id?: string;
  }
}

/**
 * Compliance entity result.
 */
export interface ComplianceListResultsResponse {
  addresses: Array<ComplianceListResultsResponse.Address>;

  automated_false_positive_rating: string | null;

  automated_false_positive_rating_comments: string | null;

  created_at: string;

  entity: ComplianceEntityRetrieve;

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

  sources: Array<ComplianceListResultsResponse.Source>;

  tags: Array<ComplianceListResultsResponse.Tag>;

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
    | 'no'
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

export namespace ComplianceListResultsResponse {
  /**
   * Compliance entity result address.
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
   * Compliance entity result source.
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
   * Compliance entity result tag.
   */
  export interface Tag {
    tag: string;
  }
}

export interface ComplianceCreateParams {
  /**
   * If enabled, adverse media monitoring will be activated for all system-created
   * entities (company, directors, UBOs).
   */
  adverse_media_monitoring_enabled?: boolean;

  company_id?: string | null;

  /**
   * If directors should be screened.
   */
  directors_screening_enabled?: boolean;

  entities?: Array<ComplianceCreateParams.Entity>;

  /**
   * Custom name for this compliance check.
   */
  name?: string | null;

  /**
   * The threshold for ultimate ownership to enable for screening.
   */
  ownership_screening_threshold?: number | null;

  /**
   * If enabled, sanctions monitoring will be activated for all system-created
   * entities (company, directors, UBOs).
   */
  sanction_monitoring_enabled?: boolean;

  /**
   * If enabled, UBOs discovered for the company will be screened.
   */
  ubo_screening_enabled?: boolean;
}

export namespace ComplianceCreateParams {
  /**
   * ### Compliance Entity Request
   *
   * Represents an entity (individual or organization) to be included in a compliance
   * screening.
   */
  export interface Entity {
    name: string;

    /**
     * Alternative names or aliases for the compliance entity.
     */
    aliases?: Array<string>;

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

export interface ComplianceListParams extends NextKeyParams {
  /**
   * Filter checks that have entities with adverse media monitoring enabled (pending
   * or active).
   */
  adverse_media_monitoring_enabled?: boolean;

  /**
   * Filter by compliance score.
   */
  compliance_score?: 'high' | 'low' | 'medium';

  /**
   * Filter checks created at or after this time.
   */
  created_at__gte?: string;

  /**
   * Filter checks created at or before this time.
   */
  created_at__lte?: string;

  /**
   * Sorting order.
   */
  order?: 'asc' | 'desc';

  /**
   * Filter checks with results changed at or after this time.
   */
  results_changed_at__gte?: string;

  /**
   * Filter checks with results changed at or before this time.
   */
  results_changed_at__lte?: string;

  /**
   * Filter checks that have entities with sanction monitoring enabled (pending or
   * active).
   */
  sanction_monitoring_enabled?: boolean;

  /**
   * Sorting field.
   */
  sorting?: 'created_at' | 'finished_at' | 'results_changed_at';

  /**
   * Filter by compliance check status.
   */
  status?: 'completed' | 'failed' | 'in_progress' | 'pending' | 'queued' | 'searching_directors';
}

export interface ComplianceListResultsParams extends NextKeyParams {
  /**
   * Filter by entity external ID
   */
  entity?: string;

  /**
   * Filter out automated false positive rated results
   */
  exclude_automated_false_positives?: boolean;

  /**
   * Filter by minimum confidence score (0.0 - 1.0)
   */
  min_confidence?: number;

  /**
   * Sorting order
   */
  order?: 'asc' | 'desc';

  /**
   * Filter by result type
   */
  result_type?: 'adverse_media' | 'enforcement' | 'govt_owned' | 'pep' | 'sanction';

  /**
   * Sorting field
   */
  sorting?: 'confidence' | 'created_at' | 'source_date';
}

export declare namespace Compliance {
  export {
    type ComplianceCheckScoreEnum as ComplianceCheckScoreEnum,
    type ComplianceEntityRetrieve as ComplianceEntityRetrieve,
    type Ubo as Ubo,
    type ComplianceCreateResponse as ComplianceCreateResponse,
    type ComplianceRetrieveResponse as ComplianceRetrieveResponse,
    type ComplianceListResponse as ComplianceListResponse,
    type ComplianceListResultsResponse as ComplianceListResultsResponse,
    type ComplianceListResponsesNextKey as ComplianceListResponsesNextKey,
    type ComplianceListResultsResponsesNextKey as ComplianceListResultsResponsesNextKey,
    type ComplianceCreateParams as ComplianceCreateParams,
    type ComplianceListParams as ComplianceListParams,
    type ComplianceListResultsParams as ComplianceListResultsParams,
  };
}
