<template>
    <main class="home">
        <section class="section-1" ref="section-1">
            <a id="phase-2" class="anchor"></a>
            <div class="section__content">
                <img src="../assets/home-img.png" class="img" />
                <div class="info-container" v-if="lang === 'ko'">
                    <div class="phase-1" v-html="this.firstSection.leftPart.kr"></div>
                    <div class="phase-2" v-html="this.firstSection.rightPart.kr"></div>
                </div>

                <div class="info-container en-line-height" v-if="lang === 'en'">
                    <div class="phase-1" v-html="this.firstSection.leftPart.en"></div>
                    <div class="phase-2" v-html="this.firstSection.rightPart.en"></div>
                </div>
            </div>
        </section>
        <buy-a-horse :lang="lang" :isMobile="isMobile"></buy-a-horse>
        <roadmap :lang="lang" :isMobile="isMobile"></roadmap>
        <team :lang="lang" :isMobile="isMobile"></team>
        <section class="member" v-if="this.isMember">
            <a id="member" class="anchor"></a>
            <div class="section__content">
                <h2>CLIPCLOPZ <br />MEMBERSHIP</h2>
                <p class="summary summary--en" v-html="this.membership.summary_en" v-if="this.lang == 'en'"></p>
                <p class="summary" v-html="this.membership.summary_kr" v-else></p>
                <div class="connect-phantom">
                    <h4>Connect Wallet</h4>
                    <div class="wallet-content wallet-content--en" v-html="this.membership.wallet_content_en" v-if="this.lang == 'en'"></div>
                    <div class="wallet-content" v-html="this.membership.wallet_content_kr" v-else></div>
                    <a :href="this.membership.link" class="move-to-member">Move to membership</a>
                </div>
                <div class="vote vote--en" id="vote" v-if="this.lang == 'en'" v-html="this.membership.vote_en"></div>
                <div class="vote vote" v-else v-html="this.membership.vote_kr"></div>
            </div>
        </section>
        <section class="partner">
            <a id="partner" class="anchor"></a>
            <div class="section__content">
                <h2>PARTNER</h2>
                <ul class="partner-list">
                    <template v-for="logo in this.partner.logos">
                        <img :src="logo.sizes.large" alt="" :key="logo.id" />
                    </template>
                </ul>
            </div>
        </section>
    </main>
</template>

<script>
import axios from 'axios';
// import ScrollReveal from 'scrollreveal';
import BuyAHorse from '../components/BuyAHorse.vue';
import Roadmap from '../components/Roadmap';
import Team from '../components/Team';
export default {
    components: { BuyAHorse, Roadmap, Team },
    props: ['propNavHeight', 'lang', 'isMobile', 'isMember'],
    name: 'Home',
    data() {
        return {
            navHeight: this.propNavHeight,
            firstSection: {
                img: '',
                leftPart: {
                    kr: '',
                    en: '',
                },
                rightPart: {
                    kr: '',
                    en: '',
                },
            },
            partner: {
                logos: ``,
            },
            membership: ``,
        };
    },
    mounted() {
        this.firstSectionPaddingTop();

        // 첫번째 섹션 정보 받아오기
        axios({
            method: 'get',
            url: 'https://clipclopz.io/clipclopzback/wp-json/wp/v2/pages/11',
        }).then((res) => {
            this.firstSection.img = res.data.acf.img.sizes.large;
            this.firstSection.leftPart.en = res.data.acf.left_text_en;
            this.firstSection.leftPart.kr = res.data.acf.left_text_kr;
            this.firstSection.rightPart.en = res.data.acf.right_text_en;
            this.firstSection.rightPart.kr = res.data.acf.right_text_kr;
        });

        // 파트너 정보 받아오기
        axios({
            method: 'get',
            url: 'https://clipclopz.io/clipclopzback/wp-json/wp/v2/pages/49',
        }).then((res) => {
            this.partner.logos = res.data.acf.logos;
        });
        this.getMembershipInfo();

        document.querySelectorAll('.anchor').forEach((anchor) => {
            if (anchor.id == 'buy-a-horse') {
                anchor.style.top = `200px`;
            } else {
                anchor.style.top = `-${this.propNavHeight}px`;
            }
        });
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
        getMembershipInfo() {
            axios({
                method: 'get',
                url: 'https://clipclopz.io/clipclopzback/wp-json/wp/v2/pages/156',
            }).then((res) => {
                this.membership = res.data.acf;
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
        margin-bottom: 50px;
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
    .img {
        border-radius: 10px;
        width: 100%;
        height: auto;
        margin-bottom: 50px;
    }
    .info-container::v-deep {
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
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    .summary {
        font-size: 18px;
        margin-bottom: 100px;
        &--en {
            line-height: 1.2;
        }
    }

    h2 {
        line-height: 1.1;
        margin-bottom: 100px;
    }
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
        margin-bottom: 100px;

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

    .wallet-content {
        width: 80%;
        margin: 0 auto;
        margin-bottom: 30px;
        &--en {
            line-height: 1.4;
        }
    }

    .vote {
        text-align: center;
        color: white;

        text-shadow: 0px 0px 10px white;
        animation: twinkle 3s infinite;

        &--en {
            line-height: 1.3;
        }

        &::v-deep {
            p {
                font-size: 18px;
            }
        }
    }
}

@keyframes twinkle {
    0%,
    100% {
        opacity: 1;
        transform: scale(1.1);
    }
    50% {
        opacity: 0.7;
        transform: scale(1);
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
        img {
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
            img,
            svg {
                width: calc((100% - 60px) / 3);
            }
        }
    }

    .member {
        .section__content {
            padding-top: 100px;
            padding-bottom: 100px;
        }
        h2 {
            margin-bottom: 0;
        }
        .summary {
            text-align: center;
            padding: 0 20px;
            margin-bottom: 50px;
        }
        .connect-phantom {
            margin-bottom: 50px;
        }
    }
}
</style>
