<template>
    <view>
        <u-form
            :model="form"
            ref="form"
            :rules="rules"
            @submit="handleLogin"
            label-position="top"
            :border-bottom="false"
            :error-type="['toast', 'message', 'border']"
        >
            <u-form-item class="form__item" prop="mobile" :border-bottom="false">
                <u-input
                    placeholder="手机号"
                    v-model="form.mobile"
                    type="text"
                    :border="true"
                    clearable
                />
            </u-form-item>
            <u-form-item
                class="form__item"
                :border-bottom="false"
            >
                <u-input
                    placeholder="密码"
                    v-model="form.password"
                    type="password"
                    :border="true"
                    maxlength="14"
                />
            </u-form-item>
            <u-form-item class="form__item" :border-bottom="false">
                <u-button
                    @click="handleLogin"
                    form-type="submit"
                    type="primary"
                    :ripple="true"
                    >立即登录</u-button
                >
            </u-form-item>
        </u-form>
    </view>
</template>

<script>
export default {
    data() {
        return {
            form: {
                mobile: "",
                password: "",
            },
            rules: {
                mobile: [
                    {
                        required: true,
                        message: "请输入手机号",
                        trigger: "blur",
                    },
                    {
                        min: 11,
                        max: 11,
                        message: "手机号格式不正确",
                        trigger: "blur",
                    },
                ],
                // password: [
                //     {
                //         required: true,
                //         message: "请输入密码",
                //         trigger: "blur",
                //     },
                //     {
                //         min: 6,
                //         max: 14,
                //         message: "密码在 6 ~ 14 位之间",
                //         trigger: "blur",
                //     },
                // ],
            },
        };
    },
    methods: {
        handleLogin() {
            this.$refs.form.validate((valid) => {
                if (valid) {
                    uni.request({
                        method: "POST",
                        url: "http://www.ppter.com/mobile/user/login",
                        data: {
                            ...this.form
                        },
                        success: res => {
                            console.log(res)
                        },
                        fail: res => {

                        }
                    });
                }
            });
        },
    },
};
</script>

<style lang="scss">
</style>
