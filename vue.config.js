module.exports = {
  chainWebpack: config => {
    const svgRule = config.module.rule('svg');

    svgRule.uses.clear();

    svgRule
      .use('svg-sprite-loader')
      .loader('svgo-loader')
      .loader('svg-sprite-loader');
  },
};
