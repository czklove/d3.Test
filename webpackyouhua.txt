# 加快打包的速度
  1.ddlplugin 插件
    是共有库dll话，下次直接使用


  2.HappyPack plugins mode单线程去处理，
    HappyPack能开启多个子进程 去并发处理
    const HappyPack = require('happypack')
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: 'happypack/loader?id=babel',
            },
        ]
    },
    plugins: [
      new HappyPack({
        id: 'babel', // 与loader 配置项对应
        threads: 4, // 开启多少个进程
        loaders: ['babel-loader'] //用什么loader处理
      })
    ]

# 减少打包后文件的体积
  1.插件按需引入
  2.路由懒加载
  3.首屏加载优化，vue-cli3.0默认开始了预加载，去掉预加载config.plugins.delete('prefetch')
    
  上面全部都是为了提高首页的加载速度
