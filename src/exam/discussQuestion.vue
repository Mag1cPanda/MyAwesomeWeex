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

        <text class="stemLabel">我国经济增长的潜力、韧性和回旋余地仍较大，三新经济动能快速成长，企业效益有所改善，工业领域存在补库存需要，宏观调控政策仍有一定空间，将会支撑我国经济保持在合理运行空间。当然，全球经济增长仍然疲弱，一些国家大选、反全球化逆流和地缘政治等不确定性因素对经济复苏的影响加大；国内新的增长支撑点缺乏、产能过剩依然较大、民间投资不振、资金“脱实就虚”、金融风险加大、居民收入减速、部分领域改革推进缓慢、部分地区困难较大等因素叠加影响，我国经济仍将面临较大下行压力。 国内经济面临房地产市场波动影响宏观经济稳定运行、社会资金加速“脱实向虚”、各领域金融风险叠加隐患上升、民间企业投资活力不足、收入增速放缓抑制消费需求等问题。</text>



        <div style="margin-top: 22px; justify-content: center; align-items: center">
            <text class="grayLine" style="position: absolute; left: 0px; right: 0px; top: 28px;"></text>
            <div class="foldBtn">
                <text style="color: #FFA200; font-size: 26px">{{fontBtnTitle}}</text>
            </div>
        </div>

        <div class="editer" @click="enterIntoEditor">
            <text style="margin-top: 10px; margin-bottom: 10px;margin-left: 22px; color: #2A2000; font-size: 30px; font-weight: 400">我的回答：</text>
            <text class="grayLine" style="margin-left: 0px; margin-right: 0px"></text>
            <text style="margin-top: 68px; margin-left: 260px; font-size: 26px; font-weight: 500; ">点击进入编辑器</text>
        </div>


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
    const modal = weex.requireModule('modal')
    var navigator = weex.requireModule('navigator')

    export default {
        name: "discussQuestion",

        data () {
            return {
                fontBtnTitle: '收起题目'
            }
        },

        methods: {
            enterIntoEditor (event) {
                console.log('will jump')
                navigator.push({
                    url: 'http://192.168.1.100:8081/dist/exam/discussEditor.js',
                    animated: "true"
                })
            },
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

    .foldBtn {
        width: 197px;
        height: 56px;
        background-color: rgba(255,255,255,1);
        border-radius: 28px;
        border-color: #FFA200;
        border-width: 2px;
        align-items: center;
        justify-content: center;
    }

    .optionsView {
        flex-direction: row;
        /*align-items: center;*/
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
        margin-top: 39px;
        margin-left: 25px;
        width: 42px;
        height: 42px;
        background-color: #777777;/*#FFA200*/
        color: #FFFFFF;
        text-align: center;
        font-weight: bold;
        font-size: 32px;
        border-radius: 21px;
    }

    .placeInput {
        margin-top: 39px;
        margin-left: 25px;
        margin-right: 20px;
        height: 42px;
        font-size: 30px;
        font-weight: 400;
        flex: 1;
        color: rgba(74, 74, 74, 1);
    }

    .editer {
        margin-top: 41px;
        margin-left: 23px;
        margin-right: 23px;
        height: 255px;
        border-width: 1px;
        border-color: #E5E5E5;
        border-radius: 6px;
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