// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';

export class Analytics extends APIResource {
  /**
   * ### Get Article Aggregations
   *
   * Retrieve the number of articles and their average sentiment, grouped by date.
   */
  getCountByDate(
    query: AnalyticsGetCountByDateParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<AnalyticsGetCountByDateResponse> {
    return this._client.get('/ext/v3/articles/analytics/dates/', { query, ...options });
  }
}

export type AnalyticsGetCountByDateResponse =
  Array<AnalyticsGetCountByDateResponse.AnalyticsGetCountByDateResponseItem>;

export namespace AnalyticsGetCountByDateResponse {
  /**
   * ### Article Date Aggregation
   *
   * Provides aggregated metrics for articles on a per-date basis. - **count**: Total
   * articles found for the given date. - **average_sentiment**: Average sentiment
   * score of these articles. - **date**: The specific date of the aggregation.
   */
  export interface AnalyticsGetCountByDateResponseItem {
    average_sentiment: number;

    count: number;

    date: string;
  }
}

export interface AnalyticsGetCountByDateParams {
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
   * The time interval for aggregation.
   */
  interval?: 'day' | 'month' | 'week' | 'year';

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
}

export declare namespace Analytics {
  export {
    type AnalyticsGetCountByDateResponse as AnalyticsGetCountByDateResponse,
    type AnalyticsGetCountByDateParams as AnalyticsGetCountByDateParams,
  };
}
