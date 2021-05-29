module.exports = {
  webpack: (config) => {
    config.node = {
      fs: "empty",
    };
    return config;
  },
  images: {
    domains: [
      "pngimg.com",
      "images-eu.ssl-images-amazon.com",
      "fakestoreapi.com",
    ],
  },
};
