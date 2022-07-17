<template>
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
            <div class="roadmap-table">
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
</template>

<script>
export default {
    props: ['lang', 'isMobile'],
    data() {
        return {
            roadmapList: [
                {
                    contentKr: `프로젝트 기획 및 투자 유치 완료<br/><strong>22.06.23</strong>`,
                    contentEn: `Project Development & Seed Investment<br/><strong>Jun.23.2022</strong>`,
                },
                {
                    contentKr: `PFP CCZ 공개 <br />민팅사이트 및 SNS 채널 오픈 <br />백서 공개<br/><strong>22.07.18</strong>`,
                    contentEn: `PFP CCZ Release
Minting Site & SNS Channel<br/><strong>Jul.18.2022</strong>`,
                },
                {
                    contentKr: `CCZ NFT V1 화이트리스트 민팅 : 2,000개<br />
                            CCZ NFT V1 퍼블릭 민팅 : 8,000 개<br/><strong>22.08.01</strong>`,
                    contentEn: `CCZ NFT V1 Whitelist Minting: 2,000<br /> NFTs
CCZ NFT V1 Public Minting: 8,000 NFTs<br/><strong>Aug.01.2022</strong>`,
                },
                {
                    contentKr: `PFP Exhbition @ 하나금융그룹 클럽원한남 / 하나증권 롯데월드타워WM센터
<br/><strong>22.08.08~22.08.29</strong>`,
                    contentEn: `1st PFP Visual Art Awards 1st PFP Exhibition @Club1 Hannam (Hana Financial Group) / Lotte World Tower WM Center (Hana Securities)<br/><strong>Aug.08.2022~Aug.29.2022</strong>
                    `,
                },
                {
                    contentKr: ` CCZ 런칭파티<br />
                            홀더 전용 온라인 클럽라운지 Open`,
                    contentEn: `CCZ Launching Party
Online Club Lounge Open (Holders Only)`,
                },
                {
                    contentKr: ` CCZ 승마클럽 계획 발표<br />
                            패션 브랜드, 대형 리조트브랜드 협업 발표`,
                    contentEn: `Collaboration with Global Fashion, Hospitality Brands`,
                },
                {
                    contentKr: `CCZ NFT V2 : CCZ Donkey 민팅`,
                    contentEn: `CCZ NFT V2: CCZ Donkey Minting`,
                },
                {
                    contentKr: `CCZ coin 발행 및 스테이킹`,
                    contentEn: `DRB Token Release & Staking Starts<br/>
Breeding System Kickoff<br/>
Community Governance System Development`,
                },
                {
                    contentKr: `소셜라운지 @ 렛츠런파크 서울 마주 전용 라운지<br/>온/오프 승마클럽 개설`,
                    contentEn: `LetsRunPark Party @Owner’s Premium Lounge<br/>
On/off-line Horse-riding Club Openings`,
                },
                {
                    contentKr: `CCZ NFT V3 : CCZ Mule 민팅`,
                    contentEn: `CCZ NFT V3: CCZ Mule Minting`,
                },
                {
                    contentKr: `Token 생태계 확장<br/>CCZ NFT 및 coin 기반 육성 게임 개발`,
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
                            en: `“The next chapter of life unveils!”<br/>
                            Bank account secured with diamonds cumulated from past hard-working days.<br/>

                            All we’ve got now is all time in the world to chill on the beach and party all night!"`,
                            ko: `"화려한 제2의 馬生을 꿈꾼다!"<br/>
                        은행에 쌓여 있는 다이아 편자는<br/>
                        먼지폭풍을 뚫고 달려온 지난 시간의 흔적.<br/>

                        이젠 아름다운 휴양지에서 편히 쉬며<br/>
                        매일 밤 펼쳐질 신나는 파티를 즐긴다!`,
                        },
                        {
                            en: `“Special someone to ride and race together! Who would it be?”
<br/>
Even in this fascinating yet peaceful environment, still feel the void and emptiness. We all need a friend, a lover to fill it up with love and passion, to make our hearts beat!`,
                            ko: `"함께 달리고 싶은 동반자를 만나다!"<br/>
                        풍요로운 나날 속에 느껴지는 허전함<br/>
                        나의 가슴을 다시 뛰게 해줄 동반자를 만나고 싶다!`,
                        },
                        {
                            en: `
“Let’s race, relentlessly
In pursuit of happiness,
without any distractions!”<br/>

With my family and friends who I love and care for deeply,
we will always be together running from side to side in this journey of life.`,
                            ko: `"다그닥! 다그닥! 영원히 달린다!!"<br/>
                                사랑하는 나의 가족과 친구들!<br/>
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
                            en: `"CCZ NFT V1 Whitelist Minting: 2,000<br/> NFTs
                            CCZ NFT V1 Public Minting: 8,000<br/> NFTs
                            Whitepaper Release: Rarity & Score Disclosure"`,
                            ko: `CCZ NFT V1 화이트리스트 민팅 : 2,000개<br/>
                            CCZ NFT V1 퍼블릭 민팅 : 8,000 개<br/>
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
                            en: `CCZ Token Release & Staking<br/>
Breeding System Open<br/>
 Community Governance System Development`,
                            ko: `CCZ Token 발행 및 스테이킹<br/>
                            브리딩 시스템 Open<br/>
                            커뮤니티 거버넌스 시스템 구축`,
                        },
                        {
                            en: `Token Ecosystem Expansion
<br/>
NFT & CCZ Token based Simulation Game Development`,
                            ko: `Token 생태계 확장<br/>
                        NFT 및 CCZ Token 기반 육성 게임 개발`,
                        },
                        { en: ``, ko: `` },
                    ],
                    [
                        { en: `Marketing`, ko: `홍보` },
                        {
                            en: `CCZ Social Network Service
Promotion & PPL`,
                            ko: `CCZ Social Network 홍보 및 PPL등`,
                        },
                        {
                            en: `Crypto Marketing & Collaborative Projects (e.g. Air Drop)<br/>
Advertisement on Screen in Racing Parks (Gwacheon, Busan)<br/>
PFP Exhibition (Seoul, Busan, Jeju Horseracing Park)`,
                            ko: `크립토 마케팅 및 콜라보레이션 프로젝트(Air drop등)<br/>
                        과천/부산 경마장 내 전광판 광고 송출<br/>
                        서울-부산-제주 경마공원 PFP 전시회`,
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
                            en: `Fashion Brands<br/>
Hospitality Brands<br/>
Seoul Racehorse Owners Association`,
                            ko: `패션 브랜드<br/>
                            대형 리조트브랜드<br/>
                            서울마주협회<br/>
                            대한승마경영자협회`,
                        },
                        {
                            en: `Global Fashion Brands<br/>

Green Riding Zone<br/>
(affiliated Horse riding facility)<br/>
from Korean Racing Authority<br/>
Busan Kyeongnam<br/>
Racehorse Owners Association`,
                            ko: `해외 패션브랜드<br/>
                            한국마사회 그린승마존 참여<br/>
                            부산마주협회`,
                        },
                        {
                            en: ``,
                            ko: ``,
                        },
                        {
                            en: `Racing Horse Owners Association (Japan / Hongkong / Australia)<br/>
PETA (People for Ethical Treatment of Animals)`,
                            ko: `해외 마주협회(일본/홍콩/호주)<br/>
                        PETA (People for Ethical Treatment of Animals)`,
                        },
                    ],
                    [
                        { en: `Utility`, ko: `유틸리티` },
                        {
                            en: `CCZ Launching Party<br/>
PFP Exhibition @ Club1 Hannam (Hana Financial Group) / Lotte World Tower WM Center (Hana Securities)<br/>
Merchandise - Limited Edition`,
                            ko: `CCZ 런칭파티<br/>
                            PFP Exhbition @ 하나금융그룹 클럽원한남 / 하나증권 롯데월드타워WM센터<br/>
                            한정판 굿즈 제작`,
                        },
                        {
                            en: `LetsRunPark Party<br/>
@ Owner’s Premium Lounge<br/>
On/off-line Horse-riding Club Openings<br/>

CSR: Horsepia Program
In Korea Racing Authority`,
                            ko: `렛츠런파크 Party @ 마주전용라운지<br/>
                            온/오프 승마클럽 개설<br/>
                            사회공헌 : 한국마사회 재활힐링승마 프로그램 참여 `,
                        },
                        {
                            en: `Exclusive Private Party in Jeju (Holders Only & VIPs)
<br/>
CSR: Welfare Program for Retired Racing Horses`,
                            ko: `홀더 파티 in 제주 feat. 셀럽<br/>
                        사회공헌 : 퇴역경주마 복지사업`,
                        },
                        {
                            en: `CCZ Horse-riding & Glamping Park Open (Holders Only)`,
                            ko: `홀더 전용 CCZ 승마&글램핑 파크 Open`,
                        },
                    ],
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
.roadmap {
    background-image: url('../assets/background-img.jpg');
    background-size: contain;
    background-position: center center;
    max-width: 100%;
    .roadmap-list::v-deep {
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
            strong {
                font-weight: 800;
                font-style: oblique;
                color: #ecb320;
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
        .roadmap-table {
            overflow: scroll;
            &__header {
                gap: 0;
                padding: 0;
                div {
                    padding: 15px;
                    min-width: 150px;

                    border-bottom: 1px solid $orange;
                }
                border-bottom: 0;
            }
            .table-row {
                gap: 0;
                padding: 0;
                border-bottom: 0;
                .table-data {
                    padding: 15px;
                    min-width: 150px;
                    border-bottom: 1px solid $orange;
                }
            }
        }
    }
}
</style>
