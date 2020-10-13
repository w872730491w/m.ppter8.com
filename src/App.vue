<script>
export default {
    onLaunch: function() {
        this.$axios.interceptors.request.use(
            (config) => {
                return config;
            },
            (error) => {
                return Promise.reject(err);
            }
        );
        this.$axios.interceptors.response.use(
            (response) => {
                var token = response.headers.authorization;
                if (token) {
                    // this.$store.dispatch('refreshToken', token)
                }
                return response.data;
            },
            (error) => {
                switch (error.response.status) {
                    // 如果响应中的 http code 为 401，那么则此用户可能 token 失效了之类的，我会触发 logout 方法，清除本地的数据并将用户重定向至登录页面
                    case 401:
                        // return this.$store.dispatch('logout')
                        break;
                    // 如果响应中的 http code 为 400，那么就弹出一条错误提示给用户
                    case 400:
                        // return this.$Message.error(error.response.data.error)
                        break;
                }
                return Promise.reject(error);
            }
        );
        uni.getStorage({
            key: "token",
            success: (res) => {
                if (res.data) {
                    this.$store.dispatch("logined", {
                        token: res.data,
                        isInit: true,
                    });
                }
            },
        });
    },
    onShow: function() {
        console.log("App Show");
    },
    onHide: function() {
        console.log("App Hide");
    },
};
</script>

<style lang="scss">
/*每个页面公共css */
@import "uview-ui/index.scss";
@import "@/scss/common/common.scss";
</style>
