import { Configuration } from "webpack-dev-server";

export function getDevServer(): Configuration {
  return {
    port: 4000,
    open: true,
    historyApiFallback: true,
    hot: true
  }
}