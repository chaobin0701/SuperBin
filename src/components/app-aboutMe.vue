<template>
    <div class="wrapper" ref="about">
        <MyTitle text="关于我" id="about"></MyTitle>
        <div class="my-des" :class="{fadeInDown:into,animated:into,slow:into}">
           <p>我的github： <a :href="other.github" target="_blank">点击跳转</a></p>
           <p>我的笔记(语雀)： <a :href="other.yuque" target="_blank">点击跳转</a></p>
        </div>
    </div>
</template>

<script>
import { isElementNotInViewport } from "../utils/util";
import MyTitle from './library/my-title.vue'
export default {
    name: 'AppAboutMe',
    components: { MyTitle },
    inject:['other'],
    data(){
        return {
            into:false
        }
    },
    mounted() {
        // 监听滚动事件
        window.addEventListener("scroll", this.scrollToTop);
        if(!isElementNotInViewport(this.$refs.about)){
            this.into = true
            // 移除滚动事件
            window.removeEventListener('scroll',this.scrollToTop);
        }
    },
    methods: {
        // 滚动事件
        scrollToTop() {
            console.log(!isElementNotInViewport(this.$refs.about))
            !isElementNotInViewport(this.$refs.about) ? this.into = true : '';
            if(this.into){
                // 移除滚动事件
                window.removeEventListener('scroll',this.scrollToTop);
            }
        }
    }
    
}
</script>

<style scoped lang="less">
@import '../assets/styles/variables.less';

.wrapper {
    padding: 40px 0 30px 0;
    width: 100%;
    background-color: #fff;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    border-bottom: 5px @border solid;
    .my-des {
        width: 60%;
        p {
            width: 100%;
            text-align:center;
            line-height: 30px;
            color: @primary;
            
            span{
                color: #000;
            }
        }
    }
}
</style>