<template>
    <div class="title" :id="id">
        <h3>
            {{ text }}
        </h3>
    </div>
</template>

<script>
export default {
    name: 'MyTitle',
    props: {
        text: {
            type: String,
            default: '标题'
        },
        id: {
            type: String,
            default: ''
        }
    }

}
</script>
<style scoped lang="less">
@import '../../assets/styles/variables.less';

.title {
    margin-bottom: 30px;

    ::before {
        border: 4px double #c2c2c2;
        width: 120px;
        display: inline-block;
        content: "";
        margin: 9px 10px;
        box-sizing: border-box;
    }

    ::after {
        border: 4px double #c2c2c2;
        width: 120px;
        display: inline-block;
        content: "";
        margin: 9px 10px;
        box-sizing: border-box;
    }

    h3 {
        color: @primary;
        font-size: 35px;
        text-align: center;
        text-transform: uppercase;
    }
}
</style>