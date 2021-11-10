module.exports = {
    process() {
      return "module.exports = 'static-asset-mock';";
    },
    getCacheKey() {
      return 'staticAssetTransform';
    }
  };
  