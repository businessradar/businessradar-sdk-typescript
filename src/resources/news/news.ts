// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as ArticlesAPI from './articles/articles';
import {
  Article,
  ArticleCreateFeedbackParams,
  ArticleCreateFeedbackResponse,
  ArticleListParams,
  ArticleListSavedArticleFiltersParams,
  ArticleListSavedArticleFiltersResponse,
  ArticleListSavedArticleFiltersResponsesNextKey,
  ArticleRetrieveRelatedResponse,
  Articles,
  ArticlesNextKey,
  CategoryTree,
  FeedbackTypeEnum,
  LanguageEnum,
} from './articles/articles';

export class News extends APIResource {
  articles: ArticlesAPI.Articles = new ArticlesAPI.Articles(this._client);
}

News.Articles = Articles;

export declare namespace News {
  export {
    Articles as Articles,
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
}
