<template>
    <section class="buy-a-horse">
        <a id="buy-a-horse" class="anchor"></a>
        <div class="section__content">
            <h2>BUY A HORSE</h2>
            <p :class="lang == 'en' ? 'en-line-height' : null" v-html="lang == 'en' ? buyAHorse.en : buyAHorse.kr"></p>

            <img src="../assets/Buy a horse/Clipclopz sample gallery.png" alt="" />
            <div class="caption">Horse NFT sample images CLIPCLOPZ © 2022</div>
            <div class="horder-benefit">
                <template v-if="lang == 'en'">
                    <h3>Holders Benefit</h3>
                    <ul>
                        <li v-for="benefitList in holderBenefitList.en" :key="benefitList" v-html="benefitList"></li>
                    </ul>
                </template>
                <template v-else>
                    <h3>홀더 베네핏</h3>
                    <ul>
                        <li v-for="benefitList in holderBenefitList.kr" :key="benefitList" v-html="benefitList"></li>
                    </ul>
                </template>
            </div>
            <div class="buttons">
                <a href="https://mint.clipclopz.io" target="_blank" class="move-to-minting">{{
                    lang == 'en' ? `Let's MINT!!` : `민팅 페이지로 이동하기`
                }}</a>
                <a href="Minting_Guide_CCZ.pdf" class="pdf-download move-to-minting" download="Minting guide">Minting Guide</a>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    props: ['lang', 'isMobile'],
    data() {
        return {
            buyAHorse: {
                kr: `ClipClopz는 Solana 블록체인에 있는 <strong>고유한</strong> 10,000개의 Horse NFT 입니다. 각 NFT는 민팅 시 프로그램을 통해
                    랜덤하게 생성됩니다. ClipClopz NFT는 회원 전용 혜택들을 제공합니다. 로드맵이 활성화됨에 따라 멤버십 특전들이 차례로 제공될
                    예정입니다.`,
                en: `ClipClopz is a collection of 10,000 Horse NFTs—unique digital collectibles living on the Solana blockchain. Each
                    Horse is a unique and pragmatically generated NFT. <br /><br />
                    ClipClopz NFT will give you access to members-only benefits. Future areas and perks can be unlocked by the community through
                    roadmap activation.`,
            },
            holderBenefitList: {
                kr: [
                    `제휴승마장 기승 무료 이용권 (CCZ Club 런칭 전)<div class='notice'>(*NFT 수에 따른 예약우선권 차등 부여)</div>`,
                    `CCZ exclusive exhibition 무료 입장권`,
                    `오피셜 밋업 무료 입장권`,
                    `오피셜 페스티벌 무료 입장권`,
                    `오피셜 애프터파티 무료 입장권`,
                    `한정판 굿즈 구매권`,
                    `IP 활용권`,
                    `NFT 특성별 소모임 입장권`,
                    `커뮤니티 내 소모임 개설 권한`,
                    `CCZ CLUB 평생 회원권 (승마&글램핑)<div class='notice'>(*NFT 수에 따른 예약우선권 차등 부여)</div>`,
                    `CCZ F&B 할인권`,
                    `<strong>다수의 브랜드와 콜라보 예정</strong>`,
                    `신규 프로젝트(Donkey/Mule) 토큰 에어드랍`,
                ],
                en: [
                    `Access to the Affiliated Riding Clubs<div class='notice'>(*Firsthand Advantage based on # of NFTs)</div>`,
                    `Access to CCZ Exlusive Exhibitions`,
                    `Access to CCZ Official Meetups`,
                    `Access to CCZ Festivals`,
                    `Access to CCZ After Party`,
                    `Access to MD Shop - Limited Editions`,
                    `Access to PFP IP Utilization`,
                    `Access to other NFT-based Networking Parties`,
                    `Make Your Own Gatherings within CCPz`,
                    `CCZ CLUB All Year Permanent Membership (Horseriding & Glamping) 	<div class='notice'>(*Firsthand Advantage based on # of NFTs)</div>`,
                    `CCZ F&B Members Discount`,
                    `<strong>Collaborative Projects with Various Global Brands (TBA)</strong>`,
                    `Airdrop - project Donkey / project Mule `,
                ],
            },
        };
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
