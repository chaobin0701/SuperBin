<template>
    <div class="wrapper" ref="header">
        <div class="content">
            <div class="info-left">
                <div class="zoom" :class="{fadeInLeft:into,animated:into}">
                    <img src="https://img2.woyaogexing.com/2022/08/19/c5ac4b2dbfe55bbf!400x400.jpg"></img>
                </div>
                <div class="info flipInX animated delay-1s">
                    <p class="name">{{ userInfo.name }}</p>
                    <p class="desc">{{ userInfo.motto }}</p>
                </div>
            </div>
            <div class="info-right " :class="{fadeInRight:into,animated:into}">
                <ul>
                    <li><span>联系邮箱:</span>{{ userInfo.email }}</li>
                    <li><span>毕业学校:</span>{{ userInfo.school }}</li>
                    <li><span>联系电话:</span>{{ userInfo.phone }}</li>
                    <li><span>现居城市:</span>{{ userInfo.city }}</li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
import { isElementNotInViewport } from "../utils/util";
export default {
    name: "APPUserInfo",
    inject: ['userInfo'],
    data(){
        return {
            into:false
        }
    },
    mounted() {
        // 监听滚动事件
        window.addEventListener("scroll", this.scrollToTop);
        if(!isElementNotInViewport(this.$refs.header)){
            this.into = true
            // 移除滚动事件
            window.removeEventListener('scroll',this.scrollToTop);
        }
    },
    methods: {
        // 滚动事件
        scrollToTop() {
            !isElementNotInViewport(this.$refs.header) ? this.into = true : '';
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
    width: 100%;
    height: 230px;
    background: url(../assets/images/pic2.jpg) no-repeat center;
    border-bottom: 5px @border solid;

    .content {
        display: flex;
        align-items: center;
        justify-content: space-between;
        box-sizing: border-box;
        border-bottom: rgb(228, 228, 228) 5px;
        padding: 30px 0;
        margin: 0 20%;

        .info-left {
            display: flex;
            align-items: center;

            .zoom {
                width: 160px;
                height: 160px;
                box-sizing: border-box;
                border: #fff 5px solid;
                overflow: hidden;

                img {
                    transition: .5s all;
                }

                img:hover {
                    transform: scale(1.3);
                }
            }

            .info {
                margin-left: 30px;
                height: 100px;
                display: flex;
                flex-direction: column;
                justify-content: space-around;
                animation-delay: .5s;

                .name {
                    color: @primary;
                    font-weight: bold;
                    font-size: 35px;
                }

                .desc {
                    color: #fff;
                }
            }
        }

        .info-right {
            height: 160px;

            ul {
                height: 100%;
                display: flex;
                flex-direction: column;
                justify-content: space-around;

                li {
                    font-size: 15px;
                    color: #fff;

                    span {
                        padding-right: 20px;
                        color: @primary;
                        font-weight: 600;
                    }
                }
            }
        }
    }
}
</style>