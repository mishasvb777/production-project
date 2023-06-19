import MiniCssExtractPlugin from "mini-css-extract-plugin"
import  webpack  from "webpack"
import { BuildOptions } from "./types/config"

export function buildLoaders({isDev}: BuildOptions): webpack.RuleSetRule[] {

  // Если не используем тайпскрипт - нужен babel-loader
  const typescriptLoader = {
    test: /\.tsx?$/, // будут обрабатываться файлы с расширением ts и tsx
    use: 'ts-loader',
    exclude: /node_modules/,
  }

  const cssLoader = {
    test: /\.s[ac]ss$/i,
    use: [      
      isDev ? 'style-loader': MiniCssExtractPlugin.loader,      
      {
        loader: 'css-loader',        
        options: {
          modules: {
            auto: (resPath: string) => Boolean(resPath.includes('.module.')),
            localIdentName: isDev ? '[path][name]__[local]--[hash:base64:8]' : '[hash:base64:8]' // определяекм как будут выглядить имена классов в продакшене и в разработке
          }          
        }        
      },     
      "sass-loader",
    ],
  }
  

  return [
    typescriptLoader,
    cssLoader
  ]
}