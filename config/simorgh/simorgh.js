'use strict';

module.exports = {
  baseUrl: 'http://localhost:7080',
  paths: [
    '/news/articles/c0000000025o',
    '/news/articles/c0000000027o'
  ],
  LIGHTHOUSE_OPTS: {
    config: {
      extends: 'lighthouse:default',
      settings: {
        onlyCategories: ['accessibility', 'best-practices', 'seo', 'pwa']
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
      output: 'json'
    }
  }
};
