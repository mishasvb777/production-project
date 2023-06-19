import { BuildOptions } from './types/config'
import webpack from 'webpack'
import { buildPlugins } from './buildPlugins';
import { buildLoaders } from './buildLoaders';
import { buildResolve } from './buildResolve';
import path from 'path';
import { buildDevServer } from './buildDevServer';

export function buildWebpackConfig(options: BuildOptions): webpack.Configuration {
  const {paths, mode, isDev} = options; 

  return { // модуль для экспорта файлов для Node.js
      mode,
      entry: paths.entry, // стартовая точка нашего приложения, с помощью resolve мы можем склеить участки путей, __dirname папка где мы находимся, в нашем случае корень проекта, далее через запятую передаем участки пути
      output: {  // куда и как мы будем делать сборку нашего приложения
        filename: '[name].[contenthash].js',
        path: paths.build, // место где будет собранный проект
        clean: true // необходимо что бы папка где сборка, подчищалась от старых файлов сборки
      },
      plugins: buildPlugins(options),
      module: {
        rules: buildLoaders(options),
      },
      resolve: buildResolve(), // здесь указываем файлы для который не будем прописывать расширение при иморте (import Component from './component') 
      devtool: isDev ? 'inline-source-map' : undefined,
      devServer: isDev ? buildDevServer(options) : undefined
    }  
}