// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as CompaniesAPI from '../companies';
import * as Shared from '../shared';
import { APIPromise } from '../../core/api-promise';
import { NextKey, type NextKeyParams, PagePromise } from '../../core/pagination';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Companies extends APIResource {
  /**
   * Register a new Portfolio Company.
   */
  create(
    portfolioID: string,
    body: CompanyCreateParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<CompaniesAPI.Registration> {
    return this._client.post(path`/ext/v3/portfolios/${portfolioID}/companies`, { body, ...options });
  }

  /**
   * List And Create Portfolio Companies.
   */
  list(
    portfolioID: string,
    query: CompanyListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<CompanyListResponsesNextKey, CompanyListResponse> {
    return this._client.getAPIList(
      path`/ext/v3/portfolios/${portfolioID}/companies`,
      NextKey<CompanyListResponse>,
      { query, ...options },
    );
  }

  /**
   * Remove Portfolio Companies.
   */
  delete(externalID: string, params: CompanyDeleteParams, options?: RequestOptions): APIPromise<void> {
    const { portfolio_id } = params;
    return this._client.delete(path`/ext/v3/portfolios/${portfolio_id}/companies/${externalID}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export type CompanyListResponsesNextKey = NextKey<CompanyListResponse>;

/**
 * Portfolio Company Instance.
 */
export interface CompanyListResponse {
  /**
   * Company List.
   */
  company: CompanyListResponse.Company;

  created_at: string;

  /**
   * Customer reference for the client to understand relationship.
   */
  customer_reference?: string | null;
}

export namespace CompanyListResponse {
  /**
   * Company List.
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

    name: string;

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

    duns_number?: string | null;

    external_id?: string;

    founding_date?: string | null;

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

export interface CompanyListParams extends NextKeyParams {}

export interface CompanyDeleteParams {
  portfolio_id: string;
}

export declare namespace Companies {
  export {
    type CompanyListResponse as CompanyListResponse,
    type CompanyListResponsesNextKey as CompanyListResponsesNextKey,
    type CompanyCreateParams as CompanyCreateParams,
    type CompanyListParams as CompanyListParams,
    type CompanyDeleteParams as CompanyDeleteParams,
  };
}
