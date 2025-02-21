import  webpack  from "webpack";
import HTMLWebpuckPlugin from 'html-webpack-plugin'
import { BuildOptions} from "./types/config";

export function buildPlugins({paths}: BuildOptions): webpack.WebpackPluginInstance[] {
 return [
       new webpack.ProgressPlugin(),
       new HTMLWebpuckPlugin({
           template: paths.html
       }),
   ]
}