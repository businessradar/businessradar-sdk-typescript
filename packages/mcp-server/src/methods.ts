import { McpOptions } from './options';

export type SdkMethod = {
  clientCallName: string;
  fullyQualifiedName: string;
  httpMethod?: 'get' | 'post' | 'put' | 'patch' | 'delete' | 'query';
  httpPath?: string;
};

export const sdkMethods: SdkMethod[] = [
  {
    clientCallName: 'client.news.articles.list',
    fullyQualifiedName: 'news.articles.list',
    httpMethod: 'get',
    httpPath: '/ext/v3/articles',
  },
  {
    clientCallName: 'client.news.articles.createFeedback',
    fullyQualifiedName: 'news.articles.createFeedback',
    httpMethod: 'post',
    httpPath: '/ext/v3/articles/feedback/',
  },
  {
    clientCallName: 'client.news.articles.listSavedArticleFilters',
    fullyQualifiedName: 'news.articles.listSavedArticleFilters',
    httpMethod: 'get',
    httpPath: '/ext/v3/saved_article_filters',
  },
  {
    clientCallName: 'client.news.articles.retrieveRelated',
    fullyQualifiedName: 'news.articles.retrieveRelated',
    httpMethod: 'get',
    httpPath: '/ext/v3/articles/{article_id}/related/',
  },
  {
    clientCallName: 'client.news.articles.analytics.getCountByDate',
    fullyQualifiedName: 'news.articles.analytics.getCountByDate',
    httpMethod: 'get',
    httpPath: '/ext/v3/articles/analytics/dates/',
  },
  {
    clientCallName: 'client.news.articles.export.create',
    fullyQualifiedName: 'news.articles.export.create',
    httpMethod: 'post',
    httpPath: '/ext/v3/articles/export/',
  },
  {
    clientCallName: 'client.news.articles.export.retrieve',
    fullyQualifiedName: 'news.articles.export.retrieve',
    httpMethod: 'get',
    httpPath: '/ext/v3/articles/export/{external_id}',
  },
  {
    clientCallName: 'client.companies.create',
    fullyQualifiedName: 'companies.create',
    httpMethod: 'post',
    httpPath: '/ext/v3/companies',
  },
  {
    clientCallName: 'client.companies.retrieve',
    fullyQualifiedName: 'companies.retrieve',
    httpMethod: 'get',
    httpPath: '/ext/v3/companies/{external_id}',
  },
  {
    clientCallName: 'client.companies.list',
    fullyQualifiedName: 'companies.list',
    httpMethod: 'get',
    httpPath: '/ext/v3/companies',
  },
  {
    clientCallName: 'client.companies.createMissingCompanyInvestigation',
    fullyQualifiedName: 'companies.createMissingCompanyInvestigation',
    httpMethod: 'post',
    httpPath: '/ext/v3/companies/investigations',
  },
  {
    clientCallName: 'client.companies.listAttributeChanges',
    fullyQualifiedName: 'companies.listAttributeChanges',
    httpMethod: 'get',
    httpPath: '/ext/v3/companies/attribute_changes',
  },
  {
    clientCallName: 'client.companies.listMissingCompanyInvestigations',
    fullyQualifiedName: 'companies.listMissingCompanyInvestigations',
    httpMethod: 'get',
    httpPath: '/ext/v3/companies/investigations',
  },
  {
    clientCallName: 'client.companies.retrieveMissingCompanyInvestigation',
    fullyQualifiedName: 'companies.retrieveMissingCompanyInvestigation',
    httpMethod: 'get',
    httpPath: '/ext/v3/companies/investigations/{external_id}',
  },
  {
    clientCallName: 'client.companies.retrieveRegistration',
    fullyQualifiedName: 'companies.retrieveRegistration',
    httpMethod: 'get',
    httpPath: '/ext/v3/registrations/{registration_id}',
  },
  {
    clientCallName: 'client.compliance.create',
    fullyQualifiedName: 'compliance.create',
    httpMethod: 'post',
    httpPath: '/ext/v3/compliance',
  },
  {
    clientCallName: 'client.compliance.retrieve',
    fullyQualifiedName: 'compliance.retrieve',
    httpMethod: 'get',
    httpPath: '/ext/v3/compliance/{external_id}',
  },
  {
    clientCallName: 'client.compliance.listResults',
    fullyQualifiedName: 'compliance.listResults',
    httpMethod: 'get',
    httpPath: '/ext/v3/compliance/{external_id}/results',
  },
  {
    clientCallName: 'client.portfolios.create',
    fullyQualifiedName: 'portfolios.create',
    httpMethod: 'post',
    httpPath: '/ext/v3/portfolios',
  },
  {
    clientCallName: 'client.portfolios.list',
    fullyQualifiedName: 'portfolios.list',
    httpMethod: 'get',
    httpPath: '/ext/v3/portfolios',
  },
  {
    clientCallName: 'client.portfolios.companies.create',
    fullyQualifiedName: 'portfolios.companies.create',
    httpMethod: 'post',
    httpPath: '/ext/v3/portfolios/{portfolio_id}/companies',
  },
  {
    clientCallName: 'client.portfolios.companies.list',
    fullyQualifiedName: 'portfolios.companies.list',
    httpMethod: 'get',
    httpPath: '/ext/v3/portfolios/{portfolio_id}/companies',
  },
  {
    clientCallName: 'client.portfolios.companies.delete',
    fullyQualifiedName: 'portfolios.companies.delete',
    httpMethod: 'delete',
    httpPath: '/ext/v3/portfolios/{portfolio_id}/companies/{external_id}',
  },
];

