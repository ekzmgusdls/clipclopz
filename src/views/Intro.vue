<template>
    <div class="intro">
        <div class="intro__img-container">
            <div class="intro__img"></div>
        </div>
        <div class="intro__info-container">
            <h1 class="intro__title">
                WELCOME TO<br />
                CLIPCLOPZ VACATION
                <router-link class="intro__enter" to="/home">Enter</router-link>
            </h1>
            <div class="intro__content">
                <h3># PHASE 1. 달리기만 하던 삶</h3>
                <p>
                    나의 삶은 경쟁이 대부분이었다. 과정과는 상관없이 결과에 대한 성적표를 받으며 희노애락을 느끼고 식사, 운동, 생체리듬까지 오직 경마
                    경기에 맞춰 쉴 새 없이 달려온 삶이 이 마지막 경기로 끝나나 보다.’
                </p>
            </div>
        </div>
        <footer>
            <div class="footer">
                <div class="footer__email-container">email</div>
                <div class="footer__main-logo-container">Logo</div>
                <div class="footer__sns-container">SNS</div>
            </div>
        </footer>
    </div>
</template>

<script>
export default {
    methods: {
        adjustIntroImgContainerHeight() {
            let stHeight = innerHeight;
            let infoHeight = document.querySelector('.intro__info-container').getBoundingClientRect().height;
            document.querySelector('.intro__img-container').style.height = stHeight - infoHeight + 'px';
            addEventListener('resize', this.resizeHandler);
        },

        resizeHandler(stHeight, infoHeight) {
            stHeight = innerHeight;
            infoHeight = document.querySelector('.intro__info-container').getBoundingClientRect().height;
            document.querySelector('.intro__img-container').style.height = stHeight - infoHeight + 'px';
        },
        scrollMeTo(refName) {
            var element = this.$refs[refName];
            var top = element.offsetTop;
            window.scrollTo(0, top);
        },
    },
    mounted() {
        this.adjustIntroImgContainerHeight();
    },
    destroyed() {
        removeEventListener('resize', this.resizeHandler);
    },
};
</script>

<style lang="scss">
.intro {
    position: fixed;
    overflow: scroll;
    width: 100vw;
    height: 100vh;
    top: 0;
    left: 0;
    display: flex;
    flex-direction: column;
    background: black;
    padding: 30px 0;
    align-items: center;
    z-index: 999;
    &__img-container {
        max-width: 1200px;
        margin-bottom: 30px;
        overflow: hidden;
        width: 100%;
        padding: 0 30px;
    }
    &__img {
        height: 100%;
        width: 100%;
        background-image: url('../assets/intro-img.png');
        background-position: center center;
        background-size: cover;
        background-repeat: no-repeat;
        border-radius: 10px;
    }
    &__info-container {
        display: flex;
        max-width: 1200px;

        width: 100%;
        padding: 0 30px;
        padding-bottom: 60px;
        justify-content: space-between;
        align-items: center;
        gap: 30px;
    }
    &__title {
        font-weight: 600;
        line-height: 1.1;
        position: relative;
        max-width: 600px;
        flex: 1;
    }
    &__enter {
        font-size: 17px;
        display: flex;
        justify-content: center;
        align-items: center;
        background: #ecb320;
        position: absolute;
        top: 5px;
        right: 0;
        color: black;
        border-radius: 8px;
        padding: 8px 50px;
        cursor: pointer;
        transition: transform 0.2s;
    }
    &__content {
        max-width: 400px;

        h3 {
            margin-bottom: 30px;
        }
    }
}

@media (hover: hover) {
    .intro {
        &__enter:hover {
            transform: scale(1.05);
        }
    }
}
</style>
