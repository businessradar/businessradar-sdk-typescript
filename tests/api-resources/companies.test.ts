// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import BusinessRadar from '@businessradar/businessradar';

const client = new BusinessRadar({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource companies', () => {
  // Prism tests are disabled
  test.skip('create', async () => {
    const responsePromise = client.companies.create();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('create: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.companies.create(
        {
          company: { external_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e' },
          country: 'AF',
          customer_reference: 'customer_reference',
          duns_number: 'duns_number',
          primary_name: 'primary_name',
          registration_number: 'registration_number',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(BusinessRadar.NotFoundError);
  });

  // Prism tests are disabled
  test.skip('retrieve', async () => {
    const responsePromise = client.companies.retrieve('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('list', async () => {
    const responsePromise = client.companies.list();
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
      client.companies.list(
        {
          country: ['string'],
          duns_number: ['string'],
          next_key: 'next_key',
          portfolio_id: ['182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e'],
          query: 'query',
          registration_number: ['string'],
          website_url: 'website_url',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(BusinessRadar.NotFoundError);
  });

  // Prism tests are disabled
  test.skip('createMissingCompanyInvestigation: only required params', async () => {
    const responsePromise = client.companies.createMissingCompanyInvestigation({
      country: 'AF',
      legal_name: 'x',
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
  test.skip('createMissingCompanyInvestigation: required and optional params', async () => {
    const response = await client.companies.createMissingCompanyInvestigation({
      country: 'AF',
      legal_name: 'x',
      address_number: 'address_number',
      address_phone: 'address_phone',
      address_place: 'address_place',
      address_postal: 'address_postal',
      address_region: 'address_region',
      address_street: 'address_street',
      description: 'description',
      officer_name: 'officer_name',
      officer_title: 'officer_title',
      trade_name: 'trade_name',
      website_url: 'https://example.com',
    });
  });

  // Prism tests are disabled
  test.skip('listAttributeChanges', async () => {
    const responsePromise = client.companies.listAttributeChanges();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('listAttributeChanges: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.companies.listAttributeChanges(
        {
          max_created_at: '2019-12-27T18:11:19.117Z',
          min_created_at: '2019-12-27T18:11:19.117Z',
          next_key: 'next_key',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(BusinessRadar.NotFoundError);
  });

  // Prism tests are disabled
  test.skip('listMissingCompanyInvestigations', async () => {
    const responsePromise = client.companies.listMissingCompanyInvestigations();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('listMissingCompanyInvestigations: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.companies.listMissingCompanyInvestigations(
        { next_key: 'next_key' },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(BusinessRadar.NotFoundError);
  });

  // Prism tests are disabled
  test.skip('retrieveMissingCompanyInvestigation', async () => {
    const responsePromise = client.companies.retrieveMissingCompanyInvestigation(
      '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
    );
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('retrieveRegistration', async () => {
    const responsePromise = client.companies.retrieveRegistration('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });
});
