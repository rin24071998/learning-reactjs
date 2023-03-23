const CracoAlias = require('craco-alias');

module.exports = {
  plugins: [
    {
      plugin: CracoAlias,
      options: {
        source: 'options',
        baseUrl: 'src',
        aliases: {
          '@Component': './app/components',
          '@Share': './app/share',
          '@Helper': './app/helper',
          '@Constants': './app/constants',
          '@Interfaces': './app/interfaces',
          '@Pages': './app/pages',
          '@Routes': './app/routes',
        },
      },
    },
  ],
};
