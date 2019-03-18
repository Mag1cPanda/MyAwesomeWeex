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

        <text class="stemLabel">世界科技发展突飞猛进，创新创造日新月异，世界科技正孕育着新的重大突破，知识在经济社会发展中的作用日益突出，科技竞争在综合国力竞争中的地位。</text>

        <div class="optionsView" v-for="choice in choiceItems">
            <text class="indexLabel">{{choice}}</text>
            <text class="contentLabel">世界科技发展突飞猛进，创新创造日新月异 ，世界科技正孕育着新的重大突破</text>
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
    const date = weex.requireModule('DateModule')


    export default {
        name: "choiceQuestion",

        data () {
          return {
              choiceItems: ['A', 'B', 'C', 'D']
          }
        },

        methods: {
            saveClick (event) {
                date.showDialogDate(1, function (tmp) {
                    modal.toast({
                        message: 'saveClick',
                        duration: 0.8
                    })
                })
            },

            sendClick (event) {
                modal.toast({
                    message: 'sendClick',
                    duration: 0.8
                })
            },

            onMarkClick (event) {
                modal.toast({
                    message: 'markClick',
                    duration: 0.8
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

    .optionsView {
        flex-direction: row;
        margin-top: 31px;
        margin-left: 23px;
        margin-right: 23px;
        border-width: 2px;
        border-color: rgba(243, 243, 243, 1);
        border-radius:6px;
        /*height: 88px;*/
        /*opacity:0.15;*/
    }

    .indexLabel {
        margin-top: 19px;
        margin-left: 26px;
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

    .contentLabel {
        margin-top: 19px;
        margin-left: 23px;
        margin-right: 6px;
        margin-bottom: 19px;
        color:rgba(74,74,74,1);
        font-size:30px;
        text-align: left;
        flex: 1;
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