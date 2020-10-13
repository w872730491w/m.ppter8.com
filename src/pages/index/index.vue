<template>
    <view class="view">
        <u-tabs
            ref="uTabs"
            :list="list"
            :current="current"
            @change="tabsChange"
            :is-scroll="false"
            :show-bar="false"
        ></u-tabs>
        <swiper
            :duration="200"
            class="swiper"
            :current="swiperCurrent"
            @animationfinish="animationfinish"
        >
            <swiper-item
                class="swiper__item"
                v-for="(item, index) in list"
                :key="index"
                :style="{ backgroundColor: item.color }"
            >
                <view class="swiper__ul">
                    <view
                        v-for="li in item.ul"
                        :key="li"
                        class="swiper__ul__li"
                    >
                        {{ li }}
                    </view>
                </view>
                <view class="swiper__desc">
                    {{ item.desc }}
                </view>
            </swiper-item>
        </swiper>
        <view class="swiper__btn" @click="handleSubmit">提交申请</view>
    </view>
</template>

<script>
import { mapState } from "vuex";
export default {
    data() {
        return {
            list: [
                {
                    name: "美化修改",
                    ul: ["高级背景", "版面设计", "图文美化"],
                    desc:
                        "您需要提供原有PPT或者相关文字内容、图片、视频等，我们的设计师将为您设计精美排版。",
                    color: "#efba6e",
                },
                {
                    name: "深度定制",
                    ul: [
                        "图文美化",
                        "结构重制",
                        "内容提炼",
                        "创意动画",
                        "高级图表",
                    ],
                    desc:
                        "您需要提供文案及相关辅助材料、信息、图片、视频等，我们的设计师将为您量身打造高端气质PPT。",
                    color: "#9996e7",
                },
                {
                    name: "命题定制",
                    ul: [
                        "文案撰写",
                        "内容策划",
                        "深度美化",
                        "图形表达",
                        "高级动画",
                    ],
                    desc:
                        "用户无需为内容文字发愁，自需提出明确需求，可以不提供内容，只需告知标题，设计师做自行脑补内容，真正做到省心省钱、高效。",
                    color: "#ef7d73",
                },
                {
                    name: "设计套餐",
                    ul: ["基础模板", "毕业答辩", "讲师课件", "设计总结"],
                    desc:
                        "您需要提供文案及相关辅助材料,我将来用最快的速度为您快速打造附合您要求的PPT。",
                    color: "#63c4d7",
                },
            ],
            // 因为内部的滑动机制限制，请将tabs组件和swiper组件的current用不同变量赋值
            current: 0, // tabs组件的current值，表示当前活动的tab选项
            swiperCurrent: 0, // swiper组件的current值，表示当前那个swiper-item是活动的
        };
    },
    computed: {
        ...mapState(["isLogin"]),
    },
    methods: {
        // tabs通知swiper切换
        tabsChange(index) {
            this.current = index;
            this.swiperCurrent = index;
        },
        // 由于swiper的内部机制问题，快速切换swiper不会触发dx的连续变化，需要在结束时重置状态
        // swiper滑动结束，分别设置tabs和swiper的状态
        animationfinish(e) {
            let current = e.detail.current;
            // this.$refs.uTabs.setFinishCurrent(current);
            this.swiperCurrent = current;
            this.current = current;
        },
        handleSubmit() {
            if (this.isLogin) {
                uni.navigateTo({ url: "/pages/custom/form" });
            } else {
                uni.navigateTo({ url: "/pages/user/login" });
            }
        },
    },
};
</script>

<style lang="scss">
.view {
    height: 100vh;
    display: flex;
    flex-direction: column;
}
.swiper {
    flex: 1;
    &__item {
        position: relative;
        text-align: center;
        color: #ffffff;
        height: 100%;
    }
    &__ul {
        margin-top: 40rpx;
        &__li {
            font-size: 40rpx;
            margin-bottom: 40rpx;
        }
    }
    &__desc {
        width: 60%;
        position: absolute;
        bottom: 40rpx;
        left: 50%;
        margin-left: -30%;
        font-size: 32rpx;
    }
    &__btn {
        padding: 20rpx 0;
        text-align: center;
        font-size: 40rpx;
    }
}
</style>
