/* eslint-disable */
<template>
    <div>
        <div style="background-color: #00B4FF; width: 750px; height: 88px; align-items: center; flex-direction: row">
            <image style="background-color: bisque; margin-left: 20px; width: 40px; height: 40px" @click="onBackClick"></image>
        </div>
        <scroller class="form">
            <text class="titleLab">转正申请表</text>

            <div class="otherRow">
                <text class="leftText">工号</text>
                <text class="verticalLine"></text>
                <text class="rightText">200182</text>
            </div>
            <div class="otherRow">
                <text class="leftText">申请人</text>
                <text class="verticalLine"></text>
                <text class="rightText">潘神</text>
            </div>
            <div class="otherRow">
                <text class="leftText">岗位</text>
                <text class="verticalLine"></text>
                <text class="rightText">软件开发工程师</text>
            </div>
            <div class="otherRow">
                <text class="leftText">申请时间</text>
                <text class="verticalLine"></text>
                <text class="rightText">2019-02-19 11:56</text>
            </div>
            <div class="otherRow">
                <text class="leftText">工作单位</text>
                <text class="verticalLine"></text>
                <text class="rightText">保宝项目组</text>
            </div>
            <div class="otherRow">
                <text class="leftText">工作地</text>
                <text class="verticalLine"></text>
                <input class="placeInput" type="text"/>
            </div>
            <div class="otherRow">
                <text class="leftText">入职时间</text>
                <text class="verticalLine"></text>
                <div class="rightItems" @click="selectTime">
                    <text class="rightText">{{timeValue}}</text>
                    <image class="rightIcon"></image>
                </div>
            </div>
            <div class="otherRow">
                <text class="leftText">转正类型</text>
                <text class="verticalLine"></text>
                <div class="rightItems" @click="selectType">
                    <text class="rightText">{{typeValue}}</text>
                    <image class="rightIcon"></image>
                </div>
            </div>
            <div class="lastRow">
                <text class="leftText">最高学历</text>
                <text class="verticalLine"></text>
                <div class="rightItems" @click="selectDegree">
                    <text class="rightText">{{degreeValue}}</text>
                    <image class="rightIcon"></image>
                </div>
            </div>

            <text class="dividerLine"></text>

            <div style="flex-direction: row; align-items: center; height: 80px">
                <text class="blueLine"></text>
                <text style="margin-left: 20px">工作总结</text>
            </div>
            <text class="grayLine"></text>
            <textarea class="summaryTextarea" placeholder="请在此输入信息" @input="oninput" @change="onchange" @focus="onfocus" @blur="onblur"></textarea>

            <text class="dividerLine"></text>

            <div style="flex-direction: row; align-items: center; height: 80px">
                <text class="blueLine"></text>
                <text style="margin-left: 20px">部门审批</text>
            </div>
            <text class="grayLine"></text>

            <text class="dividerLine"></text>

            <div style="flex-direction: row; align-items: center; height: 80px">
                <text class="blueLine"></text>
                <text style="margin-left: 20px">人事面谈</text>
            </div>
            <text class="grayLine"></text>
            <div class="otherRow" style="margin-top: 40px">
                <text class="leftText">预转正日期</text>
                <text class="verticalLine"></text>
                <text class="rightText"></text>
            </div>
            <div class="otherRow">
                <text class="leftText">转正后岗位</text>
                <text class="verticalLine"></text>
                <text class="rightText"></text>
            </div>
            <div class="otherRow">
                <text class="leftText">出勤类型</text>
                <text class="verticalLine"></text>
                <div class="rightItems";>
                    <div style="flex-direction: row; align-items: center" @click="onInternalClick">
                        <image style="margin-left: 20px; background-color: #00B4FF; width: 40px; height: 40px"></image>
                        <text style="margin-left: 10px">内勤岗</text>
                    </div>
                    <div style="flex-direction: row; align-items: center; margin-left: 20px" @click="onOutsideClick">
                        <image style="margin-left: 20px; background-color: #00B4FF; width: 40px; height: 40px"></image>
                        <text style="margin-left: 10px">外勤岗</text>
                    </div>
                </div>
            </div>
            <div class="otherRow">
                <text class="leftText">交补额度</text>
                <text class="verticalLine"></text>
                <text class="rightText"></text>
            </div>
            <div class="otherRow">
                <text class="leftText">工资上调额度</text>
                <text class="verticalLine"></text>
                <text class="rightText"></text>
                <text style="margin-right: 20px">元</text>
            </div>
            <div class="otherRow">
                <text class="leftText">试用工资总额</text>
                <text class="verticalLine"></text>
                <text class="rightText"></text>
                <text style="margin-right: 20px">元</text>
            </div>
            <div class="lastRow">
                <text class="leftText">转正工资总额</text>
                <text class="verticalLine"></text>
                <text class="rightText"></text>
                <text style="margin-right: 20px">元</text>
            </div>

            <text class="dividerLine"></text>

            <div style="flex-direction: row; align-items: center; height: 80px">
                <text class="blueLine"></text>
                <text style="margin-left: 20px">人力资源鉴定</text>
            </div>
            <text class="grayLine"></text>

            <text class="dividerLine"></text>

            <div style="flex-direction: row; align-items: center; height: 80px">
                <text class="blueLine"></text>
                <text style="margin-left: 20px">总经理审批</text>
            </div>
            <text class="grayLine"></text>
            <div style="flex-direction: row; align-items: center; margin-left: 20px; margin-top: 20px">
                <div style="flex-direction: row; align-items: center" @click="onPassClick">
                    <image style="margin-left: 20px; background-color: #00B4FF; width: 40px; height: 40px"></image>
                    <text style="margin-left: 10px">通过</text>
                </div>
                <div style="flex-direction: row; align-items: center; margin-left: 20px" @click="onNoPassClick">
                    <image style="margin-left: 20px; background-color: #00B4FF; width: 40px; height: 40px"></image>
                    <text style="margin-left: 10px">不通过</text>
                </div>
            </div>

            <text class="dividerLine"></text>

            <div style="flex-direction: row; align-items: center; height: 80px">
                <text class="blueLine"></text>
                <text style="margin-left: 20px">人事归档</text>
            </div>
            <text class="grayLine"></text>
        </scroller>

        <div class="bottemMenu">
            <text style="color: #FFFFFF; flex: 1; text-align: center" @click="saveClick">保存</text>
            <text style="background-color: #FFFFFF; width: 0.5px; height: 100px"></text>
            <text style="color: #FFFFFF; flex: 1; text-align: center" @click="sendClick">发送</text>
        </div>
    </div>
