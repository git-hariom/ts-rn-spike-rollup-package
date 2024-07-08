const glob = require("glob");

glob("src/library/components/**/index.ts", (err, files) => {
  console.log(files);
});
