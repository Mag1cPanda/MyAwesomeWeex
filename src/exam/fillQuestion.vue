<template>
    <div>
        <div style="flex-direction: row; align-items: center; margin-left: 23px; margin-top: 20px; margin-bottom: 20px">
            <text class="typeLabel">题目类型 (X分)</text>
            <div style="flex-direction: row; align-items: center; margin-left: 359px" @click="onMarkClick">
                <image style="background-color: #F2F2F2; width: 30px; height: 30px"></image>
                <text class="markLabel">标记此题</text>
            </div>
        </div>

        <text class="grayLine"></text>

        <text class="stemLabel">毛泽东思想形成的主要标志是（     ）、（     ）革命道路的提出。</text>

        <div class="optionsView" v-for="blank in blanks">
            <text class="indexLabel">{{blank}}</text>
            <input ref="input1" class="placeInput" type="text" @input="oninput">
        </div>

        <div class="bottemMenu">
            <text class="bottemButton" @click="saveClick">答题卡</text>
            <text style="background-color: #FFFFFF; width: 0.5px; height: 100px"></text>
            <text class="bottemButton" @click="sendClick">交卷</text>
        </div>
    </div>
</template>

<script>
    export default {
        name: "fillQuestion",

        data () {
            return {
                value: '-',
                blanks: ['1', '2']
            }
        },

        methods: {
            oninput: function(e) {
                this.value = e.value
                if (this.value.length > 0) {

                }
            }
        }
    }
</script>

<style scoped>
    .typeLabel {
        font-size:28px;
        font-weight:bold;
        line-height:36px;
        color:rgba(0,0,0,1);
    }

    .markLabel {
        margin-left: 10px;
        font-size:24px;
        font-weight:400;
        line-height:45px;
        color:rgba(42,32,0,1);
    }

    .grayLine {
        background-color: #E5E5E5;
        margin-left: 25px;
        margin-right: 25px;
        height: 1px;
    }

    .stemLabel {
        margin-top: 23px;
        margin-left: 23px;
        margin-right: 23px;
        font-size:30px;
        font-weight:bold;
        line-height:44px;
        color:rgba(42,32,0,1);
    }

    .optionsView {
        flex-direction: row;
        align-items: center;
        margin-top: 31px;
        margin-left: 23px;
        margin-right: 23px;
        border-width: 2px;
        border-color: rgba(243, 243, 243, 1);
        border-radius:6px;
        height: 120px;
        /*opacity:0.15;*/
    }

    .indexLabel {
        margin-left: 25px;
        width: 42px;
        height: 42px;
        background-color: #777777;/*#FFA200*/
        color: #FFFFFF;
        text-align: center;
        font-weight: bold;
        font-size: 32px;
        border-radius: 21px;
        /*opacity: 1;*/
    }

    .placeInput {
        placeholder: 点击输入答案;
        margin-left: 25px;
        margin-right: 20px;
        height: 42px;
        font-size: 30px;
        font-weight: 400;
        flex: 1;
        color: rgba(74, 74, 74, 1);
    }


    .bottemMenu {
        position: fixed;
        background-color: #F2F2F2;
        flex-direction: row;
        align-items: center;
        height: 100px;
        width: 750px;
        bottom: 0px;
    }

    .bottemButton {
        color: #FFA200;
        flex: 1;
        text-align: center;
        font-weight: bold;
        font-size: 32px;
    }
</style>