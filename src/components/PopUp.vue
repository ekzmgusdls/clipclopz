<template>
    <div :class="`pop-up pop-up--${this.index}`" v-if="popupShow">
        <img :src="this.popupInfo.popup.sizes.large" alt="" />
        <div class="buttons">
            <div
                class="move-detail"
                @click="
                    exit();
                    checkPopupContainer();
                    closePopupContainer();
                "
            >
                {{ this.lang == 'en' ? `Move detail` : `상세 페이지 이동하기` }}
                <router-link :to="this.popupInfo.link"></router-link>
            </div>
            <div
                class="exit"
                @click="
                    exit();
                    checkPopupContainer();
                "
            >
                {{ lang == 'en' ? `Exit` : `닫기` }}
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'PopUp',
    props: ['lang', 'popup-info', 'index'],
    data() {
        return {
            popupShow: true,
        };
    },
    methods: {
        exit() {
            this.popupShow = false;
        },
        checkPopupContainer() {
            this.$emit('checkPopupContainer');
        },
        closePopupContainer() {
            this.$emit('closePopupContainer');
        },
    },
    mounted() {},
};
</script>

<style scoped lang="scss">
@import '../assets/scss/variable.scss';

.pop-up {
    display: flex;
    flex-direction: column;
    border: 1px solid white;
    max-width: 450px;
    width: 100% !important;
    height: auto !important;
    z-index: 999 !important;
    top: 1rem;
    left: 1rem;
    width: 100%;
    img {
        width: 100%;
    }
    .buttons {
        display: flex;
        padding: 10px;
        gap: 10px;
        background: black;
        div {
            background: $orange;
            color: black;
            border-radius: 5px;
            padding: 5px 10px;
            font-weight: 700;
            flex: 1;
            text-align: center;
            position: relative;
            cursor: pointer;
            a {
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
            }
        }
    }
}

@media all and( max-width: 800px) {
}
</style>
