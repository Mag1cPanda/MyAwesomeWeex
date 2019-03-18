<template>
    <div>
        <div class="editer">
            <text style="margin-top: 10px; margin-bottom: 10px;margin-left: 22px; color: #2A2000; font-size: 30px; font-weight: 400">我的回答：</text>
            <text class="grayLine"></text>
            <textarea class="textarea" @input="oninput" @change="onchange" v-model="answerText">

        </textarea>


        </div>

        <image class="imageBtn"></image>
        <image class="imageBtn" v-if="imageCount > 1"></image>
        <image class="imageBtn" v-if="imageCount > 2"></image>
        <image class="imageBtn" v-if="imageCount > 3"></image>
        <image class="imageBtn" v-if="imageCount > 4"></image>
        <image class="imageBtn" v-if="imageCount > 5"></image>

        <div style="align-items: center; flex-direction: row; margin-top: 24px">
            <image style="margin-left: 24px; width: 24px; height: 24px; background-color: #00B4FF"></image>
            <text style="width:182px; height:33px; font-size: 24px; font-weight: 500; color:rgba(68,68,68,1); margin-left: 10px">最多上传6张照片</text>
        </div>

        <div class="bottemMenu">
            <text class="bottemButton" @click="saveClick">保存</text>
        </div>
    </div>
</template>

<script>
    const modal = weex.requireModule('modal')
    var globalEvent = weex.requireModule('globalEvent');
    var spModule = weex.requireModule('SPModule');

    export default {
        name: "discussEditor",

        data () {
            return {
                imageCount:0,
                answerText:''
            }
        },

        created: function() {
            const self = this;

            spModule.getString('answerText', 'def', (textValue) => {
                this.answerText = textValue;
            })

            globalEvent.addEventListener("saveText", (e) => {
                spModule.putString('answerText',this.answerText, function (aValue) {

                });
            });
        },

        methods: {
            oninput (event) {
                console.log('oninput:', event.value)
            },
            onchange (event) {
                console.log('onchange:', event.value)
                this.answerText = event.value;
            },


            saveClick () {
                spModule.putString('answerText',this.answerText, function (aValue) {

                });
            },
        }
    }
</script>

<style scoped>
    .editer {
        margin-top: 41px;
        margin-left: 23px;
        width: 704px;
        height: 678px;
        border-width: 1px;
        border-color: #E5E5E5;
        border-radius: 6px;
    }

    .grayLine {
        background-color: #E5E5E5;
        height: 1px;
    }

    .textarea {
        /*placeholder:的的的;*/
        /*width:610px;*/
        background-color: #00B4FF;
        height:186px;
        margin-top: 20px;
        margin-left: 27px;
        margin-right: 27px;
        margin-bottom: 20px;
        font-size:30px;
        font-weight:400;
        line-height:48px;
        color:#666666;
    }

    .imageBtn {
        background-color: #00B4FF;
        margin-left: 25px;
        margin-top: 30px;
        width: 159px;
        height: 159px;
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