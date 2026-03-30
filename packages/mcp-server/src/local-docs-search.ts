// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import MiniSearch from 'minisearch';
import * as fs from 'node:fs/promises';
import * as path from 'node:path';
import { getLogger } from './logger';

type MethodEntry = {
  name: string;
  endpoint: string;
  httpMethod: string;
  summary: string;
  description: string;
  stainlessPath: string;
  qualified: string;
  params?: string[];
  response?: string;
  markdown?: string;
};

type ProseChunk = {
  content: string;
  tag: string;
  sectionContext?: string;
  source?: string;
};

type MiniSearchDocument = {
  id: string;
  kind: 'http_method' | 'prose';
  name?: string;
  endpoint?: string;
  summary?: string;
  description?: string;
  qualified?: string;
  stainlessPath?: string;
  content?: string;
  sectionContext?: string;
  _original: Record<string, unknown>;
};

type SearchResult = {
  results: (string | Record<string, unknown>)[];
};

const EMBEDDED_METHODS: MethodEntry[] = [
  {
    name: 'list',
    endpoint: '/ext/v3/articles',
    httpMethod: 'get',
    summary: '',
    description:
      '### Search News Articles\n\nRetrieve articles matching the specified search criteria. Advanced queries and\nincremental checks (using publication/creation dates) are supported.',
    stainlessPath: '(resource) news.articles > (method) list',
    qualified: 'client.news.articles.list',
    params: [
      'category?: string[];',
      'company?: string[];',
      'country?: string[];',
      'disable_company_article_deduplication?: boolean;',
      'duns_number?: string[];',
      'global_ultimate?: string[];',
      'include_clustered_articles?: boolean;',
      'is_material?: boolean;',
      'language?: string[];',
      'max_creation_date?: string;',
      'max_publication_date?: string;',
      'min_creation_date?: string;',
      'min_publication_date?: string;',
      'next_key?: string;',
      'portfolio_id?: string[];',
      'query?: string;',
      'registration_number?: string[];',
      'saved_article_filter_id?: string;',
      'sentiment?: boolean;',
      'sorting?: string;',
      "sorting_order?: 'asc' | 'desc';",
    ],
    response:
      "{ categories: { is_material: boolean; name: string; sub_categories: category_tree[]; external_id?: string; priority?: number; }[]; company_articles: { categories: object[]; company: { country: country_enum; customer_reference: string; name: string; duns_number?: string; external_id?: string; global_ultimate_duns_number?: string; global_ultimate_name?: string; }; sentiment?: number; snippet?: string; snippet_en?: string; }[]; created_at: string; image_url: string; is_clustered: boolean; language: string; publication_datetime: string; snippet: string; snippet_en: string; source: { domain: string; name: string; url: string; }; sub_articles: { url: string; external_id?: string; }[]; title: string; title_en: string; updated_at: string; url: string; country?: string; external_id?: string; is_paywalled?: 'full' | 'partial' | ''; sentiment?: number; summary?: string; summary_en?: string; }",
    markdown:
      "## list\n\n`client.news.articles.list(category?: string[], company?: string[], country?: string[], disable_company_article_deduplication?: boolean, duns_number?: string[], global_ultimate?: string[], include_clustered_articles?: boolean, is_material?: boolean, language?: string[], max_creation_date?: string, max_publication_date?: string, min_creation_date?: string, min_publication_date?: string, next_key?: string, portfolio_id?: string[], query?: string, registration_number?: string[], saved_article_filter_id?: string, sentiment?: boolean, sorting?: string, sorting_order?: 'asc' | 'desc'): { categories: category_tree[]; company_articles: object[]; created_at: string; image_url: string; is_clustered: boolean; language: language_enum; publication_datetime: string; snippet: string; snippet_en: string; source: object; sub_articles: object[]; title: string; title_en: string; updated_at: string; url: string; country?: string; external_id?: string; is_paywalled?: 'full' | 'partial' | ''; sentiment?: number; summary?: string; summary_en?: string; }`\n\n**get** `/ext/v3/articles`\n\n### Search News Articles\n\nRetrieve articles matching the specified search criteria. Advanced queries and\nincremental checks (using publication/creation dates) are supported.\n\n### Parameters\n\n- `category?: string[]`\n  Filter by article Category IDs (UUIDs).\n\n- `company?: string[]`\n  Filter by internal Company UUIDs.\n\n- `country?: string[]`\n  Filter by ISO 2-letter Country Codes (e.g., 'US', 'GB').\n\n- `disable_company_article_deduplication?: boolean`\n  By default, companies with the same trade names are grouped and the best match is selected. Enable this to see all associated companies.\n\n- `duns_number?: string[]`\n  Filter by one or more 9-digit Dun & Bradstreet Numbers.\n\n- `global_ultimate?: string[]`\n  Filter by Global Ultimate DUNS Numbers.\n\n- `include_clustered_articles?: boolean`\n  Include articles that are part of a cluster (reprints or similar articles).\n\n- `is_material?: boolean`\n  Filter by materiality flag (relevance to business risk).\n\n- `language?: string[]`\n  Filter by ISO 2-letter Language Codes (e.g., 'en', 'nl').\n\n- `max_creation_date?: string`\n  Filter articles added to our database at or before this date/time.\n\n- `max_publication_date?: string`\n  Filter articles published at or before this date/time.\n\n- `min_creation_date?: string`\n  Filter articles added to our database at or after this date/time.\n\n- `min_publication_date?: string`\n  Filter articles published at or after this date/time.\n\n- `next_key?: string`\n  A cursor value used for pagination. Include the `next_key` value from your previous request to retrieve the subsequent page of results. If this value is `null`, the first page of results is returned.\n\n- `portfolio_id?: string[]`\n  Filter articles related to companies in specific Portfolios (UUIDs).\n\n- `query?: string`\n  Full-text search query for filtering articles by content.\n\n- `registration_number?: string[]`\n  Filter by local company registration numbers.\n\n- `saved_article_filter_id?: string`\n  Apply a previously saved set of article filters (UUID).\n\n- `sentiment?: boolean`\n  Filter by sentiment: `true` for positive, `false` for negative.\n\n- `sorting?: string`\n  Sort articles\n\n- `sorting_order?: 'asc' | 'desc'`\n  Sort order\n\n### Returns\n\n- `{ categories: { is_material: boolean; name: string; sub_categories: category_tree[]; external_id?: string; priority?: number; }[]; company_articles: { categories: object[]; company: { country: country_enum; customer_reference: string; name: string; duns_number?: string; external_id?: string; global_ultimate_duns_number?: string; global_ultimate_name?: string; }; sentiment?: number; snippet?: string; snippet_en?: string; }[]; created_at: string; image_url: string; is_clustered: boolean; language: string; publication_datetime: string; snippet: string; snippet_en: string; source: { domain: string; name: string; url: string; }; sub_articles: { url: string; external_id?: string; }[]; title: string; title_en: string; updated_at: string; url: string; country?: string; external_id?: string; is_paywalled?: 'full' | 'partial' | ''; sentiment?: number; summary?: string; summary_en?: string; }`\n  ### Article\n\nThe primary data structure for news articles. It provides comprehensive data,\nincluding: - Metadata (URLs, publication dates, languages, countries) - Content\n(titles, snippets, summaries - both original and translated) - Relationships\n(source, related companies, categories) - Analysis (sentiment, clustering status)\n\n  - `categories: { is_material: boolean; name: string; sub_categories: { is_material: boolean; name: string; sub_categories: category_tree[]; external_id?: string; priority?: number; }[]; external_id?: string; priority?: number; }[]`\n  - `company_articles: { categories: { is_material: boolean; name: string; sub_categories: object[]; external_id?: string; priority?: number; }[]; company: { country: string; customer_reference: string; name: string; duns_number?: string; external_id?: string; global_ultimate_duns_number?: string; global_ultimate_name?: string; }; sentiment?: number; snippet?: string; snippet_en?: string; }[]`\n  - `created_at: string`\n  - `image_url: string`\n  - `is_clustered: boolean`\n  - `language: string`\n  - `publication_datetime: string`\n  - `snippet: string`\n  - `snippet_en: string`\n  - `source: { domain: string; name: string; url: string; }`\n  - `sub_articles: { url: string; external_id?: string; }[]`\n  - `title: string`\n  - `title_en: string`\n  - `updated_at: string`\n  - `url: string`\n  - `country?: string`\n  - `external_id?: string`\n  - `is_paywalled?: 'full' | 'partial' | ''`\n  - `sentiment?: number`\n  - `summary?: string`\n  - `summary_en?: string`\n\n### Example\n\n```typescript\nimport BusinessRadar from '@businessradar/businessradar';\n\nconst client = new BusinessRadar();\n\n// Automatically fetches more pages as needed.\nfor await (const article of client.news.articles.list()) {\n  console.log(article);\n}\n```",
  },
  {
    name: 'create_feedback',
    endpoint: '/ext/v3/articles/feedback/',
    httpMethod: 'post',
    summary: '',
    description:
      '### Submit Article Feedback\n\nSubmit feedback for a specific article. This helps improve our analysis and\nrelevance.',
    stainlessPath: '(resource) news.articles > (method) create_feedback',
    qualified: 'client.news.articles.createFeedback',
    params: [
      'article: string;',
      'comment?: string;',
      'email?: string;',
      "feedback_type?: 'false_positive' | 'no_risk' | 'risk_confirmed';",
    ],
    response:
      "{ article: string; external_id: string; comment?: string; email?: string; feedback_type?: 'false_positive' | 'no_risk' | 'risk_confirmed'; }",
    markdown:
      "## create_feedback\n\n`client.news.articles.createFeedback(article: string, comment?: string, email?: string, feedback_type?: 'false_positive' | 'no_risk' | 'risk_confirmed'): { article: string; external_id: string; comment?: string; email?: string; feedback_type?: 'false_positive' | 'no_risk' | 'risk_confirmed'; }`\n\n**post** `/ext/v3/articles/feedback/`\n\n### Submit Article Feedback\n\nSubmit feedback for a specific article. This helps improve our analysis and\nrelevance.\n\n### Parameters\n\n- `article: string`\n\n- `comment?: string`\n\n- `email?: string`\n\n- `feedback_type?: 'false_positive' | 'no_risk' | 'risk_confirmed'`\n  * `false_positive` - False Positive\n* `no_risk` - No Risk\n* `risk_confirmed` - Risk Confirmed\n\n### Returns\n\n- `{ article: string; external_id: string; comment?: string; email?: string; feedback_type?: 'false_positive' | 'no_risk' | 'risk_confirmed'; }`\n  ### External Article Feedback\n\nAllows users to provide feedback on specific articles, including feedback type,\ncomments, and contact information.\n\n  - `article: string`\n  - `external_id: string`\n  - `comment?: string`\n  - `email?: string`\n  - `feedback_type?: 'false_positive' | 'no_risk' | 'risk_confirmed'`\n\n### Example\n\n```typescript\nimport BusinessRadar from '@businessradar/businessradar';\n\nconst client = new BusinessRadar();\n\nconst response = await client.news.articles.createFeedback({ article: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e' });\n\nconsole.log(response);\n```",
  },
  {
    name: 'list_saved_article_filters',
    endpoint: '/ext/v3/saved_article_filters',
    httpMethod: 'get',
    summary: '',
    description:
      '### Saved Article Filters\n\nRetrieve a list of all search filters saved by the current profile. These filters\ncan be applied to article search requests using the `saved_article_filter_id`\nparameter.',
    stainlessPath: '(resource) news.articles > (method) list_saved_article_filters',
    qualified: 'client.news.articles.listSavedArticleFilters',
    params: ['next_key?: string;'],
    response: '{ external_id: string; name: string; }',
    markdown:
      "## list_saved_article_filters\n\n`client.news.articles.listSavedArticleFilters(next_key?: string): { external_id: string; name: string; }`\n\n**get** `/ext/v3/saved_article_filters`\n\n### Saved Article Filters\n\nRetrieve a list of all search filters saved by the current profile. These filters\ncan be applied to article search requests using the `saved_article_filter_id`\nparameter.\n\n### Parameters\n\n- `next_key?: string`\n  A cursor value used for pagination. Include the `next_key` value from your previous request to retrieve the subsequent page of results. If this value is `null`, the first page of results is returned.\n\n### Returns\n\n- `{ external_id: string; name: string; }`\n  ### Saved Article Filter\n\nRepresents a named set of article search filters that can be reused.\n\n  - `external_id: string`\n  - `name: string`\n\n### Example\n\n```typescript\nimport BusinessRadar from '@businessradar/businessradar';\n\nconst client = new BusinessRadar();\n\n// Automatically fetches more pages as needed.\nfor await (const articleListSavedArticleFiltersResponse of client.news.articles.listSavedArticleFilters()) {\n  console.log(articleListSavedArticleFiltersResponse);\n}\n```",
  },
  {
    name: 'retrieve_related',
    endpoint: '/ext/v3/articles/{article_id}/related/',
    httpMethod: 'get',
    summary: '',
    description:
      '### Find Related Articles\n\nRetrieve a list of articles that are semantically similar to the specified article,\nranked by similarity distance.',
    stainlessPath: '(resource) news.articles > (method) retrieve_related',
    qualified: 'client.news.articles.retrieveRelated',
    params: ['article_id: string;'],
    response:
      "{ article: { categories: category_tree[]; company_articles: object[]; created_at: string; image_url: string; is_clustered: boolean; language: language_enum; publication_datetime: string; snippet: string; snippet_en: string; source: object; sub_articles: object[]; title: string; title_en: string; updated_at: string; url: string; country?: string; external_id?: string; is_paywalled?: 'full' | 'partial' | ''; sentiment?: number; summary?: string; summary_en?: string; }; distance: number; }[]",
    markdown:
      "## retrieve_related\n\n`client.news.articles.retrieveRelated(article_id: string): { article: article; distance: number; }[]`\n\n**get** `/ext/v3/articles/{article_id}/related/`\n\n### Find Related Articles\n\nRetrieve a list of articles that are semantically similar to the specified article,\nranked by similarity distance.\n\n### Parameters\n\n- `article_id: string`\n\n### Returns\n\n- `{ article: { categories: category_tree[]; company_articles: object[]; created_at: string; image_url: string; is_clustered: boolean; language: language_enum; publication_datetime: string; snippet: string; snippet_en: string; source: object; sub_articles: object[]; title: string; title_en: string; updated_at: string; url: string; country?: string; external_id?: string; is_paywalled?: 'full' | 'partial' | ''; sentiment?: number; summary?: string; summary_en?: string; }; distance: number; }[]`\n\n### Example\n\n```typescript\nimport BusinessRadar from '@businessradar/businessradar';\n\nconst client = new BusinessRadar();\n\nconst response = await client.news.articles.retrieveRelated('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e');\n\nconsole.log(response);\n```",
  },
  {
    name: 'get_count_by_date',
    endpoint: '/ext/v3/articles/analytics/dates/',
    httpMethod: 'get',
    summary: '',
    description:
      '### Get Article Aggregations\n\nRetrieve the number of articles and their average sentiment, grouped by date.',
    stainlessPath: '(resource) news.articles.analytics > (method) get_count_by_date',
    qualified: 'client.news.articles.analytics.getCountByDate',
    params: [
      'category?: string[];',
      'company?: string[];',
      'country?: string[];',
      'disable_company_article_deduplication?: boolean;',
      'duns_number?: string[];',
      'global_ultimate?: string[];',
      'include_clustered_articles?: boolean;',
      "interval?: 'day' | 'month' | 'week' | 'year';",
      'is_material?: boolean;',
      'language?: string[];',
      'max_creation_date?: string;',
      'max_publication_date?: string;',
      'min_creation_date?: string;',
      'min_publication_date?: string;',
      'portfolio_id?: string[];',
      'query?: string;',
      'registration_number?: string[];',
      'saved_article_filter_id?: string;',
      'sentiment?: boolean;',
    ],
    response: '{ average_sentiment: number; count: number; date: string; }[]',
    markdown:
      "## get_count_by_date\n\n`client.news.articles.analytics.getCountByDate(category?: string[], company?: string[], country?: string[], disable_company_article_deduplication?: boolean, duns_number?: string[], global_ultimate?: string[], include_clustered_articles?: boolean, interval?: 'day' | 'month' | 'week' | 'year', is_material?: boolean, language?: string[], max_creation_date?: string, max_publication_date?: string, min_creation_date?: string, min_publication_date?: string, portfolio_id?: string[], query?: string, registration_number?: string[], saved_article_filter_id?: string, sentiment?: boolean): { average_sentiment: number; count: number; date: string; }[]`\n\n**get** `/ext/v3/articles/analytics/dates/`\n\n### Get Article Aggregations\n\nRetrieve the number of articles and their average sentiment, grouped by date.\n\n### Parameters\n\n- `category?: string[]`\n  Filter by article Category IDs (UUIDs).\n\n- `company?: string[]`\n  Filter by internal Company UUIDs.\n\n- `country?: string[]`\n  Filter by ISO 2-letter Country Codes (e.g., 'US', 'GB').\n\n- `disable_company_article_deduplication?: boolean`\n  By default, companies with the same trade names are grouped and the best match is selected. Enable this to see all associated companies.\n\n- `duns_number?: string[]`\n  Filter by one or more 9-digit Dun & Bradstreet Numbers.\n\n- `global_ultimate?: string[]`\n  Filter by Global Ultimate DUNS Numbers.\n\n- `include_clustered_articles?: boolean`\n  Include articles that are part of a cluster (reprints or similar articles).\n\n- `interval?: 'day' | 'month' | 'week' | 'year'`\n  The time interval for aggregation.\n\n- `is_material?: boolean`\n  Filter by materiality flag (relevance to business risk).\n\n- `language?: string[]`\n  Filter by ISO 2-letter Language Codes (e.g., 'en', 'nl').\n\n- `max_creation_date?: string`\n  Filter articles added to our database at or before this date/time.\n\n- `max_publication_date?: string`\n  Filter articles published at or before this date/time.\n\n- `min_creation_date?: string`\n  Filter articles added to our database at or after this date/time.\n\n- `min_publication_date?: string`\n  Filter articles published at or after this date/time.\n\n- `portfolio_id?: string[]`\n  Filter articles related to companies in specific Portfolios (UUIDs).\n\n- `query?: string`\n  Full-text search query for filtering articles by content.\n\n- `registration_number?: string[]`\n  Filter by local company registration numbers.\n\n- `saved_article_filter_id?: string`\n  Apply a previously saved set of article filters (UUID).\n\n- `sentiment?: boolean`\n  Filter by sentiment: `true` for positive, `false` for negative.\n\n### Returns\n\n- `{ average_sentiment: number; count: number; date: string; }[]`\n\n### Example\n\n```typescript\nimport BusinessRadar from '@businessradar/businessradar';\n\nconst client = new BusinessRadar();\n\nconst response = await client.news.articles.analytics.getCountByDate();\n\nconsole.log(response);\n```",
  },
  {
    name: 'create',
    endpoint: '/ext/v3/articles/export/',
    httpMethod: 'post',
    summary: '',
    description:
      '### Export Articles (Asynchronous)\n\nRequest an asynchronous export of articles matching specific filters. Once\nrequested, Business Radar processes the export in the background.\n\nTo check the status and retrieve the download link, you can use the [GET\n/articles/export/{external_id}](/ext/v3/#/ext/ext_v3_articles_export_retrieve)\nendpoint.\n\nThe export process returns a reference to a JSON-Lines file stored on S3, which\nremains available for 7 days.\n\n*Limit: 25,000 articles per export.*',
    stainlessPath: '(resource) news.articles.export > (method) create',
    qualified: 'client.news.articles.export.create',
    params: [
      "file_type: 'PDF' | 'EXCEL' | 'JSONL';",
      "filters: { categories?: string[]; companies?: string[]; countries?: string[]; disable_company_article_deduplication?: boolean; duns_numbers?: string[]; global_ultimates?: string[]; include_clustered_articles?: boolean; industries?: string[]; is_material?: boolean; languages?: string[]; max_creation_date?: string; max_publication_date?: string; media_type?: 'GAZETTE' | 'MAINSTREAM'; min_creation_date?: string; min_publication_date?: string; parent_category?: string; portfolios?: string[]; query?: string; registration_numbers?: string[]; sentiment?: boolean; };",
    ],
    response:
      "{ created_at: string; export_type: 'NEWS' | 'BINDER' | 'COMPANIES' | 'REGISTRATIONS' | 'COMPLIANCE' | 'BILLING'; external_id: string; file_type: 'PDF' | 'EXCEL' | 'JSONL'; filters: { categories?: string[]; companies?: string[]; countries?: string[]; disable_company_article_deduplication?: boolean; duns_numbers?: string[]; global_ultimates?: string[]; include_clustered_articles?: boolean; industries?: string[]; is_material?: boolean; languages?: string[]; max_creation_date?: string; max_publication_date?: string; media_type?: 'GAZETTE' | 'MAINSTREAM'; min_creation_date?: string; min_publication_date?: string; parent_category?: string; portfolios?: string[]; query?: string; registration_numbers?: string[]; sentiment?: boolean; }; location: string; result_count: number; status: 'pending' | 'in_progress' | 'failed' | 'finished'; updated_at: string; }",
    markdown:
      "## create\n\n`client.news.articles.export.create(file_type: 'PDF' | 'EXCEL' | 'JSONL', filters: { categories?: string[]; companies?: string[]; countries?: string[]; disable_company_article_deduplication?: boolean; duns_numbers?: string[]; global_ultimates?: string[]; include_clustered_articles?: boolean; industries?: string[]; is_material?: boolean; languages?: string[]; max_creation_date?: string; max_publication_date?: string; media_type?: 'GAZETTE' | 'MAINSTREAM'; min_creation_date?: string; min_publication_date?: string; parent_category?: string; portfolios?: string[]; query?: string; registration_numbers?: string[]; sentiment?: boolean; }): { created_at: string; export_type: 'NEWS' | 'BINDER' | 'COMPANIES' | 'REGISTRATIONS' | 'COMPLIANCE' | 'BILLING'; external_id: string; file_type: data_export_file_type; filters: object; location: string; result_count: number; status: 'pending' | 'in_progress' | 'failed' | 'finished'; updated_at: string; }`\n\n**post** `/ext/v3/articles/export/`\n\n### Export Articles (Asynchronous)\n\nRequest an asynchronous export of articles matching specific filters. Once\nrequested, Business Radar processes the export in the background.\n\nTo check the status and retrieve the download link, you can use the [GET\n/articles/export/{external_id}](/ext/v3/#/ext/ext_v3_articles_export_retrieve)\nendpoint.\n\nThe export process returns a reference to a JSON-Lines file stored on S3, which\nremains available for 7 days.\n\n*Limit: 25,000 articles per export.*\n\n### Parameters\n\n- `file_type: 'PDF' | 'EXCEL' | 'JSONL'`\n  * `PDF` - PDF\n* `EXCEL` - Excel\n* `JSONL` - JSONL\n\n- `filters: { categories?: string[]; companies?: string[]; countries?: string[]; disable_company_article_deduplication?: boolean; duns_numbers?: string[]; global_ultimates?: string[]; include_clustered_articles?: boolean; industries?: string[]; is_material?: boolean; languages?: string[]; max_creation_date?: string; max_publication_date?: string; media_type?: 'GAZETTE' | 'MAINSTREAM'; min_creation_date?: string; min_publication_date?: string; parent_category?: string; portfolios?: string[]; query?: string; registration_numbers?: string[]; sentiment?: boolean; }`\n  ### Article Filters\n\nUsed to validate and process filters for article searches. Supports filtering by\nquery text, countries, languages, specific companies (DUNS), and portfolios.\n  - `categories?: string[]`\n  - `companies?: string[]`\n  - `countries?: string[]`\n  - `disable_company_article_deduplication?: boolean`\n  - `duns_numbers?: string[]`\n  - `global_ultimates?: string[]`\n  - `include_clustered_articles?: boolean`\n  - `industries?: string[]`\n  - `is_material?: boolean`\n  - `languages?: string[]`\n  - `max_creation_date?: string`\n  - `max_publication_date?: string`\n  - `media_type?: 'GAZETTE' | 'MAINSTREAM'`\n  - `min_creation_date?: string`\n  - `min_publication_date?: string`\n  - `parent_category?: string`\n  - `portfolios?: string[]`\n  - `query?: string`\n  - `registration_numbers?: string[]`\n  - `sentiment?: boolean`\n\n### Returns\n\n- `{ created_at: string; export_type: 'NEWS' | 'BINDER' | 'COMPANIES' | 'REGISTRATIONS' | 'COMPLIANCE' | 'BILLING'; external_id: string; file_type: 'PDF' | 'EXCEL' | 'JSONL'; filters: { categories?: string[]; companies?: string[]; countries?: string[]; disable_company_article_deduplication?: boolean; duns_numbers?: string[]; global_ultimates?: string[]; include_clustered_articles?: boolean; industries?: string[]; is_material?: boolean; languages?: string[]; max_creation_date?: string; max_publication_date?: string; media_type?: 'GAZETTE' | 'MAINSTREAM'; min_creation_date?: string; min_publication_date?: string; parent_category?: string; portfolios?: string[]; query?: string; registration_numbers?: string[]; sentiment?: boolean; }; location: string; result_count: number; status: 'pending' | 'in_progress' | 'failed' | 'finished'; updated_at: string; }`\n  Data Export Serializer.\n\n  - `created_at: string`\n  - `export_type: 'NEWS' | 'BINDER' | 'COMPANIES' | 'REGISTRATIONS' | 'COMPLIANCE' | 'BILLING'`\n  - `external_id: string`\n  - `file_type: 'PDF' | 'EXCEL' | 'JSONL'`\n  - `filters: { categories?: string[]; companies?: string[]; countries?: string[]; disable_company_article_deduplication?: boolean; duns_numbers?: string[]; global_ultimates?: string[]; include_clustered_articles?: boolean; industries?: string[]; is_material?: boolean; languages?: string[]; max_creation_date?: string; max_publication_date?: string; media_type?: 'GAZETTE' | 'MAINSTREAM'; min_creation_date?: string; min_publication_date?: string; parent_category?: string; portfolios?: string[]; query?: string; registration_numbers?: string[]; sentiment?: boolean; }`\n  - `location: string`\n  - `result_count: number`\n  - `status: 'pending' | 'in_progress' | 'failed' | 'finished'`\n  - `updated_at: string`\n\n### Example\n\n```typescript\nimport BusinessRadar from '@businessradar/businessradar';\n\nconst client = new BusinessRadar();\n\nconst articleExport = await client.news.articles.export.create({\n  file_type: 'PDF',\n  filters: {},\n});\n\nconsole.log(articleExport);\n```",
  },
  {
    name: 'retrieve',
    endpoint: '/ext/v3/articles/export/{external_id}',
    httpMethod: 'get',
    summary: '',
    description:
      '### Export Status & Details\n\nCheck the status of an ongoing export or retrieve the download link for a completed\nexport.',
    stainlessPath: '(resource) news.articles.export > (method) retrieve',
    qualified: 'client.news.articles.export.retrieve',
    params: ['external_id: string;'],
    response:
      "{ created_at: string; export_type: 'NEWS' | 'BINDER' | 'COMPANIES' | 'REGISTRATIONS' | 'COMPLIANCE' | 'BILLING'; external_id: string; file_type: 'PDF' | 'EXCEL' | 'JSONL'; filters: { categories?: string[]; companies?: string[]; countries?: string[]; disable_company_article_deduplication?: boolean; duns_numbers?: string[]; global_ultimates?: string[]; include_clustered_articles?: boolean; industries?: string[]; is_material?: boolean; languages?: string[]; max_creation_date?: string; max_publication_date?: string; media_type?: 'GAZETTE' | 'MAINSTREAM'; min_creation_date?: string; min_publication_date?: string; parent_category?: string; portfolios?: string[]; query?: string; registration_numbers?: string[]; sentiment?: boolean; }; location: string; result_count: number; status: 'pending' | 'in_progress' | 'failed' | 'finished'; updated_at: string; }",
    markdown:
      "## retrieve\n\n`client.news.articles.export.retrieve(external_id: string): { created_at: string; export_type: 'NEWS' | 'BINDER' | 'COMPANIES' | 'REGISTRATIONS' | 'COMPLIANCE' | 'BILLING'; external_id: string; file_type: data_export_file_type; filters: object; location: string; result_count: number; status: 'pending' | 'in_progress' | 'failed' | 'finished'; updated_at: string; }`\n\n**get** `/ext/v3/articles/export/{external_id}`\n\n### Export Status & Details\n\nCheck the status of an ongoing export or retrieve the download link for a completed\nexport.\n\n### Parameters\n\n- `external_id: string`\n\n### Returns\n\n- `{ created_at: string; export_type: 'NEWS' | 'BINDER' | 'COMPANIES' | 'REGISTRATIONS' | 'COMPLIANCE' | 'BILLING'; external_id: string; file_type: 'PDF' | 'EXCEL' | 'JSONL'; filters: { categories?: string[]; companies?: string[]; countries?: string[]; disable_company_article_deduplication?: boolean; duns_numbers?: string[]; global_ultimates?: string[]; include_clustered_articles?: boolean; industries?: string[]; is_material?: boolean; languages?: string[]; max_creation_date?: string; max_publication_date?: string; media_type?: 'GAZETTE' | 'MAINSTREAM'; min_creation_date?: string; min_publication_date?: string; parent_category?: string; portfolios?: string[]; query?: string; registration_numbers?: string[]; sentiment?: boolean; }; location: string; result_count: number; status: 'pending' | 'in_progress' | 'failed' | 'finished'; updated_at: string; }`\n  Data Export Serializer.\n\n  - `created_at: string`\n  - `export_type: 'NEWS' | 'BINDER' | 'COMPANIES' | 'REGISTRATIONS' | 'COMPLIANCE' | 'BILLING'`\n  - `external_id: string`\n  - `file_type: 'PDF' | 'EXCEL' | 'JSONL'`\n  - `filters: { categories?: string[]; companies?: string[]; countries?: string[]; disable_company_article_deduplication?: boolean; duns_numbers?: string[]; global_ultimates?: string[]; include_clustered_articles?: boolean; industries?: string[]; is_material?: boolean; languages?: string[]; max_creation_date?: string; max_publication_date?: string; media_type?: 'GAZETTE' | 'MAINSTREAM'; min_creation_date?: string; min_publication_date?: string; parent_category?: string; portfolios?: string[]; query?: string; registration_numbers?: string[]; sentiment?: boolean; }`\n  - `location: string`\n  - `result_count: number`\n  - `status: 'pending' | 'in_progress' | 'failed' | 'finished'`\n  - `updated_at: string`\n\n### Example\n\n```typescript\nimport BusinessRadar from '@businessradar/businessradar';\n\nconst client = new BusinessRadar();\n\nconst articleExport = await client.news.articles.export.retrieve('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e');\n\nconsole.log(articleExport);\n```",
  },
  {
    name: 'create',
    endpoint: '/ext/v3/companies',
    httpMethod: 'post',
    summary: '',
    description:
      '### Register Company (Asynchronous)\n\nRegister a new company to Business Radar using its identification details. Once\nposted, Business Radar processes the request in the background.\n\nTo check the progress and/or retrieve the final result, you can use the [GET\n/registrations/{registration_id}](/ext/v3/#/ext/ext_v3_registrations_retrieve)\nendpoint.\n\nIf the company is already registered, the existing registration will be\nreturned.',
    stainlessPath: '(resource) companies > (method) create',
    qualified: 'client.companies.create',
    params: [
      'company?: { external_id: string; };',
      'country?: string;',
      'customer_reference?: string;',
      'duns_number?: string;',
      'primary_name?: string;',
      'registration_number?: string;',
    ],
    response:
      '{ external_id: string; finished_at: string; progress: number; status: string; status_text: string; company?: { country: string; duns_number: string; external_id: string; name: string; }; country?: string; customer_reference?: string; duns_number?: string; primary_name?: string; registration_number?: string; }',
    markdown:
      "## create\n\n`client.companies.create(company?: { external_id: string; }, country?: string, customer_reference?: string, duns_number?: string, primary_name?: string, registration_number?: string): { external_id: string; finished_at: string; progress: number; status: string; status_text: string; company?: object; country?: string; customer_reference?: string; duns_number?: string; primary_name?: string; registration_number?: string; }`\n\n**post** `/ext/v3/companies`\n\n### Register Company (Asynchronous)\n\nRegister a new company to Business Radar using its identification details. Once\nposted, Business Radar processes the request in the background.\n\nTo check the progress and/or retrieve the final result, you can use the [GET\n/registrations/{registration_id}](/ext/v3/#/ext/ext_v3_registrations_retrieve)\nendpoint.\n\nIf the company is already registered, the existing registration will be\nreturned.\n\n### Parameters\n\n- `company?: { external_id: string; }`\n  ### Portfolio Company Detail (Simplified)\n\nA lightweight data structure for company identification (UUID, DUNS, Name, Country).\n  - `external_id: string`\n\n- `country?: string`\n\n- `customer_reference?: string`\n  Customer reference for the client to understand relationship.\n\n- `duns_number?: string`\n\n- `primary_name?: string`\n\n- `registration_number?: string`\n\n### Returns\n\n- `{ external_id: string; finished_at: string; progress: number; status: string; status_text: string; company?: { country: string; duns_number: string; external_id: string; name: string; }; country?: string; customer_reference?: string; duns_number?: string; primary_name?: string; registration_number?: string; }`\n  ### Company Registration\n\nHandles the registration of companies for monitoring. New companies can be\nidentified by DUNS number, local registration number, or name and country.\n\n  - `external_id: string`\n  - `finished_at: string`\n  - `progress: number`\n  - `status: string`\n  - `status_text: string`\n  - `company?: { country: string; duns_number: string; external_id: string; name: string; }`\n  - `country?: string`\n  - `customer_reference?: string`\n  - `duns_number?: string`\n  - `primary_name?: string`\n  - `registration_number?: string`\n\n### Example\n\n```typescript\nimport BusinessRadar from '@businessradar/businessradar';\n\nconst client = new BusinessRadar();\n\nconst registration = await client.companies.create();\n\nconsole.log(registration);\n```",
  },
  {
    name: 'retrieve',
    endpoint: '/ext/v3/companies/{external_id}',
    httpMethod: 'get',
    summary: '',
    description:
      '### Retrieve Company Information\n\nFetch detailed information about a specific company using its `external_id`.',
    stainlessPath: '(resource) companies > (method) retrieve',
    qualified: 'client.companies.retrieve',
    params: ['external_id: string;'],
    response:
      '{ country: string; duns_number: string; founding_date: string; industry_codes: { code: string; description?: string; }[]; name: string; primary_industry_codes: { code: string; description?: string; }[]; registration_numbers: { description: string; number: string; type: number; }[]; slug: string; social_description: string; social_logo: string; address_latitude?: number; address_longitude?: number; address_number?: string; address_phone?: string; address_place?: string; address_postal?: string; address_region?: string; address_street?: string; article_count?: number; external_id?: string; is_out_of_business?: boolean; linkedin_url?: string; publication_count?: number; report_count?: number; review_average_score?: number; review_count?: number; ticker_symbol?: string; website_domain?: string; website_icon_url?: string; website_url?: string; }',
    markdown:
      "## retrieve\n\n`client.companies.retrieve(external_id: string): { country: country_enum; duns_number: string; founding_date: string; industry_codes: industry_code[]; name: string; primary_industry_codes: industry_code[]; registration_numbers: object[]; slug: string; social_description: string; social_logo: string; address_latitude?: number; address_longitude?: number; address_number?: string; address_phone?: string; address_place?: string; address_postal?: string; address_region?: string; address_street?: string; article_count?: number; external_id?: string; is_out_of_business?: boolean; linkedin_url?: string; publication_count?: number; report_count?: number; review_average_score?: number; review_count?: number; ticker_symbol?: string; website_domain?: string; website_icon_url?: string; website_url?: string; }`\n\n**get** `/ext/v3/companies/{external_id}`\n\n### Retrieve Company Information\n\nFetch detailed information about a specific company using its `external_id`.\n\n### Parameters\n\n- `external_id: string`\n\n### Returns\n\n- `{ country: string; duns_number: string; founding_date: string; industry_codes: { code: string; description?: string; }[]; name: string; primary_industry_codes: { code: string; description?: string; }[]; registration_numbers: { description: string; number: string; type: number; }[]; slug: string; social_description: string; social_logo: string; address_latitude?: number; address_longitude?: number; address_number?: string; address_phone?: string; address_place?: string; address_postal?: string; address_region?: string; address_street?: string; article_count?: number; external_id?: string; is_out_of_business?: boolean; linkedin_url?: string; publication_count?: number; report_count?: number; review_average_score?: number; review_count?: number; ticker_symbol?: string; website_domain?: string; website_icon_url?: string; website_url?: string; }`\n  ### Company\n\nDetailed representation of a company in Business Radar.\n\nThis data includes: - Basic info (name, country, website) - Identification (DUNS,\nexternal ID, registration numbers) - Industry classifications - Geographical data\n(address, coordinates) - Social and online presence - Summary metrics (article\ncount, review scores, etc.)\n\n  - `country: string`\n  - `duns_number: string`\n  - `founding_date: string`\n  - `industry_codes: { code: string; description?: string; }[]`\n  - `name: string`\n  - `primary_industry_codes: { code: string; description?: string; }[]`\n  - `registration_numbers: { description: string; number: string; type: number; }[]`\n  - `slug: string`\n  - `social_description: string`\n  - `social_logo: string`\n  - `address_latitude?: number`\n  - `address_longitude?: number`\n  - `address_number?: string`\n  - `address_phone?: string`\n  - `address_place?: string`\n  - `address_postal?: string`\n  - `address_region?: string`\n  - `address_street?: string`\n  - `article_count?: number`\n  - `external_id?: string`\n  - `is_out_of_business?: boolean`\n  - `linkedin_url?: string`\n  - `publication_count?: number`\n  - `report_count?: number`\n  - `review_average_score?: number`\n  - `review_count?: number`\n  - `ticker_symbol?: string`\n  - `website_domain?: string`\n  - `website_icon_url?: string`\n  - `website_url?: string`\n\n### Example\n\n```typescript\nimport BusinessRadar from '@businessradar/businessradar';\n\nconst client = new BusinessRadar();\n\nconst company = await client.companies.retrieve('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e');\n\nconsole.log(company);\n```",
  },
  {
    name: 'list',
    endpoint: '/ext/v3/companies',
    httpMethod: 'get',
    summary: '',
    description:
      '### Search Companies\n\nSearch for companies across internal and external databases.\n\n- If `query` and an optional `country` are provided, the search is primarily\nconducted via Dun & Bradstreet.\n\n- If other filters (like `portfolio_id`) are provided, the search is limited to\nour internal database.\n\nThe results include an `external_id` if the company is already registered in\nBusiness Radar.',
    stainlessPath: '(resource) companies > (method) list',
    qualified: 'client.companies.list',
    params: [
      'country?: string[];',
      'duns_number?: string[];',
      'next_key?: string;',
      'portfolio_id?: string[];',
      'query?: string;',
      'registration_number?: string[];',
      'website_url?: string;',
    ],
    response:
      '{ address_place: string; address_postal: string; address_region: string; address_street: string; country: string; duns_number: string; external_id: string; industry_codes: { code: string; description: string; }[]; name: string; social_logo: string; website_icon_url: string; is_out_of_business?: boolean; }',
    markdown:
      "## list\n\n`client.companies.list(country?: string[], duns_number?: string[], next_key?: string, portfolio_id?: string[], query?: string, registration_number?: string[], website_url?: string): { address_place: string; address_postal: string; address_region: string; address_street: string; country: string; duns_number: string; external_id: string; industry_codes: object[]; name: string; social_logo: string; website_icon_url: string; is_out_of_business?: boolean; }`\n\n**get** `/ext/v3/companies`\n\n### Search Companies\n\nSearch for companies across internal and external databases.\n\n- If `query` and an optional `country` are provided, the search is primarily\nconducted via Dun & Bradstreet.\n\n- If other filters (like `portfolio_id`) are provided, the search is limited to\nour internal database.\n\nThe results include an `external_id` if the company is already registered in\nBusiness Radar.\n\n### Parameters\n\n- `country?: string[]`\n  ISO 2-letter Country Code (e.g., NL, US)\n\n- `duns_number?: string[]`\n  9-digit Dun And Bradstreet Number (can be multiple)\n\n- `next_key?: string`\n  A cursor value used for pagination. Include the `next_key` value from your previous request to retrieve the subsequent page of results. If this value is `null`, the first page of results is returned.\n\n- `portfolio_id?: string[]`\n  Filter companies belonging to specific Portfolio IDs (UUID)\n\n- `query?: string`\n  Custom search query to text search all companies.\n\n- `registration_number?: string[]`\n  Local Registration Number (can be multiple)\n\n- `website_url?: string`\n  Website URL to search for the company\n\n### Returns\n\n- `{ address_place: string; address_postal: string; address_region: string; address_street: string; country: string; duns_number: string; external_id: string; industry_codes: { code: string; description: string; }[]; name: string; social_logo: string; website_icon_url: string; is_out_of_business?: boolean; }`\n  ### Universal Company Data\n\nHandles company data from both internal and external sources (e.g., Dun &\nBradstreet). Provides a unified representation of a company.\n\n- **DUNS Number**: Unique 9-digit identifier. - **External ID**: Internal unique\nidentifier if the company is registered. - **Industry Codes**: List of industry\nclassifications.\n\n  - `address_place: string`\n  - `address_postal: string`\n  - `address_region: string`\n  - `address_street: string`\n  - `country: string`\n  - `duns_number: string`\n  - `external_id: string`\n  - `industry_codes: { code: string; description: string; }[]`\n  - `name: string`\n  - `social_logo: string`\n  - `website_icon_url: string`\n  - `is_out_of_business?: boolean`\n\n### Example\n\n```typescript\nimport BusinessRadar from '@businessradar/businessradar';\n\nconst client = new BusinessRadar();\n\n// Automatically fetches more pages as needed.\nfor await (const companyListResponse of client.companies.list()) {\n  console.log(companyListResponse);\n}\n```",
  },
  {
    name: 'create_feedback',
    endpoint: '/ext/v3/companies/feedback/',
    httpMethod: 'post',
    summary: '',
    description:
      '### Submit Company Feedback\n\nSubmit feedback about a specific company. If feedback already exists for\nthe same company and profile, the existing record is updated.\n\nOptionally provide a `notification_email` to be notified when the feedback\nis resolved.',
    stainlessPath: '(resource) companies > (method) create_feedback',
    qualified: 'client.companies.createFeedback',
    params: [
      'company: string;',
      'feedback_type: string;',
      'comment?: string;',
      'notification_email?: string;',
      'trade_name?: string;',
    ],
    response:
      '{ company: string; feedback_type: string; comment?: string; notification_email?: string; trade_name?: string; }',
    markdown:
      "## create_feedback\n\n`client.companies.createFeedback(company: string, feedback_type: string, comment?: string, notification_email?: string, trade_name?: string): { company: string; feedback_type: string; comment?: string; notification_email?: string; trade_name?: string; }`\n\n**post** `/ext/v3/companies/feedback/`\n\n### Submit Company Feedback\n\nSubmit feedback about a specific company. If feedback already exists for\nthe same company and profile, the existing record is updated.\n\nOptionally provide a `notification_email` to be notified when the feedback\nis resolved.\n\n### Parameters\n\n- `company: string`\n\n- `feedback_type: string`\n  * `NOT_ENOUGH_NEWS` - Not Enough News\n* `COMPANY_NAME_OUTDATED` - Company Name Outdated\n* `INCORRECT_COMPANY_WEBSITE` - Incorrect Company Website\n* `MISSING_REGISTRATION_NUMBER` - Missing Registration Number\n* `MISSING_TRADE_NAME` - Missing Trade Name\n* `INCORRECT_TRADE_NAME` - Incorrect Trade Name\n* `NOT_ENOUGH_REVIEWS` - Not Enough Reviews\n* `OUTDATED_CORPORATE_LINKAGE` - Outdated Corporate Linkage\n* `INCORRECT_CORPORATE_LINKAGE` - Incorrect Corporate Linkage\n* `OTHER` - Other\n\n- `comment?: string`\n\n- `notification_email?: string`\n  Email address to notify when feedback is resolved.\n\n- `trade_name?: string`\n\n### Returns\n\n- `{ company: string; feedback_type: string; comment?: string; notification_email?: string; trade_name?: string; }`\n  ### Company Feedback\n\nSubmit feedback about a specific company, such as outdated information,\nmissing data, or incorrect details.\n\n  - `company: string`\n  - `feedback_type: string`\n  - `comment?: string`\n  - `notification_email?: string`\n  - `trade_name?: string`\n\n### Example\n\n```typescript\nimport BusinessRadar from '@businessradar/businessradar';\n\nconst client = new BusinessRadar();\n\nconst response = await client.companies.createFeedback({ company: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', feedback_type: 'NOT_ENOUGH_NEWS' });\n\nconsole.log(response);\n```",
  },
  {
    name: 'create_missing_company_investigation',
    endpoint: '/ext/v3/companies/investigations',
    httpMethod: 'post',
    summary: '',
    description:
      '### Submit Missing Company Investigation (Asynchronous)\n\nSubmit a new investigation for a company that could not be found. Once\nsubmitted, Business Radar processes the investigation in the background.\n\nTo check the progress and/or retrieve the final result, you can use the GET\nendpoint.',
    stainlessPath: '(resource) companies > (method) create_missing_company_investigation',
    qualified: 'client.companies.createMissingCompanyInvestigation',
    params: [
      'country: string;',
      'legal_name: string;',
      'address_number?: string;',
      'address_phone?: string;',
      'address_place?: string;',
      'address_postal?: string;',
      'address_region?: string;',
      'address_street?: string;',
      'description?: string;',
      'officer_name?: string;',
      'officer_title?: string;',
      'trade_name?: string;',
      'website_url?: string;',
    ],
    response:
      '{ company_external_id: string; country: string; created_at: string; external_id: string; last_status_update: string; legal_name: string; status: string; address_number?: string; address_phone?: string; address_place?: string; address_postal?: string; address_region?: string; address_street?: string; description?: string; officer_name?: string; officer_title?: string; trade_name?: string; website_url?: string; }',
    markdown:
      "## create_missing_company_investigation\n\n`client.companies.createMissingCompanyInvestigation(country: string, legal_name: string, address_number?: string, address_phone?: string, address_place?: string, address_postal?: string, address_region?: string, address_street?: string, description?: string, officer_name?: string, officer_title?: string, trade_name?: string, website_url?: string): { company_external_id: string; country: country_enum; created_at: string; external_id: string; last_status_update: string; legal_name: string; status: string; address_number?: string; address_phone?: string; address_place?: string; address_postal?: string; address_region?: string; address_street?: string; description?: string; officer_name?: string; officer_title?: string; trade_name?: string; website_url?: string; }`\n\n**post** `/ext/v3/companies/investigations`\n\n### Submit Missing Company Investigation (Asynchronous)\n\nSubmit a new investigation for a company that could not be found. Once\nsubmitted, Business Radar processes the investigation in the background.\n\nTo check the progress and/or retrieve the final result, you can use the GET\nendpoint.\n\n### Parameters\n\n- `country: string`\n  * `AF` - Afghanistan\n* `AX` - Aland Islands\n* `AL` - Albania\n* `DZ` - Algeria\n* `AS` - American Samoa\n* `AD` - Andorra\n* `AO` - Angola\n* `AI` - Anguilla\n* `AQ` - Antarctica\n* `AG` - Antigua and Barbuda\n* `AR` - Argentina\n* `AM` - Armenia\n* `AW` - Aruba\n* `AU` - Australia\n* `AT` - Austria\n* `AZ` - Azerbaijan\n* `BS` - Bahamas\n* `BH` - Bahrain\n* `BD` - Bangladesh\n* `BB` - Barbados\n* `BY` - Belarus\n* `BE` - Belgium\n* `BZ` - Belize\n* `BJ` - Benin\n* `BM` - Bermuda\n* `BT` - Bhutan\n* `BO` - Bolivia\n* `BQ` - Bonaire\n* `BA` - Bosnia and Herzegovina\n* `BW` - Botswana\n* `BV` - Bouvet Island\n* `BR` - Brazil\n* `IO` - British Indian Ocean Territory\n* `BN` - Brunei Darussalam\n* `BG` - Bulgaria\n* `BF` - Burkina Faso\n* `BI` - Burundi\n* `CV` - Cabo Verde\n* `KH` - Cambodia\n* `CM` - Cameroon\n* `CA` - Canada\n* `KY` - Cayman Islands\n* `CF` - Central African Republic\n* `TD` - Chad\n* `CL` - Chile\n* `CN` - China\n* `CX` - Christmas Island\n* `CC` - Cocos Keeling Islands\n* `CO` - Colombia\n* `KM` - Comoros\n* `CG` - Congo\n* `CD` - Congo Democratic Republic\n* `CK` - Cook Islands\n* `CR` - Costa Rica\n* `CI` - Cote d'Ivoire\n* `HR` - Croatia\n* `CU` - Cuba\n* `CW` - Curacao\n* `CY` - Cyprus\n* `CZ` - Czechia\n* `DK` - Denmark\n* `DJ` - Djibouti\n* `DM` - Dominica\n* `DO` - Dominican Republic\n* `EC` - Ecuador\n* `EG` - Egypt\n* `SV` - El Salvador\n* `GQ` - Equatorial Guinea\n* `ER` - Eritrea\n* `EE` - Estonia\n* `SZ` - Eswatini\n* `ET` - Ethiopia\n* `FK` - Falkland Islands\n* `FO` - Faroe Islands\n* `FJ` - Fiji\n* `FI` - Finland\n* `FR` - France\n* `GF` - French Guiana\n* `PF` - French Polynesia\n* `TF` - French Southern Territories\n* `GA` - Gabon\n* `GM` - Gambia\n* `GE` - Georgia\n* `DE` - Germany\n* `GH` - Ghana\n* `GI` - Gibraltar\n* `GR` - Greece\n* `GL` - Greenland\n* `GD` - Grenada\n* `GP` - Guadeloupe\n* `GU` - Guam\n* `GT` - Guatemala\n* `GG` - Guernsey\n* `GN` - Guinea\n* `GW` - Guinea-Bissau\n* `GY` - Guyana\n* `HT` - Haiti\n* `HM` - Heard Island and McDonald Islands\n* `VA` - Holy See\n* `HN` - Honduras\n* `HK` - Hong Kong\n* `HU` - Hungary\n* `IS` - Iceland\n* `IN` - India\n* `ID` - Indonesia\n* `IR` - Iran (Islamic Republic of)\n* `IQ` - Iraq\n* `IE` - Ireland\n* `IM` - Isle of Man\n* `IL` - Israel\n* `IT` - Italy\n* `JM` - Jamaica\n* `JP` - Japan\n* `JE` - Jersey\n* `JO` - Jordan\n* `KZ` - Kazakhstan\n* `KE` - Kenya\n* `KI` - Kiribati\n* `KP` - Korea (the Democratic People's Republic of)\n* `KR` - Korea (the Republic of)\n* `KW` - Kuwait\n* `KG` - Kyrgyzstan\n* `LA` - Lao People's Democratic Republic\n* `LV` - Latvia\n* `LB` - Lebanon\n* `LS` - Lesotho\n* `LR` - Liberia\n* `LY` - Libya\n* `LI` - Liechtenstein\n* `LT` - Lithuania\n* `LU` - Luxembourg\n* `MO` - Macao\n* `MG` - Madagascar\n* `MW` - Malawi\n* `MY` - Malaysia\n* `MV` - Maldives\n* `ML` - Mali\n* `MT` - Malta\n* `MH` - Marshall Islands\n* `MQ` - Martinique\n* `MR` - Mauritania\n* `MU` - Mauritius\n* `YT` - Mayotte\n* `MX` - Mexico\n* `FM` - Micronesia\n* `MD` - Moldova\n* `MC` - Monaco\n* `MN` - Mongolia\n* `ME` - Montenegro\n* `MS` - Montserrat\n* `MA` - Morocco\n* `MZ` - Mozambique\n* `MM` - Myanmar\n* `NA` - Namibia\n* `NR` - Nauru\n* `NP` - Nepal\n* `NL` - Netherlands\n* `NC` - New Caledonia\n* `NZ` - New Zealand\n* `NI` - Nicaragua\n* `NE` - Niger\n* `NG` - Nigeria\n* `NU` - Niue\n* `NF` - Norfolk Island\n* `MK` - North Macedonia\n* `MP` - Northern Mariana Islands\n* `NO` - Norway\n* `OM` - Oman\n* `PK` - Pakistan\n* `PW` - Palau\n* `PS` - Palestine, State of\n* `PA` - Panama\n* `PG` - Papua New Guinea\n* `PY` - Paraguay\n* `PE` - Peru\n* `PH` - Philippines\n* `PN` - Pitcairn\n* `PL` - Poland\n* `PT` - Portugal\n* `PR` - Puerto Rico\n* `QA` - Qatar\n* `RE` - Réunion\n* `RO` - Romania\n* `RU` - Russian Federation\n* `RW` - Rwanda\n* `BL` - Saint Barthélemy\n* `SH` - Saint Helena\n* `KN` - Saint Kitts and Nevis\n* `LC` - Saint Lucia\n* `MF` - Saint Martin\n* `PM` - Saint Pierre and Miquelon\n* `VC` - Saint Vincent and the Grenadines\n* `WS` - Samoa\n* `SM` - San Marino\n* `ST` - Sao Tome and Principe\n* `SA` - Saudi Arabia\n* `SN` - Senegal\n* `RS` - Serbia\n* `SC` - Seychelles\n* `SL` - Sierra Leone\n* `SG` - Singapore\n* `SX` - Sint Maarten\n* `SK` - Slovakia\n* `SI` - Slovenia\n* `SB` - Solomon Islands\n* `SO` - Somalia\n* `ZA` - South Africa\n* `GS` - South Georgia and the South Sandwich Islands\n* `SS` - South Sudan\n* `ES` - Spain\n* `LK` - Sri Lanka\n* `SD` - Sudan\n* `SR` - Suriname\n* `SJ` - Svalbard and Jan Mayen\n* `SE` - Sweden\n* `CH` - Switzerland\n* `SY` - Syrian Arab Republic\n* `TW` - Taiwan\n* `TJ` - Tajikistan\n* `TZ` - Tanzania\n* `TH` - Thailand\n* `TL` - Timor-Leste\n* `TG` - Togo\n* `TK` - Tokelau\n* `TO` - Tonga\n* `TT` - Trinidad and Tobago\n* `TN` - Tunisia\n* `TR` - Turkey\n* `TM` - Turkmenistan\n* `TC` - Turks and Caicos Islands\n* `TV` - Tuvalu\n* `UG` - Uganda\n* `UA` - Ukraine\n* `AE` - United Arab Emirates\n* `GB` - United Kingdom\n* `UM` - United States Minor Outlying Islands\n* `US` - United States of America\n* `UY` - Uruguay\n* `UZ` - Uzbekistan\n* `VU` - Vanuatu\n* `VE` - Venezuela\n* `VN` - Viet Nam\n* `VG` - Virgin Islands\n* `VI` - Virgin Islands\n* `WF` - Wallis and Futuna\n* `EH` - Western Sahara\n* `YE` - Yemen\n* `ZM` - Zambia\n* `ZW` - Zimbabwe\n\n- `legal_name: string`\n  Official name of the company as registered in legal documents.\n\n- `address_number?: string`\n\n- `address_phone?: string`\n  Phone number should include international code prefix, e.g., +31.\n\n- `address_place?: string`\n\n- `address_postal?: string`\n\n- `address_region?: string`\n\n- `address_street?: string`\n\n- `description?: string`\n  Any additional notes or details about the company.\n\n- `officer_name?: string`\n  Name of the primary officer or CEO of the company.\n\n- `officer_title?: string`\n  Title or position of the named officer in the company.\n\n- `trade_name?: string`\n  Alternate name the company might use in its operations, distinct from the legal name.\n\n- `website_url?: string`\n  Provide the official website of the company if available.\n\n### Returns\n\n- `{ company_external_id: string; country: string; created_at: string; external_id: string; last_status_update: string; legal_name: string; status: string; address_number?: string; address_phone?: string; address_place?: string; address_postal?: string; address_region?: string; address_street?: string; description?: string; officer_name?: string; officer_title?: string; trade_name?: string; website_url?: string; }`\n  ### Missing Company Investigation\n\nUsed to request and track investigations for companies not currently in the\ndatabase. This is typically used when a search for a company yields no results,\nallowing users to provide known details for a manual or automated investigation.\n\n  - `company_external_id: string`\n  - `country: string`\n  - `created_at: string`\n  - `external_id: string`\n  - `last_status_update: string`\n  - `legal_name: string`\n  - `status: string`\n  - `address_number?: string`\n  - `address_phone?: string`\n  - `address_place?: string`\n  - `address_postal?: string`\n  - `address_region?: string`\n  - `address_street?: string`\n  - `description?: string`\n  - `officer_name?: string`\n  - `officer_title?: string`\n  - `trade_name?: string`\n  - `website_url?: string`\n\n### Example\n\n```typescript\nimport BusinessRadar from '@businessradar/businessradar';\n\nconst client = new BusinessRadar();\n\nconst response = await client.companies.createMissingCompanyInvestigation({ country: 'AF', legal_name: 'x' });\n\nconsole.log(response);\n```",
  },
  {
    name: 'list_attribute_changes',
    endpoint: '/ext/v3/companies/attribute_changes',
    httpMethod: 'get',
    summary: '',
    description:
      '### List Company Updates\n\nRetrieve a list of attribute changes for companies. This allows monitoring how\ncompany data has evolved over time.',
    stainlessPath: '(resource) companies > (method) list_attribute_changes',
    qualified: 'client.companies.listAttributeChanges',
    params: ['max_created_at?: string;', 'min_created_at?: string;', 'next_key?: string;'],
    response:
      '{ attribute: string; company_external_id: string; created_at: string; new_value?: string; old_value?: string; }',
    markdown:
      "## list_attribute_changes\n\n`client.companies.listAttributeChanges(max_created_at?: string, min_created_at?: string, next_key?: string): { attribute: string; company_external_id: string; created_at: string; new_value?: string; old_value?: string; }`\n\n**get** `/ext/v3/companies/attribute_changes`\n\n### List Company Updates\n\nRetrieve a list of attribute changes for companies. This allows monitoring how\ncompany data has evolved over time.\n\n### Parameters\n\n- `max_created_at?: string`\n  Filter updates created at or before this time.\n\n- `min_created_at?: string`\n  Filter updates created at or after this time.\n\n- `next_key?: string`\n  A cursor value used for pagination. Include the `next_key` value from your previous request to retrieve the subsequent page of results. If this value is `null`, the first page of results is returned.\n\n### Returns\n\n- `{ attribute: string; company_external_id: string; created_at: string; new_value?: string; old_value?: string; }`\n  ### Company Attribute Change\n\nTracks changes to specific attributes of a company over time. Used for monitoring\nupdates and maintaining a history of company data.\n\n  - `attribute: string`\n  - `company_external_id: string`\n  - `created_at: string`\n  - `new_value?: string`\n  - `old_value?: string`\n\n### Example\n\n```typescript\nimport BusinessRadar from '@businessradar/businessradar';\n\nconst client = new BusinessRadar();\n\n// Automatically fetches more pages as needed.\nfor await (const companyListAttributeChangesResponse of client.companies.listAttributeChanges()) {\n  console.log(companyListAttributeChangesResponse);\n}\n```",
  },
  {
    name: 'list_missing_company_investigations',
    endpoint: '/ext/v3/companies/investigations',
    httpMethod: 'get',
    summary: '',
    description:
      '### Missing Company Investigations\n\nList existing investigations or submit a new one for a company that could not be\nfound.',
    stainlessPath: '(resource) companies > (method) list_missing_company_investigations',
    qualified: 'client.companies.listMissingCompanyInvestigations',
    params: ['next_key?: string;'],
    response:
      '{ company_external_id: string; country: string; created_at: string; external_id: string; last_status_update: string; legal_name: string; status: string; address_number?: string; address_phone?: string; address_place?: string; address_postal?: string; address_region?: string; address_street?: string; description?: string; officer_name?: string; officer_title?: string; trade_name?: string; website_url?: string; }',
    markdown:
      "## list_missing_company_investigations\n\n`client.companies.listMissingCompanyInvestigations(next_key?: string): { company_external_id: string; country: country_enum; created_at: string; external_id: string; last_status_update: string; legal_name: string; status: string; address_number?: string; address_phone?: string; address_place?: string; address_postal?: string; address_region?: string; address_street?: string; description?: string; officer_name?: string; officer_title?: string; trade_name?: string; website_url?: string; }`\n\n**get** `/ext/v3/companies/investigations`\n\n### Missing Company Investigations\n\nList existing investigations or submit a new one for a company that could not be\nfound.\n\n### Parameters\n\n- `next_key?: string`\n  A cursor value used for pagination. Include the `next_key` value from your previous request to retrieve the subsequent page of results. If this value is `null`, the first page of results is returned.\n\n### Returns\n\n- `{ company_external_id: string; country: string; created_at: string; external_id: string; last_status_update: string; legal_name: string; status: string; address_number?: string; address_phone?: string; address_place?: string; address_postal?: string; address_region?: string; address_street?: string; description?: string; officer_name?: string; officer_title?: string; trade_name?: string; website_url?: string; }`\n  ### Missing Company Investigation\n\nUsed to request and track investigations for companies not currently in the\ndatabase. This is typically used when a search for a company yields no results,\nallowing users to provide known details for a manual or automated investigation.\n\n  - `company_external_id: string`\n  - `country: string`\n  - `created_at: string`\n  - `external_id: string`\n  - `last_status_update: string`\n  - `legal_name: string`\n  - `status: string`\n  - `address_number?: string`\n  - `address_phone?: string`\n  - `address_place?: string`\n  - `address_postal?: string`\n  - `address_region?: string`\n  - `address_street?: string`\n  - `description?: string`\n  - `officer_name?: string`\n  - `officer_title?: string`\n  - `trade_name?: string`\n  - `website_url?: string`\n\n### Example\n\n```typescript\nimport BusinessRadar from '@businessradar/businessradar';\n\nconst client = new BusinessRadar();\n\n// Automatically fetches more pages as needed.\nfor await (const companyListMissingCompanyInvestigationsResponse of client.companies.listMissingCompanyInvestigations()) {\n  console.log(companyListMissingCompanyInvestigationsResponse);\n}\n```",
  },
  {
    name: 'retrieve_missing_company_investigation',
    endpoint: '/ext/v3/companies/investigations/{external_id}',
    httpMethod: 'get',
    summary: '',
    description:
      '### Retrieve Missing Company Investigation\n\nFetch details about a specific missing company investigation using its\n`external_id`.',
    stainlessPath: '(resource) companies > (method) retrieve_missing_company_investigation',
    qualified: 'client.companies.retrieveMissingCompanyInvestigation',
    params: ['external_id: string;'],
    response:
      '{ company_external_id: string; country: string; created_at: string; external_id: string; last_status_update: string; legal_name: string; status: string; address_number?: string; address_phone?: string; address_place?: string; address_postal?: string; address_region?: string; address_street?: string; description?: string; officer_name?: string; officer_title?: string; trade_name?: string; website_url?: string; }',
    markdown:
      "## retrieve_missing_company_investigation\n\n`client.companies.retrieveMissingCompanyInvestigation(external_id: string): { company_external_id: string; country: country_enum; created_at: string; external_id: string; last_status_update: string; legal_name: string; status: string; address_number?: string; address_phone?: string; address_place?: string; address_postal?: string; address_region?: string; address_street?: string; description?: string; officer_name?: string; officer_title?: string; trade_name?: string; website_url?: string; }`\n\n**get** `/ext/v3/companies/investigations/{external_id}`\n\n### Retrieve Missing Company Investigation\n\nFetch details about a specific missing company investigation using its\n`external_id`.\n\n### Parameters\n\n- `external_id: string`\n\n### Returns\n\n- `{ company_external_id: string; country: string; created_at: string; external_id: string; last_status_update: string; legal_name: string; status: string; address_number?: string; address_phone?: string; address_place?: string; address_postal?: string; address_region?: string; address_street?: string; description?: string; officer_name?: string; officer_title?: string; trade_name?: string; website_url?: string; }`\n  ### Missing Company Investigation\n\nUsed to request and track investigations for companies not currently in the\ndatabase. This is typically used when a search for a company yields no results,\nallowing users to provide known details for a manual or automated investigation.\n\n  - `company_external_id: string`\n  - `country: string`\n  - `created_at: string`\n  - `external_id: string`\n  - `last_status_update: string`\n  - `legal_name: string`\n  - `status: string`\n  - `address_number?: string`\n  - `address_phone?: string`\n  - `address_place?: string`\n  - `address_postal?: string`\n  - `address_region?: string`\n  - `address_street?: string`\n  - `description?: string`\n  - `officer_name?: string`\n  - `officer_title?: string`\n  - `trade_name?: string`\n  - `website_url?: string`\n\n### Example\n\n```typescript\nimport BusinessRadar from '@businessradar/businessradar';\n\nconst client = new BusinessRadar();\n\nconst response = await client.companies.retrieveMissingCompanyInvestigation('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e');\n\nconsole.log(response);\n```",
  },
  {
    name: 'retrieve_registration',
    endpoint: '/ext/v3/registrations/{registration_id}',
    httpMethod: 'get',
    summary: '',
    description:
      '### Retrieve Registration Information\n\nFetch details about a specific company registration request using its\n`registration_id`.',
    stainlessPath: '(resource) companies > (method) retrieve_registration',
    qualified: 'client.companies.retrieveRegistration',
    params: ['registration_id: string;'],
    response:
      '{ external_id: string; finished_at: string; progress: number; status: string; status_text: string; company?: { country: string; duns_number: string; external_id: string; name: string; }; country?: string; customer_reference?: string; duns_number?: string; primary_name?: string; registration_number?: string; }',
    markdown:
      "## retrieve_registration\n\n`client.companies.retrieveRegistration(registration_id: string): { external_id: string; finished_at: string; progress: number; status: string; status_text: string; company?: object; country?: string; customer_reference?: string; duns_number?: string; primary_name?: string; registration_number?: string; }`\n\n**get** `/ext/v3/registrations/{registration_id}`\n\n### Retrieve Registration Information\n\nFetch details about a specific company registration request using its\n`registration_id`.\n\n### Parameters\n\n- `registration_id: string`\n\n### Returns\n\n- `{ external_id: string; finished_at: string; progress: number; status: string; status_text: string; company?: { country: string; duns_number: string; external_id: string; name: string; }; country?: string; customer_reference?: string; duns_number?: string; primary_name?: string; registration_number?: string; }`\n  ### Company Registration\n\nHandles the registration of companies for monitoring. New companies can be\nidentified by DUNS number, local registration number, or name and country.\n\n  - `external_id: string`\n  - `finished_at: string`\n  - `progress: number`\n  - `status: string`\n  - `status_text: string`\n  - `company?: { country: string; duns_number: string; external_id: string; name: string; }`\n  - `country?: string`\n  - `customer_reference?: string`\n  - `duns_number?: string`\n  - `primary_name?: string`\n  - `registration_number?: string`\n\n### Example\n\n```typescript\nimport BusinessRadar from '@businessradar/businessradar';\n\nconst client = new BusinessRadar();\n\nconst registration = await client.companies.retrieveRegistration('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e');\n\nconsole.log(registration);\n```",
  },
  {
    name: 'create',
    endpoint: '/ext/v3/compliance',
    httpMethod: 'post',
    summary: '',
    description:
      '### Create Compliance Check (Asynchronous)\n\nInitiate a new compliance screening using one of two methods:\n\n1. **Company-based screening**: Provide a `company_id` to screen the company.\nOptionally enable screening of related entities (UBOs and directors) via\n`ubo_screening_enabled` and `directors_screening_enabled`. You can optionally\ninclude a list of additional `entities` to be screened alongside the company.\n\n2. **Custom entity screening**: Provide a list of `entities` without a\n`company_id` to screen specific individuals or organizations that are not\nnecessarily affiliated with a company in our database.\n\nOnce posted, Business Radar processes the request in the background.\n\nTo check the progress and/or retrieve the final result, you can use the [GET\n/compliance/{external_id}](/ext/v3/#/ext/ext_v3_compliance_retrieve) endpoint.',
    stainlessPath: '(resource) compliance > (method) create',
    qualified: 'client.compliance.create',
    params: [
      'company_id?: string;',
      'directors_screening_enabled?: boolean;',
      "entities?: { name: string; aliases?: string[]; country?: string; date_of_birth?: string; entity_type?: 'individual' | 'company'; first_name?: string; last_name?: string; middle_name?: string; }[];",
      'name?: string;',
      'ownership_screening_threshold?: number;',
      'ubo_screening_enabled?: boolean;',
    ],
    response: '{ external_id: string; }',
    markdown:
      "## create\n\n`client.compliance.create(company_id?: string, directors_screening_enabled?: boolean, entities?: { name: string; aliases?: string[]; country?: string; date_of_birth?: string; entity_type?: 'individual' | 'company'; first_name?: string; last_name?: string; middle_name?: string; }[], name?: string, ownership_screening_threshold?: number, ubo_screening_enabled?: boolean): { external_id: string; }`\n\n**post** `/ext/v3/compliance`\n\n### Create Compliance Check (Asynchronous)\n\nInitiate a new compliance screening using one of two methods:\n\n1. **Company-based screening**: Provide a `company_id` to screen the company.\nOptionally enable screening of related entities (UBOs and directors) via\n`ubo_screening_enabled` and `directors_screening_enabled`. You can optionally\ninclude a list of additional `entities` to be screened alongside the company.\n\n2. **Custom entity screening**: Provide a list of `entities` without a\n`company_id` to screen specific individuals or organizations that are not\nnecessarily affiliated with a company in our database.\n\nOnce posted, Business Radar processes the request in the background.\n\nTo check the progress and/or retrieve the final result, you can use the [GET\n/compliance/{external_id}](/ext/v3/#/ext/ext_v3_compliance_retrieve) endpoint.\n\n### Parameters\n\n- `company_id?: string`\n\n- `directors_screening_enabled?: boolean`\n  If directors should be screened.\n\n- `entities?: { name: string; aliases?: string[]; country?: string; date_of_birth?: string; entity_type?: 'individual' | 'company'; first_name?: string; last_name?: string; middle_name?: string; }[]`\n\n- `name?: string`\n  Custom name for this compliance check.\n\n- `ownership_screening_threshold?: number`\n  The threshold for ultimate ownership to enable for screening.\n\n- `ubo_screening_enabled?: boolean`\n  If enabled, UBOs discovered for the company will be screened.\n\n### Returns\n\n- `{ external_id: string; }`\n  ### Compliance Check\n\nUsed for creating a minimal compliance check record.\n\n  - `external_id: string`\n\n### Example\n\n```typescript\nimport BusinessRadar from '@businessradar/businessradar';\n\nconst client = new BusinessRadar();\n\nconst compliance = await client.compliance.create();\n\nconsole.log(compliance);\n```",
  },
  {
    name: 'retrieve',
    endpoint: '/ext/v3/compliance/{external_id}',
    httpMethod: 'get',
    summary: '',
    description:
      '### Compliance Check Status\n\nCheck the current status, progress, and high-level scores of a specific compliance\ncheck.',
    stainlessPath: '(resource) compliance > (method) retrieve',
    qualified: 'client.compliance.retrieve',
    params: ['external_id: string;'],
    response:
      "{ entities: { aliases: string[]; entity_role: 'ubo' | 'director' | 'company' | 'manually_added'; entity_type: 'individual' | 'company'; external_id: string; name: string; status: 'on_hold' | 'queued' | 'in_progress' | 'completed' | 'skipped' | 'failed'; ubo: { name: string; beneficial_ownership_percentage?: number; birth_date?: string; degree_of_separation?: number; direct_ownership_percentage?: number; implied_beneficial_ownership_percentage?: number; implied_direct_ownership_percentage?: number; implied_indirect_ownership_percentage?: number; indirect_ownership_percentage?: number; is_beneficiary?: boolean; is_person_with_significant_control?: boolean; }; country?: string; gender?: 'male' | 'female' | ''; }[]; external_id: string; progress: number; activity_score?: 'low' | 'medium' | 'high' | ''; adverse_media_score?: 'low' | 'medium' | 'high' | ''; compliance_score?: 'low' | 'medium' | 'high' | ''; country_score?: 'low' | 'medium' | 'high' | ''; name?: string; pep_score?: 'low' | 'medium' | 'high' | ''; sanction_score?: 'low' | 'medium' | 'high' | ''; status?: 'pending' | 'queued' | 'in_progress' | 'searching_directors' | 'completed' | 'failed'; }",
    markdown:
      "## retrieve\n\n`client.compliance.retrieve(external_id: string): { entities: object[]; external_id: string; progress: number; activity_score?: 'low' | 'medium' | 'high' | ''; adverse_media_score?: 'low' | 'medium' | 'high' | ''; compliance_score?: 'low' | 'medium' | 'high' | ''; country_score?: 'low' | 'medium' | 'high' | ''; name?: string; pep_score?: 'low' | 'medium' | 'high' | ''; sanction_score?: 'low' | 'medium' | 'high' | ''; status?: 'pending' | 'queued' | 'in_progress' | 'searching_directors' | 'completed' | 'failed'; }`\n\n**get** `/ext/v3/compliance/{external_id}`\n\n### Compliance Check Status\n\nCheck the current status, progress, and high-level scores of a specific compliance\ncheck.\n\n### Parameters\n\n- `external_id: string`\n\n### Returns\n\n- `{ entities: { aliases: string[]; entity_role: 'ubo' | 'director' | 'company' | 'manually_added'; entity_type: 'individual' | 'company'; external_id: string; name: string; status: 'on_hold' | 'queued' | 'in_progress' | 'completed' | 'skipped' | 'failed'; ubo: { name: string; beneficial_ownership_percentage?: number; birth_date?: string; degree_of_separation?: number; direct_ownership_percentage?: number; implied_beneficial_ownership_percentage?: number; implied_direct_ownership_percentage?: number; implied_indirect_ownership_percentage?: number; indirect_ownership_percentage?: number; is_beneficiary?: boolean; is_person_with_significant_control?: boolean; }; country?: string; gender?: 'male' | 'female' | ''; }[]; external_id: string; progress: number; activity_score?: 'low' | 'medium' | 'high' | ''; adverse_media_score?: 'low' | 'medium' | 'high' | ''; compliance_score?: 'low' | 'medium' | 'high' | ''; country_score?: 'low' | 'medium' | 'high' | ''; name?: string; pep_score?: 'low' | 'medium' | 'high' | ''; sanction_score?: 'low' | 'medium' | 'high' | ''; status?: 'pending' | 'queued' | 'in_progress' | 'searching_directors' | 'completed' | 'failed'; }`\n\n  - `entities: { aliases: string[]; entity_role: 'ubo' | 'director' | 'company' | 'manually_added'; entity_type: 'individual' | 'company'; external_id: string; name: string; status: 'on_hold' | 'queued' | 'in_progress' | 'completed' | 'skipped' | 'failed'; ubo: { name: string; beneficial_ownership_percentage?: number; birth_date?: string; degree_of_separation?: number; direct_ownership_percentage?: number; implied_beneficial_ownership_percentage?: number; implied_direct_ownership_percentage?: number; implied_indirect_ownership_percentage?: number; indirect_ownership_percentage?: number; is_beneficiary?: boolean; is_person_with_significant_control?: boolean; }; country?: string; gender?: 'male' | 'female' | ''; }[]`\n  - `external_id: string`\n  - `progress: number`\n  - `activity_score?: 'low' | 'medium' | 'high' | ''`\n  - `adverse_media_score?: 'low' | 'medium' | 'high' | ''`\n  - `compliance_score?: 'low' | 'medium' | 'high' | ''`\n  - `country_score?: 'low' | 'medium' | 'high' | ''`\n  - `name?: string`\n  - `pep_score?: 'low' | 'medium' | 'high' | ''`\n  - `sanction_score?: 'low' | 'medium' | 'high' | ''`\n  - `status?: 'pending' | 'queued' | 'in_progress' | 'searching_directors' | 'completed' | 'failed'`\n\n### Example\n\n```typescript\nimport BusinessRadar from '@businessradar/businessradar';\n\nconst client = new BusinessRadar();\n\nconst compliance = await client.compliance.retrieve('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e');\n\nconsole.log(compliance);\n```",
  },
  {
    name: 'list_results',
    endpoint: '/ext/v3/compliance/{external_id}/results',
    httpMethod: 'get',
    summary: '',
    description:
      '### List Compliance Results\n\nRetrieve all findings for a compliance check. Results can be filtered by entity,\ntype of finding (e.g., Sanction, PEP), and confidence score.',
    stainlessPath: '(resource) compliance > (method) list_results',
    qualified: 'client.compliance.listResults',
    params: [
      'external_id: string;',
      'entity?: string;',
      'exclude_automated_false_positives?: boolean;',
      'min_confidence?: number;',
      'next_key?: string;',
      "order?: 'asc' | 'desc';",
      "result_type?: 'adverse_media' | 'enforcement' | 'govt_owned' | 'pep' | 'sanction';",
      "sorting?: 'confidence' | 'created_at' | 'source_date';",
    ],
    response:
      "{ addresses: { city?: string; country?: string; postal_code?: string; street?: string; }[]; automated_false_positive_rating: string; automated_false_positive_rating_comments: string; created_at: string; entity: { aliases: string[]; entity_role: 'ubo' | 'director' | 'company' | 'manually_added'; entity_type: 'individual' | 'company'; external_id: string; name: string; status: 'on_hold' | 'queued' | 'in_progress' | 'completed' | 'skipped' | 'failed'; ubo: object; country?: string; gender?: 'male' | 'female' | ''; }; external_id: string; name: string; result_type: 'sanction' | 'pep' | 'adverse_media' | 'enforcement' | 'govt_owned'; sources: { url: string; description?: string; document?: string; domain?: string; publication_date?: string; title?: string; }[]; tags: { tag: string; }[]; confidence?: number; formatted_text?: string; formatted_text_en?: string; formatted_title?: string; formatted_title_en?: string; image?: string; language?: string; source_date?: string; source_name?: string; text?: string; text_en?: string; title?: string; title_en?: string; url?: string; }",
    markdown:
      "## list_results\n\n`client.compliance.listResults(external_id: string, entity?: string, exclude_automated_false_positives?: boolean, min_confidence?: number, next_key?: string, order?: 'asc' | 'desc', result_type?: 'adverse_media' | 'enforcement' | 'govt_owned' | 'pep' | 'sanction', sorting?: 'confidence' | 'created_at' | 'source_date'): { addresses: object[]; automated_false_positive_rating: string; automated_false_positive_rating_comments: string; created_at: string; entity: object; external_id: string; name: string; result_type: 'sanction' | 'pep' | 'adverse_media' | 'enforcement' | 'govt_owned'; sources: object[]; tags: object[]; confidence?: number; formatted_text?: string; formatted_text_en?: string; formatted_title?: string; formatted_title_en?: string; image?: string; language?: string; source_date?: string; source_name?: string; text?: string; text_en?: string; title?: string; title_en?: string; url?: string; }`\n\n**get** `/ext/v3/compliance/{external_id}/results`\n\n### List Compliance Results\n\nRetrieve all findings for a compliance check. Results can be filtered by entity,\ntype of finding (e.g., Sanction, PEP), and confidence score.\n\n### Parameters\n\n- `external_id: string`\n\n- `entity?: string`\n  Filter by entity external ID\n\n- `exclude_automated_false_positives?: boolean`\n  Filter out automated false positive rated results\n\n- `min_confidence?: number`\n  Filter by minimum confidence score (0.0 - 1.0)\n\n- `next_key?: string`\n  A cursor value used for pagination. Include the `next_key` value from your previous request to retrieve the subsequent page of results. If this value is `null`, the first page of results is returned.\n\n- `order?: 'asc' | 'desc'`\n  Sorting order\n\n- `result_type?: 'adverse_media' | 'enforcement' | 'govt_owned' | 'pep' | 'sanction'`\n  Filter by result type\n\n- `sorting?: 'confidence' | 'created_at' | 'source_date'`\n  Sorting field\n\n### Returns\n\n- `{ addresses: { city?: string; country?: string; postal_code?: string; street?: string; }[]; automated_false_positive_rating: string; automated_false_positive_rating_comments: string; created_at: string; entity: { aliases: string[]; entity_role: 'ubo' | 'director' | 'company' | 'manually_added'; entity_type: 'individual' | 'company'; external_id: string; name: string; status: 'on_hold' | 'queued' | 'in_progress' | 'completed' | 'skipped' | 'failed'; ubo: { name: string; beneficial_ownership_percentage?: number; birth_date?: string; degree_of_separation?: number; direct_ownership_percentage?: number; implied_beneficial_ownership_percentage?: number; implied_direct_ownership_percentage?: number; implied_indirect_ownership_percentage?: number; indirect_ownership_percentage?: number; is_beneficiary?: boolean; is_person_with_significant_control?: boolean; }; country?: string; gender?: 'male' | 'female' | ''; }; external_id: string; name: string; result_type: 'sanction' | 'pep' | 'adverse_media' | 'enforcement' | 'govt_owned'; sources: { url: string; description?: string; document?: string; domain?: string; publication_date?: string; title?: string; }[]; tags: { tag: string; }[]; confidence?: number; formatted_text?: string; formatted_text_en?: string; formatted_title?: string; formatted_title_en?: string; image?: string; language?: string; source_date?: string; source_name?: string; text?: string; text_en?: string; title?: string; title_en?: string; url?: string; }`\n  Compliance entity result.\n\n  - `addresses: { city?: string; country?: string; postal_code?: string; street?: string; }[]`\n  - `automated_false_positive_rating: string`\n  - `automated_false_positive_rating_comments: string`\n  - `created_at: string`\n  - `entity: { aliases: string[]; entity_role: 'ubo' | 'director' | 'company' | 'manually_added'; entity_type: 'individual' | 'company'; external_id: string; name: string; status: 'on_hold' | 'queued' | 'in_progress' | 'completed' | 'skipped' | 'failed'; ubo: { name: string; beneficial_ownership_percentage?: number; birth_date?: string; degree_of_separation?: number; direct_ownership_percentage?: number; implied_beneficial_ownership_percentage?: number; implied_direct_ownership_percentage?: number; implied_indirect_ownership_percentage?: number; indirect_ownership_percentage?: number; is_beneficiary?: boolean; is_person_with_significant_control?: boolean; }; country?: string; gender?: 'male' | 'female' | ''; }`\n  - `external_id: string`\n  - `name: string`\n  - `result_type: 'sanction' | 'pep' | 'adverse_media' | 'enforcement' | 'govt_owned'`\n  - `sources: { url: string; description?: string; document?: string; domain?: string; publication_date?: string; title?: string; }[]`\n  - `tags: { tag: string; }[]`\n  - `confidence?: number`\n  - `formatted_text?: string`\n  - `formatted_text_en?: string`\n  - `formatted_title?: string`\n  - `formatted_title_en?: string`\n  - `image?: string`\n  - `language?: string`\n  - `source_date?: string`\n  - `source_name?: string`\n  - `text?: string`\n  - `text_en?: string`\n  - `title?: string`\n  - `title_en?: string`\n  - `url?: string`\n\n### Example\n\n```typescript\nimport BusinessRadar from '@businessradar/businessradar';\n\nconst client = new BusinessRadar();\n\n// Automatically fetches more pages as needed.\nfor await (const complianceListResultsResponse of client.compliance.listResults('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e')) {\n  console.log(complianceListResultsResponse);\n}\n```",
  },
  {
    name: 'create',
    endpoint: '/ext/v3/portfolios',
    httpMethod: 'post',
    summary: '',
    description:
      '### Portfolios\n\nManage collections of companies. This view allows you to list existing portfolios\nassociated with your profile or create new ones.',
    stainlessPath: '(resource) portfolios > (method) create',
    qualified: 'client.portfolios.create',
    params: [
      'name: string;',
      'customer_reference?: string;',
      "default_permission?: 'view_only' | 'write' | 'admin' | 'owner' | '';",
    ],
    response:
      "{ external_id: string; name: string; customer_reference?: string; default_permission?: 'view_only' | 'write' | 'admin' | 'owner' | ''; }",
    markdown:
      "## create\n\n`client.portfolios.create(name: string, customer_reference?: string, default_permission?: 'view_only' | 'write' | 'admin' | 'owner' | ''): { external_id: string; name: string; customer_reference?: string; default_permission?: 'view_only' | 'write' | 'admin' | 'owner' | ''; }`\n\n**post** `/ext/v3/portfolios`\n\n### Portfolios\n\nManage collections of companies. This view allows you to list existing portfolios\nassociated with your profile or create new ones.\n\n### Parameters\n\n- `name: string`\n\n- `customer_reference?: string`\n  Customer reference for the client to understand relationship.\n\n- `default_permission?: 'view_only' | 'write' | 'admin' | 'owner' | ''`\n  Default permission for all users in organization.\n\n* `view_only` - Only Viewing Access\n* `write` - View and Write Access\n* `admin` - View, Write and Admin Access\n* `owner` - Portfolio Owner\n\n### Returns\n\n- `{ external_id: string; name: string; customer_reference?: string; default_permission?: 'view_only' | 'write' | 'admin' | 'owner' | ''; }`\n  ### Portfolio\n\nRepresents a collection of companies (a portfolio) managed by a user or profile.\nIncludes basic metadata and default permission settings.\n\n  - `external_id: string`\n  - `name: string`\n  - `customer_reference?: string`\n  - `default_permission?: 'view_only' | 'write' | 'admin' | 'owner' | ''`\n\n### Example\n\n```typescript\nimport BusinessRadar from '@businessradar/businessradar';\n\nconst client = new BusinessRadar();\n\nconst portfolio = await client.portfolios.create({ name: 'x' });\n\nconsole.log(portfolio);\n```",
  },
  {
    name: 'list',
    endpoint: '/ext/v3/portfolios',
    httpMethod: 'get',
    summary: '',
    description:
      '### Portfolios\n\nManage collections of companies. This view allows you to list existing portfolios\nassociated with your profile or create new ones.',
    stainlessPath: '(resource) portfolios > (method) list',
    qualified: 'client.portfolios.list',
    params: ['next_key?: string;'],
    response:
      "{ external_id: string; name: string; customer_reference?: string; default_permission?: 'view_only' | 'write' | 'admin' | 'owner' | ''; }",
    markdown:
      "## list\n\n`client.portfolios.list(next_key?: string): { external_id: string; name: string; customer_reference?: string; default_permission?: 'view_only' | 'write' | 'admin' | 'owner' | ''; }`\n\n**get** `/ext/v3/portfolios`\n\n### Portfolios\n\nManage collections of companies. This view allows you to list existing portfolios\nassociated with your profile or create new ones.\n\n### Parameters\n\n- `next_key?: string`\n  A cursor value used for pagination. Include the `next_key` value from your previous request to retrieve the subsequent page of results. If this value is `null`, the first page of results is returned.\n\n### Returns\n\n- `{ external_id: string; name: string; customer_reference?: string; default_permission?: 'view_only' | 'write' | 'admin' | 'owner' | ''; }`\n  ### Portfolio\n\nRepresents a collection of companies (a portfolio) managed by a user or profile.\nIncludes basic metadata and default permission settings.\n\n  - `external_id: string`\n  - `name: string`\n  - `customer_reference?: string`\n  - `default_permission?: 'view_only' | 'write' | 'admin' | 'owner' | ''`\n\n### Example\n\n```typescript\nimport BusinessRadar from '@businessradar/businessradar';\n\nconst client = new BusinessRadar();\n\n// Automatically fetches more pages as needed.\nfor await (const portfolio of client.portfolios.list()) {\n  console.log(portfolio);\n}\n```",
  },
  {
    name: 'create',
    endpoint: '/ext/v3/portfolios/{portfolio_id}/companies',
    httpMethod: 'post',
    summary: '',
    description:
      '### Register Portfolio Company (Asynchronous)\n\nRegister and add a new company to the portfolio. Once posted, Business Radar\nprocesses the request in the background.\n\nTo check the progress and/or retrieve the final result, you can use the [GET\n/registrations/{registration_id}](/ext/v3/#/ext/ext_v3_registrations_retrieve)\nendpoint.',
    stainlessPath: '(resource) portfolios.companies > (method) create',
    qualified: 'client.portfolios.companies.create',
    params: [
      'portfolio_id: string;',
      'company?: { external_id: string; };',
      'country?: string;',
      'customer_reference?: string;',
      'duns_number?: string;',
      'primary_name?: string;',
      'registration_number?: string;',
    ],
    response:
      '{ external_id: string; finished_at: string; progress: number; status: string; status_text: string; company?: { country: string; duns_number: string; external_id: string; name: string; }; country?: string; customer_reference?: string; duns_number?: string; primary_name?: string; registration_number?: string; }',
    markdown:
      "## create\n\n`client.portfolios.companies.create(portfolio_id: string, company?: { external_id: string; }, country?: string, customer_reference?: string, duns_number?: string, primary_name?: string, registration_number?: string): { external_id: string; finished_at: string; progress: number; status: string; status_text: string; company?: object; country?: string; customer_reference?: string; duns_number?: string; primary_name?: string; registration_number?: string; }`\n\n**post** `/ext/v3/portfolios/{portfolio_id}/companies`\n\n### Register Portfolio Company (Asynchronous)\n\nRegister and add a new company to the portfolio. Once posted, Business Radar\nprocesses the request in the background.\n\nTo check the progress and/or retrieve the final result, you can use the [GET\n/registrations/{registration_id}](/ext/v3/#/ext/ext_v3_registrations_retrieve)\nendpoint.\n\n### Parameters\n\n- `portfolio_id: string`\n\n- `company?: { external_id: string; }`\n  ### Portfolio Company Detail (Simplified)\n\nA lightweight data structure for company identification (UUID, DUNS, Name, Country).\n  - `external_id: string`\n\n- `country?: string`\n\n- `customer_reference?: string`\n  Customer reference for the client to understand relationship.\n\n- `duns_number?: string`\n\n- `primary_name?: string`\n\n- `registration_number?: string`\n\n### Returns\n\n- `{ external_id: string; finished_at: string; progress: number; status: string; status_text: string; company?: { country: string; duns_number: string; external_id: string; name: string; }; country?: string; customer_reference?: string; duns_number?: string; primary_name?: string; registration_number?: string; }`\n  ### Company Registration\n\nHandles the registration of companies for monitoring. New companies can be\nidentified by DUNS number, local registration number, or name and country.\n\n  - `external_id: string`\n  - `finished_at: string`\n  - `progress: number`\n  - `status: string`\n  - `status_text: string`\n  - `company?: { country: string; duns_number: string; external_id: string; name: string; }`\n  - `country?: string`\n  - `customer_reference?: string`\n  - `duns_number?: string`\n  - `primary_name?: string`\n  - `registration_number?: string`\n\n### Example\n\n```typescript\nimport BusinessRadar from '@businessradar/businessradar';\n\nconst client = new BusinessRadar();\n\nconst registration = await client.portfolios.companies.create('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e');\n\nconsole.log(registration);\n```",
  },
  {
    name: 'list',
    endpoint: '/ext/v3/portfolios/{portfolio_id}/companies',
    httpMethod: 'get',
    summary: '',
    description:
      '### Portfolio Companies\n\nManage companies within a specific portfolio. - **GET**: List all companies\ncurrently in the portfolio. - **POST**: Register and add a new company to the\nportfolio.',
    stainlessPath: '(resource) portfolios.companies > (method) list',
    qualified: 'client.portfolios.companies.list',
    params: ['portfolio_id: string;', 'next_key?: string;'],
    response:
      '{ company: { country: string; name: string; slug: string; social_description: string; social_logo: string; address_latitude?: number; address_longitude?: number; address_number?: string; address_phone?: string; address_place?: string; address_postal?: string; address_region?: string; address_street?: string; article_count?: number; duns_number?: string; external_id?: string; founding_date?: string; linkedin_url?: string; publication_count?: number; report_count?: number; review_average_score?: number; review_count?: number; ticker_symbol?: string; website_domain?: string; website_icon_url?: string; website_url?: string; }; created_at: string; customer_reference?: string; }',
    markdown:
      "## list\n\n`client.portfolios.companies.list(portfolio_id: string, next_key?: string): { company: object; created_at: string; customer_reference?: string; }`\n\n**get** `/ext/v3/portfolios/{portfolio_id}/companies`\n\n### Portfolio Companies\n\nManage companies within a specific portfolio. - **GET**: List all companies\ncurrently in the portfolio. - **POST**: Register and add a new company to the\nportfolio.\n\n### Parameters\n\n- `portfolio_id: string`\n\n- `next_key?: string`\n  A cursor value used for pagination. Include the `next_key` value from your previous request to retrieve the subsequent page of results. If this value is `null`, the first page of results is returned.\n\n### Returns\n\n- `{ company: { country: string; name: string; slug: string; social_description: string; social_logo: string; address_latitude?: number; address_longitude?: number; address_number?: string; address_phone?: string; address_place?: string; address_postal?: string; address_region?: string; address_street?: string; article_count?: number; duns_number?: string; external_id?: string; founding_date?: string; linkedin_url?: string; publication_count?: number; report_count?: number; review_average_score?: number; review_count?: number; ticker_symbol?: string; website_domain?: string; website_icon_url?: string; website_url?: string; }; created_at: string; customer_reference?: string; }`\n  ### Portfolio-Company\n\nRepresents the association between a company and a portfolio, including portfolio-\nspecific data such as `customer_reference`.\n\n  - `company: { country: string; name: string; slug: string; social_description: string; social_logo: string; address_latitude?: number; address_longitude?: number; address_number?: string; address_phone?: string; address_place?: string; address_postal?: string; address_region?: string; address_street?: string; article_count?: number; duns_number?: string; external_id?: string; founding_date?: string; linkedin_url?: string; publication_count?: number; report_count?: number; review_average_score?: number; review_count?: number; ticker_symbol?: string; website_domain?: string; website_icon_url?: string; website_url?: string; }`\n  - `created_at: string`\n  - `customer_reference?: string`\n\n### Example\n\n```typescript\nimport BusinessRadar from '@businessradar/businessradar';\n\nconst client = new BusinessRadar();\n\n// Automatically fetches more pages as needed.\nfor await (const companyListResponse of client.portfolios.companies.list('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e')) {\n  console.log(companyListResponse);\n}\n```",
  },
  {
    name: 'delete',
    endpoint: '/ext/v3/portfolios/{portfolio_id}/companies/{external_id}',
    httpMethod: 'delete',
    summary: '',
    description:
      '### Remove Portfolio Company\n\nRemove a company from a portfolio using its internal `external_id`.',
    stainlessPath: '(resource) portfolios.companies > (method) delete',
    qualified: 'client.portfolios.companies.delete',
    params: ['portfolio_id: string;', 'external_id: string;'],
    markdown:
      "## delete\n\n`client.portfolios.companies.delete(portfolio_id: string, external_id: string): void`\n\n**delete** `/ext/v3/portfolios/{portfolio_id}/companies/{external_id}`\n\n### Remove Portfolio Company\n\nRemove a company from a portfolio using its internal `external_id`.\n\n### Parameters\n\n- `portfolio_id: string`\n\n- `external_id: string`\n\n### Example\n\n```typescript\nimport BusinessRadar from '@businessradar/businessradar';\n\nconst client = new BusinessRadar();\n\nawait client.portfolios.companies.delete('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', { portfolio_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e' })\n```",
  },
];

