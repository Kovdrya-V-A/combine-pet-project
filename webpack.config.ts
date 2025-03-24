import webpack from 'webpack';
import { BuildEnv, BuildPaths, MODE } from "./config/build/types/config";
import { buildWebpackConfig } from "./config/build/buildWebpackConfig";
import path from "path";

export default (env: BuildEnv) => {
  const paths: BuildPaths = {
    build: path.resolve(__dirname, 'build'),
    entry: path.resolve(__dirname, 'src', 'index.tsx'),
    html: path.resolve(__dirname, 'public', 'index.html')
  }
  const mode = env.mode || MODE.development
  const isDev = mode === MODE.development
  const PORT = env.port || 3000

  const config: webpack.Configuration = buildWebpackConfig({
    mode: mode,
    paths: paths,
    isDev: isDev,
    port: PORT
  })

  return config
}