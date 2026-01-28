// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import BusinessRadar from 'businessradar';

const client = new BusinessRadar({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource portfolios', () => {
  // Prism tests are disabled
  test.skip('create: only required params', async () => {
    const responsePromise = client.portfolios.create({ name: 'x' });
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
    const response = await client.portfolios.create({
      name: 'x',
      customer_reference: 'customer_reference',
      default_permission: 'view_only',
    });
  });

  // Prism tests are disabled
  test.skip('list', async () => {
    const responsePromise = client.portfolios.list();
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
      client.portfolios.list({ next_key: 'next_key' }, { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(BusinessRadar.NotFoundError);
  });
});
