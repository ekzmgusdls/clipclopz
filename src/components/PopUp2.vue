<template>
    <div class="pop-up" v-if="isThisPopup">
        <img :src="lang == 'en' ? require('../assets/popup/let_mint.png') : require('../assets/popup/contest_poster_kr.png')" alt="" />
        <div class="buttons">
            <div class="move-detail" @click="moveDetail">
                {{ lang == 'en' ? `Move detail` : `상세 페이지 이동하기` }}<router-link to="/home/#buy-a-horse"></router-link>
            </div>
            <div class="exit" @click="exit">{{ lang == 'en' ? `Exit` : `닫기` }}</div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'PopUp',
    props: ['lang'],
    data() {
        return {
            isThisPopup: true,
        };
    },
    methods: {
        exit() {
            this.$emit('popup-exit', false);
            this.isThisPopup = false;
        },
        moveDetail() {
            this.$emit('move-detail');
        },
    },
};
</script>

<style scoped lang="scss">
@import '../assets/scss/variable.scss';

.pop-up {
    display: flex;
    flex-direction: column;
    border: 1px solid white;
    max-width: 450px;

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
</style>
