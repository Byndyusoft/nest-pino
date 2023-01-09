/**
 * @param {import("jscodeshift").FileInfo} file
 * @param {import("jscodeshift").API} api
 */
module.exports = (file, api) => {
  const { j } = api;
  const root = j(file.source);

  root
    .find(j.ImportDeclaration, {
      source: {
        value: "nestjs-pino",
      },
    })
    .replaceWith(({ node }) => {
      node.source.value = "@byndyusoft/nest-pino";

      return node;
    });

  return root.toSource({
    tabWidth: 2,
  });
};
