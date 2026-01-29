// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import BusinessRadar from '@businessradar/businessradar';

const client = new BusinessRadar({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource analytics', () => {
  // Prism tests are disabled
  test.skip('getCountByDate', async () => {
    const responsePromise = client.news.articles.analytics.getCountByDate();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('getCountByDate: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.news.articles.analytics.getCountByDate(
        {
          category: ['182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e'],
          company: ['182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e'],
          country: ['string'],
          disable_company_article_deduplication: true,
          duns_number: ['string'],
          global_ultimate: ['string'],
          include_clustered_articles: true,
          interval: 'day',
          is_material: true,
          language: ['string'],
          max_creation_date: '2019-12-27T18:11:19.117Z',
          max_publication_date: '2019-12-27T18:11:19.117Z',
          min_creation_date: '2019-12-27T18:11:19.117Z',
          min_publication_date: '2019-12-27T18:11:19.117Z',
          portfolio_id: ['182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e'],
          query: 'query',
          registration_number: ['string'],
          saved_article_filter_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
          sentiment: true,
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(BusinessRadar.NotFoundError);
  });
});
