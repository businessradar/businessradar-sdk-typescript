// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import BusinessRadar from '@businessradar/businessradar';

const client = new BusinessRadar({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource deliveries', () => {
  // Mock server tests are disabled
  test.skip('list', async () => {
    const responsePromise = client.webhooks.deliveries.list('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('list: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.webhooks.deliveries.list(
        '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
        { next_key: 'next_key' },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(BusinessRadar.NotFoundError);
  });

  // Mock server tests are disabled
  test.skip('test', async () => {
    const responsePromise = client.webhooks.deliveries.test('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('test: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.webhooks.deliveries.test(
        '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
        { event_type: 'compliance_check.status_changed' },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(BusinessRadar.NotFoundError);
  });
});
