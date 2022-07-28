<template>
    <div class="intro">
        <div class="intro__img-container">
            <div class="intro__img">
                <!-- <img :src="this.intro.intro_img.sizes.large" alt="" /> -->
                <img :src="this.intro.intro_img.sizes.large" alt="" />
            </div>
        </div>
        <div class="intro__info-container">
            <h1 class="intro__title">
                WELCOME TO<br />
                CLIPCLOPZ VACATION
                <router-link class="intro__enter" to="/home">
                    {{ lang == 'en' ? `Enter` : `입장하기` }}
                </router-link>
            </h1>
            <div class="intro__content" v-if="lang == 'ko'">
                <h3># PHASE 1. 달리기만 하던 삶</h3>
                <p>
                    나의 삶은 경쟁이 대부분이었다. 과정과는 상관없이 결과에 대한 성적표를 받으며 희노애락을 느끼고 식사, 운동, 생체리듬까지 오직 경마
                    경기에 맞춰 쉴 새 없이 달려온 삶이 이 마지막 경기로 끝나나 보다.
                </p>
            </div>
            <div class="intro__content" v-if="lang == 'en'">
                <h3># PHASE 1. Racing, Relentlessly</h3>
                <p class="en-line-height">
                    My life was entirely about ‘the competition' I felt a sense of accomplishment and was completely fueled by outstanding results.
                    All my daily schedule was built around one single thing, the race. Then, one day, all of a sudden, it felt like it was going to
                    end on that note, in vain, without anything else.
                </p>
            </div>
        </div>
    </div>
</template>
<style lang="scss">
@import '../assets/scss/variable.scss';
.intro {
    top: 0;
    left: 0;
    display: flex;
    flex-direction: column;
    background: black;
    padding: 30px 0;
    padding-bottom: 0;
    align-items: center;
    z-index: 999;
    &__img-container {
        max-width: 1200px;
        margin-bottom: 30px;
        overflow: hidden;
        width: 100%;
        padding: 0 30px;
        // aspect-ratio: 16/9;
    }
    &__img {
        display: flex;
        align-items: flex-start;
        img {
            width: 100%;
            height: auto;
        }
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
@include mobile {
    .intro {
        padding-top: 15px;
        &__title {
            font-size: 40px;
            text-align: center;
        }
        &__enter {
            margin-top: 30px;
            position: static;
        }
        &__img-container {
            padding: 0 15px;
            margin-bottom: 0;
        }
        &__info-container {
            flex-direction: column;
            padding: 30px 15px;
        }
    }
}
</style>

<script>
import axios from 'axios';
// TODO 제대로 인트로를 얹어야하는데 왜자꾸 런타임 속도가 저렇게 나오는지 모르겠습니다. 아무래도 이건 다른 방법을 찾아보아야하나봅니다.
export default {
    data() {
        return {
            intro: {
                img: ``,
            },
        };
    },
    props: ['lang'],
    methods: {
        getIntro() {
            axios({
                method: 'get',
                url: 'https://clipclopz.io/clipclopzback/wp-json/wp/v2/pages/9',
            }).then((res) => {
                this.intro.img = res.data.acf.intro.intro_img.sizes.large;
                // console.log(res.data.acf);
            });
        },
    },
    mounted() {
        // this.getIntro();
        axios({
            method: 'get',
            url: 'https://clipclopz.io/clipclopzback/wp-json/wp/v2/pages/9',
        }).then((res) => {
            this.intro = res.data.acf;
        });
    },
    destroyed() {
        // removeEventListener('resize', this.resizeHandler);
    },
};
</script>
