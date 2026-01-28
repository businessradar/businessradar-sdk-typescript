# Shared

Types:

- <code><a href="./src/resources/shared.ts">PortfolioCompanyDetailRequest</a></code>

# News

## Articles

Types:

- <code><a href="./src/resources/news/articles/articles.ts">Article</a></code>
- <code><a href="./src/resources/news/articles/articles.ts">CategoryTree</a></code>
- <code><a href="./src/resources/news/articles/articles.ts">FeedbackTypeEnum</a></code>
- <code><a href="./src/resources/news/articles/articles.ts">LanguageEnum</a></code>
- <code><a href="./src/resources/news/articles/articles.ts">ArticleCreateFeedbackResponse</a></code>
- <code><a href="./src/resources/news/articles/articles.ts">ArticleListSavedArticleFiltersResponse</a></code>
- <code><a href="./src/resources/news/articles/articles.ts">ArticleRetrieveRelatedResponse</a></code>

Methods:

- <code title="get /ext/v3/articles">client.news.articles.<a href="./src/resources/news/articles/articles.ts">list</a>({ ...params }) -> ArticlesNextKey</code>
- <code title="post /ext/v3/articles/feedback/">client.news.articles.<a href="./src/resources/news/articles/articles.ts">createFeedback</a>({ ...params }) -> ArticleCreateFeedbackResponse</code>
- <code title="get /ext/v3/saved_article_filters">client.news.articles.<a href="./src/resources/news/articles/articles.ts">listSavedArticleFilters</a>({ ...params }) -> ArticleListSavedArticleFiltersResponsesNextKey</code>
- <code title="get /ext/v3/articles/{article_id}/related/">client.news.articles.<a href="./src/resources/news/articles/articles.ts">retrieveRelated</a>(articleID) -> ArticleRetrieveRelatedResponse</code>

### Analytics

Types:

- <code><a href="./src/resources/news/articles/analytics.ts">AnalyticsGetCountByDateResponse</a></code>

Methods:

- <code title="get /ext/v3/articles/analytics/dates/">client.news.articles.analytics.<a href="./src/resources/news/articles/analytics.ts">getCountByDate</a>({ ...params }) -> AnalyticsGetCountByDateResponse</code>

### Export

Types:

- <code><a href="./src/resources/news/articles/export.ts">ArticleExport</a></code>
- <code><a href="./src/resources/news/articles/export.ts">DataExportFileType</a></code>
- <code><a href="./src/resources/news/articles/export.ts">MediaTypeEnum</a></code>

Methods:

- <code title="post /ext/v3/articles/export/">client.news.articles.export.<a href="./src/resources/news/articles/export.ts">create</a>({ ...params }) -> ArticleExport</code>
- <code title="get /ext/v3/articles/export/{external_id}">client.news.articles.export.<a href="./src/resources/news/articles/export.ts">retrieve</a>(externalID) -> ArticleExport</code>

# Companies

Types:

- <code><a href="./src/resources/companies.ts">BlankEnum</a></code>
- <code><a href="./src/resources/companies.ts">CountryEnum</a></code>
- <code><a href="./src/resources/companies.ts">IndustryCode</a></code>
- <code><a href="./src/resources/companies.ts">Registration</a></code>
- <code><a href="./src/resources/companies.ts">RegistrationRequest</a></code>
- <code><a href="./src/resources/companies.ts">CompanyRetrieveResponse</a></code>
- <code><a href="./src/resources/companies.ts">CompanyListResponse</a></code>
- <code><a href="./src/resources/companies.ts">CompanyListAttributeChangesResponse</a></code>

Methods:

- <code title="post /ext/v3/companies">client.companies.<a href="./src/resources/companies.ts">create</a>({ ...params }) -> Registration</code>
- <code title="get /ext/v3/companies/{external_id}">client.companies.<a href="./src/resources/companies.ts">retrieve</a>(externalID) -> CompanyRetrieveResponse</code>
- <code title="get /ext/v3/companies">client.companies.<a href="./src/resources/companies.ts">list</a>({ ...params }) -> CompanyListResponsesNextKey</code>
- <code title="get /ext/v3/companies/attribute_changes">client.companies.<a href="./src/resources/companies.ts">listAttributeChanges</a>({ ...params }) -> CompanyListAttributeChangesResponsesNextKey</code>
- <code title="get /ext/v3/registrations/{registration_id}">client.companies.<a href="./src/resources/companies.ts">retrieveRegistration</a>(registrationID) -> Registration</code>

# Compliance

Types:

- <code><a href="./src/resources/compliance.ts">ComplianceCheckScoreEnum</a></code>
- <code><a href="./src/resources/compliance.ts">ComplianceCreateResponse</a></code>
- <code><a href="./src/resources/compliance.ts">ComplianceRetrieveResponse</a></code>

Methods:

- <code title="post /ext/v3/compliance">client.compliance.<a href="./src/resources/compliance.ts">create</a>({ ...params }) -> ComplianceCreateResponse</code>
- <code title="get /ext/v3/compliance/{external_id}">client.compliance.<a href="./src/resources/compliance.ts">retrieve</a>(externalID) -> ComplianceRetrieveResponse</code>

# Portfolios

Types:

- <code><a href="./src/resources/portfolios/portfolios.ts">PermissionEnum</a></code>
- <code><a href="./src/resources/portfolios/portfolios.ts">Portfolio</a></code>

Methods:

- <code title="post /ext/v3/portfolios">client.portfolios.<a href="./src/resources/portfolios/portfolios.ts">create</a>({ ...params }) -> Portfolio</code>
- <code title="get /ext/v3/portfolios">client.portfolios.<a href="./src/resources/portfolios/portfolios.ts">list</a>({ ...params }) -> PortfoliosNextKey</code>

## Companies

Types:

- <code><a href="./src/resources/portfolios/companies.ts">CompanyListResponse</a></code>

Methods:

- <code title="post /ext/v3/portfolios/{portfolio_id}/companies">client.portfolios.companies.<a href="./src/resources/portfolios/companies.ts">create</a>(portfolioID, { ...params }) -> Registration</code>
- <code title="get /ext/v3/portfolios/{portfolio_id}/companies">client.portfolios.companies.<a href="./src/resources/portfolios/companies.ts">list</a>(portfolioID, { ...params }) -> CompanyListResponsesNextKey</code>
- <code title="delete /ext/v3/portfolios/{portfolio_id}/companies/{external_id}">client.portfolios.companies.<a href="./src/resources/portfolios/companies.ts">delete</a>(externalID, { ...params }) -> void</code>
