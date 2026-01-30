// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as ArticlesAPI from './articles';
import * as CompaniesAPI from '../../companies';
import * as AnalyticsAPI from './analytics';
import { Analytics, AnalyticsGetCountByDateParams, AnalyticsGetCountByDateResponse } from './analytics';
import * as ExportAPI from './export';
import { ArticleExport, DataExportFileType, Export, ExportCreateParams, MediaTypeEnum } from './export';
import { APIPromise } from '../../../core/api-promise';
import { NextKey, type NextKeyParams, PagePromise } from '../../../core/pagination';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Articles extends APIResource {
  analytics: AnalyticsAPI.Analytics = new AnalyticsAPI.Analytics(this._client);
  export: ExportAPI.Export = new ExportAPI.Export(this._client);

  /**
   * ### Search News Articles
   *
   * Retrieve articles matching the specified search criteria. Advanced queries and
   * incremental checks (using publication/creation dates) are supported.
   */
  list(
    query: ArticleListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<ArticlesNextKey, Article> {
    return this._client.getAPIList('/ext/v3/articles', NextKey<Article>, { query, ...options });
  }

  /**
   * ### Submit Article Feedback
   *
   * Submit feedback for a specific article. This helps improve our analysis and
   * relevance.
   */
  createFeedback(
    body: ArticleCreateFeedbackParams,
    options?: RequestOptions,
  ): APIPromise<ArticleCreateFeedbackResponse> {
    return this._client.post('/ext/v3/articles/feedback/', { body, ...options });
  }

  /**
   * ### Saved Article Filters
   *
   * Retrieve a list of all search filters saved by the current profile. These
   * filters can be applied to article search requests using the
   * `saved_article_filter_id` parameter.
   */
  listSavedArticleFilters(
    query: ArticleListSavedArticleFiltersParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<ArticleListSavedArticleFiltersResponsesNextKey, ArticleListSavedArticleFiltersResponse> {
    return this._client.getAPIList(
      '/ext/v3/saved_article_filters',
      NextKey<ArticleListSavedArticleFiltersResponse>,
      { query, ...options },
    );
  }

  /**
   * ### Find Related Articles
   *
   * Retrieve a list of articles that are semantically similar to the specified
   * article, ranked by similarity distance.
   */
  retrieveRelated(articleID: string, options?: RequestOptions): APIPromise<ArticleRetrieveRelatedResponse> {
    return this._client.get(path`/ext/v3/articles/${articleID}/related/`, options);
  }
}

export type ArticlesNextKey = NextKey<Article>;

export type ArticleListSavedArticleFiltersResponsesNextKey = NextKey<ArticleListSavedArticleFiltersResponse>;

/**
 * ### Article
 *
 * The primary data structure for news articles. It provides comprehensive data,
 * including: - Metadata (URLs, publication dates, languages, countries) - Content
 * (titles, snippets, summaries - both original and translated) - Relationships
 * (source, related companies, categories) - Analysis (sentiment, clustering
 * status)
 */
export interface Article {
  categories: Array<CategoryTree>;

  company_articles: Array<Article.CompanyArticle>;

  created_at: string;

  /**
   * Get Image URL if allowed for source.
   */
  image_url: string;

  /**
   * Check if article is clustered.
   */
  is_clustered: boolean;

  /**
   * - `af` - Afrikaans
   * - `ar` - Arabic
   * - `az` - Azerbaijani
   * - `bg` - Bulgarian
   * - `be` - Belarusian
   * - `bn` - Bengali
   * - `br` - Breton
   * - `bs` - Bosnian
   * - `ca` - Catalan
   * - `cs` - Czech
   * - `cy` - Welsh
   * - `da` - Danish
   * - `de` - German
   * - `el` - Greek
   * - `en` - English
   * - `eo` - Esperanto
   * - `es` - Spanish
   * - `et` - Estonian
   * - `eu` - Basque
   * - `fa` - Persian
   * - `fi` - Finnish
   * - `fr` - French
   * - `fy` - Frisian
   * - `ga` - Irish
   * - `gd` - Scottish Gaelic
   * - `gl` - Galician
   * - `he` - Hebrew
   * - `hi` - Hindi
   * - `hr` - Croatian
   * - `hu` - Hungarian
   * - `hy` - Armenian
   * - `ia` - Interlingua
   * - `id` - Indonesian
   * - `ig` - Igbo
   * - `io` - Ido
   * - `is` - Icelandic
   * - `it` - Italian
   * - `ja` - Japanese
   * - `ka` - Georgian
   * - `kk` - Kazakh
   * - `km` - Khmer
   * - `no` - Norwegian
   * - `kn` - Kannada
   * - `ko` - Korean
   * - `ky` - Kyrgyz
   * - `lb` - Luxembourgish
   * - `lt` - Lithuanian
   * - `lv` - Latvian
   * - `mk` - Macedonian
   * - `ml` - Malayalam
   * - `mn` - Mongolian
   * - `mr` - Marathi
   * - `my` - Burmese
   * - `ne` - Nepali
   * - `nl` - Dutch
   * - `os` - Ossetic
   * - `pa` - Punjabi
   * - `pl` - Polish
   * - `pt` - Portuguese
   * - `ro` - Romanian
   * - `ru` - Russian
   * - `sk` - Slovak
   * - `sl` - Slovenian
   * - `sq` - Albanian
   * - `sr` - Serbian
   * - `sv` - Swedish
   * - `sw` - Swahili
   * - `ta` - Tamil
   * - `te` - Telugu
   * - `tg` - Tajik
   * - `th` - Thai
   * - `tk` - Turkmen
   * - `tr` - Turkish
   * - `tt` - Tatar
   * - `uk` - Ukrainian
   * - `ur` - Urdu
   * - `uz` - Uzbek
   * - `vi` - Vietnamese
   * - `zh` - Chinese
   */
  language: LanguageEnum;

  /**
   * Calculate publication datetime of article.
   */
  publication_datetime: string;

  /**
   * Get snippet if allowed for source.
   */
  snippet: string;

  /**
   * Get snippet if allowed for source.
   */
  snippet_en: string;

  /**
   * ### Source
   *
   * Represents the origin of a news article, including its domain, URL, and name.
   */
  source: Article.Source;

  sub_articles: Array<Article.SubArticle>;

  title: string;

  title_en: string;

  updated_at: string;

  url: string;

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

  external_id?: string;

  is_paywalled?: 'full' | 'partial' | '' | null;

  sentiment?: number | null;

  summary?: string | null;

  summary_en?: string | null;
}

export namespace Article {
  /**
   * ### Company-Article
   *
   * The relationship between a company and a specific article, including snippets
   * and sentiment analysis relevant to that company.
   */
  export interface CompanyArticle {
    categories: Array<ArticlesAPI.CategoryTree>;

    /**
     * ### News Company
     *
     * Company information when associated with news articles. Includes DUNS numbers
     * and an optional customer reference.
     */
    company: CompanyArticle.Company;

    sentiment?: number | null;

    snippet?: string | null;

    snippet_en?: string | null;
  }

  export namespace CompanyArticle {
    /**
     * ### News Company
     *
     * Company information when associated with news articles. Includes DUNS numbers
     * and an optional customer reference.
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

      /**
       * Get Customer reference.
       */
      customer_reference: string;

      name: string;

      duns_number?: string | null;

      external_id?: string;

      global_ultimate_duns_number?: string | null;

      global_ultimate_name?: string | null;
    }
  }

  /**
   * ### Source
   *
   * Represents the origin of a news article, including its domain, URL, and name.
   */
  export interface Source {
    domain: string;

    name: string;

    url: string;
  }

  /**
   * ### Sub-Article
   *
   * A lightweight representation of an article that is part of a larger cluster or
   * related to a main article.
   */
  export interface SubArticle {
    url: string;

    external_id?: string;
  }
}

/**
 * Category Tree Structure.
 */
export interface CategoryTree {
  /**
   * Return is_material flag if present.
   */
  is_material: boolean;

  name: string;

  sub_categories: Array<CategoryTree>;

  external_id?: string;

  priority?: number | null;
}

/**
 * - `false_positive` - False Positive
 * - `no_risk` - No Risk
 * - `risk_confirmed` - Risk Confirmed
 */
export type FeedbackTypeEnum = 'false_positive' | 'no_risk' | 'risk_confirmed';

/**
 * - `af` - Afrikaans
 * - `ar` - Arabic
 * - `az` - Azerbaijani
 * - `bg` - Bulgarian
 * - `be` - Belarusian
 * - `bn` - Bengali
 * - `br` - Breton
 * - `bs` - Bosnian
 * - `ca` - Catalan
 * - `cs` - Czech
 * - `cy` - Welsh
 * - `da` - Danish
 * - `de` - German
 * - `el` - Greek
 * - `en` - English
 * - `eo` - Esperanto
 * - `es` - Spanish
 * - `et` - Estonian
 * - `eu` - Basque
 * - `fa` - Persian
 * - `fi` - Finnish
 * - `fr` - French
 * - `fy` - Frisian
 * - `ga` - Irish
 * - `gd` - Scottish Gaelic
 * - `gl` - Galician
 * - `he` - Hebrew
 * - `hi` - Hindi
 * - `hr` - Croatian
 * - `hu` - Hungarian
 * - `hy` - Armenian
 * - `ia` - Interlingua
 * - `id` - Indonesian
 * - `ig` - Igbo
 * - `io` - Ido
 * - `is` - Icelandic
 * - `it` - Italian
 * - `ja` - Japanese
 * - `ka` - Georgian
 * - `kk` - Kazakh
 * - `km` - Khmer
 * - `no` - Norwegian
 * - `kn` - Kannada
 * - `ko` - Korean
 * - `ky` - Kyrgyz
 * - `lb` - Luxembourgish
 * - `lt` - Lithuanian
 * - `lv` - Latvian
 * - `mk` - Macedonian
 * - `ml` - Malayalam
 * - `mn` - Mongolian
 * - `mr` - Marathi
 * - `my` - Burmese
 * - `ne` - Nepali
 * - `nl` - Dutch
 * - `os` - Ossetic
 * - `pa` - Punjabi
 * - `pl` - Polish
 * - `pt` - Portuguese
 * - `ro` - Romanian
 * - `ru` - Russian
 * - `sk` - Slovak
 * - `sl` - Slovenian
 * - `sq` - Albanian
 * - `sr` - Serbian
 * - `sv` - Swedish
 * - `sw` - Swahili
 * - `ta` - Tamil
 * - `te` - Telugu
 * - `tg` - Tajik
 * - `th` - Thai
 * - `tk` - Turkmen
 * - `tr` - Turkish
 * - `tt` - Tatar
 * - `uk` - Ukrainian
 * - `ur` - Urdu
 * - `uz` - Uzbek
 * - `vi` - Vietnamese
 * - `zh` - Chinese
 */
export type LanguageEnum =
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
  | 'zh';

/**
 * ### External Article Feedback
 *
 * Allows users to provide feedback on specific articles, including feedback type,
 * comments, and contact information.
 */
export interface ArticleCreateFeedbackResponse {
  article: string;

  external_id: string;

  comment?: string | null;

  email?: string | null;

  /**
   * - `false_positive` - False Positive
   * - `no_risk` - No Risk
   * - `risk_confirmed` - Risk Confirmed
   */
  feedback_type?: FeedbackTypeEnum;
}

/**
 * ### Saved Article Filter
 *
 * Represents a named set of article search filters that can be reused.
 */
export interface ArticleListSavedArticleFiltersResponse {
  external_id: string;

  name: string;
}

export type ArticleRetrieveRelatedResponse =
  Array<ArticleRetrieveRelatedResponse.ArticleRetrieveRelatedResponseItem>;

export namespace ArticleRetrieveRelatedResponse {
  /**
   * ### Related Article
   *
   * An article that is semantically related to another, including a distance score
   * indicating the degree of similarity.
   */
  export interface ArticleRetrieveRelatedResponseItem {
    /**
     * ### Article
     *
     * The primary data structure for news articles. It provides comprehensive data,
     * including: - Metadata (URLs, publication dates, languages, countries) - Content
     * (titles, snippets, summaries - both original and translated) - Relationships
     * (source, related companies, categories) - Analysis (sentiment, clustering
     * status)
     */
    article: ArticlesAPI.Article;

    distance: number;
  }
}

export interface ArticleListParams extends NextKeyParams {
  /**
   * Filter by article Category IDs (UUIDs).
   */
  category?: Array<string>;

  /**
   * Filter by internal Company UUIDs.
   */
  company?: Array<string>;

  /**
   * Filter by ISO 2-letter Country Codes (e.g., 'US', 'GB').
   */
  country?: Array<string>;

  /**
   * By default, companies with the same trade names are grouped and the best match
   * is selected. Enable this to see all associated companies.
   */
  disable_company_article_deduplication?: boolean;

  /**
   * Filter by one or more 9-digit Dun & Bradstreet Numbers.
   */
  duns_number?: Array<string>;

  /**
   * Filter by Global Ultimate DUNS Numbers.
   */
  global_ultimate?: Array<string>;

  /**
   * Include articles that are part of a cluster (reprints or similar articles).
   */
  include_clustered_articles?: boolean;

  /**
   * Filter by materiality flag (relevance to business risk).
   */
  is_material?: boolean;

  /**
   * Filter by ISO 2-letter Language Codes (e.g., 'en', 'nl').
   */
  language?: Array<string>;

  /**
   * Filter articles added to our database at or before this date/time.
   */
  max_creation_date?: string;

  /**
   * Filter articles published at or before this date/time.
   */
  max_publication_date?: string;

  /**
   * Filter articles added to our database at or after this date/time.
   */
  min_creation_date?: string;

  /**
   * Filter articles published at or after this date/time.
   */
  min_publication_date?: string;

  /**
   * Filter articles related to companies in specific Portfolios (UUIDs).
   */
  portfolio_id?: Array<string>;

  /**
   * Full-text search query for filtering articles by content.
   */
  query?: string;

  /**
   * Filter by local company registration numbers.
   */
  registration_number?: Array<string>;

  /**
   * Apply a previously saved set of article filters (UUID).
   */
  saved_article_filter_id?: string;

  /**
   * Filter by sentiment: `true` for positive, `false` for negative.
   */
  sentiment?: boolean;

  /**
   * Sort articles
   */
  sorting?:
    | 'creation_date'
    | 'publication_date_clustering'
    | 'publication_date_priority'
    | 'publication_date_source_references'
    | 'publication_datetime';

  /**
   * Sort order
   */
  sorting_order?: 'asc' | 'desc';
}

export interface ArticleCreateFeedbackParams {
  article: string;

  comment?: string | null;

  email?: string | null;

  /**
   * - `false_positive` - False Positive
   * - `no_risk` - No Risk
   * - `risk_confirmed` - Risk Confirmed
   */
  feedback_type?: FeedbackTypeEnum;
}

export interface ArticleListSavedArticleFiltersParams extends NextKeyParams {}

Articles.Analytics = Analytics;
Articles.Export = Export;

export declare namespace Articles {
  export {
    type Article as Article,
    type CategoryTree as CategoryTree,
    type FeedbackTypeEnum as FeedbackTypeEnum,
    type LanguageEnum as LanguageEnum,
    type ArticleCreateFeedbackResponse as ArticleCreateFeedbackResponse,
    type ArticleListSavedArticleFiltersResponse as ArticleListSavedArticleFiltersResponse,
    type ArticleRetrieveRelatedResponse as ArticleRetrieveRelatedResponse,
    type ArticlesNextKey as ArticlesNextKey,
    type ArticleListSavedArticleFiltersResponsesNextKey as ArticleListSavedArticleFiltersResponsesNextKey,
    type ArticleListParams as ArticleListParams,
    type ArticleCreateFeedbackParams as ArticleCreateFeedbackParams,
    type ArticleListSavedArticleFiltersParams as ArticleListSavedArticleFiltersParams,
  };

  export {
    Analytics as Analytics,
    type AnalyticsGetCountByDateResponse as AnalyticsGetCountByDateResponse,
    type AnalyticsGetCountByDateParams as AnalyticsGetCountByDateParams,
  };

  export {
    Export as Export,
    type ArticleExport as ArticleExport,
    type DataExportFileType as DataExportFileType,
    type MediaTypeEnum as MediaTypeEnum,
    type ExportCreateParams as ExportCreateParams,
  };
}