const INDEX_OPTIONS = {
  fields: [
    'name',
    'endpoint',
    'summary',
    'description',
    'qualified',
    'stainlessPath',
    'content',
    'sectionContext',
  ],
  storeFields: ['kind', '_original'],
  searchOptions: {
    prefix: true,
    fuzzy: 0.2,
    boost: {
      name: 3,
      endpoint: 2,
      summary: 2,
      qualified: 2,
      content: 1,
    } as Record<string, number>,
  },
};

/**
 * Self-contained local search engine backed by MiniSearch.
 * Method data is embedded at SDK build time; prose documents
 * can be loaded from an optional docs directory at runtime.
 */
export class LocalDocsSearch {
  private methodIndex: MiniSearch<MiniSearchDocument>;
  private proseIndex: MiniSearch<MiniSearchDocument>;

  private constructor() {
    this.methodIndex = new MiniSearch<MiniSearchDocument>(INDEX_OPTIONS);
    this.proseIndex = new MiniSearch<MiniSearchDocument>(INDEX_OPTIONS);
  }

  static async create(opts?: { docsDir?: string }): Promise<LocalDocsSearch> {
    const instance = new LocalDocsSearch();
    instance.indexMethods(EMBEDDED_METHODS);
    if (opts?.docsDir) {
      await instance.loadDocsDirectory(opts.docsDir);
    }
    return instance;
  }

