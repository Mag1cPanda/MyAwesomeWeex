<template>
    <div style="flex-direction: row; flex: 1">
        <slider class="slider" auto-play="false" infinite="false" @scroll="scrollHandler" @change="changeHandler">
            <div class="slider-pages" v-for="(item, key) in itemList" :key="key">

                <div style="flex-direction: row; align-items: center; margin-left: 23px; margin-top: 20px; margin-bottom: 20px">
                    <text class="typeLabel">题目类型 (X分)</text>
                    <div style="flex-direction: row; align-items: center; margin-left: 359px" @click="onMarkClick">
                        <image style="background-color: #F2F2F2; width: 30px; height: 30px"></image>
                        <text class="markLabel">标记此题</text>
                    </div>
                </div>

                <text class="grayLine"></text>

                <text class="stemLabel">世界科技发展突飞猛进，创新创造日新月异，世界科技正孕育着新的重大突破，知识在经济社会发展中的作用日益突出，科技竞争在综合国力竞争中的地位。</text>

                <!--选择题-->
                <div v-if="item.type === 0">
                    <div class="optionsView" v-for="choice in choiceItems">
                        <text class="indexLabel">{{choice}}</text>
                        <text class="contentLabel">世界科技发展突飞猛进，创新创造日新月异 ，世界科技正孕育着新的重大突破</text>
                    </div>
                </div>

                <!--填空题-->
                <div v-if="item.type === 1">
                    <div class="optionsView" v-for="(blank, index) in blanks" :key="index">
                        <text class="indexLabel" :style="(blanks[index].length > 0) ? {backgroundColor: '#FFA200'} :{backgroundColor: '#777777'} ">{{index + 1}}</text>
                        <!--@input="oninput"-->
                        <input class="placeInput" type="text" placeholder="点击输入答案" v-model="blanks[index]">
                    </div>

                    <div style="margin-top: 42px; flex-direction: row; align-items: center; height: 72px; justify-content: center;">
                        <text class="saveBtn" @click="saveClick">保存</text>
                    </div>
                </div>

                <!--讨论题-->
                <div v-if="item.type === 2">
                    <!--展开收起按钮-->
                    <div style="margin-top: 22px; justify-content: center; align-items: center">
                        <text class="grayLine" style="position: absolute; left: 0px; right: 0px; top: 28px;"></text>
                        <div class="foldBtn">
                            <text style="color: #FFA200; font-size: 26px">{{isFolded ? '展开题目' : '收起题目'}}</text>
                        </div>
                    </div>

                    <div class="editer" @click="enterIntoEditor">
                        <div style="flex-direction: row; align-items: center">
                            <text style="margin-top: 10px; margin-bottom: 10px;margin-left: 22px; color: #2A2000; font-size: 30px; font-weight: 400">我的回答：</text>
                            <text style="margin-left: 435px; font-size: 30px; font-weight: 400; color:rgba(255,162,0,1);" v-if="answerText.length > 0">编辑</text>
                        </div>
                        <text class="grayLine" style="margin-left: 0px; margin-right: 0px"></text>
                        <text style="margin-top: 20px; margin-left: 27px; margin-right: 27px; margin-bottom: 20px; color:rgba(74,74,74,1); font-weight:400; font-size: 30px; background-color: red">{{answerText}}</text>
                        <text style="position: absolute; top: 126px; left: 260px; width: 182px; font-size: 26px; font-weight: 500; background-color: #00B4FF" v-if="answerText.length < 1">点击进入编辑器</text>
                    </div>
                </div>
            </div>
        </slider>

        <div class="bottemMenu">
            <text class="bottemButton" @click="sheetClick">答题卡</text>
            <text style="background-color: #FFFFFF; width: 0.5px; height: 100px"></text>
            <text class="bottemButton" @click="sendClick">交卷</text>
        </div>
    </div>
</template>

<script>
    const util = weex.requireModule('UtilModule') || {};
    const dateModule = weex.requireModule('DateModule')
    const modal = weex.requireModule('modal') || {};
    // const navigator = weex.requireModule('navigator') || {};
    const navigator = weex.requireModule('LENavigator') || {};
    var globalEvent = weex.requireModule('globalEvent');
    var spModule = weex.requireModule('SPModule');


    export default {
        name: "questions",

        data: function () {
            return {
                //0选择 1填空 2论述
                questionType: 1,
                isFolded: false,
                currIdx: 0,
                answerText: '',
                loading: true,
                itemList: [
                    {type: 0, title: 'item1'},
                    {type: 1, title: 'item2'},
                    {type: 2, title: 'item3'}
                ],
                choiceItems: ['A', 'B', 'C', 'D'],
                blanks: [],
                blank:'',
            }
        },

        created: function() {
            const self = this;

            //每次创建此页面时先清除上次保存的内容
            spModule.putString('answerText','', function (aValue) {

            });

            globalEvent.addEventListener("getText", (e) => {
                spModule.getString('answerText', 'def', (textValue) => {
                    this.answerText = textValue;
                })
            });
        },

        methods : {
            changeHandler: function(e) {
                this.currIdx = e.index;
            },

            onMarkClick (event) {
                modal.toast({
                    message: 'markClick',
                    duration: 0.8
                })
            },

            // oninput: function(e) {
            //     modal.toast({
            //         message: this.blanks[0],
            //         duration: 0.8
            //     })
            // },

            enterIntoEditor (event) {
                console.log('will jump')
                navigator.refreshWithURL('http://192.168.1.117:8081/dist/exam/discussEditor.js', {})
                // navigator.push({
                //     url: 'http://192.168.1.117:8081/dist/exam/discussEditor.js',
                //     animated: "true"
                // })
            },

            saveClick (event) {
                modal.toast({
                    message: 'saveClick',
                    duration: 0.8
                })
            },

            sheetClick (event) {
                modal.toast({
                    message: 'sheetClick',
                    duration: 0.8
                })
            },

            sendClick (event) {
                // modal.toast({
                //     message: 'sendClick',
                //     duration: 0.8
                // })

                this.blanks = ['1', '2', '3', '4']
            },
        }
    }
</script>

<style scoped>
    .slider {
        /*background-color: #00B4FF;*/
        flex-direction: row;
        position: absolute;
        top: 0;
        right: 0;
        bottom: 100px;
        left: 0;
    }

    .slider-pages {
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
    }

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
        align-items: center;
        margin-top: 31px;
        margin-left: 23px;
        margin-right: 23px;
        border-width: 2px;
        border-color: rgba(243, 243, 243, 1);
        border-radius:6px;
        height: 120px;
    }

    .indexLabel {
        margin-left: 25px;
        width: 42px;
        height: 42px;
        background-color: #777777;
        color: #FFFFFF;
        text-align: center;
        font-weight: bold;
        font-size: 32px;
        border-radius: 21px;
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

    .placeInput {
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

    .saveBtn {
        width: 200px;
        height: 72px;
        line-height: 72px;
        border-radius: 6px;
        border-color: rgba(255,162,0,1);
        border-width: 2px;
        color: rgba(255,162,0,1);
        text-align: center;
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