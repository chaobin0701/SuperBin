<template>
    <div class="wrapper">
        <MyTitle text="与我联系" id="contact"></MyTitle>
        <span>感谢你看到最后!~</span>
        <span>联系电话:{{userInfo.phone}}&emsp;&emsp;&emsp; 邮箱地址:{{userInfo.email}}</span>
    </div>
</template>

<script>
import MyTitle from './library/my-title.vue'

export default {
    name: 'AppContactMe',
    components: { MyTitle },
    inject:['userInfo']

}
</script>
<style scoped lang="less">
@import '../assets/styles/variables.less';
.wrapper{
    background-color: @bg-1;
    display: flex;
    flex-direction: column;
    padding: 30px 0 80px 0;
    justify-content: center;
    align-items: center;
    
    span{
        color: #fff;
        line-height: 30px;
    }
}
</style>