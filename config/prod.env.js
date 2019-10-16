'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"production"',
  // API_ROOT: '"http://rebate5g_web.zhifengwangluo.com/api/"'   //线上请求前缀 测试线
  API_ROOT: '"http://www.l3beh.cn/api/"'   //线上请求前缀 
})