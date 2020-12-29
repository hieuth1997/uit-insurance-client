const axios = require('axios');

const getSitemap = async () => {
  const sitemap = await axios.get(`${'http://localhost:3600'}/api/sitemap/sitemap.xml`);
  return sitemap.data;
};

module.exports = getSitemap;
