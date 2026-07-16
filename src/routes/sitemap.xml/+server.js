import * as sitemap from 'super-sitemap';

export const GET = async () => {
  return await sitemap.response({
    origin: 'https://fullvue.io',
    excludeRoutePatterns: [
      '^/thank-you$', // form-success page, noindexed
      '^/modules/payroll$', // 301 -> /modules/attendance
      '^/modules/equipment$', // 301 -> /modules/assets
      '^/modules/it-database$' // 301 -> /modules/assets
    ]
  });
};