  // Note: Language is accepted for interface consistency with remote search, but currently has no
  // effect since this local search only supports TypeScript docs.
  search(props: {
    query: string;
    language?: string;
    detail?: string;
    maxResults?: number;
    maxLength?: number;
  }): SearchResult {
    const { query, detail = 'default', maxResults = 5, maxLength = 100_000 } = props;

    const useMarkdown = detail === 'verbose' || detail === 'high';

    // Search both indices and merge results by score
    const methodHits = this.methodIndex
      .search(query)
      .map((hit) => ({ ...hit, _kind: 'http_method' as const }));
    const proseHits = this.proseIndex.search(query).map((hit) => ({ ...hit, _kind: 'prose' as const }));
    const merged = [...methodHits, ...proseHits].sort((a, b) => b.score - a.score);
    const top = merged.slice(0, maxResults);

    const fullResults: (string | Record<string, unknown>)[] = [];

    for (const hit of top) {
      const original = (hit as Record<string, unknown>)['_original'];
      if (hit._kind === 'http_method') {
        const m = original as MethodEntry;
        if (useMarkdown && m.markdown) {
          fullResults.push(m.markdown);
        } else {
          fullResults.push({
            method: m.qualified,
            summary: m.summary,
            description: m.description,
            endpoint: `${m.httpMethod.toUpperCase()} ${m.endpoint}`,
            ...(m.params ? { params: m.params } : {}),
            ...(m.response ? { response: m.response } : {}),
          });
        }
      } else {
        const c = original as ProseChunk;
        fullResults.push({
          content: c.content,
          ...(c.source ? { source: c.source } : {}),
        });
      }
    }

    let totalLength = 0;
    const results: (string | Record<string, unknown>)[] = [];
    for (const result of fullResults) {
      const len = typeof result === 'string' ? result.length : JSON.stringify(result).length;
      totalLength += len;
      if (totalLength > maxLength) break;
      results.push(result);
    }

    if (results.length < fullResults.length) {
      results.unshift(`Truncated; showing ${results.length} of ${fullResults.length} results.`);
    }

    return { results };
  }

