import path from 'path';
import { buildWebpack } from './config/build/buildWebpack';
import { BuildPaths, Mode } from './config/types/types';

interface Envs {
  mode: Mode
}

export default (env : Envs) => {
  const paths: BuildPaths = {
    entry: path.resolve(__dirname, 'src', 'index.tsx'),
    output: path.resolve(__dirname, 'build'),
    html: path.resolve(__dirname, 'public', 'index.html'),
    src: path.resolve(__dirname, 'src'),
    assets: path.resolve(__dirname, 'assets')
  }

  const config = buildWebpack({
    mode: env.mode ?? 'development',
    paths,
    env
  })

  return config
}