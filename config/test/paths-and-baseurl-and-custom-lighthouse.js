'use strict';

module.exports = {
  baseUrl: 'http://base.url',
  paths: [
    '/path/1'
  ],
  LIGHTHOUSE_OPTS: {
    config: {
      extends: 'lighthouse:default',
      settings: {
        onlyCategories: ['accessibility', 'seo', 'pwa', 'best-practices']
      },
      thresholds: {
        minimumScores:
          [
            {
              name: 'Progressive Web App',
              score: 54.54545454545455
            },
            {
              name: 'Accessibility',
              score: 100
            },
            {
              name: 'Best Practices',
              score: 87.5
            },
            {
              name: 'SEO',
              score: 87.5
            }
          ]
      },
      categories: {
        accessibility: {
          weight: 1
        }
      }
    },
    flags: {
      logLevel: 'silent',
      output: 'json',
      port: 1234
    }
  }
};
