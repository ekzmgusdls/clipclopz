<template>
    <main class="home">
        <section class="section-1" ref="section-1">
            <a id="phase-2" class="anchor"></a>
            <div class="section__content">
                <div class="img-container"></div>
                <div class="info-container" v-if="lang === 'ko'">
                    <div class="phase-1">
                        <p>
                            시작 총성이 울리고 말들이 달려간다.
                            <br />
                            ‘달리는 삶이 싫었다는 건 아니다. 다른 말들 모두가 원하는 삶을 위해 나도 시작했고 나름 재능도 있어 좋은 커리어로 좋은
                            대우를 받으며 살았다. 이제껏 달리는 나 말고 다른 것들을 하는 나에 대해서는 한번도 생각해본 적이 없어 불안하지만 기대된다.’
                            <br />
                            결승선을 통과하는 클립의 얼굴이 어제보다 더 생기 넘쳐 보인다.2021년까지 현역으로 뛰었던 경주마 클립은 2022년도 7월
                            명예로운 졸업을 하게 되었고 졸업 이후의 삶이 시작되었다.
                        </p>
                    </div>
                    <div class="phase-2">
                        <h3># PHASE 2</h3>
                        <p>
                            촘촘한 스케줄에 익숙하던 클립은 하루종일 늘어져있거나 맛있는 걸 먹으러 다녀도 남는 시간에 행복한 한편 넘쳐나는 돈과
                            시간으로 목표가 사라진 삶에 공허한 감정 또한 동시에 느낀다. 선베드에 누워있던 클립은 좋은 생각이 난 듯 벌떡 일어난다.
                            ‘나와 같은 사람들을 만나 교류하며 재밌고 의미있는 일들을 해보는 건 어떨까?’ 클립은 같은 가치관을 가진 친구들을 모았고
                            입소문을 타고 회원 수가 점점 늘어났다. 그들을 클랍즈라 이름 붙였고 이렇게 클립 클랍즈 클럽이 탄생하게 되었다.
                        </p>
                    </div>
                </div>

                <div class="info-container en-line-height" v-if="lang === 'en'">
                    <div class="phase-1">
                        <!-- <h3># PHASE 1. Racing, Relentlessly</h3> -->
                        <p>
                            I am not implying pursuing a career in the race was against my will. Just like others, I’ve started this in pursuit of
                            achieving a better life. Grateful enough, I was talented to make a successful career out of it. However, now is the time
                            to run after something else.
                            <br />
                            The thought of me spending my time doing other things besides racing has never occurred before, which makes me anxious but
                            simultaneously thrilled with the anticipation.
                            <br />
                            *Starting Signal, The Race Begins* <br />
                            Clip seems alive and enthusiastic more than ever, just on the verge of crossing the finish line. The prominent of all,
                            Clip has now ended his career as a professional. July 2022, he finally flipped the page over to the next chapter of his
                            life. Here it goes.
                        </p>
                    </div>
                    <div class="phase-2">
                        <h3># PHASE 2</h3>
                        <p>
                            Unlike previous days filled with endless work schedules, Clip was enjoying himself relaxed, having a day all to himself,
                            doing nothing but what he chose to do. Still, he couldn’t get rid of the sensation of feeling vanity and a bit lost, not
                            having a set of explicit goals in life. Then he came up with this idea. ‘Why don’t I recoup a couple of people just like
                            me and start something meaningful together?’ Without hesitation, he gathered some friends going through a similar
                            situation. What started as a small get-together developed into a sizable community. That was, the beginning of the
                            Clipclopz.
                        </p>
                    </div>
                </div>
            </div>
        </section>
        <section class="buy-a-horse">
            <a id="buy-a-horse" class="anchor"></a>
            <div class="section__content en-line-height">
                <h2>BUY A HORSE</h2>
                <p>
                    ClipClopz is a collection of 10,000 Horse NFTs—unique digital collectibles living on the Solana blockchain. Each Horse is unique
                    and pragmatically generated NFT.
                    <br />
                    ClipClopz NFT will give you access to members-only benefits. Future areas and perks can be unlocked by the community through
                    roadmap activation.
                </p>
                <img src="../assets/Buy a horse/Clipclopz sample gallery.png" alt="" />
                <div class="caption">Horse NFT sample images CLIPCLOPZ © 2022</div>
                <div class="buttons">
                    <router-link v-if="lang == 'ko'" to="" class="move-to-minting">민팅 페이지로 이동하기</router-link>
                    <router-link v-if="lang == 'en'" to="" class="move-to-minting">Let's MINT!! </router-link>
                    <a href="" class="pdf-download move-to-minting">Minting Guide</a>
                </div>
            </div>
        </section>
        <section class="roadmap">
            <a id="roadmap" class="anchor"></a>
            <div class="section__content">
                <h2>ROADMAP</h2>
                <ul class="roadmap-list">
                    <li v-for="(roadmap, index) in roadmapList" :key="index">
                        <div class="numbering">#{{ index + 1 }}</div>
                        <div class="content" v-html="lang == 'en' ? roadmap.contentEn : roadmap.contentKr"></div>
                    </li>
                </ul>
                <div class="roadmap-table" v-if="!isMobile">
                    <div class="roadmap-table__header">
                        <template v-for="(header, index) in roadmapTable.headers">
                            <div v-html="header" :key="index"></div>
                        </template>
                    </div>
                    <div class="roadmap-table__body">
                        <div class="table-row" v-for="(body, index) in roadmapTable.bodies" :key="body + index">
                            <div
                                :class="`table-data ${index == 0 ? 'table-data--header' : null}`"
                                v-for="(info, index) in body"
                                :key="info + index"
                                v-html="lang == 'en' ? info.en : info.ko"
                            ></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section class="team">
            <a id="team" class="anchor"></a>
            <div class="section__content">
                <h2>TEAM</h2>
                <ul class="team-member-list">
                    <li v-for="team in teams" :key="team.name">
                        <img :src="require(`../assets/team/${team.name}.png`)" alt="" />
                        <h3>{{ team.name }}</h3>
                        <p :class="lang == 'en' ? 'en-line-height' : null">{{ lang == 'en' ? team.introduceEn : team.introduceKr }}</p>
                    </li>
                </ul>
            </div>
        </section>
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

