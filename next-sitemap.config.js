/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || "https://grabtern.in",
  generateRobotsTxt: true, // (optional)
  // ...other options
};
