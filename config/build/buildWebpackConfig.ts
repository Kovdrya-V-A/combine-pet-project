import webpack from 'webpack';
import { BuildOptions} from "./types/config";
import { buildPlugins } from './buildPlugins';
import { buildLoaders } from './buildLoaders';
import { buildResolvers } from './buildResolvers';



export function buildWebpackConfig(options: BuildOptions): webpack.Configuration {
    return {
        entry: options.paths.entry,
        mode: options.mode,
        output: {
            filename: '[name].[contenthash].js',
            path: options.paths.build,
            clean: true,
        },
        plugins: buildPlugins(options),
        module: {
            rules: buildLoaders(),
        },
        resolve: buildResolvers(),
    }
}