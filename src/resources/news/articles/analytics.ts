// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';

export class Analytics extends APIResource {
  /**
   * Get Count of Articles published by Date.
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
   * Article Date Aggregation Serializer.
   */
  export interface AnalyticsGetCountByDateResponseItem {
    average_sentiment: number;

    count: number;

    date: string;
  }
}

export interface AnalyticsGetCountByDateParams {
  /**
   * Category ID to filter articles
   */
  category?: Array<string>;

  /**
   * Company ID's
   */
  company?: Array<string>;

  /**
   * ISO 2-letter Country Code
   */
  country?: Array<string>;

  /**
   * By default companies with the same trade names are grouped and the best one is
   * picked, the other ones are not included. By disabling this the amount of company
   * articles will grow significantly.
   */
  disable_company_article_deduplication?: boolean;

  /**
   * 9-digit Dun And Bradstreet Number
   */
  duns_number?: Array<string>;

  /**
   * 9-digit Dun And Bradstreet Number
   */
  global_ultimate?: Array<string>;

  /**
   * Include clustered articles
   */
  include_clustered_articles?: boolean;

  interval?: 'day' | 'month' | 'week' | 'year';

  /**
   * Filter articles by materiality flag (true/false)
   */
  is_material?: boolean;

  /**
   * ISO 2-letter Language Code
   */
  language?: Array<string>;

  /**
   * Filter articles created before this date
   */
  max_creation_date?: string;

  /**
   * Filter articles published before this date
   */
  max_publication_date?: string;

  /**
   * Filter articles created after this date
   */
  min_creation_date?: string;

  /**
   * Filter articles published after this date
   */
  min_publication_date?: string;

  /**
   * Portfolio ID to filter articles
   */
  portfolio_id?: Array<string>;

  /**
   * Custom search filters to text search all articles.
   */
  query?: string;

  /**
   * Local Registration Number
   */
  registration_number?: Array<string>;

  /**
   * Filter articles on already saved article filter id
   */
  saved_article_filter_id?: string;

  /**
   * Filter articles with sentiment
   */
  sentiment?: boolean;
}

export declare namespace Analytics {
  export {
    type AnalyticsGetCountByDateResponse as AnalyticsGetCountByDateResponse,
    type AnalyticsGetCountByDateParams as AnalyticsGetCountByDateParams,
  };
}
