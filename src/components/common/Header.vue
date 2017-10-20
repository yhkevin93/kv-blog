<template>

	<div class="header">
		<el-menu theme="dark" class="el-menu-demo" mode="horizontal" router>
			<el-menu-item :index="list.index" v-for='(list,i) in lists' :key='list.index'>{{list.title}}
			</el-menu-item>
		</el-menu>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				lists: [{
					title: "个人简介",
					index: 'my',
					id: 1
				}, {
					title: "分类",
					index: 'class',
					id: 2
				}, {
					title: '标签',
					index: 'tag',
					id: 3
				}, {
					title: '文章',
					index: 'article',
					id: 4
				}],
				username: 'kv',
				activeIndex: '1',
				activeIndex2: '1'
			};
		},
		methods: {
			onRoutes() {
				console.log(this.$route.path.replace('/', ''))
			}
		}
	}
</script>

<style>
	body {
		margin: 0;
	}
	
	.el-menu--horizontal .el-menu-item {
		float: right;
	}
</style>