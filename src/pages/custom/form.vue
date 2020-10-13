<template>
    <view class="container">
        <u-form :model="form" ref="uForm" :border-bottom="false" label-position="top">
            <u-form-item prop="custom_type" :border-bottom="false">
                <u-input placeholder="定制类型" v-model="text" type="select" border @click="show = true" />
                <u-select v-model="show" mode="single-column" :list="list" @confirm="confirm"></u-select>
            </u-form-item>
            <u-form-item prop="custom_user_name" :border-bottom="false">
                <u-input placeholder="姓名" v-model="form.custom_user_name" type="text" border />
            </u-form-item>
            <u-form-item prop="custom_user_mobile" :border-bottom="false">
                <u-input placeholder="手机号" v-model="form.custom_user_mobile" type="text" border />
            </u-form-item>
            <u-form-item prop="custom_user_qq" :border-bottom="false">
                <u-input placeholder="QQ号" v-model="form.custom_user_qq" type="text" border />
            </u-form-item>
            <u-form-item :border-bottom="false">
                <u-button type="primary" @click="submit">提交申请</u-button>
            </u-form-item>
        </u-form>
    </view>
</template>

<script>
export default {
    data() {
        return {
            text: "",
            show: false,
            list: [
                {
                    label: "美化修改",
                    value: 1
                },
                {
                    label: "深度定制",
                    value: 2
                },
                {
                    label: "命题定制",
                    value: 3
                },
                {
                    label: "设计套餐",
                    value: 4
                }
            ],
            form: {
                custom_type: "",
                custom_user_name: "",
                custom_user_mobile: "",
                custom_user_qq: ""
            },
            rules: {
                custom_type: [
                    {
                        required: true,
                        message: "请选择定制类型",
                        trigger: "blur"
                    }
                ],
                custom_user_name: [
                    {
                        required: true,
                        message: "请输入您的真实姓名"
                    }
                ],
                custom_user_mobile: [
                    {
                        required: true,
                        message: "请输入您的手机号"
                    }
                ]
            }
        }
    },
    methods: {
        submit() {
            this.$refs.uForm.validate(valid => {
                if (valid) {
                    console.log("验证通过")
                }
            })
        },
        confirm(e) {
            this.text = e[0].label
            this.form.custom_type = e[0].value
        }
    },
    // 必须要在onReady生命周期，因为onLoad生命周期组件可能尚未创建完毕
    onReady() {
        this.$refs.uForm.setRules(this.rules)
    }
}
</script>
