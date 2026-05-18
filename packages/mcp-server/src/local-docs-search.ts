// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import MiniSearch from 'minisearch';
import * as fs from 'node:fs/promises';
import * as path from 'node:path';
import { getLogger } from './logger';

type PerLanguageData = {
  method?: string;
  example?: string;
};

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
  perLanguage?: Record<string, PerLanguageData>;
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
    perLanguage: {
      typescript: {
        method: 'client.news.articles.list',
        example:
          "import BusinessRadar from '@businessradar/businessradar';\n\nconst client = new BusinessRadar({\n  apiKey: process.env['BUSINESSRADAR_API_KEY'], // This is the default and can be omitted\n});\n\n// Automatically fetches more pages as needed.\nfor await (const article of client.news.articles.list()) {\n  console.log(article.external_id);\n}",
      },
      python: {
        method: 'news.articles.list',
        example:
          'import os\nfrom businessradar import BusinessRadar\n\nclient = BusinessRadar(\n    api_key=os.environ.get("BUSINESSRADAR_API_KEY"),  # This is the default and can be omitted\n)\npage = client.news.articles.list()\npage = page.results[0]\nprint(page.external_id)',
      },
      php: {
        method: 'news->articles->list',
        example:
          "<?php\n\nrequire_once dirname(__DIR__) . '/vendor/autoload.php';\n\n$client = new Client(apiKey: 'My API Key');\n\n$page = $client->news->articles->list(\n  category: ['182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e'],\n  company: ['182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e'],\n  country: ['string'],\n  disableCompanyArticleDeduplication: true,\n  dunsNumber: ['string'],\n  globalUltimate: ['string'],\n  includeClusteredArticles: true,\n  isMaterial: true,\n  language: ['string'],\n  maxCreationDate: new \\DateTimeImmutable('2019-12-27T18:11:19.117Z'),\n  maxPublicationDate: new \\DateTimeImmutable('2019-12-27T18:11:19.117Z'),\n  minCreationDate: new \\DateTimeImmutable('2019-12-27T18:11:19.117Z'),\n  minPublicationDate: new \\DateTimeImmutable('2019-12-27T18:11:19.117Z'),\n  nextKey: 'next_key',\n  portfolioID: ['182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e'],\n  query: 'query',\n  registrationNumber: ['string'],\n  savedArticleFilterID: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',\n  sentiment: true,\n  sorting: 'creation_date',\n  sortingOrder: 'asc',\n);\n\nvar_dump($page);",
      },
      http: {
        example:
          'curl https://api.businessradar.com/ext/v3/articles \\\n    -H "Authorization: Bearer $BUSINESSRADAR_API_KEY"',
      },
    },
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
    perLanguage: {
      typescript: {
        method: 'client.news.articles.retrieveRelated',
        example:
          "import BusinessRadar from '@businessradar/businessradar';\n\nconst client = new BusinessRadar({\n  apiKey: process.env['BUSINESSRADAR_API_KEY'], // This is the default and can be omitted\n});\n\nconst response = await client.news.articles.retrieveRelated('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e');\n\nconsole.log(response);",
      },
      python: {
        method: 'news.articles.retrieve_related',
        example:
          'import os\nfrom businessradar import BusinessRadar\n\nclient = BusinessRadar(\n    api_key=os.environ.get("BUSINESSRADAR_API_KEY"),  # This is the default and can be omitted\n)\nresponse = client.news.articles.retrieve_related(\n    "182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n)\nprint(response)',
      },
      php: {
        method: 'news->articles->retrieveRelated',
        example:
          "<?php\n\nrequire_once dirname(__DIR__) . '/vendor/autoload.php';\n\n$client = new Client(apiKey: 'My API Key');\n\n$response = $client->news->articles->retrieveRelated(\n  '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e'\n);\n\nvar_dump($response);",
      },
      http: {
        example:
          'curl https://api.businessradar.com/ext/v3/articles/$ARTICLE_ID/related/ \\\n    -H "Authorization: Bearer $BUSINESSRADAR_API_KEY"',
      },
    },
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
    perLanguage: {
      typescript: {
        method: 'client.news.articles.createFeedback',
        example:
          "import BusinessRadar from '@businessradar/businessradar';\n\nconst client = new BusinessRadar({\n  apiKey: process.env['BUSINESSRADAR_API_KEY'], // This is the default and can be omitted\n});\n\nconst response = await client.news.articles.createFeedback({\n  article: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',\n});\n\nconsole.log(response.external_id);",
      },
      python: {
        method: 'news.articles.create_feedback',
        example:
          'import os\nfrom businessradar import BusinessRadar\n\nclient = BusinessRadar(\n    api_key=os.environ.get("BUSINESSRADAR_API_KEY"),  # This is the default and can be omitted\n)\nresponse = client.news.articles.create_feedback(\n    article="182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n)\nprint(response.external_id)',
      },
      php: {
        method: 'news->articles->createFeedback',
        example:
          "<?php\n\nrequire_once dirname(__DIR__) . '/vendor/autoload.php';\n\n$client = new Client(apiKey: 'My API Key');\n\n$response = $client->news->articles->createFeedback(\n  article: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',\n  comment: 'comment',\n  email: 'dev@stainless.com',\n  feedbackType: 'false_positive',\n);\n\nvar_dump($response);",
      },
      http: {
        example:
          'curl https://api.businessradar.com/ext/v3/articles/feedback/ \\\n    -H \'Content-Type: application/json\' \\\n    -H "Authorization: Bearer $BUSINESSRADAR_API_KEY" \\\n    -d \'{\n          "article": "182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e"\n        }\'',
      },
    },
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
    perLanguage: {
      typescript: {
        method: 'client.news.articles.listSavedArticleFilters',
        example:
          "import BusinessRadar from '@businessradar/businessradar';\n\nconst client = new BusinessRadar({\n  apiKey: process.env['BUSINESSRADAR_API_KEY'], // This is the default and can be omitted\n});\n\n// Automatically fetches more pages as needed.\nfor await (const articleListSavedArticleFiltersResponse of client.news.articles.listSavedArticleFilters()) {\n  console.log(articleListSavedArticleFiltersResponse.external_id);\n}",
      },
      python: {
        method: 'news.articles.list_saved_article_filters',
        example:
          'import os\nfrom businessradar import BusinessRadar\n\nclient = BusinessRadar(\n    api_key=os.environ.get("BUSINESSRADAR_API_KEY"),  # This is the default and can be omitted\n)\npage = client.news.articles.list_saved_article_filters()\npage = page.results[0]\nprint(page.external_id)',
      },
      php: {
        method: 'news->articles->listSavedArticleFilters',
        example:
          "<?php\n\nrequire_once dirname(__DIR__) . '/vendor/autoload.php';\n\n$client = new Client(apiKey: 'My API Key');\n\n$page = $client->news->articles->listSavedArticleFilters(nextKey: 'next_key');\n\nvar_dump($page);",
      },
      http: {
        example:
          'curl https://api.businessradar.com/ext/v3/saved_article_filters \\\n    -H "Authorization: Bearer $BUSINESSRADAR_API_KEY"',
      },
    },
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
    perLanguage: {
      typescript: {
        method: 'client.news.articles.analytics.getCountByDate',
        example:
          "import BusinessRadar from '@businessradar/businessradar';\n\nconst client = new BusinessRadar({\n  apiKey: process.env['BUSINESSRADAR_API_KEY'], // This is the default and can be omitted\n});\n\nconst response = await client.news.articles.analytics.getCountByDate();\n\nconsole.log(response);",
      },
      python: {
        method: 'news.articles.analytics.get_count_by_date',
        example:
          'import os\nfrom businessradar import BusinessRadar\n\nclient = BusinessRadar(\n    api_key=os.environ.get("BUSINESSRADAR_API_KEY"),  # This is the default and can be omitted\n)\nresponse = client.news.articles.analytics.get_count_by_date()\nprint(response)',
      },
      php: {
        method: 'news->articles->analytics->getCountByDate',
        example:
          "<?php\n\nrequire_once dirname(__DIR__) . '/vendor/autoload.php';\n\n$client = new Client(apiKey: 'My API Key');\n\n$response = $client->news->articles->analytics->getCountByDate(\n  category: ['182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e'],\n  company: ['182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e'],\n  country: ['string'],\n  disableCompanyArticleDeduplication: true,\n  dunsNumber: ['string'],\n  globalUltimate: ['string'],\n  includeClusteredArticles: true,\n  interval: 'day',\n  isMaterial: true,\n  language: ['string'],\n  maxCreationDate: new \\DateTimeImmutable('2019-12-27T18:11:19.117Z'),\n  maxPublicationDate: new \\DateTimeImmutable('2019-12-27T18:11:19.117Z'),\n  minCreationDate: new \\DateTimeImmutable('2019-12-27T18:11:19.117Z'),\n  minPublicationDate: new \\DateTimeImmutable('2019-12-27T18:11:19.117Z'),\n  portfolioID: ['182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e'],\n  query: 'query',\n  registrationNumber: ['string'],\n  savedArticleFilterID: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',\n  sentiment: true,\n);\n\nvar_dump($response);",
      },
      http: {
        example:
          'curl https://api.businessradar.com/ext/v3/articles/analytics/dates/ \\\n    -H "Authorization: Bearer $BUSINESSRADAR_API_KEY"',
      },
    },
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
      "{ created_at: string; export_type: 'NEWS' | 'BINDER' | 'COMPANIES' | 'REGISTRATIONS' | 'COMPLIANCE' | 'BILLING' | 'KEY_EVENTS'; external_id: string; file_type: 'PDF' | 'EXCEL' | 'JSONL'; filters: { categories?: string[]; companies?: string[]; countries?: string[]; disable_company_article_deduplication?: boolean; duns_numbers?: string[]; global_ultimates?: string[]; include_clustered_articles?: boolean; industries?: string[]; is_material?: boolean; languages?: string[]; max_creation_date?: string; max_publication_date?: string; media_type?: 'GAZETTE' | 'MAINSTREAM'; min_creation_date?: string; min_publication_date?: string; parent_category?: string; portfolios?: string[]; query?: string; registration_numbers?: string[]; sentiment?: boolean; }; location: string; result_count: number; status: 'pending' | 'in_progress' | 'failed' | 'finished'; updated_at: string; }",
    markdown:
      "## create\n\n`client.news.articles.export.create(file_type: 'PDF' | 'EXCEL' | 'JSONL', filters: { categories?: string[]; companies?: string[]; countries?: string[]; disable_company_article_deduplication?: boolean; duns_numbers?: string[]; global_ultimates?: string[]; include_clustered_articles?: boolean; industries?: string[]; is_material?: boolean; languages?: string[]; max_creation_date?: string; max_publication_date?: string; media_type?: 'GAZETTE' | 'MAINSTREAM'; min_creation_date?: string; min_publication_date?: string; parent_category?: string; portfolios?: string[]; query?: string; registration_numbers?: string[]; sentiment?: boolean; }): { created_at: string; export_type: 'NEWS' | 'BINDER' | 'COMPANIES' | 'REGISTRATIONS' | 'COMPLIANCE' | 'BILLING' | 'KEY_EVENTS'; external_id: string; file_type: data_export_file_type; filters: article_filters; location: string; result_count: number; status: 'pending' | 'in_progress' | 'failed' | 'finished'; updated_at: string; }`\n\n**post** `/ext/v3/articles/export/`\n\n### Export Articles (Asynchronous)\n\nRequest an asynchronous export of articles matching specific filters. Once\nrequested, Business Radar processes the export in the background.\n\nTo check the status and retrieve the download link, you can use the [GET\n/articles/export/{external_id}](/ext/v3/#/ext/ext_v3_articles_export_retrieve)\nendpoint.\n\nThe export process returns a reference to a JSON-Lines file stored on S3, which\nremains available for 7 days.\n\n*Limit: 25,000 articles per export.*\n\n### Parameters\n\n- `file_type: 'PDF' | 'EXCEL' | 'JSONL'`\n  * `PDF` - PDF\n* `EXCEL` - Excel\n* `JSONL` - JSONL\n\n- `filters: { categories?: string[]; companies?: string[]; countries?: string[]; disable_company_article_deduplication?: boolean; duns_numbers?: string[]; global_ultimates?: string[]; include_clustered_articles?: boolean; industries?: string[]; is_material?: boolean; languages?: string[]; max_creation_date?: string; max_publication_date?: string; media_type?: 'GAZETTE' | 'MAINSTREAM'; min_creation_date?: string; min_publication_date?: string; parent_category?: string; portfolios?: string[]; query?: string; registration_numbers?: string[]; sentiment?: boolean; }`\n  ### Article Filters\n\nUsed to validate and process filters for article searches. Supports filtering by\nquery text, countries, languages, specific companies (DUNS), and portfolios.\n  - `categories?: string[]`\n  - `companies?: string[]`\n  - `countries?: string[]`\n  - `disable_company_article_deduplication?: boolean`\n  - `duns_numbers?: string[]`\n  - `global_ultimates?: string[]`\n  - `include_clustered_articles?: boolean`\n  - `industries?: string[]`\n  - `is_material?: boolean`\n  - `languages?: string[]`\n  - `max_creation_date?: string`\n  - `max_publication_date?: string`\n  - `media_type?: 'GAZETTE' | 'MAINSTREAM'`\n  - `min_creation_date?: string`\n  - `min_publication_date?: string`\n  - `parent_category?: string`\n  - `portfolios?: string[]`\n  - `query?: string`\n  - `registration_numbers?: string[]`\n  - `sentiment?: boolean`\n\n### Returns\n\n- `{ created_at: string; export_type: 'NEWS' | 'BINDER' | 'COMPANIES' | 'REGISTRATIONS' | 'COMPLIANCE' | 'BILLING' | 'KEY_EVENTS'; external_id: string; file_type: 'PDF' | 'EXCEL' | 'JSONL'; filters: { categories?: string[]; companies?: string[]; countries?: string[]; disable_company_article_deduplication?: boolean; duns_numbers?: string[]; global_ultimates?: string[]; include_clustered_articles?: boolean; industries?: string[]; is_material?: boolean; languages?: string[]; max_creation_date?: string; max_publication_date?: string; media_type?: 'GAZETTE' | 'MAINSTREAM'; min_creation_date?: string; min_publication_date?: string; parent_category?: string; portfolios?: string[]; query?: string; registration_numbers?: string[]; sentiment?: boolean; }; location: string; result_count: number; status: 'pending' | 'in_progress' | 'failed' | 'finished'; updated_at: string; }`\n  Data Export Serializer.\n\n  - `created_at: string`\n  - `export_type: 'NEWS' | 'BINDER' | 'COMPANIES' | 'REGISTRATIONS' | 'COMPLIANCE' | 'BILLING' | 'KEY_EVENTS'`\n  - `external_id: string`\n  - `file_type: 'PDF' | 'EXCEL' | 'JSONL'`\n  - `filters: { categories?: string[]; companies?: string[]; countries?: string[]; disable_company_article_deduplication?: boolean; duns_numbers?: string[]; global_ultimates?: string[]; include_clustered_articles?: boolean; industries?: string[]; is_material?: boolean; languages?: string[]; max_creation_date?: string; max_publication_date?: string; media_type?: 'GAZETTE' | 'MAINSTREAM'; min_creation_date?: string; min_publication_date?: string; parent_category?: string; portfolios?: string[]; query?: string; registration_numbers?: string[]; sentiment?: boolean; }`\n  - `location: string`\n  - `result_count: number`\n  - `status: 'pending' | 'in_progress' | 'failed' | 'finished'`\n  - `updated_at: string`\n\n### Example\n\n```typescript\nimport BusinessRadar from '@businessradar/businessradar';\n\nconst client = new BusinessRadar();\n\nconst articleExport = await client.news.articles.export.create({\n  file_type: 'PDF',\n  filters: {},\n});\n\nconsole.log(articleExport);\n```",
    perLanguage: {
      typescript: {
        method: 'client.news.articles.export.create',
        example:
          "import BusinessRadar from '@businessradar/businessradar';\n\nconst client = new BusinessRadar({\n  apiKey: process.env['BUSINESSRADAR_API_KEY'], // This is the default and can be omitted\n});\n\nconst articleExport = await client.news.articles.export.create({\n  file_type: 'PDF',\n  filters: {},\n});\n\nconsole.log(articleExport.external_id);",
      },
      python: {
        method: 'news.articles.export.create',
        example:
          'import os\nfrom businessradar import BusinessRadar\n\nclient = BusinessRadar(\n    api_key=os.environ.get("BUSINESSRADAR_API_KEY"),  # This is the default and can be omitted\n)\narticle_export = client.news.articles.export.create(\n    file_type="PDF",\n    filters={},\n)\nprint(article_export.external_id)',
      },
      php: {
        method: 'news->articles->export->create',
        example:
          "<?php\n\nrequire_once dirname(__DIR__) . '/vendor/autoload.php';\n\n$client = new Client(apiKey: 'My API Key');\n\n$articleExport = $client->news->articles->export->create(\n  fileType: DataExportFileType::PDF,\n  filters: [\n    'categories' => ['182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e'],\n    'companies' => ['182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e'],\n    'countries' => ['xx'],\n    'disableCompanyArticleDeduplication' => true,\n    'dunsNumbers' => ['xxxxxxxx'],\n    'globalUltimates' => ['xxxxxxxx'],\n    'includeClusteredArticles' => true,\n    'industries' => ['x'],\n    'isMaterial' => true,\n    'languages' => ['xx'],\n    'maxCreationDate' => new \\DateTimeImmutable('2019-12-27T18:11:19.117Z'),\n    'maxPublicationDate' => new \\DateTimeImmutable('2019-12-27T18:11:19.117Z'),\n    'mediaType' => 'GAZETTE',\n    'minCreationDate' => new \\DateTimeImmutable('2019-12-27T18:11:19.117Z'),\n    'minPublicationDate' => new \\DateTimeImmutable('2019-12-27T18:11:19.117Z'),\n    'parentCategory' => '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',\n    'portfolios' => ['182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e'],\n    'query' => 'query',\n    'registrationNumbers' => ['x'],\n    'sentiment' => true,\n  ],\n);\n\nvar_dump($articleExport);",
      },
      http: {
        example:
          'curl https://api.businessradar.com/ext/v3/articles/export/ \\\n    -H \'Content-Type: application/json\' \\\n    -H "Authorization: Bearer $BUSINESSRADAR_API_KEY" \\\n    -d \'{\n          "file_type": "PDF",\n          "filters": {}\n        }\'',
      },
    },
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
      "{ created_at: string; export_type: 'NEWS' | 'BINDER' | 'COMPANIES' | 'REGISTRATIONS' | 'COMPLIANCE' | 'BILLING' | 'KEY_EVENTS'; external_id: string; file_type: 'PDF' | 'EXCEL' | 'JSONL'; filters: { categories?: string[]; companies?: string[]; countries?: string[]; disable_company_article_deduplication?: boolean; duns_numbers?: string[]; global_ultimates?: string[]; include_clustered_articles?: boolean; industries?: string[]; is_material?: boolean; languages?: string[]; max_creation_date?: string; max_publication_date?: string; media_type?: 'GAZETTE' | 'MAINSTREAM'; min_creation_date?: string; min_publication_date?: string; parent_category?: string; portfolios?: string[]; query?: string; registration_numbers?: string[]; sentiment?: boolean; }; location: string; result_count: number; status: 'pending' | 'in_progress' | 'failed' | 'finished'; updated_at: string; }",
    markdown:
      "## retrieve\n\n`client.news.articles.export.retrieve(external_id: string): { created_at: string; export_type: 'NEWS' | 'BINDER' | 'COMPANIES' | 'REGISTRATIONS' | 'COMPLIANCE' | 'BILLING' | 'KEY_EVENTS'; external_id: string; file_type: data_export_file_type; filters: article_filters; location: string; result_count: number; status: 'pending' | 'in_progress' | 'failed' | 'finished'; updated_at: string; }`\n\n**get** `/ext/v3/articles/export/{external_id}`\n\n### Export Status & Details\n\nCheck the status of an ongoing export or retrieve the download link for a completed\nexport.\n\n### Parameters\n\n- `external_id: string`\n\n### Returns\n\n- `{ created_at: string; export_type: 'NEWS' | 'BINDER' | 'COMPANIES' | 'REGISTRATIONS' | 'COMPLIANCE' | 'BILLING' | 'KEY_EVENTS'; external_id: string; file_type: 'PDF' | 'EXCEL' | 'JSONL'; filters: { categories?: string[]; companies?: string[]; countries?: string[]; disable_company_article_deduplication?: boolean; duns_numbers?: string[]; global_ultimates?: string[]; include_clustered_articles?: boolean; industries?: string[]; is_material?: boolean; languages?: string[]; max_creation_date?: string; max_publication_date?: string; media_type?: 'GAZETTE' | 'MAINSTREAM'; min_creation_date?: string; min_publication_date?: string; parent_category?: string; portfolios?: string[]; query?: string; registration_numbers?: string[]; sentiment?: boolean; }; location: string; result_count: number; status: 'pending' | 'in_progress' | 'failed' | 'finished'; updated_at: string; }`\n  Data Export Serializer.\n\n  - `created_at: string`\n  - `export_type: 'NEWS' | 'BINDER' | 'COMPANIES' | 'REGISTRATIONS' | 'COMPLIANCE' | 'BILLING' | 'KEY_EVENTS'`\n  - `external_id: string`\n  - `file_type: 'PDF' | 'EXCEL' | 'JSONL'`\n  - `filters: { categories?: string[]; companies?: string[]; countries?: string[]; disable_company_article_deduplication?: boolean; duns_numbers?: string[]; global_ultimates?: string[]; include_clustered_articles?: boolean; industries?: string[]; is_material?: boolean; languages?: string[]; max_creation_date?: string; max_publication_date?: string; media_type?: 'GAZETTE' | 'MAINSTREAM'; min_creation_date?: string; min_publication_date?: string; parent_category?: string; portfolios?: string[]; query?: string; registration_numbers?: string[]; sentiment?: boolean; }`\n  - `location: string`\n  - `result_count: number`\n  - `status: 'pending' | 'in_progress' | 'failed' | 'finished'`\n  - `updated_at: string`\n\n### Example\n\n```typescript\nimport BusinessRadar from '@businessradar/businessradar';\n\nconst client = new BusinessRadar();\n\nconst articleExport = await client.news.articles.export.retrieve('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e');\n\nconsole.log(articleExport);\n```",
    perLanguage: {
      typescript: {
        method: 'client.news.articles.export.retrieve',
        example:
          "import BusinessRadar from '@businessradar/businessradar';\n\nconst client = new BusinessRadar({\n  apiKey: process.env['BUSINESSRADAR_API_KEY'], // This is the default and can be omitted\n});\n\nconst articleExport = await client.news.articles.export.retrieve(\n  '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',\n);\n\nconsole.log(articleExport.external_id);",
      },
      python: {
        method: 'news.articles.export.retrieve',
        example:
          'import os\nfrom businessradar import BusinessRadar\n\nclient = BusinessRadar(\n    api_key=os.environ.get("BUSINESSRADAR_API_KEY"),  # This is the default and can be omitted\n)\narticle_export = client.news.articles.export.retrieve(\n    "182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n)\nprint(article_export.external_id)',
      },
      php: {
        method: 'news->articles->export->retrieve',
        example:
          "<?php\n\nrequire_once dirname(__DIR__) . '/vendor/autoload.php';\n\n$client = new Client(apiKey: 'My API Key');\n\n$articleExport = $client->news->articles->export->retrieve(\n  '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e'\n);\n\nvar_dump($articleExport);",
      },
      http: {
        example:
          'curl https://api.businessradar.com/ext/v3/articles/export/$EXTERNAL_ID \\\n    -H "Authorization: Bearer $BUSINESSRADAR_API_KEY"',
      },
    },
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
    perLanguage: {
      typescript: {
        method: 'client.companies.list',
        example:
          "import BusinessRadar from '@businessradar/businessradar';\n\nconst client = new BusinessRadar({\n  apiKey: process.env['BUSINESSRADAR_API_KEY'], // This is the default and can be omitted\n});\n\n// Automatically fetches more pages as needed.\nfor await (const companyListResponse of client.companies.list()) {\n  console.log(companyListResponse.external_id);\n}",
      },
      python: {
        method: 'companies.list',
        example:
          'import os\nfrom businessradar import BusinessRadar\n\nclient = BusinessRadar(\n    api_key=os.environ.get("BUSINESSRADAR_API_KEY"),  # This is the default and can be omitted\n)\npage = client.companies.list()\npage = page.results[0]\nprint(page.external_id)',
      },
      php: {
        method: 'companies->list',
        example:
          "<?php\n\nrequire_once dirname(__DIR__) . '/vendor/autoload.php';\n\n$client = new Client(apiKey: 'My API Key');\n\n$page = $client->companies->list(\n  country: ['string'],\n  dunsNumber: ['string'],\n  nextKey: 'next_key',\n  portfolioID: ['182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e'],\n  query: 'query',\n  registrationNumber: ['string'],\n  websiteURL: 'website_url',\n);\n\nvar_dump($page);",
      },
      http: {
        example:
          'curl https://api.businessradar.com/ext/v3/companies \\\n    -H "Authorization: Bearer $BUSINESSRADAR_API_KEY"',
      },
    },
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
      '{ external_id: string; finished_at: string; progress: number; status: string; status_text: string; company?: { country: country_enum; duns_number: string; external_id: string; name: string; }; country?: string; customer_reference?: string; duns_number?: string; primary_name?: string; registration_number?: string; }',
    markdown:
      "## create\n\n`client.companies.create(company?: { external_id: string; }, country?: string, customer_reference?: string, duns_number?: string, primary_name?: string, registration_number?: string): { external_id: string; finished_at: string; progress: number; status: string; status_text: string; company?: portfolio_company_detail; country?: string; customer_reference?: string; duns_number?: string; primary_name?: string; registration_number?: string; }`\n\n**post** `/ext/v3/companies`\n\n### Register Company (Asynchronous)\n\nRegister a new company to Business Radar using its identification details. Once\nposted, Business Radar processes the request in the background.\n\nTo check the progress and/or retrieve the final result, you can use the [GET\n/registrations/{registration_id}](/ext/v3/#/ext/ext_v3_registrations_retrieve)\nendpoint.\n\nIf the company is already registered, the existing registration will be\nreturned.\n\n### Parameters\n\n- `company?: { external_id: string; }`\n  ### Portfolio Company Detail (Simplified)\n\nA lightweight data structure for company identification (UUID, DUNS, Name, Country).\n  - `external_id: string`\n\n- `country?: string`\n\n- `customer_reference?: string`\n  Customer reference for the client to understand relationship.\n\n- `duns_number?: string`\n\n- `primary_name?: string`\n\n- `registration_number?: string`\n\n### Returns\n\n- `{ external_id: string; finished_at: string; progress: number; status: string; status_text: string; company?: { country: country_enum; duns_number: string; external_id: string; name: string; }; country?: string; customer_reference?: string; duns_number?: string; primary_name?: string; registration_number?: string; }`\n  ### Company Registration\n\nHandles the registration of companies for monitoring. New companies can be\nidentified by DUNS number, local registration number, or name and country.\n\n  - `external_id: string`\n  - `finished_at: string`\n  - `progress: number`\n  - `status: string`\n  - `status_text: string`\n  - `company?: { country: string; duns_number: string; external_id: string; name: string; }`\n  - `country?: string`\n  - `customer_reference?: string`\n  - `duns_number?: string`\n  - `primary_name?: string`\n  - `registration_number?: string`\n\n### Example\n\n```typescript\nimport BusinessRadar from '@businessradar/businessradar';\n\nconst client = new BusinessRadar();\n\nconst registration = await client.companies.create();\n\nconsole.log(registration);\n```",
    perLanguage: {
      typescript: {
        method: 'client.companies.create',
        example:
          "import BusinessRadar from '@businessradar/businessradar';\n\nconst client = new BusinessRadar({\n  apiKey: process.env['BUSINESSRADAR_API_KEY'], // This is the default and can be omitted\n});\n\nconst registration = await client.companies.create();\n\nconsole.log(registration.external_id);",
      },
      python: {
        method: 'companies.create',
        example:
          'import os\nfrom businessradar import BusinessRadar\n\nclient = BusinessRadar(\n    api_key=os.environ.get("BUSINESSRADAR_API_KEY"),  # This is the default and can be omitted\n)\nregistration = client.companies.create()\nprint(registration.external_id)',
      },
      php: {
        method: 'companies->create',
        example:
          "<?php\n\nrequire_once dirname(__DIR__) . '/vendor/autoload.php';\n\n$client = new Client(apiKey: 'My API Key');\n\n$registration = $client->companies->create(\n  company: ['externalID' => '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e'],\n  country: 'AF',\n  customerReference: 'customer_reference',\n  dunsNumber: 'duns_number',\n  primaryName: 'primary_name',\n  registrationNumber: 'registration_number',\n);\n\nvar_dump($registration);",
      },
      http: {
        example:
          'curl https://api.businessradar.com/ext/v3/companies \\\n    -X POST \\\n    -H "Authorization: Bearer $BUSINESSRADAR_API_KEY"',
      },
    },
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
    perLanguage: {
      typescript: {
        method: 'client.companies.createFeedback',
        example:
          "import BusinessRadar from '@businessradar/businessradar';\n\nconst client = new BusinessRadar({\n  apiKey: process.env['BUSINESSRADAR_API_KEY'], // This is the default and can be omitted\n});\n\nconst response = await client.companies.createFeedback({\n  company: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',\n  feedback_type: 'NOT_ENOUGH_NEWS',\n});\n\nconsole.log(response.company);",
      },
      python: {
        method: 'companies.create_feedback',
        example:
          'import os\nfrom businessradar import BusinessRadar\n\nclient = BusinessRadar(\n    api_key=os.environ.get("BUSINESSRADAR_API_KEY"),  # This is the default and can be omitted\n)\nresponse = client.companies.create_feedback(\n    company="182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n    feedback_type="NOT_ENOUGH_NEWS",\n)\nprint(response.company)',
      },
      php: {
        method: 'companies->createFeedback',
        example:
          "<?php\n\nrequire_once dirname(__DIR__) . '/vendor/autoload.php';\n\n$client = new Client(apiKey: 'My API Key');\n\n$response = $client->companies->createFeedback(\n  company: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',\n  feedbackType: 'NOT_ENOUGH_NEWS',\n  comment: 'comment',\n  notificationEmail: 'dev@stainless.com',\n  tradeName: 'trade_name',\n);\n\nvar_dump($response);",
      },
      http: {
        example:
          'curl https://api.businessradar.com/ext/v3/companies/feedback/ \\\n    -H \'Content-Type: application/json\' \\\n    -H "Authorization: Bearer $BUSINESSRADAR_API_KEY" \\\n    -d \'{\n          "company": "182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n          "feedback_type": "NOT_ENOUGH_NEWS"\n        }\'',
      },
    },
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
      '{ country: string; duns_number: string; founding_date: string; industry_codes: { code: string; description?: string; }[]; name: string; primary_industry_codes: { code: string; description?: string; }[]; registration_numbers: { description: string; number: string; type: number; }[]; slug: string; social_description: string; social_logo: string; trade_names: string[]; address_latitude?: number; address_longitude?: number; address_number?: string; address_phone?: string; address_place?: string; address_postal?: string; address_region?: string; address_street?: string; article_count?: number; external_id?: string; is_out_of_business?: boolean; linkedin_url?: string; publication_count?: number; report_count?: number; review_average_score?: number; review_count?: number; ticker_symbol?: string; website_domain?: string; website_icon_url?: string; website_url?: string; }',
    markdown:
      "## retrieve\n\n`client.companies.retrieve(external_id: string): { country: country_enum; duns_number: string; founding_date: string; industry_codes: industry_code[]; name: string; primary_industry_codes: industry_code[]; registration_numbers: object[]; slug: string; social_description: string; social_logo: string; trade_names: string[]; address_latitude?: number; address_longitude?: number; address_number?: string; address_phone?: string; address_place?: string; address_postal?: string; address_region?: string; address_street?: string; article_count?: number; external_id?: string; is_out_of_business?: boolean; linkedin_url?: string; publication_count?: number; report_count?: number; review_average_score?: number; review_count?: number; ticker_symbol?: string; website_domain?: string; website_icon_url?: string; website_url?: string; }`\n\n**get** `/ext/v3/companies/{external_id}`\n\n### Retrieve Company Information\n\nFetch detailed information about a specific company using its `external_id`.\n\n### Parameters\n\n- `external_id: string`\n\n### Returns\n\n- `{ country: string; duns_number: string; founding_date: string; industry_codes: { code: string; description?: string; }[]; name: string; primary_industry_codes: { code: string; description?: string; }[]; registration_numbers: { description: string; number: string; type: number; }[]; slug: string; social_description: string; social_logo: string; trade_names: string[]; address_latitude?: number; address_longitude?: number; address_number?: string; address_phone?: string; address_place?: string; address_postal?: string; address_region?: string; address_street?: string; article_count?: number; external_id?: string; is_out_of_business?: boolean; linkedin_url?: string; publication_count?: number; report_count?: number; review_average_score?: number; review_count?: number; ticker_symbol?: string; website_domain?: string; website_icon_url?: string; website_url?: string; }`\n  ### Company\n\nDetailed representation of a company in Business Radar.\n\nThis data includes: - Basic info (name, country, website) - Identification (DUNS,\nexternal ID, registration numbers) - Industry classifications - Geographical data\n(address, coordinates) - Social and online presence - Summary metrics (article\ncount, review scores, etc.)\n\n  - `country: string`\n  - `duns_number: string`\n  - `founding_date: string`\n  - `industry_codes: { code: string; description?: string; }[]`\n  - `name: string`\n  - `primary_industry_codes: { code: string; description?: string; }[]`\n  - `registration_numbers: { description: string; number: string; type: number; }[]`\n  - `slug: string`\n  - `social_description: string`\n  - `social_logo: string`\n  - `trade_names: string[]`\n  - `address_latitude?: number`\n  - `address_longitude?: number`\n  - `address_number?: string`\n  - `address_phone?: string`\n  - `address_place?: string`\n  - `address_postal?: string`\n  - `address_region?: string`\n  - `address_street?: string`\n  - `article_count?: number`\n  - `external_id?: string`\n  - `is_out_of_business?: boolean`\n  - `linkedin_url?: string`\n  - `publication_count?: number`\n  - `report_count?: number`\n  - `review_average_score?: number`\n  - `review_count?: number`\n  - `ticker_symbol?: string`\n  - `website_domain?: string`\n  - `website_icon_url?: string`\n  - `website_url?: string`\n\n### Example\n\n```typescript\nimport BusinessRadar from '@businessradar/businessradar';\n\nconst client = new BusinessRadar();\n\nconst company = await client.companies.retrieve('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e');\n\nconsole.log(company);\n```",
    perLanguage: {
      typescript: {
        method: 'client.companies.retrieve',
        example:
          "import BusinessRadar from '@businessradar/businessradar';\n\nconst client = new BusinessRadar({\n  apiKey: process.env['BUSINESSRADAR_API_KEY'], // This is the default and can be omitted\n});\n\nconst company = await client.companies.retrieve('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e');\n\nconsole.log(company.external_id);",
      },
      python: {
        method: 'companies.retrieve',
        example:
          'import os\nfrom businessradar import BusinessRadar\n\nclient = BusinessRadar(\n    api_key=os.environ.get("BUSINESSRADAR_API_KEY"),  # This is the default and can be omitted\n)\ncompany = client.companies.retrieve(\n    "182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n)\nprint(company.external_id)',
      },
      php: {
        method: 'companies->retrieve',
        example:
          "<?php\n\nrequire_once dirname(__DIR__) . '/vendor/autoload.php';\n\n$client = new Client(apiKey: 'My API Key');\n\n$company = $client->companies->retrieve('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e');\n\nvar_dump($company);",
      },
      http: {
        example:
          'curl https://api.businessradar.com/ext/v3/companies/$EXTERNAL_ID \\\n    -H "Authorization: Bearer $BUSINESSRADAR_API_KEY"',
      },
    },
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
      '{ external_id: string; finished_at: string; progress: number; status: string; status_text: string; company?: { country: country_enum; duns_number: string; external_id: string; name: string; }; country?: string; customer_reference?: string; duns_number?: string; primary_name?: string; registration_number?: string; }',
    markdown:
      "## retrieve_registration\n\n`client.companies.retrieveRegistration(registration_id: string): { external_id: string; finished_at: string; progress: number; status: string; status_text: string; company?: portfolio_company_detail; country?: string; customer_reference?: string; duns_number?: string; primary_name?: string; registration_number?: string; }`\n\n**get** `/ext/v3/registrations/{registration_id}`\n\n### Retrieve Registration Information\n\nFetch details about a specific company registration request using its\n`registration_id`.\n\n### Parameters\n\n- `registration_id: string`\n\n### Returns\n\n- `{ external_id: string; finished_at: string; progress: number; status: string; status_text: string; company?: { country: country_enum; duns_number: string; external_id: string; name: string; }; country?: string; customer_reference?: string; duns_number?: string; primary_name?: string; registration_number?: string; }`\n  ### Company Registration\n\nHandles the registration of companies for monitoring. New companies can be\nidentified by DUNS number, local registration number, or name and country.\n\n  - `external_id: string`\n  - `finished_at: string`\n  - `progress: number`\n  - `status: string`\n  - `status_text: string`\n  - `company?: { country: string; duns_number: string; external_id: string; name: string; }`\n  - `country?: string`\n  - `customer_reference?: string`\n  - `duns_number?: string`\n  - `primary_name?: string`\n  - `registration_number?: string`\n\n### Example\n\n```typescript\nimport BusinessRadar from '@businessradar/businessradar';\n\nconst client = new BusinessRadar();\n\nconst registration = await client.companies.retrieveRegistration('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e');\n\nconsole.log(registration);\n```",
    perLanguage: {
      typescript: {
        method: 'client.companies.retrieveRegistration',
        example:
          "import BusinessRadar from '@businessradar/businessradar';\n\nconst client = new BusinessRadar({\n  apiKey: process.env['BUSINESSRADAR_API_KEY'], // This is the default and can be omitted\n});\n\nconst registration = await client.companies.retrieveRegistration(\n  '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',\n);\n\nconsole.log(registration.external_id);",
      },
      python: {
        method: 'companies.retrieve_registration',
        example:
          'import os\nfrom businessradar import BusinessRadar\n\nclient = BusinessRadar(\n    api_key=os.environ.get("BUSINESSRADAR_API_KEY"),  # This is the default and can be omitted\n)\nregistration = client.companies.retrieve_registration(\n    "182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n)\nprint(registration.external_id)',
      },
      php: {
        method: 'companies->retrieveRegistration',
        example:
          "<?php\n\nrequire_once dirname(__DIR__) . '/vendor/autoload.php';\n\n$client = new Client(apiKey: 'My API Key');\n\n$registration = $client->companies->retrieveRegistration(\n  '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e'\n);\n\nvar_dump($registration);",
      },
      http: {
        example:
          'curl https://api.businessradar.com/ext/v3/registrations/$REGISTRATION_ID \\\n    -H "Authorization: Bearer $BUSINESSRADAR_API_KEY"',
      },
    },
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
    perLanguage: {
      typescript: {
        method: 'client.companies.listAttributeChanges',
        example:
          "import BusinessRadar from '@businessradar/businessradar';\n\nconst client = new BusinessRadar({\n  apiKey: process.env['BUSINESSRADAR_API_KEY'], // This is the default and can be omitted\n});\n\n// Automatically fetches more pages as needed.\nfor await (const companyListAttributeChangesResponse of client.companies.listAttributeChanges()) {\n  console.log(companyListAttributeChangesResponse.company_external_id);\n}",
      },
      python: {
        method: 'companies.list_attribute_changes',
        example:
          'import os\nfrom businessradar import BusinessRadar\n\nclient = BusinessRadar(\n    api_key=os.environ.get("BUSINESSRADAR_API_KEY"),  # This is the default and can be omitted\n)\npage = client.companies.list_attribute_changes()\npage = page.results[0]\nprint(page.company_external_id)',
      },
      php: {
        method: 'companies->listAttributeChanges',
        example:
          "<?php\n\nrequire_once dirname(__DIR__) . '/vendor/autoload.php';\n\n$client = new Client(apiKey: 'My API Key');\n\n$page = $client->companies->listAttributeChanges(\n  maxCreatedAt: new \\DateTimeImmutable('2019-12-27T18:11:19.117Z'),\n  minCreatedAt: new \\DateTimeImmutable('2019-12-27T18:11:19.117Z'),\n  nextKey: 'next_key',\n);\n\nvar_dump($page);",
      },
      http: {
        example:
          'curl https://api.businessradar.com/ext/v3/companies/attribute_changes \\\n    -H "Authorization: Bearer $BUSINESSRADAR_API_KEY"',
      },
    },
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
    perLanguage: {
      typescript: {
        method: 'client.companies.listMissingCompanyInvestigations',
        example:
          "import BusinessRadar from '@businessradar/businessradar';\n\nconst client = new BusinessRadar({\n  apiKey: process.env['BUSINESSRADAR_API_KEY'], // This is the default and can be omitted\n});\n\n// Automatically fetches more pages as needed.\nfor await (const companyListMissingCompanyInvestigationsResponse of client.companies.listMissingCompanyInvestigations()) {\n  console.log(companyListMissingCompanyInvestigationsResponse.company_external_id);\n}",
      },
      python: {
        method: 'companies.list_missing_company_investigations',
        example:
          'import os\nfrom businessradar import BusinessRadar\n\nclient = BusinessRadar(\n    api_key=os.environ.get("BUSINESSRADAR_API_KEY"),  # This is the default and can be omitted\n)\npage = client.companies.list_missing_company_investigations()\npage = page.results[0]\nprint(page.company_external_id)',
      },
      php: {
        method: 'companies->listMissingCompanyInvestigations',
        example:
          "<?php\n\nrequire_once dirname(__DIR__) . '/vendor/autoload.php';\n\n$client = new Client(apiKey: 'My API Key');\n\n$page = $client->companies->listMissingCompanyInvestigations(\n  nextKey: 'next_key'\n);\n\nvar_dump($page);",
      },
      http: {
        example:
          'curl https://api.businessradar.com/ext/v3/companies/investigations \\\n    -H "Authorization: Bearer $BUSINESSRADAR_API_KEY"',
      },
    },
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
    perLanguage: {
      typescript: {
        method: 'client.companies.createMissingCompanyInvestigation',
        example:
          "import BusinessRadar from '@businessradar/businessradar';\n\nconst client = new BusinessRadar({\n  apiKey: process.env['BUSINESSRADAR_API_KEY'], // This is the default and can be omitted\n});\n\nconst response = await client.companies.createMissingCompanyInvestigation({\n  country: 'AF',\n  legal_name: 'x',\n});\n\nconsole.log(response.company_external_id);",
      },
      python: {
        method: 'companies.create_missing_company_investigation',
        example:
          'import os\nfrom businessradar import BusinessRadar\n\nclient = BusinessRadar(\n    api_key=os.environ.get("BUSINESSRADAR_API_KEY"),  # This is the default and can be omitted\n)\nresponse = client.companies.create_missing_company_investigation(\n    country="AF",\n    legal_name="x",\n)\nprint(response.company_external_id)',
      },
      php: {
        method: 'companies->createMissingCompanyInvestigation',
        example:
          "<?php\n\nrequire_once dirname(__DIR__) . '/vendor/autoload.php';\n\n$client = new Client(apiKey: 'My API Key');\n\n$response = $client->companies->createMissingCompanyInvestigation(\n  country: CountryEnum::AF,\n  legalName: 'x',\n  addressNumber: 'address_number',\n  addressPhone: 'address_phone',\n  addressPlace: 'address_place',\n  addressPostal: 'address_postal',\n  addressRegion: 'address_region',\n  addressStreet: 'address_street',\n  description: 'description',\n  officerName: 'officer_name',\n  officerTitle: 'officer_title',\n  tradeName: 'trade_name',\n  websiteURL: 'https://example.com',\n);\n\nvar_dump($response);",
      },
      http: {
        example:
          'curl https://api.businessradar.com/ext/v3/companies/investigations \\\n    -H \'Content-Type: application/json\' \\\n    -H "Authorization: Bearer $BUSINESSRADAR_API_KEY" \\\n    -d \'{\n          "country": "AF",\n          "legal_name": "x"\n        }\'',
      },
    },
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
    perLanguage: {
      typescript: {
        method: 'client.companies.retrieveMissingCompanyInvestigation',
        example:
          "import BusinessRadar from '@businessradar/businessradar';\n\nconst client = new BusinessRadar({\n  apiKey: process.env['BUSINESSRADAR_API_KEY'], // This is the default and can be omitted\n});\n\nconst response = await client.companies.retrieveMissingCompanyInvestigation(\n  '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',\n);\n\nconsole.log(response.company_external_id);",
      },
      python: {
        method: 'companies.retrieve_missing_company_investigation',
        example:
          'import os\nfrom businessradar import BusinessRadar\n\nclient = BusinessRadar(\n    api_key=os.environ.get("BUSINESSRADAR_API_KEY"),  # This is the default and can be omitted\n)\nresponse = client.companies.retrieve_missing_company_investigation(\n    "182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n)\nprint(response.company_external_id)',
      },
      php: {
        method: 'companies->retrieveMissingCompanyInvestigation',
        example:
          "<?php\n\nrequire_once dirname(__DIR__) . '/vendor/autoload.php';\n\n$client = new Client(apiKey: 'My API Key');\n\n$response = $client->companies->retrieveMissingCompanyInvestigation(\n  '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e'\n);\n\nvar_dump($response);",
      },
      http: {
        example:
          'curl https://api.businessradar.com/ext/v3/companies/investigations/$EXTERNAL_ID \\\n    -H "Authorization: Bearer $BUSINESSRADAR_API_KEY"',
      },
    },
  },
  {
    name: 'list',
    endpoint: '/ext/v3/compliance',
    httpMethod: 'get',
    summary: '',
    description:
      '### Compliance Checks\n\n**GET** — Retrieve a paginated list of compliance checks created via this API key.\nSupports filtering by status and date ranges, and sorting by key timestamps.\n\n**POST** — Initiate a new compliance screening using one of two methods:\n\n1. **Company-based screening**: Provide a `company_id` to screen the company.\nOptionally enable screening of related entities (UBOs and directors) via\n`ubo_screening_enabled` and `directors_screening_enabled`. You can also include\nadditional custom `entities` to be screened alongside the company.\n\n2. **Custom entity screening**: Provide a list of `entities` without a `company_id`\nto screen specific individuals or organizations that are not necessarily affiliated\nwith a company in our database.',
    stainlessPath: '(resource) compliance > (method) list',
    qualified: 'client.compliance.list',
    params: [
      'adverse_media_monitoring_enabled?: boolean;',
      "compliance_score?: 'high' | 'low' | 'medium';",
      'created_at__gte?: string;',
      'created_at__lte?: string;',
      'next_key?: string;',
      "order?: 'asc' | 'desc';",
      'results_changed_at__gte?: string;',
      'results_changed_at__lte?: string;',
      'sanction_monitoring_enabled?: boolean;',
      "sorting?: 'created_at' | 'finished_at' | 'results_changed_at';",
      "status?: 'completed' | 'failed' | 'in_progress' | 'pending' | 'queued' | 'searching_directors';",
    ],
    response:
      "{ company: { country: string; name: string; external_id?: string; }; created_at: string; external_id: string; activity_score?: 'low' | 'medium' | 'high' | ''; adverse_media_score?: 'low' | 'medium' | 'high' | ''; compliance_score?: 'low' | 'medium' | 'high' | ''; country_score?: 'low' | 'medium' | 'high' | ''; finished_at?: string; name?: string; pep_score?: 'low' | 'medium' | 'high' | ''; results_changed_at?: string; reviewed_results_count?: number; sanction_score?: 'low' | 'medium' | 'high' | ''; status?: 'pending' | 'queued' | 'in_progress' | 'searching_directors' | 'completed' | 'failed'; unreviewed_results_count?: number; }",
    markdown:
      "## list\n\n`client.compliance.list(adverse_media_monitoring_enabled?: boolean, compliance_score?: 'high' | 'low' | 'medium', created_at__gte?: string, created_at__lte?: string, next_key?: string, order?: 'asc' | 'desc', results_changed_at__gte?: string, results_changed_at__lte?: string, sanction_monitoring_enabled?: boolean, sorting?: 'created_at' | 'finished_at' | 'results_changed_at', status?: 'completed' | 'failed' | 'in_progress' | 'pending' | 'queued' | 'searching_directors'): { company: object; created_at: string; external_id: string; activity_score?: 'low' | 'medium' | 'high' | ''; adverse_media_score?: 'low' | 'medium' | 'high' | ''; compliance_score?: 'low' | 'medium' | 'high' | ''; country_score?: 'low' | 'medium' | 'high' | ''; finished_at?: string; name?: string; pep_score?: 'low' | 'medium' | 'high' | ''; results_changed_at?: string; reviewed_results_count?: number; sanction_score?: 'low' | 'medium' | 'high' | ''; status?: 'pending' | 'queued' | 'in_progress' | 'searching_directors' | 'completed' | 'failed'; unreviewed_results_count?: number; }`\n\n**get** `/ext/v3/compliance`\n\n### Compliance Checks\n\n**GET** — Retrieve a paginated list of compliance checks created via this API key.\nSupports filtering by status and date ranges, and sorting by key timestamps.\n\n**POST** — Initiate a new compliance screening using one of two methods:\n\n1. **Company-based screening**: Provide a `company_id` to screen the company.\nOptionally enable screening of related entities (UBOs and directors) via\n`ubo_screening_enabled` and `directors_screening_enabled`. You can also include\nadditional custom `entities` to be screened alongside the company.\n\n2. **Custom entity screening**: Provide a list of `entities` without a `company_id`\nto screen specific individuals or organizations that are not necessarily affiliated\nwith a company in our database.\n\n### Parameters\n\n- `adverse_media_monitoring_enabled?: boolean`\n  Filter checks that have entities with adverse media monitoring enabled (pending or active).\n\n- `compliance_score?: 'high' | 'low' | 'medium'`\n  Filter by compliance score.\n\n- `created_at__gte?: string`\n  Filter checks created at or after this time.\n\n- `created_at__lte?: string`\n  Filter checks created at or before this time.\n\n- `next_key?: string`\n  A cursor value used for pagination. Include the `next_key` value from your previous request to retrieve the subsequent page of results. If this value is `null`, the first page of results is returned.\n\n- `order?: 'asc' | 'desc'`\n  Sorting order.\n\n- `results_changed_at__gte?: string`\n  Filter checks with results changed at or after this time.\n\n- `results_changed_at__lte?: string`\n  Filter checks with results changed at or before this time.\n\n- `sanction_monitoring_enabled?: boolean`\n  Filter checks that have entities with sanction monitoring enabled (pending or active).\n\n- `sorting?: 'created_at' | 'finished_at' | 'results_changed_at'`\n  Sorting field.\n\n- `status?: 'completed' | 'failed' | 'in_progress' | 'pending' | 'queued' | 'searching_directors'`\n  Filter by compliance check status.\n\n### Returns\n\n- `{ company: { country: string; name: string; external_id?: string; }; created_at: string; external_id: string; activity_score?: 'low' | 'medium' | 'high' | ''; adverse_media_score?: 'low' | 'medium' | 'high' | ''; compliance_score?: 'low' | 'medium' | 'high' | ''; country_score?: 'low' | 'medium' | 'high' | ''; finished_at?: string; name?: string; pep_score?: 'low' | 'medium' | 'high' | ''; results_changed_at?: string; reviewed_results_count?: number; sanction_score?: 'low' | 'medium' | 'high' | ''; status?: 'pending' | 'queued' | 'in_progress' | 'searching_directors' | 'completed' | 'failed'; unreviewed_results_count?: number; }`\n  ### Compliance Check (List)\n\nLightweight representation used in list responses.\n\n  - `company: { country: string; name: string; external_id?: string; }`\n  - `created_at: string`\n  - `external_id: string`\n  - `activity_score?: 'low' | 'medium' | 'high' | ''`\n  - `adverse_media_score?: 'low' | 'medium' | 'high' | ''`\n  - `compliance_score?: 'low' | 'medium' | 'high' | ''`\n  - `country_score?: 'low' | 'medium' | 'high' | ''`\n  - `finished_at?: string`\n  - `name?: string`\n  - `pep_score?: 'low' | 'medium' | 'high' | ''`\n  - `results_changed_at?: string`\n  - `reviewed_results_count?: number`\n  - `sanction_score?: 'low' | 'medium' | 'high' | ''`\n  - `status?: 'pending' | 'queued' | 'in_progress' | 'searching_directors' | 'completed' | 'failed'`\n  - `unreviewed_results_count?: number`\n\n### Example\n\n```typescript\nimport BusinessRadar from '@businessradar/businessradar';\n\nconst client = new BusinessRadar();\n\n// Automatically fetches more pages as needed.\nfor await (const complianceListResponse of client.compliance.list()) {\n  console.log(complianceListResponse);\n}\n```",
    perLanguage: {
      typescript: {
        method: 'client.compliance.list',
        example:
          "import BusinessRadar from '@businessradar/businessradar';\n\nconst client = new BusinessRadar({\n  apiKey: process.env['BUSINESSRADAR_API_KEY'], // This is the default and can be omitted\n});\n\n// Automatically fetches more pages as needed.\nfor await (const complianceListResponse of client.compliance.list()) {\n  console.log(complianceListResponse.external_id);\n}",
      },
      python: {
        method: 'compliance.list',
        example:
          'import os\nfrom businessradar import BusinessRadar\n\nclient = BusinessRadar(\n    api_key=os.environ.get("BUSINESSRADAR_API_KEY"),  # This is the default and can be omitted\n)\npage = client.compliance.list()\npage = page.results[0]\nprint(page.external_id)',
      },
      php: {
        method: 'compliance->list',
        example:
          "<?php\n\nrequire_once dirname(__DIR__) . '/vendor/autoload.php';\n\n$client = new Client(apiKey: 'My API Key');\n\n$page = $client->compliance->list(\n  adverseMediaMonitoringEnabled: true,\n  complianceScore: 'high',\n  createdAtGte: new \\DateTimeImmutable('2019-12-27T18:11:19.117Z'),\n  createdAtLte: new \\DateTimeImmutable('2019-12-27T18:11:19.117Z'),\n  nextKey: 'next_key',\n  order: 'asc',\n  resultsChangedAtGte: new \\DateTimeImmutable('2019-12-27T18:11:19.117Z'),\n  resultsChangedAtLte: new \\DateTimeImmutable('2019-12-27T18:11:19.117Z'),\n  sanctionMonitoringEnabled: true,\n  sorting: 'created_at',\n  status: 'completed',\n);\n\nvar_dump($page);",
      },
      http: {
        example:
          'curl https://api.businessradar.com/ext/v3/compliance \\\n    -H "Authorization: Bearer $BUSINESSRADAR_API_KEY"',
      },
    },
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
      'adverse_media_monitoring_enabled?: boolean;',
      'company_id?: string;',
      'directors_screening_enabled?: boolean;',
      "entities?: { name: string; aliases?: string[]; country?: string; date_of_birth?: string; entity_type?: 'individual' | 'company'; first_name?: string; last_name?: string; middle_name?: string; }[];",
      'name?: string;',
      'ownership_screening_threshold?: number;',
      'sanction_monitoring_enabled?: boolean;',
      'ubo_screening_enabled?: boolean;',
    ],
    response: '{ external_id: string; }',
    markdown:
      "## create\n\n`client.compliance.create(adverse_media_monitoring_enabled?: boolean, company_id?: string, directors_screening_enabled?: boolean, entities?: { name: string; aliases?: string[]; country?: string; date_of_birth?: string; entity_type?: 'individual' | 'company'; first_name?: string; last_name?: string; middle_name?: string; }[], name?: string, ownership_screening_threshold?: number, sanction_monitoring_enabled?: boolean, ubo_screening_enabled?: boolean): { external_id: string; }`\n\n**post** `/ext/v3/compliance`\n\n### Create Compliance Check (Asynchronous)\n\nInitiate a new compliance screening using one of two methods:\n\n1. **Company-based screening**: Provide a `company_id` to screen the company.\nOptionally enable screening of related entities (UBOs and directors) via\n`ubo_screening_enabled` and `directors_screening_enabled`. You can optionally\ninclude a list of additional `entities` to be screened alongside the company.\n\n2. **Custom entity screening**: Provide a list of `entities` without a\n`company_id` to screen specific individuals or organizations that are not\nnecessarily affiliated with a company in our database.\n\nOnce posted, Business Radar processes the request in the background.\n\nTo check the progress and/or retrieve the final result, you can use the [GET\n/compliance/{external_id}](/ext/v3/#/ext/ext_v3_compliance_retrieve) endpoint.\n\n### Parameters\n\n- `adverse_media_monitoring_enabled?: boolean`\n  If enabled, adverse media monitoring will be activated for all system-created entities (company, directors, UBOs).\n\n- `company_id?: string`\n\n- `directors_screening_enabled?: boolean`\n  If directors should be screened.\n\n- `entities?: { name: string; aliases?: string[]; country?: string; date_of_birth?: string; entity_type?: 'individual' | 'company'; first_name?: string; last_name?: string; middle_name?: string; }[]`\n\n- `name?: string`\n  Custom name for this compliance check.\n\n- `ownership_screening_threshold?: number`\n  The threshold for ultimate ownership to enable for screening.\n\n- `sanction_monitoring_enabled?: boolean`\n  If enabled, sanctions monitoring will be activated for all system-created entities (company, directors, UBOs).\n\n- `ubo_screening_enabled?: boolean`\n  If enabled, UBOs discovered for the company will be screened.\n\n### Returns\n\n- `{ external_id: string; }`\n  ### Compliance Check\n\nUsed for creating a minimal compliance check record.\n\n  - `external_id: string`\n\n### Example\n\n```typescript\nimport BusinessRadar from '@businessradar/businessradar';\n\nconst client = new BusinessRadar();\n\nconst compliance = await client.compliance.create();\n\nconsole.log(compliance);\n```",
    perLanguage: {
      typescript: {
        method: 'client.compliance.create',
        example:
          "import BusinessRadar from '@businessradar/businessradar';\n\nconst client = new BusinessRadar({\n  apiKey: process.env['BUSINESSRADAR_API_KEY'], // This is the default and can be omitted\n});\n\nconst compliance = await client.compliance.create();\n\nconsole.log(compliance.external_id);",
      },
      python: {
        method: 'compliance.create',
        example:
          'import os\nfrom businessradar import BusinessRadar\n\nclient = BusinessRadar(\n    api_key=os.environ.get("BUSINESSRADAR_API_KEY"),  # This is the default and can be omitted\n)\ncompliance = client.compliance.create()\nprint(compliance.external_id)',
      },
      php: {
        method: 'compliance->create',
        example:
          "<?php\n\nrequire_once dirname(__DIR__) . '/vendor/autoload.php';\n\n$client = new Client(apiKey: 'My API Key');\n\n$compliance = $client->compliance->create(\n  adverseMediaMonitoringEnabled: true,\n  companyID: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',\n  directorsScreeningEnabled: true,\n  entities: [\n    [\n      'name' => 'x',\n      'aliases' => ['x'],\n      'country' => 'xx',\n      'dateOfBirth' => '2019-12-27',\n      'entityType' => 'individual',\n      'firstName' => 'first_name',\n      'lastName' => 'last_name',\n      'middleName' => 'middle_name',\n    ],\n  ],\n  name: 'name',\n  ownershipScreeningThreshold: 0,\n  sanctionMonitoringEnabled: true,\n  uboScreeningEnabled: true,\n);\n\nvar_dump($compliance);",
      },
      http: {
        example:
          'curl https://api.businessradar.com/ext/v3/compliance \\\n    -X POST \\\n    -H "Authorization: Bearer $BUSINESSRADAR_API_KEY"',
      },
    },
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
      "{ entities: { adverse_media_monitoring_enabled: boolean; aliases: string[]; entity_role: string; entity_type: 'individual' | 'company'; external_id: string; name: string; sanction_monitoring_enabled: boolean; status: 'on_hold' | 'queued' | 'in_progress' | 'completed' | 'skipped' | 'failed'; ubo: ubo; country?: string; gender?: 'male' | 'female' | ''; }[]; external_id: string; progress: number; activity_score?: 'low' | 'medium' | 'high' | ''; adverse_media_score?: 'low' | 'medium' | 'high' | ''; compliance_score?: 'low' | 'medium' | 'high' | ''; country_score?: 'low' | 'medium' | 'high' | ''; name?: string; pep_score?: 'low' | 'medium' | 'high' | ''; sanction_score?: 'low' | 'medium' | 'high' | ''; status?: 'pending' | 'queued' | 'in_progress' | 'searching_directors' | 'completed' | 'failed'; }",
    markdown:
      "## retrieve\n\n`client.compliance.retrieve(external_id: string): { entities: compliance_entity_retrieve[]; external_id: string; progress: number; activity_score?: 'low' | 'medium' | 'high' | ''; adverse_media_score?: 'low' | 'medium' | 'high' | ''; compliance_score?: 'low' | 'medium' | 'high' | ''; country_score?: 'low' | 'medium' | 'high' | ''; name?: string; pep_score?: 'low' | 'medium' | 'high' | ''; sanction_score?: 'low' | 'medium' | 'high' | ''; status?: 'pending' | 'queued' | 'in_progress' | 'searching_directors' | 'completed' | 'failed'; }`\n\n**get** `/ext/v3/compliance/{external_id}`\n\n### Compliance Check Status\n\nCheck the current status, progress, and high-level scores of a specific compliance\ncheck.\n\n### Parameters\n\n- `external_id: string`\n\n### Returns\n\n- `{ entities: { adverse_media_monitoring_enabled: boolean; aliases: string[]; entity_role: string; entity_type: 'individual' | 'company'; external_id: string; name: string; sanction_monitoring_enabled: boolean; status: 'on_hold' | 'queued' | 'in_progress' | 'completed' | 'skipped' | 'failed'; ubo: ubo; country?: string; gender?: 'male' | 'female' | ''; }[]; external_id: string; progress: number; activity_score?: 'low' | 'medium' | 'high' | ''; adverse_media_score?: 'low' | 'medium' | 'high' | ''; compliance_score?: 'low' | 'medium' | 'high' | ''; country_score?: 'low' | 'medium' | 'high' | ''; name?: string; pep_score?: 'low' | 'medium' | 'high' | ''; sanction_score?: 'low' | 'medium' | 'high' | ''; status?: 'pending' | 'queued' | 'in_progress' | 'searching_directors' | 'completed' | 'failed'; }`\n\n  - `entities: { adverse_media_monitoring_enabled: boolean; aliases: string[]; entity_role: string; entity_type: 'individual' | 'company'; external_id: string; name: string; sanction_monitoring_enabled: boolean; status: 'on_hold' | 'queued' | 'in_progress' | 'completed' | 'skipped' | 'failed'; ubo: { name: string; beneficial_ownership_percentage?: number; birth_date?: string; degree_of_separation?: number; direct_ownership_percentage?: number; implied_beneficial_ownership_percentage?: number; implied_direct_ownership_percentage?: number; implied_indirect_ownership_percentage?: number; indirect_ownership_percentage?: number; is_beneficiary?: boolean; is_person_with_significant_control?: boolean; }; country?: string; gender?: 'male' | 'female' | ''; }[]`\n  - `external_id: string`\n  - `progress: number`\n  - `activity_score?: 'low' | 'medium' | 'high' | ''`\n  - `adverse_media_score?: 'low' | 'medium' | 'high' | ''`\n  - `compliance_score?: 'low' | 'medium' | 'high' | ''`\n  - `country_score?: 'low' | 'medium' | 'high' | ''`\n  - `name?: string`\n  - `pep_score?: 'low' | 'medium' | 'high' | ''`\n  - `sanction_score?: 'low' | 'medium' | 'high' | ''`\n  - `status?: 'pending' | 'queued' | 'in_progress' | 'searching_directors' | 'completed' | 'failed'`\n\n### Example\n\n```typescript\nimport BusinessRadar from '@businessradar/businessradar';\n\nconst client = new BusinessRadar();\n\nconst compliance = await client.compliance.retrieve('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e');\n\nconsole.log(compliance);\n```",
    perLanguage: {
      typescript: {
        method: 'client.compliance.retrieve',
        example:
          "import BusinessRadar from '@businessradar/businessradar';\n\nconst client = new BusinessRadar({\n  apiKey: process.env['BUSINESSRADAR_API_KEY'], // This is the default and can be omitted\n});\n\nconst compliance = await client.compliance.retrieve('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e');\n\nconsole.log(compliance.external_id);",
      },
      python: {
        method: 'compliance.retrieve',
        example:
          'import os\nfrom businessradar import BusinessRadar\n\nclient = BusinessRadar(\n    api_key=os.environ.get("BUSINESSRADAR_API_KEY"),  # This is the default and can be omitted\n)\ncompliance = client.compliance.retrieve(\n    "182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n)\nprint(compliance.external_id)',
      },
      php: {
        method: 'compliance->retrieve',
        example:
          "<?php\n\nrequire_once dirname(__DIR__) . '/vendor/autoload.php';\n\n$client = new Client(apiKey: 'My API Key');\n\n$compliance = $client->compliance->retrieve(\n  '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e'\n);\n\nvar_dump($compliance);",
      },
      http: {
        example:
          'curl https://api.businessradar.com/ext/v3/compliance/$EXTERNAL_ID \\\n    -H "Authorization: Bearer $BUSINESSRADAR_API_KEY"',
      },
    },
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
      "{ addresses: { city?: string; country?: string; postal_code?: string; street?: string; }[]; automated_false_positive_rating: string; automated_false_positive_rating_comments: string; created_at: string; entity: { adverse_media_monitoring_enabled: boolean; aliases: string[]; entity_role: string; entity_type: 'individual' | 'company'; external_id: string; name: string; sanction_monitoring_enabled: boolean; status: 'on_hold' | 'queued' | 'in_progress' | 'completed' | 'skipped' | 'failed'; ubo: ubo; country?: string; gender?: 'male' | 'female' | ''; }; external_id: string; name: string; result_type: 'sanction' | 'pep' | 'adverse_media' | 'enforcement' | 'govt_owned'; sources: { url: string; description?: string; document?: string; domain?: string; publication_date?: string; title?: string; }[]; tags: { tag: string; }[]; confidence?: number; formatted_text?: string; formatted_text_en?: string; formatted_title?: string; formatted_title_en?: string; image?: string; language?: string; source_date?: string; source_name?: string; text?: string; text_en?: string; title?: string; title_en?: string; url?: string; }",
    markdown:
      "## list_results\n\n`client.compliance.listResults(external_id: string, entity?: string, exclude_automated_false_positives?: boolean, min_confidence?: number, next_key?: string, order?: 'asc' | 'desc', result_type?: 'adverse_media' | 'enforcement' | 'govt_owned' | 'pep' | 'sanction', sorting?: 'confidence' | 'created_at' | 'source_date'): { addresses: object[]; automated_false_positive_rating: string; automated_false_positive_rating_comments: string; created_at: string; entity: compliance_entity_retrieve; external_id: string; name: string; result_type: 'sanction' | 'pep' | 'adverse_media' | 'enforcement' | 'govt_owned'; sources: object[]; tags: object[]; confidence?: number; formatted_text?: string; formatted_text_en?: string; formatted_title?: string; formatted_title_en?: string; image?: string; language?: string; source_date?: string; source_name?: string; text?: string; text_en?: string; title?: string; title_en?: string; url?: string; }`\n\n**get** `/ext/v3/compliance/{external_id}/results`\n\n### List Compliance Results\n\nRetrieve all findings for a compliance check. Results can be filtered by entity,\ntype of finding (e.g., Sanction, PEP), and confidence score.\n\n### Parameters\n\n- `external_id: string`\n\n- `entity?: string`\n  Filter by entity external ID\n\n- `exclude_automated_false_positives?: boolean`\n  Filter out automated false positive rated results\n\n- `min_confidence?: number`\n  Filter by minimum confidence score (0.0 - 1.0)\n\n- `next_key?: string`\n  A cursor value used for pagination. Include the `next_key` value from your previous request to retrieve the subsequent page of results. If this value is `null`, the first page of results is returned.\n\n- `order?: 'asc' | 'desc'`\n  Sorting order\n\n- `result_type?: 'adverse_media' | 'enforcement' | 'govt_owned' | 'pep' | 'sanction'`\n  Filter by result type\n\n- `sorting?: 'confidence' | 'created_at' | 'source_date'`\n  Sorting field\n\n### Returns\n\n- `{ addresses: { city?: string; country?: string; postal_code?: string; street?: string; }[]; automated_false_positive_rating: string; automated_false_positive_rating_comments: string; created_at: string; entity: { adverse_media_monitoring_enabled: boolean; aliases: string[]; entity_role: string; entity_type: 'individual' | 'company'; external_id: string; name: string; sanction_monitoring_enabled: boolean; status: 'on_hold' | 'queued' | 'in_progress' | 'completed' | 'skipped' | 'failed'; ubo: ubo; country?: string; gender?: 'male' | 'female' | ''; }; external_id: string; name: string; result_type: 'sanction' | 'pep' | 'adverse_media' | 'enforcement' | 'govt_owned'; sources: { url: string; description?: string; document?: string; domain?: string; publication_date?: string; title?: string; }[]; tags: { tag: string; }[]; confidence?: number; formatted_text?: string; formatted_text_en?: string; formatted_title?: string; formatted_title_en?: string; image?: string; language?: string; source_date?: string; source_name?: string; text?: string; text_en?: string; title?: string; title_en?: string; url?: string; }`\n  Compliance entity result.\n\n  - `addresses: { city?: string; country?: string; postal_code?: string; street?: string; }[]`\n  - `automated_false_positive_rating: string`\n  - `automated_false_positive_rating_comments: string`\n  - `created_at: string`\n  - `entity: { adverse_media_monitoring_enabled: boolean; aliases: string[]; entity_role: string; entity_type: 'individual' | 'company'; external_id: string; name: string; sanction_monitoring_enabled: boolean; status: 'on_hold' | 'queued' | 'in_progress' | 'completed' | 'skipped' | 'failed'; ubo: { name: string; beneficial_ownership_percentage?: number; birth_date?: string; degree_of_separation?: number; direct_ownership_percentage?: number; implied_beneficial_ownership_percentage?: number; implied_direct_ownership_percentage?: number; implied_indirect_ownership_percentage?: number; indirect_ownership_percentage?: number; is_beneficiary?: boolean; is_person_with_significant_control?: boolean; }; country?: string; gender?: 'male' | 'female' | ''; }`\n  - `external_id: string`\n  - `name: string`\n  - `result_type: 'sanction' | 'pep' | 'adverse_media' | 'enforcement' | 'govt_owned'`\n  - `sources: { url: string; description?: string; document?: string; domain?: string; publication_date?: string; title?: string; }[]`\n  - `tags: { tag: string; }[]`\n  - `confidence?: number`\n  - `formatted_text?: string`\n  - `formatted_text_en?: string`\n  - `formatted_title?: string`\n  - `formatted_title_en?: string`\n  - `image?: string`\n  - `language?: string`\n  - `source_date?: string`\n  - `source_name?: string`\n  - `text?: string`\n  - `text_en?: string`\n  - `title?: string`\n  - `title_en?: string`\n  - `url?: string`\n\n### Example\n\n```typescript\nimport BusinessRadar from '@businessradar/businessradar';\n\nconst client = new BusinessRadar();\n\n// Automatically fetches more pages as needed.\nfor await (const complianceListResultsResponse of client.compliance.listResults('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e')) {\n  console.log(complianceListResultsResponse);\n}\n```",
    perLanguage: {
      typescript: {
        method: 'client.compliance.listResults',
        example:
          "import BusinessRadar from '@businessradar/businessradar';\n\nconst client = new BusinessRadar({\n  apiKey: process.env['BUSINESSRADAR_API_KEY'], // This is the default and can be omitted\n});\n\n// Automatically fetches more pages as needed.\nfor await (const complianceListResultsResponse of client.compliance.listResults(\n  '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',\n)) {\n  console.log(complianceListResultsResponse.external_id);\n}",
      },
      python: {
        method: 'compliance.list_results',
        example:
          'import os\nfrom businessradar import BusinessRadar\n\nclient = BusinessRadar(\n    api_key=os.environ.get("BUSINESSRADAR_API_KEY"),  # This is the default and can be omitted\n)\npage = client.compliance.list_results(\n    external_id="182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n)\npage = page.results[0]\nprint(page.external_id)',
      },
      php: {
        method: 'compliance->listResults',
        example:
          "<?php\n\nrequire_once dirname(__DIR__) . '/vendor/autoload.php';\n\n$client = new Client(apiKey: 'My API Key');\n\n$page = $client->compliance->listResults(\n  '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',\n  entity: 'entity',\n  excludeAutomatedFalsePositives: true,\n  minConfidence: 0,\n  nextKey: 'next_key',\n  order: 'asc',\n  resultType: 'adverse_media',\n  sorting: 'confidence',\n);\n\nvar_dump($page);",
      },
      http: {
        example:
          'curl https://api.businessradar.com/ext/v3/compliance/$EXTERNAL_ID/results \\\n    -H "Authorization: Bearer $BUSINESSRADAR_API_KEY"',
      },
    },
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
    perLanguage: {
      typescript: {
        method: 'client.portfolios.list',
        example:
          "import BusinessRadar from '@businessradar/businessradar';\n\nconst client = new BusinessRadar({\n  apiKey: process.env['BUSINESSRADAR_API_KEY'], // This is the default and can be omitted\n});\n\n// Automatically fetches more pages as needed.\nfor await (const portfolio of client.portfolios.list()) {\n  console.log(portfolio.external_id);\n}",
      },
      python: {
        method: 'portfolios.list',
        example:
          'import os\nfrom businessradar import BusinessRadar\n\nclient = BusinessRadar(\n    api_key=os.environ.get("BUSINESSRADAR_API_KEY"),  # This is the default and can be omitted\n)\npage = client.portfolios.list()\npage = page.results[0]\nprint(page.external_id)',
      },
      php: {
        method: 'portfolios->list',
        example:
          "<?php\n\nrequire_once dirname(__DIR__) . '/vendor/autoload.php';\n\n$client = new Client(apiKey: 'My API Key');\n\n$page = $client->portfolios->list(nextKey: 'next_key');\n\nvar_dump($page);",
      },
      http: {
        example:
          'curl https://api.businessradar.com/ext/v3/portfolios \\\n    -H "Authorization: Bearer $BUSINESSRADAR_API_KEY"',
      },
    },
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
    perLanguage: {
      typescript: {
        method: 'client.portfolios.create',
        example:
          "import BusinessRadar from '@businessradar/businessradar';\n\nconst client = new BusinessRadar({\n  apiKey: process.env['BUSINESSRADAR_API_KEY'], // This is the default and can be omitted\n});\n\nconst portfolio = await client.portfolios.create({ name: 'x' });\n\nconsole.log(portfolio.external_id);",
      },
      python: {
        method: 'portfolios.create',
        example:
          'import os\nfrom businessradar import BusinessRadar\n\nclient = BusinessRadar(\n    api_key=os.environ.get("BUSINESSRADAR_API_KEY"),  # This is the default and can be omitted\n)\nportfolio = client.portfolios.create(\n    name="x",\n)\nprint(portfolio.external_id)',
      },
      php: {
        method: 'portfolios->create',
        example:
          "<?php\n\nrequire_once dirname(__DIR__) . '/vendor/autoload.php';\n\n$client = new Client(apiKey: 'My API Key');\n\n$portfolio = $client->portfolios->create(\n  name: 'x',\n  customerReference: 'customer_reference',\n  defaultPermission: 'view_only',\n);\n\nvar_dump($portfolio);",
      },
      http: {
        example:
          'curl https://api.businessradar.com/ext/v3/portfolios \\\n    -H \'Content-Type: application/json\' \\\n    -H "Authorization: Bearer $BUSINESSRADAR_API_KEY" \\\n    -d \'{\n          "name": "x"\n        }\'',
      },
    },
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
    perLanguage: {
      typescript: {
        method: 'client.portfolios.companies.list',
        example:
          "import BusinessRadar from '@businessradar/businessradar';\n\nconst client = new BusinessRadar({\n  apiKey: process.env['BUSINESSRADAR_API_KEY'], // This is the default and can be omitted\n});\n\n// Automatically fetches more pages as needed.\nfor await (const companyListResponse of client.portfolios.companies.list(\n  '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',\n)) {\n  console.log(companyListResponse.company);\n}",
      },
      python: {
        method: 'portfolios.companies.list',
        example:
          'import os\nfrom businessradar import BusinessRadar\n\nclient = BusinessRadar(\n    api_key=os.environ.get("BUSINESSRADAR_API_KEY"),  # This is the default and can be omitted\n)\npage = client.portfolios.companies.list(\n    portfolio_id="182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n)\npage = page.results[0]\nprint(page.company)',
      },
      php: {
        method: 'portfolios->companies->list',
        example:
          "<?php\n\nrequire_once dirname(__DIR__) . '/vendor/autoload.php';\n\n$client = new Client(apiKey: 'My API Key');\n\n$page = $client->portfolios->companies->list(\n  '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', nextKey: 'next_key'\n);\n\nvar_dump($page);",
      },
      http: {
        example:
          'curl https://api.businessradar.com/ext/v3/portfolios/$PORTFOLIO_ID/companies \\\n    -H "Authorization: Bearer $BUSINESSRADAR_API_KEY"',
      },
    },
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
      '{ external_id: string; finished_at: string; progress: number; status: string; status_text: string; company?: { country: country_enum; duns_number: string; external_id: string; name: string; }; country?: string; customer_reference?: string; duns_number?: string; primary_name?: string; registration_number?: string; }',
    markdown:
      "## create\n\n`client.portfolios.companies.create(portfolio_id: string, company?: { external_id: string; }, country?: string, customer_reference?: string, duns_number?: string, primary_name?: string, registration_number?: string): { external_id: string; finished_at: string; progress: number; status: string; status_text: string; company?: portfolio_company_detail; country?: string; customer_reference?: string; duns_number?: string; primary_name?: string; registration_number?: string; }`\n\n**post** `/ext/v3/portfolios/{portfolio_id}/companies`\n\n### Register Portfolio Company (Asynchronous)\n\nRegister and add a new company to the portfolio. Once posted, Business Radar\nprocesses the request in the background.\n\nTo check the progress and/or retrieve the final result, you can use the [GET\n/registrations/{registration_id}](/ext/v3/#/ext/ext_v3_registrations_retrieve)\nendpoint.\n\n### Parameters\n\n- `portfolio_id: string`\n\n- `company?: { external_id: string; }`\n  ### Portfolio Company Detail (Simplified)\n\nA lightweight data structure for company identification (UUID, DUNS, Name, Country).\n  - `external_id: string`\n\n- `country?: string`\n\n- `customer_reference?: string`\n  Customer reference for the client to understand relationship.\n\n- `duns_number?: string`\n\n- `primary_name?: string`\n\n- `registration_number?: string`\n\n### Returns\n\n- `{ external_id: string; finished_at: string; progress: number; status: string; status_text: string; company?: { country: country_enum; duns_number: string; external_id: string; name: string; }; country?: string; customer_reference?: string; duns_number?: string; primary_name?: string; registration_number?: string; }`\n  ### Company Registration\n\nHandles the registration of companies for monitoring. New companies can be\nidentified by DUNS number, local registration number, or name and country.\n\n  - `external_id: string`\n  - `finished_at: string`\n  - `progress: number`\n  - `status: string`\n  - `status_text: string`\n  - `company?: { country: string; duns_number: string; external_id: string; name: string; }`\n  - `country?: string`\n  - `customer_reference?: string`\n  - `duns_number?: string`\n  - `primary_name?: string`\n  - `registration_number?: string`\n\n### Example\n\n```typescript\nimport BusinessRadar from '@businessradar/businessradar';\n\nconst client = new BusinessRadar();\n\nconst registration = await client.portfolios.companies.create('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e');\n\nconsole.log(registration);\n```",
    perLanguage: {
      typescript: {
        method: 'client.portfolios.companies.create',
        example:
          "import BusinessRadar from '@businessradar/businessradar';\n\nconst client = new BusinessRadar({\n  apiKey: process.env['BUSINESSRADAR_API_KEY'], // This is the default and can be omitted\n});\n\nconst registration = await client.portfolios.companies.create(\n  '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',\n);\n\nconsole.log(registration.external_id);",
      },
      python: {
        method: 'portfolios.companies.create',
        example:
          'import os\nfrom businessradar import BusinessRadar\n\nclient = BusinessRadar(\n    api_key=os.environ.get("BUSINESSRADAR_API_KEY"),  # This is the default and can be omitted\n)\nregistration = client.portfolios.companies.create(\n    portfolio_id="182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n)\nprint(registration.external_id)',
      },
      php: {
        method: 'portfolios->companies->create',
        example:
          "<?php\n\nrequire_once dirname(__DIR__) . '/vendor/autoload.php';\n\n$client = new Client(apiKey: 'My API Key');\n\n$registration = $client->portfolios->companies->create(\n  '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',\n  company: ['externalID' => '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e'],\n  country: 'AF',\n  customerReference: 'customer_reference',\n  dunsNumber: 'duns_number',\n  primaryName: 'primary_name',\n  registrationNumber: 'registration_number',\n);\n\nvar_dump($registration);",
      },
      http: {
        example:
          'curl https://api.businessradar.com/ext/v3/portfolios/$PORTFOLIO_ID/companies \\\n    -X POST \\\n    -H "Authorization: Bearer $BUSINESSRADAR_API_KEY"',
      },
    },
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
    perLanguage: {
      typescript: {
        method: 'client.portfolios.companies.delete',
        example:
          "import BusinessRadar from '@businessradar/businessradar';\n\nconst client = new BusinessRadar({\n  apiKey: process.env['BUSINESSRADAR_API_KEY'], // This is the default and can be omitted\n});\n\nawait client.portfolios.companies.delete('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {\n  portfolio_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',\n});",
      },
      python: {
        method: 'portfolios.companies.delete',
        example:
          'import os\nfrom businessradar import BusinessRadar\n\nclient = BusinessRadar(\n    api_key=os.environ.get("BUSINESSRADAR_API_KEY"),  # This is the default and can be omitted\n)\nclient.portfolios.companies.delete(\n    external_id="182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n    portfolio_id="182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n)',
      },
      php: {
        method: 'portfolios->companies->delete',
        example:
          "<?php\n\nrequire_once dirname(__DIR__) . '/vendor/autoload.php';\n\n$client = new Client(apiKey: 'My API Key');\n\n$result = $client->portfolios->companies->delete(\n  '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',\n  portfolioID: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',\n);\n\nvar_dump($result);",
      },
      http: {
        example:
          'curl https://api.businessradar.com/ext/v3/portfolios/$PORTFOLIO_ID/companies/$EXTERNAL_ID \\\n    -X DELETE \\\n    -H "Authorization: Bearer $BUSINESSRADAR_API_KEY"',
      },
    },
  },
];

