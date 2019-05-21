import dsbridge from 'dsbridge'
// 命名空间
const namespace = dsbridge.call('getNameSpace')
// js调客户端
/**
 * ------常用方法名-----
 * 获取用户信息: getUserInfo
 * 客户端跳转: jumpTo
 * 客户端报数: onStatisticEvent
 * 友盟报数: onUmengEvent
 * */
const jsToClient = (methodName, params) => {
	const para = typeof params === 'string' ? params : JSON.stringify(params)
	return new Promise((resolve, reject) => {
		let nativeMethod = namespace + '.' + methodName
		let hasNativeMethod = dsbridge.hasNativeMethod(nativeMethod)
		if (hasNativeMethod) {
			dsbridge.call(nativeMethod, para, res => {
				resolve(res)
			})
		} else {
			reject(new Error())
		}
	})
}
// 客户端调js
const clientToJs = (methodName, callback) => {
	dsbridge.register(namespace + '.' + methodName, res => {
		callback && callback(res)
	})
}
export {
	namespace,
	jsToClient,
	clientToJs
}
