<template>

	<div class="main" v-if="show">

		<el-row :gutter="10">
			<el-col :xs="16" :sm="16" :md="16" :lg="16">
				<div class="grid-content bg-purple">
					<div class="article" v-for='(article,i) in articles' :key='article.title'>
						<div class="article-title">{{article.title}}</div>
						<div class="article-time">{{article.time}}</div>
						<div class="article-text">{{article.text}}</div>
						<div class="meta">
							<div class="left"><i class="el-icon-edit"></i>{{article.look}}</div>
							<div class="left"><i class="el-icon-edit"></i>{{article.write}}</div>
							<div class="left"><i class="el-icon-edit"></i>{{article.like}}</div>
						</div>

					</div>

				</div>
			</el-col>
			<el-col :xs="8" :sm="8" :md="8" :lg="8" class='sub'>
				<div class="grid-content bg-purple-light">
					<img class="sub-img" src="../../assets/head.png" />
					<p class="sub-name">{{name}}</p>
					<p class="sub-desciption">{{description}}</p>
					<el-row class='sub-list'>
						<el-col class='sub-list-item' :span='8' v-for='(list,i) in lists' :key='i'>
							<router-link :to='list.to'><span class="item-num">{{list.num}}</span>
								<span class="item-class">{{list.class}}</span></router-link>

						</el-col>
					</el-row>
					<div class="share-content">
						<el-row>
							<el-col :span='8'>
								<img class="share" src="../../assets/github.png">
							</el-col>
							<el-col :span='8'><img class="share" src="../../assets/领英.png"></el-col>
							<el-col :span='8'><img class="share" src="../../assets/微博.png"></el-col>
						</el-row>
						<!--<img class="share" src="../../assets/github.png">
								<img class="share" src="../../assets/领英.png">
								<img class="share" src="../../assets/微博.png">-->
					</div>
				</div>
			</el-col>
		</el-row>

		
	</div>

</template>

<script>
	export default {
		data: function() {
			return {
				show: false,
				name: '颜浩',
				description: '为者常成，行者常至',
				lists: [{
					num: 8,
					class: '文章',
					to: '/article'
				}, {
					num: 5,
					class: '标签',
					to: '/tag'
				}, {
					num: 3,
					class: '分类',
					to: '/class'
				}],
				articles: [{
					title: '文章名',
					time: '2017-10-20 13:30',
					text: '这是一篇文章的文章内容，这是一篇文章的文章内容，这是一篇文章的文章内容，这是一篇文章的文章内容，这是一篇文章的文章内容这是一篇文章的文章内容，这是一篇文章的文章内容，这是一篇文章的文章内容，这是一篇文章的文章内容，这是一篇文章的文章内容...',
					look: 5,
					write: 2,
					like: 3
				}, {
					title: '文章名',
					time: '2017-10-20 13:30',
					text: '这是一篇文章的文章内容，这是一篇文章的文章内容，这是一篇文章的文章内容，这是一篇文章的文章内容，这是一篇文章的文章内容这是一篇文章的文章内容，这是一篇文章的文章内容，这是一篇文章的文章内容，这是一篇文章的文章内容，这是一篇文章的文章内容...',
					look: 5,
					write: 2,
					like: 3
				}, {
					title: '文章名',
					time: '2017-10-20 13:30',
					text: '这是一篇文章的文章内容，这是一篇文章的文章内容，这是一篇文章的文章内容，这是一篇文章的文章内容，这是一篇文章的文章内容这是一篇文章的文章内容，这是一篇文章的文章内容，这是一篇文章的文章内容，这是一篇文章的文章内容，这是一篇文章的文章内容...',
					look: 5,
					write: 2,
					like: 3
				}, {
					title: '文章名',
					time: '2017-10-20 13:30',
					text: '这是一篇文章的文章内容，这是一篇文章的文章内容，这是一篇文章的文章内容，这是一篇文章的文章内容，这是一篇文章的文章内容这是一篇文章的文章内容，这是一篇文章的文章内容，这是一篇文章的文章内容，这是一篇文章的文章内容，这是一篇文章的文章内容...',
					look: 5,
					write: 2,
					like: 3
				}, {
					title: '文章名',
					time: '2017-10-20 13:30',
					text: '这是一篇文章的文章内容，这是一篇文章的文章内容，这是一篇文章的文章内容，这是一篇文章的文章内容，这是一篇文章的文章内容这是一篇文章的文章内容，这是一篇文章的文章内容，这是一篇文章的文章内容，这是一篇文章的文章内容，这是一篇文章的文章内容...',
					look: 5,
					write: 2,
					like: 3
				}, {
					title: '文章名',
					time: '2017-10-20 13:30',
					text: '这是一篇文章的文章内容，这是一篇文章的文章内容，这是一篇文章的文章内容，这是一篇文章的文章内容，这是一篇文章的文章内容这是一篇文章的文章内容，这是一篇文章的文章内容，这是一篇文章的文章内容，这是一篇文章的文章内容，这是一篇文章的文章内容...',
					look: 5,
					write: 2,
					like: 3
				}]
			}
		},
		mounted: function() {
			this.show = true;
		},
		methods: {
			up() {
				document.body.scrollTop = 0;
			}
		}
	}
</script>

<style>
	.article {
		margin: 0 20px;
		padding: 30px 0;
		border-bottom: solid 1px #E5E9F2;
	}
	
	.article-title {
		font-size: 18px;
		margin-bottom: 10px;
	}
	
	.article-time {
		font-size: 13px;
		margin-bottom: 10px;
	}
	
	.article-text {
		margin-bottom: 10px;
		font-size: 14px;
		line-height: 28px;
	}
	
	.left {
		float: left;
	}
	
	.meta {
		height: 20px;
	}
	
	.meta .left {
		margin-left: 20px;
		font-size: 13px;
	}
	
	.meta .left:first-child {
		margin-left: 0;
	}
	
	.article:last-child {
		border-bottom: none
	}
	
	.sub {
		text-align: center;
		font-size: 14px;
		color: black;
	}
	
	.sub-name {
		font-size: 16px;
		margin: 10px;
	}
	
	.sub .sub-img {
		width: 150px;
		text-align: center;
		border-radius: 150px;
		margin-top: 20px;
	}
	
	.sub-list {
		margin: 10px 0;
		padding: 0 35px;
	}
	
	.sub-list-item:first-child {
		/*padding: 0 15px;*/
		border-left: none
	}
	
	.el-col .sub-list-item {
		border-radius: 0px;
	}
	
	.sub-list-item {
		display: inline-block;
		/*padding: 0 15px;*/
		border-radius: 0px;
		border-left: 1px solid darkgray;
	}
	
	.sub-list-item a {
		border-bottom: none;
		text-decoration: none;
		color: black;
	}
	
	a:hover {
		color: lightslategray;
	}
	
	.item-num {
		line-height: 20px;
		display: block;
	}
	
	.item-class {}
	
	.share-content {
		margin: 10px 0;
		padding:0 20px;
	}
	
	.share {
		float: left;
		width: 30px;
		height: 30px;
		margin: 10px 18px;
	}
	
	.main {
		margin: 0 auto;
		padding-left: 15px;
		padding-right: 15px;
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
	
	.el-col {
		border-radius: 4px;
	}
	
	.bg-purple-dark {
		background: #99a9bf;
	}
	
	.bg-purple {
		background: #d3dce6;
	}
	
	.bg-purple-light {
		background: #e5e9f2;
	}
	
	.grid-content {
		border-radius: 4px;
		min-height: 36px;
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