</template>

<script>
    const modal = weex.requireModule('modal')
    const picker = weex.requireModule('picker')
    const navigator = weex.requireModule('navigator')
    const typeItems = ['任命考核期转正', '试用期转正']
    const degreeItems = ['中专', '高中', '大专', '本科', '硕士', '博士', '博士后']


    export default {
        data () {
            return {
                timeValue: '',

                typeIndex: -1,
                degreeIndex: -1
                // typeValue: '',
                // degreeValue: ''
            }
        },

        computed: {
            typeValue () {
                if (this.typeIndex < typeItems.length) {
                    return typeItems[this.typeIndex]
                }
                return ''
            },

            degreeValue () {
                if (this.degreeIndex < degreeItems.length) {
                    return degreeItems[this.degreeIndex]
                }
                return ''
            }
        },

        methods: {
            onBackClick () {
                // navigator.push({
                //     url: '"http://192.168.1.100:8081/dist/components/GridList.js',
                //     animated: "true"
                // }, event => {
                //     modal.toast({ message: 'callback: ' + event })
                // })

                navigator.pop({
                        animated: "true",
                        data:{
                            username:'程三',
                            password:123456
                        }
                    }, event => {
                });

            },

            selectTime () {
                picker.pickDate({
                    value: this.timeValue,
                    max: '2029-11-28',
                    min: '1998-01-01'
                }, event => {
                    if (event.result === 'success') {
                        this.timeValue = event.data
                    }
                })
            },

            selectType () {
                picker.pick({
                    index: this.typeIndex,
                    items: typeItems
                }, event => {
                    if (event.result === 'success') {
                        this.typeIndex = event.data === -1 ? 0 : event.data
                        this.typeValue = typeItems[event.data]
                    }
                })
            },

            selectDegree () {
                picker.pick({
                    index: this.degreeIndex,
                    items: degreeItems
                }, event => {
                    if (event.result === 'success') {
                        this.degreeIndex = event.data === -1 ? 0 : event.data
                        this.degreeValue = degreeItems[event.data]
                    }
                })
            },

            oninput (event) {
                console.log('oninput:', event.value)

            },
            onchange (event) {
                console.log('onchange:', event.value)

            },
            onfocus (event) {
                console.log('onfocus:', event.value)

            },
            onblur (event) {
                console.log('onblur:', event.value)

            },

            onInternalClick () {
                modal.toast({
                    message: 'onInternalClick',
                    duration: 0.8
                })
            },
            onOutsideClick () {
                modal.toast({
                    message: 'onOutsideClick',
                    duration: 0.8
                })
            },

            onPassClick () {
                modal.toast({
                    message: 'onPassClick',
                    duration: 0.8
                })
            },
            onNoPassClick () {
                modal.toast({
                    message: 'onNoPassClick',
                    duration: 0.8
                })
            },

            saveClick (event) {
                modal.toast({
                    message: 'saveClick',
                    duration: 0.8
                })
            },

            sendClick (event) {
                modal.toast({
                    message: 'sendClick',
                    duration: 0.8
                })
            },
        }
    }


