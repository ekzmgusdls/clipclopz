<template>
    <main class="home">
        <section class="section-1" ref="section-1">
            <a id="phase-2" class="anchor"></a>
            <div class="section__content">
                <div class="img-container"></div>
                <div class="info-container" v-if="lang === 'ko'">
                    <div class="phase-1">
                        <p>
                            시작 총성이 울리고 말들이 달려간다.<br /><br />
                            ‘달리는 삶이 싫었다는 건 아니다. 다른 말들 모두가 원하는 삶을 위해 나도 시작했고 나름 재능도 있어 좋은 커리어로 좋은
                            대우를 받으며 살았다. 이제껏 달리는 나 말고 다른 것들을 하는 나에 대해서는 한번도 생각해본 적이 없어 불안하지만 기대된다.’
                            <br /><br />결승선을 통과하는 클립의 얼굴이 어제보다 더 생기 넘쳐 보인다.<br /><br />
                            2021년까지 현역으로 뛰었던 경주마 클립은 2022년도 7월 명예로운 졸업을 하게 되었고 졸업 이후의 삶이 시작되었다.
                        </p>
                    </div>
                    <div class="phase-2">
                        <h3># PHASE 2</h3>
                        <p>
                            촘촘한 스케줄에 익숙하던 클립은 하루종일 늘어져있거나 맛있는 걸 먹으러 다녀도 남는 시간에 행복한 한편 넘쳐나는 돈과
                            시간으로 목표가 사라진 삶에 공허한 감정 또한 동시에 느낀다. 선베드에 누워있던 클립은 좋은 생각이 난 듯 벌떡 일어난다.
                            <br /><br />
                            ‘나와 같은 사람들을 만나 교류하며 재밌고 의미있는 일들을 해보는 건 어떨까?’<br /><br />
                            클립은 같은 가치관을 가진 친구들을 모았고 입소문을 타고 회원 수가 점점 늘어났다. 그들을 클랍즈라 이름 붙였고 이렇게 클립
                            클랍즈 클럽이 탄생하게 되었다.
                        </p>
                    </div>
                </div>

                <div class="info-container en-line-height" v-if="lang === 'en'">
                    <div class="phase-1">
                        <!-- <h3># PHASE 1. Racing, Relentlessly</h3> -->
                        <p>
                            *Starting Signal, The Race Begins*<br /><br />'I am not implying pursuing a career in the race was against my will. Just
                            like others, I’ve started this in pursuit of achieving a better life. Grateful enough, I was talented to make a successful
                            career out of it. However, now is the time to run after something else. The thought of me spending my time doing other
                            things besides racing has never occurred before, which makes me anxious but simultaneously thrilled with the
                            anticipation.<br /><br />'Clip seems alive and enthusiastic more than ever, just on the verge of crossing the finish line.
                            The prominent of all, Clip has now ended his career as a professional.<br /><br />July 2022, he finally flipped the page
                            over to the next chapter of his life. Here it goes.
                        </p>
                    </div>
                    <div class="phase-2">
                        <h3># PHASE 2</h3>
                        <p>
                            Unlike previous days filled with endless work schedules, Clip was enjoying himself relaxed, having a day all to himself,
                            doing nothing but what he chose to do. Still, he couldn’t get rid of the sensation of feeling vanity and a bit lost, not
                            having a set of explicit goals in life. Then he came up with this idea.
                            <br /><br />
                            ‘Why don’t I look for a couple of people just like me and start something meaningful together?’
                            <br /><br />
                            Without hesitation, he gathered some friends going through a similar situation. What started as a small get-together
                            developed into a sizable community. That was, the beginning of the Clipclopz.
                        </p>
                    </div>
                </div>
            </div>
        </section>
        <buy-a-horse :lang="lang" :isMobile="isMobile"></buy-a-horse>
        <roadmap :lang="lang" :isMobile="isMobile"></roadmap>
        <team :lang="lang" :isMobile="isMobile"></team>
        <!-- <section class="member">
            <a id="member" class="anchor"></a>
            <div class="section__content">
                <h2>MEMBER</h2>
                <div class="connect-phantom">
                    <h4>Connect phantom</h4>
                    <p>You need to connect your MetaMask wallet before you can mint a token</p>
                    <router-link to="" class="move-to-member">Move to member</router-link>
                </div>
            </div>
        </section> -->
        <section class="partner">
            <a id="partner" class="anchor"></a>
            <div class="section__content">
                <h2>PARTNER</h2>
                <ul class="partner-list">
                    <inline-svg :src="require('../assets/partners/dexlab.svg')"></inline-svg>
                    <inline-svg :src="require('../assets/partners/am.svg')"></inline-svg>
                    <inline-svg :src="require('../assets/partners/runup.svg')"></inline-svg>
                    <inline-svg :src="require('../assets/partners/renaissance.svg')"></inline-svg>
                    <inline-svg :src="require('../assets/partners/atoz.svg')"></inline-svg>
                </ul>
            </div>
        </section>
    </main>
