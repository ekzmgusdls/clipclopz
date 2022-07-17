<template>
    <div class="pop-up-container">
        <div class="pop-up">
            <img :src="lang == 'en' ? require('../assets/popup/contest_poster_en.png') : require('../assets/popup/contest_poster_kr.png')" alt="" />
            <div class="buttons">
                <div class="move-detail" @click="exit">
                    {{ lang == 'en' ? `Move detail` : `상세 페이지 이동하기` }}<router-link to="/contest"></router-link>
                </div>
                <div class="exit" @click="exit">{{ lang == 'en' ? `Exit` : `닫기` }}</div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'PopUp',
    props: ['lang'],
    methods: {
        exit() {
            this.$emit('popup-exit', false);
        },
    },
};
</script>

<style scoped lang="scss">
@import '../assets/scss/variable.scss';
.pop-up-container {
    width: 100vw;
    height: 100vh;
    background: rgba(0, 0, 0, 0.3);
    backdrop-filter: blur(3px);
    position: fixed;
    z-index: 991;
    padding: 30px;
}
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

@include mobile {
    .pop-up-container {
        padding: 20px;
    }
}
</style>
