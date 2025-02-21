import  webpack  from 'webpack';
import { BuildPaths, MODE } from "./config/build/types/config";
import { buildWebpackConfig } from "./config/build/buildWebpackConfig";
import path from "path";

const paths: BuildPaths = {
    build: path.resolve(__dirname, 'build'),
    entry: path.resolve(__dirname, 'src', 'index.ts'),
    html: path.resolve(__dirname, 'public', 'index.html')
}
const mode = MODE.development
const isDev = mode === MODE.development

const config: webpack.Configuration = buildWebpackConfig({
  mode: MODE.development,
  paths: paths,
  isDev: isDev
})

export default config