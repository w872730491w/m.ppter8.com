<template>
    <view>
        <u-card title="编辑推荐" :border="false">
            <view class="content" slot="body">
                <material class="material" />
                <material class="material" />
                <material class="material" />
                <material class="material" />
                <material class="material" />
                <material class="material" />
                <material class="material" />
                <view class="material"></view>
                <view class="material"></view>
            </view>
        </u-card>
    </view>
</template>

<script>
import Material from "@/component/Material"
export default {
    components: {
        Material
    }
}
</script>

<style lang="scss">
body {
    background: #f8f8f8;
}
.content {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
}
.material {
    width: calc(50% - 15rpx);
}
</style>
