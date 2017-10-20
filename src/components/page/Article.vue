<template>
	<div>
		<el-collapse-transition>
			<div class="main" v-if="show">
				<el-row :gutter="10">
					<el-col :xs="24" :sm="16" :md="16" :lg="16" class='article'>
						<div class="grid-content bg-purple">
							<p>my</p>
							<p>my</p>
							<p>my</p>
							<p>my</p>
							<p>my</p>
							<p>my</p>
							<p>my</p>
							<p>my</p>
							<p>my</p>
							<p>my</p>
							<p>my</p>
							<p>my</p>
							<p>my</p>
							<p>my</p>
							<p>my</p>
						</div>
					</el-col>
					<el-col :xs="0" :sm="8" :md="8" :lg="8" class='sub'>
						<div class="grid-content bg-purple-light">
							<img class="sub-img" src="../../assets/head.png" />
						</div>
					</el-col>
				</el-row>
			</div>
		</el-collapse-transition>
	</div>
</template>

<script>
	export default {
		data: function() {
			return {
				show: false
			}
		},
		mounted: function() {
			this.show = true;
		}
	}
</script>

<style>
	.sub {
		text-align: center;
	}
	
	.sub img {
		width: 150px;
		text-align: center;
		border-radius: 150px;
		margin-top: 20px;
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