  private indexMethods(methods: MethodEntry[]): void {
    const docs: MiniSearchDocument[] = methods.map((m, i) => ({
      id: `method-${i}`,
      kind: 'http_method' as const,
      name: m.name,
      endpoint: m.endpoint,
      summary: m.summary,
      description: m.description,
      qualified: m.qualified,
      stainlessPath: m.stainlessPath,
      _original: m as unknown as Record<string, unknown>,
    }));
    if (docs.length > 0) {
      this.methodIndex.addAll(docs);
    }
  }

  private async loadDocsDirectory(docsDir: string): Promise<void> {
    let entries;
    try {
      entries = await fs.readdir(docsDir, { withFileTypes: true });
    } catch (err) {
      getLogger().warn({ err, docsDir }, 'Could not read docs directory');
      return;
    }

    const files = entries
      .filter((e) => e.isFile())
      .filter((e) => e.name.endsWith('.md') || e.name.endsWith('.markdown') || e.name.endsWith('.json'));

    for (const file of files) {
      try {
        const filePath = path.join(docsDir, file.name);
        const content = await fs.readFile(filePath, 'utf-8');

        if (file.name.endsWith('.json')) {
          const texts = extractTexts(JSON.parse(content));
          if (texts.length > 0) {
            this.indexProse(texts.join('\n\n'), file.name);
          }
        } else {
          this.indexProse(content, file.name);
        }
      } catch (err) {
        getLogger().warn({ err, file: file.name }, 'Failed to index docs file');
      }
    }
  }

