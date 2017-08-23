module.exports = config => {
  config.module.loaders.push({
    test: /\.(graphql|gql)$/,
    exclude: /node_modules/,
    loader: 'graphql-tag/loader'
  });

  return config;
};