const EMBEDDED_READMES: { language: string; content: string }[] = [
  {
    language: 'php',
    content:
      "# Business Radar PHP API Library\n\nThe Business Radar PHP library provides convenient access to the Business Radar REST API from any PHP 8.1.0+ application.\n\n## Installation\n\n<!-- x-release-please-start-version -->\n```\ncomposer require \"businessradar/businessradar 0.0.1\"\n```\n<!-- x-release-please-end -->\n\n## Usage\n\n```php\n<?php\n\n$client = new Client(apiKey: getenv('BUSINESSRADAR_API_KEY') ?: 'My API Key');\n\n$page = $client->news->articles->list();\n\nvar_dump($page->external_id);\n```",
  },
  {
    language: 'python',
    content:
      '# Business Radar Python API library\n\n<!-- prettier-ignore -->\n[![PyPI version](https://img.shields.io/pypi/v/businessradar.svg?label=pypi%20(stable))](https://pypi.org/project/businessradar/)\n\nThe Business Radar Python library provides convenient access to the Business Radar REST API from any Python 3.9+\napplication. The library includes type definitions for all request params and response fields,\nand offers both synchronous and asynchronous clients powered by [httpx](https://github.com/encode/httpx).\n\n\n\nIt is generated with [Stainless](https://www.stainless.com/).\n\n## MCP Server\n\nUse the Business Radar MCP Server to enable AI assistants to interact with this API, allowing them to explore endpoints, make test requests, and use documentation to help integrate this SDK into your application.\n\n[![Add to Cursor](https://cursor.com/deeplink/mcp-install-dark.svg)](https://cursor.com/en-US/install-mcp?name=%40businessradar%2Fbusinessradar-mcp&config=eyJuYW1lIjoiQGJ1c2luZXNzcmFkYXIvYnVzaW5lc3NyYWRhci1tY3AiLCJ0cmFuc3BvcnQiOiJodHRwIiwidXJsIjoiaHR0cHM6Ly9idXNpbmVzc3JhZGFyLnN0bG1jcC5jb20iLCJoZWFkZXJzIjp7IngtYnVzaW5lc3NyYWRhci1hcGkta2V5IjoiTXkgQVBJIEtleSJ9fQ)\n[![Install in VS Code](https://img.shields.io/badge/_-Add_to_VS_Code-blue?style=for-the-badge&logo=data:image/svg%2bxml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9Im5vbmUiIHZpZXdCb3g9IjAgMCA0MCA0MCI+PHBhdGggZmlsbD0iI0VFRSIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNMzAuMjM1IDM5Ljg4NGEyLjQ5MSAyLjQ5MSAwIDAgMS0xLjc4MS0uNzNMMTIuNyAyNC43OGwtMy40NiAyLjYyNC0zLjQwNiAyLjU4MmExLjY2NSAxLjY2NSAwIDAgMS0xLjA4Mi4zMzggMS42NjQgMS42NjQgMCAwIDEtMS4wNDYtLjQzMWwtMi4yLTJhMS42NjYgMS42NjYgMCAwIDEgMC0yLjQ2M0w3LjQ1OCAyMCA0LjY3IDE3LjQ1MyAxLjUwNyAxNC41N2ExLjY2NSAxLjY2NSAwIDAgMSAwLTIuNDYzbDIuMi0yYTEuNjY1IDEuNjY1IDAgMCAxIDIuMTMtLjA5N2w2Ljg2MyA1LjIwOUwyOC40NTIuODQ0YTIuNDg4IDIuNDg4IDAgMCAxIDEuODQxLS43MjljLjM1MS4wMDkuNjk5LjA5MSAxLjAxOS4yNDVsOC4yMzYgMy45NjFhMi41IDIuNSAwIDAgMSAxLjQxNSAyLjI1M3YuMDk5LS4wNDVWMzMuMzd2LS4wNDUuMDk1YTIuNTAxIDIuNTAxIDAgMCAxLTEuNDE2IDIuMjU3bC04LjIzNSAzLjk2MWEyLjQ5MiAyLjQ5MiAwIDAgMS0xLjA3Ny4yNDZabS43MTYtMjguOTQ3LTExLjk0OCA5LjA2MiAxMS45NTIgOS4wNjUtLjAwNC0xOC4xMjdaIi8+PC9zdmc+)](https://vscode.stainless.com/mcp/%7B%22name%22%3A%22%40businessradar%2Fbusinessradar-mcp%22%2C%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fbusinessradar.stlmcp.com%22%2C%22headers%22%3A%7B%22x-businessradar-api-key%22%3A%22My%20API%20Key%22%7D%7D)\n\n> Note: You may need to set environment variables in your MCP client.\n\n## Documentation\n\nThe REST API documentation can be found on [api.businessradar.com](https://api.businessradar.com/ext/v3/). The full API of this library can be found in [api.md](api.md).\n\n## Installation\n\n```sh\n# install from PyPI\npip install businessradar\n```\n\n## Usage\n\nThe full API of this library can be found in [api.md](api.md).\n\n```python\nimport os\nfrom businessradar import BusinessRadar\n\nclient = BusinessRadar(\n    api_key=os.environ.get("BUSINESSRADAR_API_KEY"),  # This is the default and can be omitted\n)\n\npage = client.news.articles.list()\nprint(page.results)\n```\n\nWhile you can provide an `api_key` keyword argument,\nwe recommend using [python-dotenv](https://pypi.org/project/python-dotenv/)\nto add `BUSINESSRADAR_API_KEY="My API Key"` to your `.env` file\nso that your API Key is not stored in source control.\n\n## Async usage\n\nSimply import `AsyncBusinessRadar` instead of `BusinessRadar` and use `await` with each API call:\n\n```python\nimport os\nimport asyncio\nfrom businessradar import AsyncBusinessRadar\n\nclient = AsyncBusinessRadar(\n    api_key=os.environ.get("BUSINESSRADAR_API_KEY"),  # This is the default and can be omitted\n)\n\nasync def main() -> None:\n  page = await client.news.articles.list()\n  print(page.results)\n\nasyncio.run(main())\n```\n\nFunctionality between the synchronous and asynchronous clients is otherwise identical.\n\n### With aiohttp\n\nBy default, the async client uses `httpx` for HTTP requests. However, for improved concurrency performance you may also use `aiohttp` as the HTTP backend.\n\nYou can enable this by installing `aiohttp`:\n\n```sh\n# install from PyPI\npip install businessradar[aiohttp]\n```\n\nThen you can enable it by instantiating the client with `http_client=DefaultAioHttpClient()`:\n\n```python\nimport os\nimport asyncio\nfrom businessradar import DefaultAioHttpClient\nfrom businessradar import AsyncBusinessRadar\n\nasync def main() -> None:\n  async with AsyncBusinessRadar(\n    api_key=os.environ.get("BUSINESSRADAR_API_KEY"),  # This is the default and can be omitted\n    http_client=DefaultAioHttpClient(),\n) as client:\n    page = await client.news.articles.list()\n    print(page.results)\n\nasyncio.run(main())\n```\n\n\n\n## Using types\n\nNested request parameters are [TypedDicts](https://docs.python.org/3/library/typing.html#typing.TypedDict). Responses are [Pydantic models](https://docs.pydantic.dev) which also provide helper methods for things like:\n\n- Serializing back into JSON, `model.to_json()`\n- Converting to a dictionary, `model.to_dict()`\n\nTyped requests and responses provide autocomplete and documentation within your editor. If you would like to see type errors in VS Code to help catch bugs earlier, set `python.analysis.typeCheckingMode` to `basic`.\n\n## Pagination\n\nList methods in the Business Radar API are paginated.\n\nThis library provides auto-paginating iterators with each list response, so you do not have to request successive pages manually:\n\n```python\nfrom businessradar import BusinessRadar\n\nclient = BusinessRadar()\n\nall_articles = []\n# Automatically fetches more pages as needed.\nfor article in client.news.articles.list(\n    next_key="24345",\n):\n    # Do something with article here\n    all_articles.append(article)\nprint(all_articles)\n```\n\nOr, asynchronously:\n\n```python\nimport asyncio\nfrom businessradar import AsyncBusinessRadar\n\nclient = AsyncBusinessRadar()\n\nasync def main() -> None:\n    all_articles = []\n    # Iterate through items across all pages, issuing requests as needed.\n    async for article in client.news.articles.list(\n    next_key="24345",\n):\n        all_articles.append(article)\n    print(all_articles)\n\nasyncio.run(main())\n```\n\nAlternatively, you can use the `.has_next_page()`, `.next_page_info()`, or  `.get_next_page()` methods for more granular control working with pages:\n\n```python\nfirst_page = await client.news.articles.list(\n    next_key="24345",\n)\nif first_page.has_next_page():\n    print(f"will fetch next page using these details: {first_page.next_page_info()}")\n    next_page = await first_page.get_next_page()\n    print(f"number of items we just fetched: {len(next_page.results)}")\n\n# Remove `await` for non-async usage.\n```\n\nOr just work directly with the returned data:\n\n```python\nfirst_page = await client.news.articles.list(\n    next_key="24345",\n)\n\nprint(f"next page cursor: {first_page.next_key}") # => "next page cursor: ..."\nfor article in first_page.results:\n    print(article.external_id)\n\n# Remove `await` for non-async usage.\n```\n\n## Nested params\n\nNested parameters are dictionaries, typed using `TypedDict`, for example:\n\n```python\nfrom businessradar import BusinessRadar\n\nclient = BusinessRadar()\n\narticle_export = client.news.articles.export.create(\n    file_type="PDF",\n    filters={},\n)\nprint(article_export.filters)\n```\n\n\n\n## Handling errors\n\nWhen the library is unable to connect to the API (for example, due to network connection problems or a timeout), a subclass of `businessradar.APIConnectionError` is raised.\n\nWhen the API returns a non-success status code (that is, 4xx or 5xx\nresponse), a subclass of `businessradar.APIStatusError` is raised, containing `status_code` and `response` properties.\n\nAll errors inherit from `businessradar.APIError`.\n\n```python\nimport businessradar\nfrom businessradar import BusinessRadar\n\nclient = BusinessRadar()\n\ntry:\n    client.news.articles.list()\nexcept businessradar.APIConnectionError as e:\n    print("The server could not be reached")\n    print(e.__cause__) # an underlying Exception, likely raised within httpx.\nexcept businessradar.RateLimitError as e:\n    print("A 429 status code was received; we should back off a bit.")\nexcept businessradar.APIStatusError as e:\n    print("Another non-200-range status code was received")\n    print(e.status_code)\n    print(e.response)\n```\n\nError codes are as follows:\n\n| Status Code | Error Type                 |\n| ----------- | -------------------------- |\n| 400         | `BadRequestError`          |\n| 401         | `AuthenticationError`      |\n| 403         | `PermissionDeniedError`    |\n| 404         | `NotFoundError`            |\n| 422         | `UnprocessableEntityError` |\n| 429         | `RateLimitError`           |\n| >=500       | `InternalServerError`      |\n| N/A         | `APIConnectionError`       |\n\n### Retries\n\nCertain errors are automatically retried 2 times by default, with a short exponential backoff.\nConnection errors (for example, due to a network connectivity problem), 408 Request Timeout, 409 Conflict,\n429 Rate Limit, and >=500 Internal errors are all retried by default.\n\nYou can use the `max_retries` option to configure or disable retry settings:\n\n```python\nfrom businessradar import BusinessRadar\n\n# Configure the default for all requests:\nclient = BusinessRadar(\n    # default is 2\n    max_retries=0,\n)\n\n# Or, configure per-request:\nclient.with_options(max_retries = 5).news.articles.list()\n```\n\n### Timeouts\n\nBy default requests time out after 1 minute. You can configure this with a `timeout` option,\nwhich accepts a float or an [`httpx.Timeout`](https://www.python-httpx.org/advanced/timeouts/#fine-tuning-the-configuration) object:\n\n```python\nfrom businessradar import BusinessRadar\n\n# Configure the default for all requests:\nclient = BusinessRadar(\n    # 20 seconds (default is 1 minute)\n    timeout=20.0,\n)\n\n# More granular control:\nclient = BusinessRadar(\n    timeout=httpx.Timeout(60.0, read=5.0, write=10.0, connect=2.0),\n)\n\n# Override per-request:\nclient.with_options(timeout = 5.0).news.articles.list()\n```\n\nOn timeout, an `APITimeoutError` is thrown.\n\nNote that requests that time out are [retried twice by default](#retries).\n\n\n\n## Advanced\n\n### Logging\n\nWe use the standard library [`logging`](https://docs.python.org/3/library/logging.html) module.\n\nYou can enable logging by setting the environment variable `BUSINESS_RADAR_LOG` to `info`.\n\n```shell\n$ export BUSINESS_RADAR_LOG=info\n```\n\nOr to `debug` for more verbose logging.\n\n### How to tell whether `None` means `null` or missing\n\nIn an API response, a field may be explicitly `null`, or missing entirely; in either case, its value is `None` in this library. You can differentiate the two cases with `.model_fields_set`:\n\n```py\nif response.my_field is None:\n  if \'my_field\' not in response.model_fields_set:\n    print(\'Got json like {}, without a "my_field" key present at all.\')\n  else:\n    print(\'Got json like {"my_field": null}.\')\n```\n\n### Accessing raw response data (e.g. headers)\n\nThe "raw" Response object can be accessed by prefixing `.with_raw_response.` to any HTTP method call, e.g.,\n\n```py\nfrom businessradar import BusinessRadar\n\nclient = BusinessRadar()\nresponse = client.news.articles.with_raw_response.list()\nprint(response.headers.get(\'X-My-Header\'))\n\narticle = response.parse()  # get the object that `news.articles.list()` would have returned\nprint(article.external_id)\n```\n\nThese methods return an [`APIResponse`](https://github.com/businessradar/businessradar-sdk-python/tree/master/src/businessradar/_response.py) object.\n\nThe async client returns an [`AsyncAPIResponse`](https://github.com/businessradar/businessradar-sdk-python/tree/master/src/businessradar/_response.py) with the same structure, the only difference being `await`able methods for reading the response content.\n\n#### `.with_streaming_response`\n\nThe above interface eagerly reads the full response body when you make the request, which may not always be what you want.\n\nTo stream the response body, use `.with_streaming_response` instead, which requires a context manager and only reads the response body once you call `.read()`, `.text()`, `.json()`, `.iter_bytes()`, `.iter_text()`, `.iter_lines()` or `.parse()`. In the async client, these are async methods.\n\n```python\nwith client.news.articles.with_streaming_response.list() as response :\n    print(response.headers.get(\'X-My-Header\'))\n\n    for line in response.iter_lines():\n      print(line)\n```\n\nThe context manager is required so that the response will reliably be closed.\n\n### Making custom/undocumented requests\n\nThis library is typed for convenient access to the documented API.\n\nIf you need to access undocumented endpoints, params, or response properties, the library can still be used.\n\n#### Undocumented endpoints\n\nTo make requests to undocumented endpoints, you can make requests using `client.get`, `client.post`, and other\nhttp verbs. Options on the client will be respected (such as retries) when making this request.\n\n```py\nimport httpx\n\nresponse = client.post(\n    "/foo",\n    cast_to=httpx.Response,\n    body={"my_param": True},\n)\n\nprint(response.headers.get("x-foo"))\n```\n\n#### Undocumented request params\n\nIf you want to explicitly send an extra param, you can do so with the `extra_query`, `extra_body`, and `extra_headers` request\noptions.\n\n#### Undocumented response properties\n\nTo access undocumented response properties, you can access the extra fields like `response.unknown_prop`. You\ncan also get all the extra fields on the Pydantic model as a dict with\n[`response.model_extra`](https://docs.pydantic.dev/latest/api/base_model/#pydantic.BaseModel.model_extra).\n\n### Configuring the HTTP client\n\nYou can directly override the [httpx client](https://www.python-httpx.org/api/#client) to customize it for your use case, including:\n\n- Support for [proxies](https://www.python-httpx.org/advanced/proxies/)\n- Custom [transports](https://www.python-httpx.org/advanced/transports/)\n- Additional [advanced](https://www.python-httpx.org/advanced/clients/) functionality\n\n```python\nimport httpx\nfrom businessradar import BusinessRadar, DefaultHttpxClient\n\nclient = BusinessRadar(\n    # Or use the `BUSINESS_RADAR_BASE_URL` env var\n    base_url="http://my.test.server.example.com:8083",\n    http_client=DefaultHttpxClient(proxy="http://my.test.proxy.example.com", transport=httpx.HTTPTransport(local_address="0.0.0.0")),\n)\n```\n\nYou can also customize the client on a per-request basis by using `with_options()`:\n\n```python\nclient.with_options(http_client=DefaultHttpxClient(...))\n```\n\n### Managing HTTP resources\n\nBy default the library closes underlying HTTP connections whenever the client is [garbage collected](https://docs.python.org/3/reference/datamodel.html#object.__del__). You can manually close the client using the `.close()` method if desired, or with a context manager that closes when exiting.\n\n```py\nfrom businessradar import BusinessRadar\n\nwith BusinessRadar() as client:\n  # make requests here\n  ...\n\n# HTTP client is now closed\n```\n\n## Versioning\n\nThis package generally follows [SemVer](https://semver.org/spec/v2.0.0.html) conventions, though certain backwards-incompatible changes may be released as minor versions:\n\n1. Changes that only affect static types, without breaking runtime behavior.\n2. Changes to library internals which are technically public but not intended or documented for external use. _(Please open a GitHub issue to let us know if you are relying on such internals.)_\n3. Changes that we do not expect to impact the vast majority of users in practice.\n\nWe take backwards-compatibility seriously and work hard to ensure you can rely on a smooth upgrade experience.\n\nWe are keen for your feedback; please open an [issue](https://www.github.com/businessradar/businessradar-sdk-python/issues) with questions, bugs, or suggestions.\n\n### Determining the installed version\n\nIf you\'ve upgraded to the latest version but aren\'t seeing any new features you were expecting then your python environment is likely still using an older version.\n\nYou can determine the version that is being used at runtime with:\n\n```py\nimport businessradar\nprint(businessradar.__version__)\n```\n\n## Requirements\n\nPython 3.9 or higher.\n\n## Contributing\n\nSee [the contributing documentation](./CONTRIBUTING.md).\n',
  },
  {
    language: 'typescript',
    content:
      "# Business Radar TypeScript API Library\n\n[![NPM version](https://img.shields.io/npm/v/@businessradar/businessradar.svg?label=npm%20(stable))](https://npmjs.org/package/@businessradar/businessradar) ![npm bundle size](https://img.shields.io/bundlephobia/minzip/@businessradar/businessradar)\n\nThis library provides convenient access to the Business Radar REST API from server-side TypeScript or JavaScript.\n\n\n\nThe REST API documentation can be found on [api.businessradar.com](https://api.businessradar.com/ext/v3/). The full API of this library can be found in [api.md](api.md).\n\nIt is generated with [Stainless](https://www.stainless.com/).\n\n## MCP Server\n\nUse the Business Radar MCP Server to enable AI assistants to interact with this API, allowing them to explore endpoints, make test requests, and use documentation to help integrate this SDK into your application.\n\n[![Add to Cursor](https://cursor.com/deeplink/mcp-install-dark.svg)](https://cursor.com/en-US/install-mcp?name=%40businessradar%2Fbusinessradar-mcp&config=eyJuYW1lIjoiQGJ1c2luZXNzcmFkYXIvYnVzaW5lc3NyYWRhci1tY3AiLCJ0cmFuc3BvcnQiOiJodHRwIiwidXJsIjoiaHR0cHM6Ly9idXNpbmVzc3JhZGFyLnN0bG1jcC5jb20iLCJoZWFkZXJzIjp7IngtYnVzaW5lc3NyYWRhci1hcGkta2V5IjoiTXkgQVBJIEtleSJ9fQ)\n[![Install in VS Code](https://img.shields.io/badge/_-Add_to_VS_Code-blue?style=for-the-badge&logo=data:image/svg%2bxml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9Im5vbmUiIHZpZXdCb3g9IjAgMCA0MCA0MCI+PHBhdGggZmlsbD0iI0VFRSIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNMzAuMjM1IDM5Ljg4NGEyLjQ5MSAyLjQ5MSAwIDAgMS0xLjc4MS0uNzNMMTIuNyAyNC43OGwtMy40NiAyLjYyNC0zLjQwNiAyLjU4MmExLjY2NSAxLjY2NSAwIDAgMS0xLjA4Mi4zMzggMS42NjQgMS42NjQgMCAwIDEtMS4wNDYtLjQzMWwtMi4yLTJhMS42NjYgMS42NjYgMCAwIDEgMC0yLjQ2M0w3LjQ1OCAyMCA0LjY3IDE3LjQ1MyAxLjUwNyAxNC41N2ExLjY2NSAxLjY2NSAwIDAgMSAwLTIuNDYzbDIuMi0yYTEuNjY1IDEuNjY1IDAgMCAxIDIuMTMtLjA5N2w2Ljg2MyA1LjIwOUwyOC40NTIuODQ0YTIuNDg4IDIuNDg4IDAgMCAxIDEuODQxLS43MjljLjM1MS4wMDkuNjk5LjA5MSAxLjAxOS4yNDVsOC4yMzYgMy45NjFhMi41IDIuNSAwIDAgMSAxLjQxNSAyLjI1M3YuMDk5LS4wNDVWMzMuMzd2LS4wNDUuMDk1YTIuNTAxIDIuNTAxIDAgMCAxLTEuNDE2IDIuMjU3bC04LjIzNSAzLjk2MWEyLjQ5MiAyLjQ5MiAwIDAgMS0xLjA3Ny4yNDZabS43MTYtMjguOTQ3LTExLjk0OCA5LjA2MiAxMS45NTIgOS4wNjUtLjAwNC0xOC4xMjdaIi8+PC9zdmc+)](https://vscode.stainless.com/mcp/%7B%22name%22%3A%22%40businessradar%2Fbusinessradar-mcp%22%2C%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fbusinessradar.stlmcp.com%22%2C%22headers%22%3A%7B%22x-businessradar-api-key%22%3A%22My%20API%20Key%22%7D%7D)\n\n> Note: You may need to set environment variables in your MCP client.\n\n## Installation\n\n```sh\nnpm install @businessradar/businessradar\n```\n\n\n\n## Usage\n\nThe full API of this library can be found in [api.md](api.md).\n\n<!-- prettier-ignore -->\n```js\nimport BusinessRadar from '@businessradar/businessradar';\n\nconst client = new BusinessRadar({\n  apiKey: process.env['BUSINESSRADAR_API_KEY'], // This is the default and can be omitted\n});\n\nconst page = await client.news.articles.list();\nconst article = page.results[0];\n\nconsole.log(article.external_id);\n```\n\n\n\n### Request & Response types\n\nThis library includes TypeScript definitions for all request params and response fields. You may import and use them like so:\n\n<!-- prettier-ignore -->\n```ts\nimport BusinessRadar from '@businessradar/businessradar';\n\nconst client = new BusinessRadar({\n  apiKey: process.env['BUSINESSRADAR_API_KEY'], // This is the default and can be omitted\n});\n\nconst [article]: [BusinessRadar.News.Article] = await client.news.articles.list();\n```\n\nDocumentation for each method, request param, and response field are available in docstrings and will appear on hover in most modern editors.\n\n\n\n\n\n## Handling errors\n\nWhen the library is unable to connect to the API,\nor if the API returns a non-success status code (i.e., 4xx or 5xx response),\na subclass of `APIError` will be thrown:\n\n<!-- prettier-ignore -->\n```ts\nconst page = await client.news.articles.list().catch(async (err) => {\n  if (err instanceof BusinessRadar.APIError) {\n    console.log(err.status); // 400\n    console.log(err.name); // BadRequestError\n    console.log(err.headers); // {server: 'nginx', ...}\n  } else {\n    throw err;\n  }\n});\n```\n\nError codes are as follows:\n\n| Status Code | Error Type                 |\n| ----------- | -------------------------- |\n| 400         | `BadRequestError`          |\n| 401         | `AuthenticationError`      |\n| 403         | `PermissionDeniedError`    |\n| 404         | `NotFoundError`            |\n| 422         | `UnprocessableEntityError` |\n| 429         | `RateLimitError`           |\n| >=500       | `InternalServerError`      |\n| N/A         | `APIConnectionError`       |\n\n### Retries\n\nCertain errors will be automatically retried 2 times by default, with a short exponential backoff.\nConnection errors (for example, due to a network connectivity problem), 408 Request Timeout, 409 Conflict,\n429 Rate Limit, and >=500 Internal errors will all be retried by default.\n\nYou can use the `maxRetries` option to configure or disable this:\n\n<!-- prettier-ignore -->\n```js\n// Configure the default for all requests:\nconst client = new BusinessRadar({\n  maxRetries: 0, // default is 2\n});\n\n// Or, configure per-request:\nawait client.news.articles.list({\n  maxRetries: 5,\n});\n```\n\n### Timeouts\n\nRequests time out after 1 minute by default. You can configure this with a `timeout` option:\n\n<!-- prettier-ignore -->\n```ts\n// Configure the default for all requests:\nconst client = new BusinessRadar({\n  timeout: 20 * 1000, // 20 seconds (default is 1 minute)\n});\n\n// Override per-request:\nawait client.news.articles.list({\n  timeout: 5 * 1000,\n});\n```\n\nOn timeout, an `APIConnectionTimeoutError` is thrown.\n\nNote that requests which time out will be [retried twice by default](#retries).\n\n## Auto-pagination\n\nList methods in the BusinessRadar API are paginated.\nYou can use the `for await … of` syntax to iterate through items across all pages:\n\n```ts\nasync function fetchAllArticles(params) {\n  const allArticles = [];\n  // Automatically fetches more pages as needed.\n  for await (const article of client.news.articles.list({ next_key: '24345' })) {\n    allArticles.push(article);\n  }\n  return allArticles;\n}\n```\n\nAlternatively, you can request a single page at a time:\n\n```ts\nlet page = await client.news.articles.list({ next_key: '24345' });\nfor (const article of page.results) {\n  console.log(article);\n}\n\n// Convenience methods are provided for manually paginating:\nwhile (page.hasNextPage()) {\n  page = await page.getNextPage();\n  // ...\n}\n```\n\n\n\n## Advanced Usage\n\n### Accessing raw Response data (e.g., headers)\n\nThe \"raw\" `Response` returned by `fetch()` can be accessed through the `.asResponse()` method on the `APIPromise` type that all methods return.\nThis method returns as soon as the headers for a successful response are received and does not consume the response body, so you are free to write custom parsing or streaming logic.\n\nYou can also use the `.withResponse()` method to get the raw `Response` along with the parsed data.\nUnlike `.asResponse()` this method consumes the body, returning once it is parsed.\n\n<!-- prettier-ignore -->\n```ts\nconst client = new BusinessRadar();\n\nconst response = await client.news.articles.list().asResponse();\nconsole.log(response.headers.get('X-My-Header'));\nconsole.log(response.statusText); // access the underlying Response object\n\nconst { data: page, response: raw } = await client.news.articles.list().withResponse();\nconsole.log(raw.headers.get('X-My-Header'));\nfor await (const article of page) {\n  console.log(article.external_id);\n}\n```\n\n### Logging\n\n> [!IMPORTANT]\n> All log messages are intended for debugging only. The format and content of log messages\n> may change between releases.\n\n#### Log levels\n\nThe log level can be configured in two ways:\n\n1. Via the `BUSINESS_RADAR_LOG` environment variable\n2. Using the `logLevel` client option (overrides the environment variable if set)\n\n```ts\nimport BusinessRadar from '@businessradar/businessradar';\n\nconst client = new BusinessRadar({\n  logLevel: 'debug', // Show all log messages\n});\n```\n\nAvailable log levels, from most to least verbose:\n\n- `'debug'` - Show debug messages, info, warnings, and errors\n- `'info'` - Show info messages, warnings, and errors\n- `'warn'` - Show warnings and errors (default)\n- `'error'` - Show only errors\n- `'off'` - Disable all logging\n\nAt the `'debug'` level, all HTTP requests and responses are logged, including headers and bodies.\nSome authentication-related headers are redacted, but sensitive data in request and response bodies\nmay still be visible.\n\n#### Custom logger\n\nBy default, this library logs to `globalThis.console`. You can also provide a custom logger.\nMost logging libraries are supported, including [pino](https://www.npmjs.com/package/pino), [winston](https://www.npmjs.com/package/winston), [bunyan](https://www.npmjs.com/package/bunyan), [consola](https://www.npmjs.com/package/consola), [signale](https://www.npmjs.com/package/signale), and [@std/log](https://jsr.io/@std/log). If your logger doesn't work, please open an issue.\n\nWhen providing a custom logger, the `logLevel` option still controls which messages are emitted, messages\nbelow the configured level will not be sent to your logger.\n\n```ts\nimport BusinessRadar from '@businessradar/businessradar';\nimport pino from 'pino';\n\nconst logger = pino();\n\nconst client = new BusinessRadar({\n  logger: logger.child({ name: 'BusinessRadar' }),\n  logLevel: 'debug', // Send all messages to pino, allowing it to filter\n});\n```\n\n### Making custom/undocumented requests\n\nThis library is typed for convenient access to the documented API. If you need to access undocumented\nendpoints, params, or response properties, the library can still be used.\n\n#### Undocumented endpoints\n\nTo make requests to undocumented endpoints, you can use `client.get`, `client.post`, and other HTTP verbs.\nOptions on the client, such as retries, will be respected when making these requests.\n\n```ts\nawait client.post('/some/path', {\n  body: { some_prop: 'foo' },\n  query: { some_query_arg: 'bar' },\n});\n```\n\n#### Undocumented request params\n\nTo make requests using undocumented parameters, you may use `// @ts-expect-error` on the undocumented\nparameter. This library doesn't validate at runtime that the request matches the type, so any extra values you\nsend will be sent as-is.\n\n```ts\nclient.news.articles.list({\n  // ...\n  // @ts-expect-error baz is not yet public\n  baz: 'undocumented option',\n});\n```\n\nFor requests with the `GET` verb, any extra params will be in the query, all other requests will send the\nextra param in the body.\n\nIf you want to explicitly send an extra argument, you can do so with the `query`, `body`, and `headers` request\noptions.\n\n#### Undocumented response properties\n\nTo access undocumented response properties, you may access the response object with `// @ts-expect-error` on\nthe response object, or cast the response object to the requisite type. Like the request params, we do not\nvalidate or strip extra properties from the response from the API.\n\n### Customizing the fetch client\n\nBy default, this library expects a global `fetch` function is defined.\n\nIf you want to use a different `fetch` function, you can either polyfill the global:\n\n```ts\nimport fetch from 'my-fetch';\n\nglobalThis.fetch = fetch;\n```\n\nOr pass it to the client:\n\n```ts\nimport BusinessRadar from '@businessradar/businessradar';\nimport fetch from 'my-fetch';\n\nconst client = new BusinessRadar({ fetch });\n```\n\n### Fetch options\n\nIf you want to set custom `fetch` options without overriding the `fetch` function, you can provide a `fetchOptions` object when instantiating the client or making a request. (Request-specific options override client options.)\n\n```ts\nimport BusinessRadar from '@businessradar/businessradar';\n\nconst client = new BusinessRadar({\n  fetchOptions: {\n    // `RequestInit` options\n  },\n});\n```\n\n#### Configuring proxies\n\nTo modify proxy behavior, you can provide custom `fetchOptions` that add runtime-specific proxy\noptions to requests:\n\n<img src=\"https://raw.githubusercontent.com/stainless-api/sdk-assets/refs/heads/main/node.svg\" align=\"top\" width=\"18\" height=\"21\"> **Node** <sup>[[docs](https://github.com/nodejs/undici/blob/main/docs/docs/api/ProxyAgent.md#example---proxyagent-with-fetch)]</sup>\n\n```ts\nimport BusinessRadar from '@businessradar/businessradar';\nimport * as undici from 'undici';\n\nconst proxyAgent = new undici.ProxyAgent('http://localhost:8888');\nconst client = new BusinessRadar({\n  fetchOptions: {\n    dispatcher: proxyAgent,\n  },\n});\n```\n\n<img src=\"https://raw.githubusercontent.com/stainless-api/sdk-assets/refs/heads/main/bun.svg\" align=\"top\" width=\"18\" height=\"21\"> **Bun** <sup>[[docs](https://bun.sh/guides/http/proxy)]</sup>\n\n```ts\nimport BusinessRadar from '@businessradar/businessradar';\n\nconst client = new BusinessRadar({\n  fetchOptions: {\n    proxy: 'http://localhost:8888',\n  },\n});\n```\n\n<img src=\"https://raw.githubusercontent.com/stainless-api/sdk-assets/refs/heads/main/deno.svg\" align=\"top\" width=\"18\" height=\"21\"> **Deno** <sup>[[docs](https://docs.deno.com/api/deno/~/Deno.createHttpClient)]</sup>\n\n```ts\nimport BusinessRadar from 'npm:@businessradar/businessradar';\n\nconst httpClient = Deno.createHttpClient({ proxy: { url: 'http://localhost:8888' } });\nconst client = new BusinessRadar({\n  fetchOptions: {\n    client: httpClient,\n  },\n});\n```\n\n## Frequently Asked Questions\n\n## Semantic versioning\n\nThis package generally follows [SemVer](https://semver.org/spec/v2.0.0.html) conventions, though certain backwards-incompatible changes may be released as minor versions:\n\n1. Changes that only affect static types, without breaking runtime behavior.\n2. Changes to library internals which are technically public but not intended or documented for external use. _(Please open a GitHub issue to let us know if you are relying on such internals.)_\n3. Changes that we do not expect to impact the vast majority of users in practice.\n\nWe take backwards-compatibility seriously and work hard to ensure you can rely on a smooth upgrade experience.\n\nWe are keen for your feedback; please open an [issue](https://www.github.com/businessradar/businessradar-sdk-typescript/issues) with questions, bugs, or suggestions.\n\n## Requirements\n\nTypeScript >= 4.9 is supported.\n\nThe following runtimes are supported:\n\n- Web browsers (Up-to-date Chrome, Firefox, Safari, Edge, and more)\n- Node.js 20 LTS or later ([non-EOL](https://endoflife.date/nodejs)) versions.\n- Deno v1.28.0 or higher.\n- Bun 1.0 or later.\n- Cloudflare Workers.\n- Vercel Edge Runtime.\n- Jest 28 or greater with the `\"node\"` environment (`\"jsdom\"` is not supported at this time).\n- Nitro v2.6 or greater.\n\nNote that React Native is not supported at this time.\n\nIf you are interested in other runtime environments, please open or upvote an issue on GitHub.\n\n## Contributing\n\nSee [the contributing documentation](./CONTRIBUTING.md).\n",
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
    fuzzy: 0.1,
    boost: {
      name: 5,
      stainlessPath: 3,
      endpoint: 3,
      qualified: 3,
      summary: 2,
      content: 1,
      description: 1,
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
    for (const readme of EMBEDDED_READMES) {
      instance.indexProse(readme.content, `readme:${readme.language}`);
    }
    if (opts?.docsDir) {
      await instance.loadDocsDirectory(opts.docsDir);
    }
    return instance;
  }

  search(props: {
    query: string;
    language?: string;
    detail?: string;
    maxResults?: number;
    maxLength?: number;
  }): SearchResult {
    const { query, language = 'typescript', detail = 'default', maxResults = 5, maxLength = 100_000 } = props;

    const useMarkdown = detail === 'verbose' || detail === 'high';

    // Search both indices and merge results by score.
    // Filter prose hits so language-tagged content (READMEs and docs with
    // frontmatter) only matches the requested language.
    const methodHits = this.methodIndex
      .search(query)
      .map((hit) => ({ ...hit, _kind: 'http_method' as const }));
    const proseHits = this.proseIndex
      .search(query)
      .filter((hit) => {
        const source = ((hit as Record<string, unknown>)['_original'] as ProseChunk | undefined)?.source;
        if (!source) return true;
        // Check for language-tagged sources: "readme:<lang>" or "lang:<lang>:<filename>"
        let taggedLang: string | undefined;
        if (source.startsWith('readme:')) taggedLang = source.slice('readme:'.length);
        else if (source.startsWith('lang:')) taggedLang = source.split(':')[1];
        if (!taggedLang) return true;
        return taggedLang === language || (language === 'javascript' && taggedLang === 'typescript');
      })
      .map((hit) => ({ ...hit, _kind: 'prose' as const }));
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
          // Use per-language data when available, falling back to the
          // top-level fields (which are TypeScript-specific in the
          // legacy codepath).
          const langData = m.perLanguage?.[language];
          fullResults.push({
            method: langData?.method ?? m.qualified,
            summary: m.summary,
            description: m.description,
            endpoint: `${m.httpMethod.toUpperCase()} ${m.endpoint}`,
            ...(langData?.example ? { example: langData.example } : {}),
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
          // Parse optional YAML frontmatter for language tagging.
          // Files with a "language" field in frontmatter will only
          // surface in searches for that language.
          //
          // Example:
          //   ---
          //   language: python
          //   ---
          //   # Error handling in Python
          //   ...
          const frontmatter = parseFrontmatter(content);
          const source = frontmatter.language ? `lang:${frontmatter.language}:${file.name}` : file.name;
          this.indexProse(content, source);
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

/** Parses YAML frontmatter from a markdown string, extracting the language field if present. */
function parseFrontmatter(markdown: string): { language?: string } {
  const match = markdown.match(/^---\n([\s\S]*?)\n---/);
  if (!match) return {};
  const body = match[1] ?? '';
  const langMatch = body.match(/^language:\s*(.+)$/m);
  return langMatch ? { language: langMatch[1]!.trim() } : {};
}
