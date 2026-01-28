// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Export extends APIResource {
  /**
   * Export articles, get status using get Export details API.
   *
   * The export returns the location to an JSON-Lines file located on our S3 bucket.
   * The file is available for 7 days.
   *
   * There is a max restriction of 25.000 articles per export. No pagination
   * supported. For larger exports please contact support@businessradar.com
   */
  create(body: ExportCreateParams, options?: RequestOptions): APIPromise<ArticleExport> {
    return this._client.post('/ext/v3/articles/export/', { body, ...options });
  }

  /**
   * Export article details.
   */
  retrieve(externalID: string, options?: RequestOptions): APIPromise<ArticleExport> {
    return this._client.get(path`/ext/v3/articles/export/${externalID}`, options);
  }
}

/**
 * Data Export Serializer.
 */
export interface ArticleExport {
  created_at: string;

  /**
   * - `NEWS` - News
   * - `BINDER` - Binder
   * - `COMPANIES` - Companies
   * - `REGISTRATIONS` - Registrations
   * - `COMPLIANCE` - Compliance
   * - `BILLING` - Billing
   */
  export_type: 'NEWS' | 'BINDER' | 'COMPANIES' | 'REGISTRATIONS' | 'COMPLIANCE' | 'BILLING';

  external_id: string;

  /**
   * - `PDF` - PDF
   * - `EXCEL` - Excel
   * - `JSONL` - JSONL
   */
  file_type: DataExportFileType;

  /**
   * Article Filter Serializer.
   */
  filters: ArticleExport.Filters;

  /**
   * Location of exports
   */
  location: string | null;

  result_count: number | null;

  /**
   * - `pending` - Pending
   * - `in_progress` - In Progress
   * - `failed` - Failed
   * - `finished` - Finished
   */
  status: 'pending' | 'in_progress' | 'failed' | 'finished';

  updated_at: string;
}

export namespace ArticleExport {
  /**
   * Article Filter Serializer.
   */
  export interface Filters {
    categories?: Array<string> | null;

    companies?: Array<string> | null;

    countries?: Array<string> | null;

    disable_company_article_deduplication?: boolean;

    duns_numbers?: Array<string> | null;

    global_ultimates?: Array<string> | null;

    include_clustered_articles?: boolean;

    industries?: Array<string> | null;

    is_material?: boolean | null;

    languages?: Array<string> | null;

    max_creation_date?: string | null;

    max_publication_date?: string | null;

    media_type?: 'GAZETTE' | 'MAINSTREAM' | null;

    min_creation_date?: string | null;

    min_publication_date?: string | null;

    parent_category?: string | null;

    portfolios?: Array<string> | null;

    query?: string | null;

    registration_numbers?: Array<string> | null;

    sentiment?: boolean | null;
  }
}

/**
 * - `PDF` - PDF
 * - `EXCEL` - Excel
 * - `JSONL` - JSONL
 */
export type DataExportFileType = 'PDF' | 'EXCEL' | 'JSONL';

/**
 * - `GAZETTE` - GAZETTE
 * - `MAINSTREAM` - MAINSTREAM
 */
export type MediaTypeEnum = 'GAZETTE' | 'MAINSTREAM';

export interface ExportCreateParams {
  /**
   * - `PDF` - PDF
   * - `EXCEL` - Excel
   * - `JSONL` - JSONL
   */
  file_type: DataExportFileType;

  /**
   * Article Filter Serializer.
   */
  filters: ExportCreateParams.Filters;
}

export namespace ExportCreateParams {
  /**
   * Article Filter Serializer.
   */
  export interface Filters {
    categories?: Array<string> | null;

    companies?: Array<string> | null;

    countries?: Array<string> | null;

    disable_company_article_deduplication?: boolean;

    duns_numbers?: Array<string> | null;

    global_ultimates?: Array<string> | null;

    include_clustered_articles?: boolean;

    industries?: Array<string> | null;

    is_material?: boolean | null;

    languages?: Array<string> | null;

    max_creation_date?: string | null;

    max_publication_date?: string | null;

    media_type?: 'GAZETTE' | 'MAINSTREAM' | null;

    min_creation_date?: string | null;

    min_publication_date?: string | null;

    parent_category?: string | null;

    portfolios?: Array<string> | null;

    query?: string | null;

    registration_numbers?: Array<string> | null;

    sentiment?: boolean | null;
  }
}

export declare namespace Export {
  export {
    type ArticleExport as ArticleExport,
    type DataExportFileType as DataExportFileType,
    type MediaTypeEnum as MediaTypeEnum,
    type ExportCreateParams as ExportCreateParams,
  };
}
