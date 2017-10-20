<template>
	<div class="main">

		<el-collapse-transition>
			<div v-show="show">
				<img style="width: 500px;" src="../../assets/title.png" />
			</div>
		</el-collapse-transition>
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
   
</style>