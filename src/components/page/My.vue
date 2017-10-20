<template>

	<div>
		<transition name="fade">
			<div class="main" v-if="show">
				<p class="title">个人简介</p>
				<p class="index">姓名：颜浩</p>
				<p class="index">90后程序员一枚，出于兴趣所以做了一个博客，博客完全是自己搭建的，前端使用的vue套餐，后端则用的nodejs， 搭建博客的目的也在于可以把自己的平时学习到的发现到的能个自己分享上来， 也可以给自己巩固久了不用的知识点。
				</p>
				<p class="index">欢迎技术交流，QQ：394713927</p>
			</div>
			
		</transition>
	</div>

</template>

<script>
	export default {
		data: function() {
			return {
				show:false
			}
		},
		mounted:function(){
			this.show = true;
		}
	}
</script>

<style>
	.main {
		margin: 0 auto;
		padding-left: 15px;
		padding-right: 15px;
	}
	
	.title {
		font-size: 20px;
		font-family: "微软雅黑";
		font-weight: bold;
		margin: 0;
	}
	
	.index {
		font-size: 16px;
		font-family: "微软雅黑";
		line-height: 22px;
	}
	
	@media (min-width:1200px) {
		.main {
			width: 1170px;
		}
	}
	
	@media (min-width:992px) {
		.main {
			width: 970px;
		}
	}
	
	@media (min-width:768px) {
		.main {
			width: 750px;
		}
	}
	
	.fade-enter-active,
	.fade-leave-active {
		transition: opacity 1s
	}
	
	.fade-enter,
	.fade-leave-to
	/* .fade-leave-active in below version 2.1.8 */
	
	{
		opacity: 0
	}
</style>