export default {
    props: ['propNavHeight', 'lang', 'isMobile'],
    name: 'Home',
    data() {
        return {
            navHeight: this.propNavHeight,
            roadmapList: [
                {
                    contentKr: `프로젝트 기획 및 투자 유치 완료`,
                    contentEn: `Project Development & Seed Investment `,
                },
                {
                    contentKr: `PFP CCZ 공개 <br />민팅사이트 및 SNS 채널 오픈 <br />백서 공개`,
                    contentEn: `PFP CCZ Release
Minting Site & SNS Channel`,
                },
                {
                    contentKr: `CCZ NFT V1 화이트리스트 민팅 : 2,000개<br />
                            CCZ NFT V1 퍼블릭 민팅 : 8,000 개`,
                    contentEn: `CCZ NFT V1 Whitelist Minting: 2,000 NFTs
CCZ NFT V1 Public Minting: 8,000 NFTs`,
                },
                {
                    contentKr: `1st PFP Exhbition @ 클럽OO`,
                    contentEn: `1st PFP Visual Art Awards
1st PFP Exhibition @Club1 Hannam (Hana Financial Group)`,
                },
                {
                    contentKr: ` CCZ 런칭파티<br />
                            홀더 전용 온라인 클럽라운지 Open`,
                    contentEn: `CCZ Launching Party
Online Club Lounge Open (Holders Only`,
                },
                {
                    contentKr: ` CCZ 승마클럽 계획 발표<br />
                            패션 브랜드, 대형 리조트브랜드 협업 발표`,
                    contentEn: `CCZ Derby Club Roadmap 
Collaboration with Global Fashion, Hospitality Brands`,
                },
                {
                    contentKr: `CCZ NFT V2 : CCZ Donkey 민팅`,
                    contentEn: `CCZ NFT V2: CCZ Donkey Minting`,
                },
                {
                    contentKr: ` DRB Token 발행 및 스테이킹<br />
                            브리딩 시스템 Open<br />
                            커뮤니티 거버넌스 시스템 구축`,
                    contentEn: `DRB Token Release & Staking Starts
Breeding System Kickoff
Community Governance System Development`,
                },
                {
                    contentKr: `렛츠런파크 Party @ 마주전용라운지<br />
                            온/오프 승마클럽 개설`,
                    contentEn: `LetsRunPark Party @Owner’s Premium Lounge
On/off-line Horse-riding Club Openings`,
                },
                {
                    contentKr: `CCZ NFT V3 : CCZ Mule 민팅`,
                    contentEn: `CCZ NFT V3: CCZ Mule Minting`,
                },
                {
                    contentKr: `Token 생태계 확장<br />
                            NFT 및 CCZ Token 기반 육성 게임 개발`,
                    contentEn: `Token Ecosystem Expansion
NFT & CCZ Token based Simulation Game Development`,
                },
                {
                    contentKr: `글로벌 말 산업 협회들과 협업 제안<br />
                            일본/홍콩 경마장 PFP전시회`,
                    contentEn: `Partnerships with Global Horse Industry Foundations
PFP Exhibition in Horse Racing Clubs (Japan, HongKong, et cetra)`,
                },
                {
                    contentKr: `홀더 전용 CCZ 승마&글램핑 파크 Open<br />
                            홀더 파티 in 제주 feat. 셀럽<br />
                            사회공헌 : 퇴역경주마 복지사업`,
                    contentEn: `CCZ Horseriding & Glamping Park (Holders Only)
Exclusive Private Party in Jeju (Holders Only & VIPs)
CSR – Welfare program for retired racing horses`,
                },
            ],
            roadmapTable: {
                headers: [
                    ``,
                    `<div class='title'>Phase1</div><div class='date'>2022.3Q</div>`,
                    `<div class='title'>Phase2</div><div class='date'>2022.4Q</div>`,
                    `<div class='title'>Phase3</div><div class='date'>2023.1Q</div>`,
                    `<div class='title'>Phase4</div><div class='date'>2023.2Q</div>`,
                ],
                bodies: [
                    [
                        {
                            en: `Story`,
                            ko: `Story`,
                        },
                        {
                            en: `"“The next chapter of life unveils!”
                            Bank account secured with diamonds cumulated from past hard-working days. 

                            All we’ve got now is all time in the world to chill on the beach and party all night!"`,
                            ko: `"화려한 제2의 馬生을 꿈꾼다!"
                        은행에 쌓여 있는 다이아 편자는
                        먼지폭풍을 뚫고 달려온 지난 시간의 흔적.

                        이젠 아름다운 휴양지에서 편히 쉬며
                        매일 밤 펼쳐질 신나는 파티를 즐긴다!`,
                        },
                        {
                            en: `"“Special someone to ride and race together! Who would it be?”

Even in this fascinating yet peaceful environment, still feel the void and emptiness. We all need a friend, a lover to fill it up with love and passion, to make our hearts beat!"`,
                            ko: `"함께 달리고 싶은 동반자를 만나다!"
                        풍요로운 나날 속에 느껴지는 허전함
                        나의 가슴을 다시 뛰게 해줄 동반자를 만나고 싶다!`,
                        },
                        {
                            en: `"
“Let’s race, relentlessly 
In pursuit of happiness,
without any distractions!”

With my family and friends who I love and care for deeply,
we will always be together running from side to side in this journey of life."`,
                            ko: `"다그닥! 다그닥! 영원히 달린다!!"
                                사랑하는 나의 가족과 친구들!
                                함께 영원히 달린다!`,
                        },
                        {
                            en: `Global Expansion`,
                            ko: `글로벌 확장`,
                        },
                    ],
                    [
                        { en: `NFT`, ko: `NFT` },
                        {
                            en: `"CCZ NFT V1 Whitelist Minting: 2,000 NFTs
                            CCZ NFT V1 Public Minting: 8,000 NFTs
                            Whitepaper Release: Rarity & Score Disclosure"`,
                            ko: `CCZ NFT V1 화이트리스트 민팅 : 2,000개
                            CCZ NFT V1 퍼블릭 민팅 : 8,000 개
                            백서 공개 : 레어리티 및 스코어 공개`,
                        },
                        { en: `NFT V2: CCZ Donkey Minting`, ko: `NFT V2 : CCZ Donkey 민팅` },
                        { en: ``, ko: `` },
                        { en: `NFT V3: CCZ Mule Minting`, ko: `NFT V3 : CCZ Mule 민팅` },
                    ],
                    [
                        { en: `S/W`, ko: `개발` },
                        {
                            en: `"Minting Site Open
Online Club Lounge Open (Holders Only)"`,
                            ko: `민팅사이트 Open
                            홀더 전용 온라인 클럽라운지 Open`,
                        },
                        {
                            en: `"DRB Token Release & Staking
Breeding System Open
 Community Governance System Development"`,
                            ko: `"DRB Token 발행 및 스테이킹
                            브리딩 시스템 Open
                            커뮤니티 거버넌스 시스템 구축"`,
                        },
                        {
                            en: `"Token Ecosystem Expansion 

NFT & CCZ Token based Simulation Game Development "`,
                            ko: `"Token 생태계 확장
                        NFT 및 CCZ Token 기반 육성 게임 개발"`,
                        },
                        { en: ``, ko: `` },
                    ],
                    [
                        { en: `Marketing`, ko: `홍보` },
                        {
                            en: `"CCZ Social Network Service
Promotion & PPL"`,
                            ko: `CCZ Social Network 홍보 및 PPL등`,
                        },
                        {
                            en: `"Crypto Marketing & Collaborative Projects (e.g. Air Drop)
Advertisement on Screen in Racing Parks (Gwacheon, Busan) 
PFP Exhibition (Seoul, Busan, Jeju Horseracing Park)"`,
                            ko: `"크립토 마케팅 및 콜라보레이션 프로젝트(Air drop등)
                        과천/부산 경마장 내 전광판 광고 송출
                        서울-부산-제주 경마공원 PFP 전시회"`,
                        },
                        {
                            en: ``,
                            ko: ``,
                        },
                        { en: `PFP Exhibition in Horse Racing Clubs (Japan, HongKong, et cetra)`, ko: `일본/홍콩 경마장 PFP전시회` },
                    ],
                    [
                        { en: `Partnership`, ko: `주요파트너쉽` },
                        {
                            en: `"Fashion Brands
Hospitality Brands 
Seoul Racehorse Owners Association"`,
                            ko: `"패션 브랜드
                            대형 리조트브랜드
                            서울마주협회
                            대한승마경영자협회"`,
                        },
                        {
                            en: `Global Fashion Brands

Green Riding Zone 
(affiliated Horse riding facility)
from Korean Racing Authority
Busan Kyeongnam 
Racehorse Owners Association`,
                            ko: `"해외 패션브랜드
                            한국마사회 그린승마존 참여
                            부산마주협회"`,
                        },
                        {
                            en: ``,
                            ko: ``,
                        },
                        {
                            en: `Racing Horse Owners Association (Japan/Hongkong/Australia) 
PETA (People for Ethical Treatment of Animals)`,
                            ko: `"해외 마주협회(일본/홍콩/호주)
                        PETA (People for Ethical Treatment of Animals)"`,
                        },
                    ],
                    [
                        { en: `유틸리티`, ko: `IRL Promotions` },
                        {
                            en: `CCZ Launching Party
PFP Exhibition (Location TBD)
 Merchandise - Limited Edition`,
                            ko: `CCZ 런칭파티
                            PFP Exhbition @ 클럽OO
                            한정판 굿즈 제작`,
                        },
                        {
                            en: `LetsRunPark Party 
@ Owner’s Premium Lounge
On/off-line Horse-riding Club Openings 

CSR: Horsepia Program 
In Korea Racing Authority`,
                            ko: `렛츠런파크 Party @ 마주전용라운지
                            온/오프 승마클럽 개설
                            사회공헌 : 한국마사회 재활힐링승마 프로그램 참여 `,
                        },
                        {
                            en: `Exclusive Private Party in Jeju (Holders Only & VIPs)

CSR: Welfare Program for Retired Racing Horses`,
                            ko: `홀더 파티 in 제주 feat. 셀럽
                        사회공헌 : 퇴역경주마 복지사업`,
                        },
                        {
                            en: `CCZ Horse-riding & Glamping Park Open (Holders Only)`,
                            ko: `홀더 전용 CCZ 승마&글램핑 파크 Open`,
                        },
                    ],
                ],
            },
            teams: [
                {
                    name: 'Dookie',
                    introduceKr: `스타트업 엔젤 투자자 및 크립토 펀드 출자자이며 사람보다 동물을 좋아하는 엔지니어`,
                    introduceEn: ` engineer, in love with animals actually prefer them to humans
 angel investor managing the crypto fund
`,
                },
                {
                    name: 'Sage',
                    introduceKr: `사람과 동물 모두에게 가치를 주는 일과 디지털 트윈에 관심이 많은 수의사`,
                    introduceEn: ` vet, 
 puts effort to bring value to both animal and humans all together
 interested in the concept of digital twin in web 3.0`,
                },
                {
                    name: 'Jay',
                    introduceKr: `스타트업 창업가, 새로운 아이디어에 열광하는 R&D 리더`,
                    introduceEn: ` entrepreneur, R&D leader
 motivated by and seeks after new and original ideas `,
                },
                {
                    name: 'Dan',
                    introduceKr: `스타트업과 빠르게 변화하는 기술들에 관심이 많고 Web3와 현실을 넘나드는 사고를 하고 싶은 창업가`,
                    introduceEn: ` entrepreneur
 enthusiastic about fast-paced start-up scenes and evolving technologies
 in pursuit of thinking beyond the integration of web 2 and 3.0`,
                },
                {
                    name: 'John',
                    introduceKr: `기술을 통해 사람과 동물의 행복한 미래를 꿈꾸는 B2B 마케터이자 음악을 즐기는 창업가

`,
                    introduceEn: `entrepreneur, B2B marketer 
 hopes for a better future via advanced technology for all living creatures
 always inspired by music `,
                },
            ],
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
hr {
    margin: 0;
}
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
        .phase-1 {
            flex: 0.5;
        }
    }
}

.buy-a-horse {
    img {
        display: block;
        width: 60%;
        margin: 0 auto;
        margin-bottom: 15px;
    }
    p {
        text-align: center;
        margin: 0 auto;
        margin-bottom: 100px;
    }
    .caption {
        font-size: 0.8em;
        color: gray;
        text-align: center;
    }
    .move-to-minting {
        background: #ecb320;
        color: black;
        padding: 5px 100px;
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

.roadmap {
    background-image: url('../assets/background-img.jpg');
    background-size: contain;
    background-position: center center;
    max-width: 100%;
    .roadmap-list {
        display: flex;
        flex-wrap: wrap;
        gap: 30px;
        li {
            width: calc((100% - 30px) / 2);
            background: black;
            border-radius: 10px;
            padding: 15px 30px;
            display: flex;
            gap: 50px;
            align-items: center;
            .numbering {
                background: #ecb320;
                color: black;
                font-size: 1.4rem;
                padding: 0 30px;
                border-radius: 5px;
            }
        }
    }
    .roadmap-table {
        border-top: 1px solid #ecb320;
        margin-top: 100px;
        &__header {
            padding: 30px;
            display: flex;
            gap: 30px;
            border-bottom: 1px solid #ecb320;
            div {
                flex: 1;
                ::v-deep .title {
                    font-size: 20px;
                    line-height: 1.1;
                    font-weight: 800;
                }
            }
        }
        &__body {
            .table-row {
                display: flex;
                border-bottom: 1px solid #ecb320;
                padding: 30px;
                gap: 30px;
                .table-data {
                    flex: 1;
                    font-size: 12px;
                    &--header {
                        font-size: 20px;
                        font-weight: 800;
                    }
                }
            }
        }
    }
}

.team {
    .team-member-list {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        gap: 50px;
        li {
            width: calc((100% - 50px * 2) / 3);
            text-align: center;
            img {
                width: 100%;
                margin-bottom: 15px;
            }
            h3 {
                font-weight: 800;
                margin-bottom: 15px;
            }
            p {
                font-size: 0.8em;
                max-width: 250px;
                word-break: keep-all;
                margin: 0 auto;
            }
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
        gap: 70px;
        justify-content: center;
        align-items: center;
        max-width: 60%;
        width: 100%;
        margin: 0 auto;
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

    .buy-a-horse {
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
                height: 60px;
                width: auto;
            }
        }
    }
}
</style>
