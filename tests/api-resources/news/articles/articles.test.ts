// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import BusinessRadar from '@businessradar/businessradar';

const client = new BusinessRadar({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource articles', () => {
  // Prism tests are disabled
  test.skip('list', async () => {
    const responsePromise = client.news.articles.list();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('list: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.news.articles.list(
        {
          category: ['182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e'],
          company: ['182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e'],
          country: ['string'],
          disable_company_article_deduplication: true,
          duns_number: ['string'],
          global_ultimate: ['string'],
          include_clustered_articles: true,
          is_material: true,
          language: ['string'],
          max_creation_date: '2019-12-27T18:11:19.117Z',
          max_publication_date: '2019-12-27T18:11:19.117Z',
          min_creation_date: '2019-12-27T18:11:19.117Z',
          min_publication_date: '2019-12-27T18:11:19.117Z',
          next_key: 'next_key',
          portfolio_id: ['182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e'],
          query: 'query',
          registration_number: ['string'],
          saved_article_filter_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
          sentiment: true,
          sorting: 'creation_date',
          sorting_order: 'asc',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(BusinessRadar.NotFoundError);
  });

  // Prism tests are disabled
  test.skip('createFeedback: only required params', async () => {
    const responsePromise = client.news.articles.createFeedback({
      article: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('createFeedback: required and optional params', async () => {
    const response = await client.news.articles.createFeedback({
      article: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      comment: 'comment',
      email: 'dev@stainless.com',
      feedback_type: 'false_positive',
    });
  });

  // Prism tests are disabled
  test.skip('listSavedArticleFilters', async () => {
    const responsePromise = client.news.articles.listSavedArticleFilters();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('listSavedArticleFilters: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.news.articles.listSavedArticleFilters(
        { next_key: 'next_key' },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(BusinessRadar.NotFoundError);
  });

  // Prism tests are disabled
  test.skip('retrieveRelated', async () => {
    const responsePromise = client.news.articles.retrieveRelated('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });
});