</template>

<script>
// import ScrollReveal from 'scrollreveal';
import BuyAHorse from '../components/BuyAHorse.vue';
import Roadmap from '../components/Roadmap';
import Team from '../components/Team';
export default {
    components: { BuyAHorse, Roadmap, Team },
    props: ['propNavHeight', 'lang', 'isMobile'],
    name: 'Home',
    data() {
        return {
            navHeight: this.propNavHeight,
        };
    },
    mounted() {
        document.querySelectorAll('.anchor').forEach((anchor) => {
            anchor.style.top = `-${this.propNavHeight}px`;
        });
        this.firstSectionPaddingTop();
    },
    methods: {
        firstSectionPaddingTop() {
            // this.$refs['section-1'].style.paddingTop = this.navHeight + 'px';
        },
        sectionMinHeight() {
            const sections = document.querySelectorAll('section');
            sections.forEach((section) => {
                if (!section.classList.contains('section-1')) {
                    section.style.minHeight = `calc( 100vh - ${this.navHeight}px )`;
                }
            });
        },
    },
};
</script>
<style lang="scss" scoped>
@import '../assets/scss/variable.scss';
section {
    // border: 1px solid red;
    border-top: 1px solid white;
    h2 {
        text-align: center;
        padding-bottom: 100px;
    }
    .anchor {
        position: relative;
    }
    .section__content {
        padding: 100px 30px;
        // padding-bottom: 150px;
        max-width: 1200px;
        margin: 0 auto;
    }
}
.section-1 {
    border-top: 0;
    .section__content {
        padding-top: 0;
    }
    .img-container {
        border-radius: 10px;
        aspect-ratio: 16/9;
        // background: #ecb320;
        background-image: url('../assets/home-img.png');
        margin-bottom: 50px;
    }
    .info-container {
        padding: 0 30px;
        display: flex;
        gap: 60px;
        justify-content: center;
        h3 {
            display: flex;
            margin-bottom: 30px;
            line-height: 1.1;
        }
        div {
            flex: 1;
        }
    }
}

.member {
    background: #ecb320;
    color: black;
    min-height: 100vh;
    display: flex;
    .section__content {
        display: flex;
        flex-direction: column;
        justify-content: center;
    }
    .connect-phantom {
        background: white;
        text-align: center;
        max-width: 400px;
        padding: 60px 30px;
        border-radius: 10px;
        box-shadow: 0 0 100px 5px rgba(255, 255, 255, 0.8);
        // animation: woolung infinite s;
        margin: 0 auto;
        h4 {
            margin-bottom: 30px;
            font-size: 1.2rem;
            font-weight: 700;
        }
        p {
            margin-bottom: 50px;
            line-height: 1.4;
            padding: 0 40px;
        }
        .move-to-member {
            transition: transform 0.2s;
            background: black;
            border-radius: 5px;
            padding: 5px 30px;
            color: white;
        }
    }
}

.partner {
    .section__content {
        padding-bottom: 150px;
    }
    .partner-list {
        display: flex;
        flex-wrap: wrap;
        gap: 50px;
        justify-content: center;
        align-items: center;
        max-width: 700px;
        margin: 0 auto;
        svg {
            width: calc((100% - 100px) / 3);
        }
    }
}

@media (hover: hover) {
    .move-to-member {
        display: inline-block;
        &:hover {
            transform: scale(1.1);
        }
    }
    .move-to-minting {
        &:hover {
            transform: scale(1.1);
        }
    }
}

@include mobile {
    section {
        h2 {
            padding-bottom: 50px;
        }
        .section {
            &__content {
                padding: 50px 20px;
                padding-bottom: 60px;
            }
        }
    }

    .section-1 {
        padding-top: 15px;
        .img-container {
            background-size: cover;
            border-radius: 5px;
            margin-bottom: 30px;
        }
        .info-container {
            flex-direction: column;
            padding: 0;
            gap: 30px;
        }
    }

    .roadmap {
        .roadmap-list {
            gap: 15px;
            li {
                width: 100%;
                flex-direction: column;
                text-align: center;
                gap: 15px;
                .numbering {
                    font-size: 15px;
                }
            }
        }
    }

    .team {
        .team-member-list {
            gap: 15px;
            row-gap: 30px;
            li {
                width: calc((100% - 15px) / 2);
            }
        }
    }

    .partner {
        .section__content {
            padding-bottom: 80px;
        }
        .partner-list {
            width: 100%;
            flex-wrap: wrap;
            justify-content: center;
            gap: 30px;
            max-width: 100%;
            svg {
                width: calc((100% - 60px) / 3);
            }
        }
    }
}
</style>