</script>

<style scoped>
    .form {

    }
    .titleLab {
        font-size: 40px;
        padding-top: 40px;
        padding-bottom: 40px;
        text-align: center;
    }
    .lastRow {
        height: 90px;
        border-width: 0.5px;
        align-items:center;
        flex-direction: row;
        margin-left: 20px;
        margin-right: 20px;
    }
    .otherRow {
        height: 90px;
        border-left-width: 0.5px;
        border-top-width: 0.5px;
        border-right-width: 0.5px;
        align-items:center;
        flex-direction: row;
        margin-left: 20px;
        margin-right: 20px;
    }
    .leftText {
        padding-left: 10px;
        padding-right: 10px;
        width: 200px;
        text-align: center;
        color: #999999;
        lines: 2;
    }
    .verticalLine {
        background-color: #cccccc;
        width: 0.5px;
        height: 90px;
    }
    .rightItems {
        flex-direction: row;
        flex: 1;
        align-self: stretch;
        align-items: center;
    }
    .rightText {
        margin-left: 20px;
        margin-right: 20px;
        flex: 1;
    }
    .rightIcon {
        width: 40px;
        height: 40px;
        margin-right: 20px;
        background-color: #00B4FF;
    }

    .placeInput {
        padding-top: 20px;
        padding-left: 20px;
        margin-right: 20px;
        flex: 1;
        height: 80px;
    }

    .dividerLine {
        margin-top: 30px;
        width: 750px;
        background-color: #F7F7F7;
        height: 20px;
    }

    .blueLine {
        background-color: #00B4FF;
        width: 5px;
        height: 40px;
        margin-left: 20px;
    }

    .grayLine {
        background-color: #cccccc;
        margin-left: 20px;
        margin-right: 20px;
        height: 1px;
    }

    .summaryTextarea {
        height: 200px;
        margin-top: 30px;
        margin-bottom: 30px;
        margin-left: 20px;
        margin-right: 20px;
        padding-top: 20px;
        padding-left: 20px;
        padding-right: 20px;
        color: #666666;
        border-width: 1px;
        border-style: solid;
        border-color: #00B4FF;
    }

    .bottemMenu {
        background-color: #00B4FF;
        flex-direction: row;
        align-items: center;
        height: 100px;
    }

</style>