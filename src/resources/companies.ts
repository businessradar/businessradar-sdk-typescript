// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as CompaniesAPI from './companies';
import * as Shared from './shared';
import { APIPromise } from '../core/api-promise';
import { NextKey, type NextKeyParams, PagePromise } from '../core/pagination';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class Companies extends APIResource {
  /**
   * Register new Company to Business Radar.
   */
  create(
    body: CompanyCreateParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<Registration> {
    return this._client.post('/ext/v3/companies', { body, ...options });
  }

  /**
   * Get Company Information.
   */
  retrieve(externalID: string, options?: RequestOptions): APIPromise<CompanyRetrieveResponse> {
    return this._client.get(path`/ext/v3/companies/${externalID}`, options);
  }

  /**
   * Search all companies using Dun and Bradstreet.
   *
   * Companies will contain an optional external_id, which is null if company is not
   * registered in Business Radar.
   *
   * When you pass query and optional country it will search using dun and
   * bradstreet, otherwise using internal search.
   */
  list(
    query: CompanyListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<CompanyListResponsesNextKey, CompanyListResponse> {
    return this._client.getAPIList('/ext/v3/companies', NextKey<CompanyListResponse>, { query, ...options });
  }

  /**
   * List Company Updates.
   */
  listAttributeChanges(
    query: CompanyListAttributeChangesParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<CompanyListAttributeChangesResponsesNextKey, CompanyListAttributeChangesResponse> {
    return this._client.getAPIList(
      '/ext/v3/companies/attribute_changes',
      NextKey<CompanyListAttributeChangesResponse>,
      { query, ...options },
    );
  }

  /**
   * Get Registration Information.
   */
  retrieveRegistration(registrationID: string, options?: RequestOptions): APIPromise<Registration> {
    return this._client.get(path`/ext/v3/registrations/${registrationID}`, options);
  }
}

export type CompanyListResponsesNextKey = NextKey<CompanyListResponse>;

export type CompanyListAttributeChangesResponsesNextKey = NextKey<CompanyListAttributeChangesResponse>;

export type BlankEnum = '';

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
export type CountryEnum =
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
  | 'ZW';

/**
 * Industry Code.
 */
export interface IndustryCode {
  code: string;

  description?: string | null;
}

/**
 * Portfolio Registration Serializer.
 *
 * Serializer used for registering a new company.
 */
export interface Registration {
  external_id: string;

  /**
   * Datestamp on when the registration was complete. If failed this is empty.
   */
  finished_at: string | null;

  progress: number;

  /**
   * - `queued_search` - Queued for search
   * - `searching` - Searching for company in registry
   * - `queued_registration` - Queued for registration
   * - `registering` - Registering company
   * - `queued_website_search` - Queued for website search
   * - `searching_website` - Searching for company website
   * - `searching_activity_description` - Generating company activity description
   * - `searching_website_icon` - Searching for company website icon
   * - `searching_directors` - Searching for directors online
   * - `social_search` - Searching for social media websites
   * - `generating_company_description` - Generating company description
   * - `determine_trade_names` - Determining trade names
   * - `searching_news` - Searching for news articles
   * - `processing_news` - Processing news articles
   * - `registered` - Registered
   * - `invalid_input` - Invalid input, please check your input
   * - `permission_denied` - Permission denied, please contact support
   * - `company_not_found` - Company has not been found in Dun and Bradstreet
   *   registry
   * - `expired` - Registration has been pending for too long, expired.
   * - `cancelled` - Registration has been cancelled.
   * - `failed` - Registration has failed, please check the error message
   */
  status:
    | 'queued_search'
    | 'searching'
    | 'queued_registration'
    | 'registering'
    | 'queued_website_search'
    | 'searching_website'
    | 'searching_activity_description'
    | 'searching_website_icon'
    | 'searching_directors'
    | 'social_search'
    | 'generating_company_description'
    | 'determine_trade_names'
    | 'searching_news'
    | 'processing_news'
    | 'registered'
    | 'invalid_input'
    | 'permission_denied'
    | 'company_not_found'
    | 'expired'
    | 'cancelled'
    | 'failed';

  /**
   * Get Registration Status text.
   */
  status_text: string;

  /**
   * Portfolio Company Detail Serializer.
   *
   * Alternative serializer for the Company model which is limited.
   */
  company?: Registration.Company | null;

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

  /**
   * Customer reference for the client to understand relationship.
   */
  customer_reference?: string | null;

  duns_number?: string | null;

  primary_name?: string | null;

  registration_number?: string | null;
}

export namespace Registration {
  /**
   * Portfolio Company Detail Serializer.
   *
   * Alternative serializer for the Company model which is limited.
   */
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

    duns_number: string | null;

    external_id: string;

    name: string;
  }
}

/**
 * Portfolio Registration Serializer.
 *
 * Serializer used for registering a new company.
 */
export interface RegistrationRequest {
  /**
   * Portfolio Company Detail Serializer.
   *
   * Alternative serializer for the Company model which is limited.
   */
  company?: Shared.PortfolioCompanyDetailRequest | null;

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

  /**
   * Customer reference for the client to understand relationship.
   */
  customer_reference?: string | null;

  duns_number?: string | null;

  primary_name?: string | null;

  registration_number?: string | null;
}

/**
 * Company.
 */
export interface CompanyRetrieveResponse {
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
  country: CountryEnum;

  duns_number: string;

  founding_date: string;

  industry_codes: Array<IndustryCode>;

  name: string;

  primary_industry_codes: Array<IndustryCode>;

  registration_numbers: Array<CompanyRetrieveResponse.RegistrationNumber>;

  slug: string;

  /**
   * Get Social Description.
   */
  social_description: string | null;

  /**
   * Get Social Logo.
   */
  social_logo: string | null;

  address_latitude?: number | null;

  address_longitude?: number | null;

  address_phone?: string | null;

  address_place?: string | null;

  address_postal?: string | null;

  address_region?: string | null;

  address_street?: string | null;

  /**
   * Amount of articles available
   */
  article_count?: number;

  external_id?: string;

  /**
   * Indicates whether the company is out of business.
   */
  is_out_of_business?: boolean;

  linkedin_url?: string | null;

  /**
   * Amount of publications available
   */
  publication_count?: number;

  /**
   * Amount of reports available
   */
  report_count?: number;

  /**
   * Average review score
   */
  review_average_score?: number | null;

  /**
   * Amount of reviews available
   */
  review_count?: number;

  ticker_symbol?: string | null;

  website_domain?: string | null;

  /**
   * Icon of the found website
   */
  website_icon_url?: string | null;

  website_url?: string | null;
}

export namespace CompanyRetrieveResponse {
  /**
   * Registration Number.
   */
  export interface RegistrationNumber {
    description: string;

    number: string;

    /**
     * Dun and Bradstreet type code for the source of thisRegistration number.
     */
    type: number;
  }
}

/**
 * Universal Company.
 */
export interface CompanyListResponse {
  address_place: string;

  address_postal: string;

  address_region: string;

  address_street: string;

  country: string;

  duns_number: string;

  external_id: string | null;

  industry_codes: Array<CompanyListResponse.IndustryCode>;

  name: string;

  social_logo: string | null;

  website_icon_url: string | null;

  is_out_of_business?: boolean | null;
}

export namespace CompanyListResponse {
  export interface IndustryCode {
    code: string;

    description: string;
  }
}

/**
 * Company Attribute Change Serializer.
 */
export interface CompanyListAttributeChangesResponse {
  attribute: string;

  company_external_id: string;

  created_at: string;

  new_value?: string | null;

  old_value?: string | null;
}

export interface CompanyCreateParams {
  /**
   * Portfolio Company Detail Serializer.
   *
   * Alternative serializer for the Company model which is limited.
   */
  company?: Shared.PortfolioCompanyDetailRequest | null;

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

  /**
   * Customer reference for the client to understand relationship.
   */
  customer_reference?: string | null;

  duns_number?: string | null;

  primary_name?: string | null;

  registration_number?: string | null;
}

export interface CompanyListParams extends NextKeyParams {
  /**
   * ISO 2-letter Country Code
   */
  country?: Array<string>;

  /**
   * 9-digit Dun And Bradstreet Number
   */
  duns_number?: Array<string>;

  /**
   * Portfolio ID to filter companies
   */
  portfolio_id?: Array<string>;

  /**
   * Custom search query to text search all companies.
   */
  query?: string;

  /**
   * Local Registration Number
   */
  registration_number?: Array<string>;

  /**
   * Website URL to search
   */
  website_url?: string;
}

export interface CompanyListAttributeChangesParams extends NextKeyParams {
  /**
   * Filter updates created at or before this time.
   */
  max_created_at?: string;

  /**
   * Filter updates created at or after this time.
   */
  min_created_at?: string;
}

export declare namespace Companies {
  export {
    type BlankEnum as BlankEnum,
    type CountryEnum as CountryEnum,
    type IndustryCode as IndustryCode,
    type Registration as Registration,
    type RegistrationRequest as RegistrationRequest,
    type CompanyRetrieveResponse as CompanyRetrieveResponse,
    type CompanyListResponse as CompanyListResponse,
    type CompanyListAttributeChangesResponse as CompanyListAttributeChangesResponse,
    type CompanyListResponsesNextKey as CompanyListResponsesNextKey,
    type CompanyListAttributeChangesResponsesNextKey as CompanyListAttributeChangesResponsesNextKey,
    type CompanyCreateParams as CompanyCreateParams,
    type CompanyListParams as CompanyListParams,
    type CompanyListAttributeChangesParams as CompanyListAttributeChangesParams,
  };
}
