const formatFixedDate = require('szyutils/modules/formatFixedDate')

// webpack配置
module.exports = {
	publicPath: '/',
	assetsDir: 'static', // 打包后静态资源路径
	productionSourceMap: false,
	configureWebpack: {
		output: {
<<<<<<< HEAD
			filename: 'static/js/[name].' + formatFixedDate((+new Date()), 'yyyyMMddHHmmss') + '.js',
			chunkFilename: 'static/js/[name].' + formatFixedDate((+new Date()), 'yyyyMMddHHmmss') + '.js'
=======
			filename: 'static/js/[name].[hash:8]' + utils.getFixedDate((+new Date()), 'yyyyMMddHHmmss') + '.js',
			chunkFilename: 'static/js/[name].[chunkhash:8]' + utils.getFixedDate((+new Date()), 'yyyyMMddHHmmss') + '.js'
>>>>>>> f24ccb243e61dd6a234d3b84a30015162c6ee8ba
		}
	},
	css: {
		extract: {
<<<<<<< HEAD
			filename: 'static/css/[name].' + formatFixedDate((+new Date()), 'yyyyMMddHHmmss') + '.css',
			chunkFilename: 'static/css/[id].' + formatFixedDate((+new Date()), 'yyyyMMddHHmmss') + '.css'
=======
			filename: 'static/css/[name].[hash:8]' + utils.getFixedDate((+new Date()), 'yyyyMMddHHmmss') + '.css',
			chunkFilename: 'static/css/[id].[chunkhash:8]' + utils.getFixedDate((+new Date()), 'yyyyMMddHHmmss') + '.css'
>>>>>>> f24ccb243e61dd6a234d3b84a30015162c6ee8ba
		}
	},
	devServer: {
		host: '0.0.0.0', // 服务启动时的主机名
		port: 8586, // 端口号
		// proxy: { // 代理设置
		// 	'/api': {
		// 		target: '<url>',
		// 		ws: true,
		// 		changeOrigin: true
		// 	}
		// },
		open: true // 自动打开浏览器
	}
}
