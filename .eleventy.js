module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("css");
  eleventyConfig.addPassthroughCopy("src/vendor");
  eleventyConfig.addPassthroughCopy("src/images");
  return {
    dir: {
      input: "src",         // where your source templates are
      includes: "_includes", // folder for layouts/partials
      output: "_site"       // where the build files go
    }
  };
};