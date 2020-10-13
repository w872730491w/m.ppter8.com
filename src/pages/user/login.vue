<template>
    <view class="container">
        <image class="logo" mode="widthFix" src="/static/images/logo.png">
        <view v-show="showLogin === false">
            <u-button
                type="primary"
                :custom-style="{ marginBottom: '40rpx' }"
                :ripple="true"
                @click="handleLogin"
            >
                百度账号登录
            </u-button>
            <u-button
                @click="showLoginForm"
                :ripple="true"
                :custom-style="{ marginBottom: '40rpx' }"
            >
                手机号登录
            </u-button>
            <u-checkbox
                v-model="checked"
            >
                已阅读并同意注册协议和版权声明
            </u-checkbox>
        </view>
        <login-form ref="form" v-show="showLogin" />
    </view>
</template>

<script>
import LoginForm from "@/component/LoginForm";
export default {
    components: {
        LoginForm
    },
    onReady() {
        this.$refs.form.$refs.form.setRules(this.$refs.form.rules)
    },
    data() {
        return {
            checked: false,
            showLogin: false
        };
    },
    methods: {
        handleLogin() {
            if (this.checked === false) {
                this.showAgreementTip();
                return;
            }
            uni.getProvider({
                service: "oauth",
                success: function(res) {
                    console.log(res.provider);
                    if (~res.provider.indexOf("baidu")) {
                        uni.login({
                            provider: "baidu",
                            scopes: "auth_user",
                            success: function(loginRes) {
                                console.log(loginRes.code);
                                uni.showToast({
                                    title: "登录成功",
                                    duration: 2000,
                                });
                            },
                            fail(err) {
                                console.log("err");
                                uni.showToast({
                                    title: "登录失败",
                                    duration: 2000,
                                });
                            },
                        });
                    }
                },
            });
        },
        showLoginForm() {
            if (this.checked === false) {
                this.showAgreementTip();
                return;
            }
            this.showLogin = true;
        },
        showAgreementTip() {
            uni.showToast({
                title: "请先同意相关协议",
                icon: "none"
            });
        },
    },
};
</script>

<style lang="scss">
.container {
    padding: 40rpx 100rpx;
}
.logo {
    width: 100%;
    margin-bottom: 120rpx;
}
</style>
