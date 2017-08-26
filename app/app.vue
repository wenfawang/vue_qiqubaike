<style scoped lang='stylus' >
    
</style>

<template>
    <div>
        App123
        <transition name="slide">
			<router-view></router-view>
		</transition>
    </div>
</template>

<script>
    export default {
		data(){
			return{
				
			}
		}
	}
</script>