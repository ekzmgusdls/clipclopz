<template>
    <section class="buy-a-horse">
        <div class="section__content">
            <h2>BUY A HORSE</h2>
            <p :class="lang == 'en' ? 'en-line-height' : null" v-html="lang == 'en' ? buyAHorse.en : buyAHorse.kr"></p>

            <img :src="this.img.url" alt="" />
            <div class="caption">{{ this.img.caption }}</div>
            <div class="horder-benefit">
                <template v-if="lang == 'en'">
                    <h3>Holder Benefit</h3>
                    <ul>
                        <a id="buy-a-horse" class="anchor"></a>
                        <li v-for="holderBenefit in holderBenefits" :key="holderBenefit.benefit_benefit_en">
                            <div v-if="!holderBenefit.emphasis">
                                {{ holderBenefit.holder_benefit_en }}
                            </div>
                            <strong v-else>
                                {{ holderBenefit.holder_benefit_en }}
                            </strong>
                            <div class="notice">
                                {{ holderBenefit.benefit_sub_en }}
                            </div>
                        </li>
                    </ul>
                </template>
                <template v-else>
                    <h3>홀더 베네핏</h3>
                    <ul>
                        <a id="buy-a-horse" class="anchor"></a>
                        <li v-for="holderBenefit in holderBenefits" :key="holderBenefit.benefit_benefit_kr">
                            <div v-if="!holderBenefit.emphasis">
                                {{ holderBenefit.benefit_kr }}
                            </div>
                            <strong v-else>
                                {{ holderBenefit.benefit_kr }}
                            </strong>
                            <div class="notice">
                                {{ holderBenefit.benefit_sub_kr }}
                            </div>
                        </li>
                    </ul>
                </template>
            </div>
            <div class="buttons">
                <a :href="this.letsMintLink" target="_blank" class="move-to-minting">{{ lang == 'en' ? `Let's MINT!!` : `민팅 페이지로 이동하기` }}</a>
                <!-- <a :href="this.whiteListLink" target="_blank" class="move-to-minting">{{ lang == 'en' ? `Whitelist Mint` : `Whitelist Mint` }}</a> -->
                <a :href="this.mintingGuidePDF" class="pdf-download move-to-minting" download="Mingting_Guide" target="_blank">Minting Guide</a>
            </div>
        </div>
    </section>
</template>

<script>
import axios from 'axios';
export default {
    props: ['lang', 'isMobile'],
    data() {
        return {
            publicPath: process.env.BASE_URL,
            buyAHorse: {
                kr: ``,
                en: ``,
            },
            img: {
                url: '',
                caption: '',
            },
            holderBenefits: {},
            mintingGuidePDF: ``,
            letsMintLink: ``,
            whiteListLink: ``,
        };
    },
    mounted() {
        // 첫번째 섹션 정보 받아오기
        axios({
            method: 'get',
            url: 'https://clipclopz.io/clipclopzback/wp-json/wp/v2/pages/13',
        }).then((res) => {
            this.letsMintLink = res.data.acf.lets_mint_link;
            this.whiteListLink = res.data.acf.whitelist_link;
            this.buyAHorse.kr = res.data.acf.text_kr;
            this.buyAHorse.en = res.data.acf.text_en;
            this.img.url = res.data.acf.img.sizes.large;
            this.img.caption = res.data.acf.img.caption;
            this.holderBenefits = res.data.acf.holder_benefits;
            this.mintingGuidePDF = res.data.acf.minting_guide.url;
        });
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
.buy-a-horse {
    .horder-benefit {
        text-align: center;
        max-width: 600px;
        width: 100%;
        margin: 0 auto;
        margin-top: 30px;
        h3 {
            margin-top: 100px;
            margin-bottom: 60px;
        }
        ul {
            text-align: left;
            border-top: 1px solid rgb(70, 70, 70);
            position: relative;
            li::v-deep {
                padding: 5px;
                border-bottom: 1px solid rgb(70, 70, 70);
                strong {
                    color: $orange;
                    font-weight: 700;
                }
                .notice {
                    display: block;
                    padding-left: 50px;
                    font-size: 0.9em;
                    color: gray;
                }
            }
        }
    }
    img {
        display: block;
        width: 60%;
        margin: 0 auto;
        margin-bottom: 15px;
    }
    p::v-deep {
        text-align: center;
        max-width: 750px;
        margin: 0 auto;
        margin-bottom: 100px;
        strong {
            color: #ecb320;
            font-style: oblique;
            font-weight: 800;
        }
    }
    .caption {
        font-size: 0.8em;
        color: gray;
        text-align: center;
    }
    .move-to-minting {
        background: #ecb320;
        color: black;
        padding: 5px 30px;
        border-radius: 5px;
        display: inline-block;
        position: relative;
        font-weight: 700;
        transition: transform 0.2s;
    }
    .buttons {
        display: flex;
        flex-direction: column;
        max-width: 300px;
        width: 100%;
        gap: 30px;
        align-items: center;
        margin: 0 auto;
        margin-top: 100px;
        a {
            display: block;
            width: 100%;
            text-align: center;
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

    .buy-a-horse {
        .horder-benefit {
            h3 {
                margin-top: 60px;
            }
        }
        p {
            margin-bottom: 50px;
        }
        img {
            width: 100%;
        }
        .buttons {
            margin-top: 50px;
        }
    }
}
</style>
