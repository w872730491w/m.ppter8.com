<template>
    <view class="container">
        <view v-if="isLogin && user" class="user-container">
            <view class="user">
                <image
                    class="user__avatar"
                    mode="aspectFit"
                    :src="user.avatar"
                />
                <view class="user__desc">
                    <view class="user__nickname">{{ user.nickname }}</view>
                    <view></view>
                </view>
            </view>
            <u-button
                @click="logout"
                :custom-style="{ width: '100rpx' }"
                type="primary"
                :ripple="true"
                size="medium"
            >
                退出登录
            </u-button>
        </view>
        <view v-else class="user-container">
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
            >
                立即登录
            </u-button>
        </view>
        <div class="user__grid">
            <u-grid :col="3">
                <u-grid-item>
                    <u-icon name="edit-pen-fill" :size="46"></u-icon>
                    <view class="grid-text">我的定制</view>
                </u-grid-item>
                <u-grid-item>
                    <u-icon name="order" :size="46"></u-icon>
                    <view class="grid-text">我的订单</view>
                </u-grid-item>
                <u-grid-item>
                    <u-icon name="order" :size="46"></u-icon>
                    <view class="grid-text">关于我们</view>
                </u-grid-item>
            </u-grid>
        </div>
    </view>
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
    data() {
        return {
            title: "Hello",
        };
    },
    computed: {
        ...mapState(["isLogin", "user"]),
    },
    onLoad() {
        console.log(this.user);
    },
    methods: {
        redirectLogin() {
            uni.navigateTo({ url: "./login" });
        },
        ...mapActions(["logout"]),
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
.grid-text {
    font-size: 28rpx;
    margin-top: 8rpx;
    color: $_day-color-darkgray;
}
</style>