function allowedMethodsForCodeTool(options: McpOptions | undefined): SdkMethod[] | undefined {
  if (!options) {
    return undefined;
  }

  let allowedMethods: SdkMethod[];

  if (options.codeAllowHttpGets || options.codeAllowedMethods) {
    // Start with nothing allowed and then add into it from options
    let allowedMethodsSet = new Set<SdkMethod>();

    if (options.codeAllowHttpGets) {
      // Add all methods that map to an HTTP GET
      sdkMethods
        .filter((method) => method.httpMethod === 'get')
        .forEach((method) => allowedMethodsSet.add(method));
    }

    if (options.codeAllowedMethods) {
      // Add all methods that match any of the allowed regexps
      const allowedRegexps = options.codeAllowedMethods.map((pattern) => {
        try {
          return new RegExp(pattern);
        } catch (e) {
          throw new Error(
            `Invalid regex pattern for allowed method: "${pattern}": ${e instanceof Error ? e.message : e}`,
          );
        }
      });

      sdkMethods
        .filter((method) => allowedRegexps.some((regexp) => regexp.test(method.fullyQualifiedName)))
        .forEach((method) => allowedMethodsSet.add(method));
    }

    allowedMethods = Array.from(allowedMethodsSet);
  } else {
    // Start with everything allowed
    allowedMethods = [...sdkMethods];
  }

  if (options.codeBlockedMethods) {
    // Filter down based on blocked regexps
    const blockedRegexps = options.codeBlockedMethods.map((pattern) => {
      try {
        return new RegExp(pattern);
      } catch (e) {
        throw new Error(
          `Invalid regex pattern for blocked method: "${pattern}": ${e instanceof Error ? e.message : e}`,
        );
      }
    });

    allowedMethods = allowedMethods.filter(
      (method) => !blockedRegexps.some((regexp) => regexp.test(method.fullyQualifiedName)),
    );
  }

  return allowedMethods;
}

export function blockedMethodsForCodeTool(options: McpOptions | undefined): SdkMethod[] | undefined {
  const allowedMethods = allowedMethodsForCodeTool(options);
  if (!allowedMethods) {
    return undefined;
  }

  const allowedSet = new Set(allowedMethods.map((method) => method.fullyQualifiedName));

  // Return any methods that are not explicitly allowed
  return sdkMethods.filter((method) => !allowedSet.has(method.fullyQualifiedName));
}
