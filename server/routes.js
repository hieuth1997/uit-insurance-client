const routes = require('next-routes');

module.exports = routes()
  .add('insurance-life', '/bao-hiem-nhan-tho', 'insurance/insurance-type')
  .add('insurance-non-life', '/bao-hiem-phi-nhan-tho', 'insurance/insurance-type')
  .add('bao-hiem', '/bao-hiem/:slug', 'insurance')
  .add('chi-tiet', '/chi-tiet/:slug', 'insurance/detail')
  .add('tin-tuc/', '/tin-tuc/:slug', 'news/detail')
  .add('user/order/', '/user/order/:slug', 'user/order-detail')
  .add('tin-tuc', '/tin-tuc', 'news');
// .add('cart', '/cart', 'user/cart');
