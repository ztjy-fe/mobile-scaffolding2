<template>
	<div class="hello-container">
		<h1>\{{msg}}</h1>
	</div>
</template>
<script>
export default {
	name: 'Hello',
	pvPara: {}, // pv报数的参数 (data部分)
	umengPara: {}, // 友盟报数的参数
	data () {
		return {
			msg: '欢迎使用！！！'
		}
	}
}
</script>
<style lang="scss" scoped>
	.hello-container {
		font-size: 40px;
	}
</style>
