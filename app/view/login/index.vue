<style lang='stylus' scoped>
    button{
		position:absolute;
		top:50%;
		left:50%;
		width: 60%;
		height: 50px;
		transform:translate(-50%,-50%);
		text-align: center;
		line-height: 50px;
		font-size:20px;
		border: 1px solid #333;
		outline: none;
	}
</style>

<template>
    <div>
        <button @click='routerGo'>Login</button>   
	</div>
</template>

<script>
    export default {
		data(){
			return{
				
			}
		},
		methods:{
			routerGo(){
				router.push({
					"path":"/qiqu"
				})
			}
		}
	}
</script>