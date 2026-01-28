// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import BusinessRadar from 'businessradar';

const client = new BusinessRadar({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource export', () => {
  // Prism tests are disabled
  test.skip('create: only required params', async () => {
    const responsePromise = client.news.articles.export.create({
      file_type: 'PDF',
      filters: {},
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
  test.skip('create: required and optional params', async () => {
    const response = await client.news.articles.export.create({
      file_type: 'PDF',
      filters: {
        categories: ['182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e'],
        companies: ['182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e'],
        countries: ['xx'],
        disable_company_article_deduplication: true,
        duns_numbers: ['xxxxxxxx'],
        global_ultimates: ['xxxxxxxx'],
        include_clustered_articles: true,
        industries: ['x'],
        is_material: true,
        languages: ['xx'],
        max_creation_date: '2019-12-27T18:11:19.117Z',
        max_publication_date: '2019-12-27T18:11:19.117Z',
        media_type: 'GAZETTE',
        min_creation_date: '2019-12-27T18:11:19.117Z',
        min_publication_date: '2019-12-27T18:11:19.117Z',
        parent_category: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
        portfolios: ['182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e'],
        query: 'query',
        registration_numbers: ['x'],
        sentiment: true,
      },
    });
  });

  // Prism tests are disabled
  test.skip('retrieve', async () => {
    const responsePromise = client.news.articles.export.retrieve('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });
});
