<template>
    <view class="container">
        <view class="user-container">
            <view class="user">
                <image
                    class="user__avatar"
                    mode="aspectFit"
                    src="https://www.ppter8.com/static/index/image/user_pic.png"
                />
                <view class="user__desc">
                    <view class="user__nickname">未登录</view>
                    <view>登录享受更多特权</view>
                </view>
            </view>
            <u-button
                @click="redirectLogin"
                :custom-style="{ width: '100rpx' }"
                type="primary"
                :ripple="true"
                size="medium"
                >立即登录</u-button
            >
        </view>
        <div class="user__grid">
            <u-grid :col="3" :border="false">
                <u-grid-item>
                    <u-icon name="photo" :size="46"></u-icon>
                    <view class="grid-text">图片</view>
                </u-grid-item>
            </u-grid>
        </div>
    </view>
</template>

<script>
import { mapState } from "vuex";
export default {
    data() {
        return {
            title: "Hello",
        };
    },
    computed: {
        ...mapState(["isLogin"]),
    },
    onLoad() {
        console.log(this.isLogin);
    },
    methods: {
        redirectLogin() {
            uni.navigateTo({ url: "./login" });
        },
    },
};
</script>

<style lang="scss">
.container {
    padding: 0;
}
.user-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 32rpx solid #f8f8f8;
    padding: 32rpx;
}
.user {
    display: flex;
    &__avatar {
        width: 100rpx;
        height: 100rpx;
    }
    &__desc {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        margin-left: 24rpx;
    }
    &__nickname {
        font-size: 32rpx;
        font-weight: 700;
    }
}
</style>