  private indexProse(markdown: string, source: string): void {
    const chunks = chunkMarkdown(markdown);
    const baseId = this.proseIndex.documentCount;

    const docs: MiniSearchDocument[] = chunks.map((chunk, i) => ({
      id: `prose-${baseId + i}`,
      kind: 'prose' as const,
      content: chunk.content,
      ...(chunk.sectionContext != null ? { sectionContext: chunk.sectionContext } : {}),
      _original: { ...chunk, source } as unknown as Record<string, unknown>,
    }));

    if (docs.length > 0) {
      this.proseIndex.addAll(docs);
    }
  }
}

/** Lightweight markdown chunker — splits on headers, chunks by word count. */
function chunkMarkdown(markdown: string): { content: string; tag: string; sectionContext?: string }[] {
  // Strip YAML frontmatter
  const stripped = markdown.replace(/^---\n[\s\S]*?\n---\n?/, '');
  const lines = stripped.split('\n');

  const chunks: { content: string; tag: string; sectionContext?: string }[] = [];
  const headers: string[] = [];
  let current: string[] = [];

  const flush = () => {
    const text = current.join('\n').trim();
    if (!text) return;
    const sectionContext = headers.length > 0 ? headers.join(' > ') : undefined;
    // Split into ~200-word chunks
    const words = text.split(/\s+/);
    for (let i = 0; i < words.length; i += 200) {
      const slice = words.slice(i, i + 200).join(' ');
      if (slice) {
        chunks.push({ content: slice, tag: 'p', ...(sectionContext != null ? { sectionContext } : {}) });
      }
    }
    current = [];
  };

  for (const line of lines) {
    const headerMatch = line.match(/^(#{1,6})\s+(.+)/);
    if (headerMatch) {
      flush();
      const level = headerMatch[1]!.length;
      const text = headerMatch[2]!.trim();
      while (headers.length >= level) headers.pop();
      headers.push(text);
    } else {
      current.push(line);
    }
  }
  flush();

  return chunks;
}

/** Recursively extracts string values from a JSON structure. */
function extractTexts(data: unknown, depth = 0): string[] {
  if (depth > 10) return [];
  if (typeof data === 'string') return data.trim() ? [data] : [];
  if (Array.isArray(data)) return data.flatMap((item) => extractTexts(item, depth + 1));
  if (typeof data === 'object' && data !== null) {
    return Object.values(data).flatMap((v) => extractTexts(v, depth + 1));
  }
  return [];
}
