<template>
    <div class="project-item" ref="project" :class="{zoomIn:into,animated:into}">
        <div class="img">
            <img :src="require(`@/assets/project-images/${data.data.imgSrc}`)" alt=""></img>
        </div>
        <div class="desc">
            <a :href="other.mainPath + data.link" target="_blank">
                <p class="tltle">{{ data.title }} ></p>
            </a>
            <ul class="describe">
                <li class="describe-item">
                    <span class="des-title">项目简介：</span>
                    <span class="brief">{{ data.data.brief }}</span>
                </li>
                <li class="describe-item">

                    <span class="des-title">开发时间：</span>
                    <span class="developmentTime">{{ data.data.developmentTime }}</span>
                </li>
                <li class="describe-item des">
                    <span class="des-title">技术使用：</span>

                    <span class="item-describe" v-for="(x, index) in data.data.describe.split('/')" :key="index"
                        :style="{ backgroundColor: `${color[colorChoose[index]]}` }">{{ x.trim() }}</span>

                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import { isElementNotInViewport } from "../../utils/util";

export default {
    name: 'ProjectItem',
    data() {
        return {
            color: ['rgba(252,151,175,.5)', 'rgba(135,247,207,.5)', 'rgba(247,244,148,.5)', 'rgba(114,204,255,.5)',
                'rgba(247,197,160,.5)', 'rgba(212,164,235,.5)', 'rgba(210,245,166,.5)', 'rgba(43,130,29,.5)',
                'rgba(63,177,227,.5)'],
            into: false
        }
    },
    props: ['data'],
    inject: ['other'],
    mounted() {
        // 监听滚动事件
        window.addEventListener("scroll", this.scrollToTop);
        if (!isElementNotInViewport(this.$refs.project)) {
            this.into = true
            // 移除滚动事件
            window.removeEventListener('scroll', this.scrollToTop);
        }
    },
    methods: {
        // 滚动事件
        scrollToTop() {
            !isElementNotInViewport(this.$refs.project) ? this.into = true : '';
            if (this.into) {
                // 移除滚动事件
                window.removeEventListener('scroll', this.scrollToTop);
            }
        }
    },
    computed: {
        colorChoose() {
            let res = []
            for (let i = 0; i < 20; i++) {
                res.push(Math.floor(Math.random() * this.color.length))
            }
            return res
        }
    }

}
</script>
<style scoped lang="less">
@import '../../assets/styles/variables.less';

.project-item {
    display: flex;
    border: 2px #ccc solid;
    min-height: 200px;
    width: 48%;
    justify-content: center;
    align-items: center;
    margin: 1%;

    .img {
        padding: 20px;
        width: 200px;
        height: 200px;
        overflow: hidden;

        img {
            transition: all 1s;
        }

        img:hover {
            transform: scale(1.5);

        }
    }

    .desc {
        flex: 1;
        padding-left: 20px;
        border-left: 2px #ccc solid;
        height: 100%;
        display: flex;
        flex-direction: column;

        .tltle {
            font-size: 20px;
            font-weight: bolder;
            color: @primary;
            line-height: 56px;
            cursor: pointer;
        }

        .describe {
            flex: 1;
            display: flex;
            flex-direction: column;

            .describe-item {
                line-height: 30px;
                display: flex;

                .des-title {
                    color: @primary;
                    font-weight: bold;
                    width: 70px;
                }

                .brief {
                    // 项目简介
                    flex: 1;

                }

                .developmentTime {
                    // 开发时间
                    flex: 1;

                }

                .item-describe {
                    // 技术使用
                    margin-bottom: 10px;
                    margin-left: 10px;
                    padding: 0 10px;
                    line-height: 25px;
                }
            }
        }

        .describe-item.des {
            display: flex;
            flex-wrap: wrap;
        }
    }
}
</style>