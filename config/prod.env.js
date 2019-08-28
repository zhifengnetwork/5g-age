'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"production"',
  API_ROOT: '"http://rebate5g.zhifengwangluo.com/api/"'   //线上请求前缀 测试线
})