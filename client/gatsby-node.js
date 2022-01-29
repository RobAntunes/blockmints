exports.createPages = async ({ actions }) => {
  const { createPage } = actions;
  createPage({
    path: "/using-dsg",
    component: require.resolve("./src/templates/using-dsg.js"),
    context: {},
    defer: true,
  });
};

// exports.onCreateWebpackConfig = ({
//   stage,
//   rules,
//   loaders,
//   plugins,
//   actions,
// }) => {
//   actions.setWebpackConfig({
//     module: {
//       rules: [
//         {
//           test: /\.css$/,
//           use: [
//             loaders.miniCssExtract(),
//             loaders.css({ importLoaders: 1 }),
//             loaders.postcss(),
//             `css-loader`,
//           ],
//         },
//       ],
//     },
//   });
// };
