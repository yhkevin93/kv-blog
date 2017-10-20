<template>
	<div class="wrapper">
		<v-head></v-head>
		<div class="content">
			<BackTop></BackTop>
			<transition name="move" mode="out-in">
				<router-view>

				</router-view>

			</transition>
		</div>
		<v-Footer></v-Footer>
	</div>
</template>

<script>
	import vHead from './Header.vue';
	import vFooter from './Footer.vue';
	export default {
		components: {
			vHead,
			vFooter
		}
	}
</script>

<style>
	.move-enter-active,
	.move-leave-active {
		transition: opacity .5s;
	}
	
	.move-enter,
	.move-leave {
		opacity: 0;
	}
	
	html {
		height: 100%;
	}
	
	body {
		min-height: 100%;
		margin: 0;
		padding: 0;
		position: relative;
		background-image: url(../../assets/hc1.jpg);
		font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
	}
	
	.content {
		padding-bottom: 150px;
	}
	/* main的padding-bottom值要等于或大于footer的height值 */
	
	footer {
		position: absolute;
		bottom: 0;
		width: 100%;
		height: 100px;
		background-color: #324157;
	}
	
	.header {
		position: relative;
		box-sizing: border-box;
		width: 100%;
		height: 70px;
		font-size: 22px;
		line-height: 70px;
		color: #fff;
	}
</style>