<template>
    <div class="wrapper">
        <div v-for="(v, i) in list" class="row">
            <div v-for="(text, k) in v" class="item">
                <div>
                    <text>{{text}}</text>
                </div>
            </div>
        </div>
    </div>
</template>
<style scoped>
    .wrapper {
        justify-content: center;
        /*width: 700px;*/
        /*height: 700px;*/
        /*background-color: #999999;*/
    }
    .item {
        flex:1;
        justify-content: center;
        align-items:center;
        /*border-width:1px;*/
        border-left-width: 0.5px;
        border-top-width: 0.5px;
    }
    .row{
        flex-direction: row;
        height:80px;
    }
</style>
<script>
    module.exports = {
        data: function () {
            return {
                list:[
                    ['A', 'B', 'C'],
                    ['D', 'E', 'F'],
                    ['G', 'H', 'I']
                ]
            }
        }
    }
</script>