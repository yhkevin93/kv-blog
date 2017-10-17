<template>
	<div>
		<div class="main">
			<el-row :gutter="10">
				<el-col :xs="24" :sm="16" :md="16" :lg="16">
					<div class="grid-content bg-purple">123</div>
				</el-col>
				<el-col :xs="0" :sm="8" :md="8" :lg="8">
					<div class="grid-content bg-purple-light"></div>
				</el-col>
			</el-row>
		</div>

	</div>
</template>

<script>
	export default {
		data: function() {
			return {}
		}
	}
</script>

<style>
	.main{
		margin: 0 auto;
		padding-left: 15px;
		padding-right: 15px;
	}
	
	@media (min-width:1200px ) {
		.main{width: 1170px;}
	}
	
	@media (min-width:992px ) {
		.main{width: 970px;}
	}
	
	@media (min-width:768px ) {
		.main{width: 750px;}
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
</style>