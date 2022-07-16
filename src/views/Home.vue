<template>
    <main class="home">
        <section class="section-1" ref="section-1">
            <a id="phase-2" class="anchor"></a>
            <div class="section__content">
                <div class="img-container"></div>
                <div class="info-container" v-if="lang === 'ko'">
                    <h3># PHASE 1.</h3>
                    <p>
                        촘촘한 스케줄에 익숙하던 클립은 하루종일 늘어져있거나 맛있는 걸 먹으러 다녀도 남는 시간에 행복한 한편 넘쳐나는 돈과 시간으로
                        목표가 사라진 삶에 공허한 감정 또한 동시에 느낀다. 선베드에 누워있던 클립은 좋은 생각이 난 듯 벌떡 일어난다. ‘나와 같은
                        사람들을 만나 교류하며 재밌고 의미있는 일들을 해보는 건 어떨까?’ 클립은 같은 가치관을 가진 친구들을 모았고 입소문을 타고 회원
                        수가 점점 늘어났다. 그들을 클랍즈라 이름 붙였고 이렇게 클립 클랍즈 클럽이 탄생하게 되었다.
                    </p>
                    <h3># PHASE 2.</h3>
                    <p>
                        촘촘한 스케줄에 익숙하던 클립은 하루종일 늘어져있거나 맛있는 걸 먹으러 다녀도 남는 시간에 행복한 한편 넘쳐나는 돈과 시간으로
                        목표가 사라진 삶에 공허한 감정 또한 동시에 느낀다. 선베드에 누워있던 클립은 좋은 생각이 난 듯 벌떡 일어난다. ‘나와 같은
                        사람들을 만나 교류하며 재밌고 의미있는 일들을 해보는 건 어떨까?’ 클립은 같은 가치관을 가진 친구들을 모았고 입소문을 타고 회원
                        수가 점점 늘어났다. 그들을 클랍즈라 이름 붙였고 이렇게 클립 클랍즈 클럽이 탄생하게 되었다.
                    </p>
                </div>

                <div class="info-container" v-if="lang === 'en'">
                    <h3># PHASE 1.</h3>
                    <p>enen</p>
                    <h3># PHASE 2.</h3>
                    <p>nenen</p>
                </div>
            </div>
        </section>
        <section class="buy-a-horse">
            <a id="buy-a-horse" class="anchor"></a>
            <div class="section__content">
                <h2>BUY A HORSE</h2>
                <img src="../assets/Buy a horse/Clipclopz sample gallery.png" alt="" />
                <div class="caption">Horse NFT sample images CLIPCLOPZ © 2022</div>
                <router-link to="" class="move-to-minting">민팅 페이지로 이동하기</router-link>
            </div>
        </section>
        <section class="roadmap">
            <a id="roadmap" class="anchor"></a>
            <div class="section__content">
                <h2>ROADMAP</h2>
                <ul class="roadmap-list">
                    <li>
                        <div class="numbering">#1</div>
                        <div class="content">프로젝트 기획 및 투자 유치 완료</div>
                    </li>
                    <li>
                        <div class="numbering">#2</div>
                        <div class="content">PFP CCZ 공개 <br />민팅사이트 및 SNS 채널 오픈 <br />백서 공개</div>
                    </li>
                    <li>
                        <div class="numbering">#3</div>
                        <div class="content">
                            CCZ NFT V1 화이트리스트 민팅 : 2,000개<br />
                            CCZ NFT V1 퍼블릭 민팅 : 8,000 개
                        </div>
                    </li>
                    <li>
                        <div class="numbering">#4</div>
                        <div class="content">
                            CCZ 승마클럽 계획 발표<br />
                            패션 브랜드, 대형 리조트브랜드 협업 발표
                        </div>
                    </li>
                    <li>
                        <div class="numbering">#5</div>
                        <div class="content">
                            CCZ 런칭파티<br />
                            홀더 전용 온라인 클럽라운지 Open
                        </div>
                    </li>
                    <li>
                        <div class="numbering">#6</div>
                        <div class="content">1st PFP Exhbition @ 클럽OO</div>
                    </li>
                    <li>
                        <div class="numbering">#7</div>
                        <div class="content">CCZ NFT V2 : CCZ Donkey 민팅</div>
                    </li>
                    <li>
                        <div class="numbering">#8</div>
                        <div class="content">
                            DRB Token 발행 및 스테이킹<br />
                            브리딩 시스템 Open<br />
                            커뮤니티 거버넌스 시스템 구축
                        </div>
                    </li>
                    <li>
                        <div class="numbering">#9</div>
                        <div class="content">
                            렛츠런파크 Party @ 마주전용라운지<br />
                            온/오프 승마클럽 개설
                        </div>
                    </li>
                    <li>
                        <div class="numbering">#10</div>
                        <div class="content">
                            글로벌 말 산업 협회들과 협업 제안<br />
                            일본/홍콩 경마장 PFP전시회
                        </div>
                    </li>
                    <li>
                        <div class="numbering">#11</div>
                        <div class="content">
                            Token 생태계 확장<br />
                            NFT 및 CCZ Token 기반 육성 게임 개발
                        </div>
                    </li>
                    <li>
                        <div class="numbering">#12</div>
                        <div class="content">CCZ NFT V3 : CCZ Mule 민팅</div>
                    </li>
                    <li>
                        <div class="numbering">#13</div>
                        <div class="content">
                            홀더 전용 CCZ 승마&글램핑 파크 Open<br />
                            홀더 파티 in 제주 feat. 셀럽<br />
                            사회공헌 : 퇴역경주마 복지사업
                        </div>
                    </li>
                </ul>
            </div>
        </section>
        <section class="team">
            <a id="team" class="anchor"></a>
            <div class="section__content">
                <h2>TEAM</h2>
                <ul class="team-member-list">
                    <li>
                        <img src="../assets/team/Dookie.png" alt="" />
                        <h3>Dookie</h3>
                        <p>스타트업 엔젤 투자자 및 크립토 펀드 출자자이며 사람보다 동물을 좋아하는 엔지니어</p>
                    </li>
                    <li>
                        <img src="../assets/team/Sage.png" alt="" />
                        <h3>Sage</h3>
                        <p>사람과 동물 모두에게 가치를 주는 일과 디지털 트윈에 관심이 많은 수의사</p>
                    </li>
                    <li>
                        <img src="../assets/team/Jay.png" alt="" />
                        <h3>Jay</h3>
                        <p>스타트업 창업가, 새로운 아이디어에 열광하는 R&D 리더</p>
                    </li>
                    <li>
                        <img src="../assets/team/Dan.png" alt="" />
                        <h3>Dan</h3>
                        <p>스타트업과 빠르게 변화하는 기술들에 관심이 많고 Web3와 현실을 넘나드는 사고를 하고 싶은 창업가</p>
                    </li>
                    <li>
                        <img src="../assets/team/John.png" alt="" />
                        <h3>John</h3>
                        <p>기술을 통해 사람과 동물의 행복한 미래를 꿈꾸는 B2B 마케터이자 음악을 즐기는 창업가</p>
                    </li>
                </ul>
            </div>
        </section>
        <section class="member">
            <a id="member" class="anchor"></a>
            <div class="section__content">
                <h2>MEMBER</h2>
                <div class="connect-phantom">
                    <h4>Connect phantom</h4>
                    <p>You need to connect your MetaMask wallet before you can mint a token</p>
                    <router-link to="" class="move-to-member">Move to member</router-link>
                </div>
            </div>
        </section>
        <section class="partner">
            <a id="partner" class="anchor"></a>
            <div class="section__content">
                <h2>PARTNER</h2>
                <ul class="partner-list">
                    <inline-svg :src="require('../assets/partners/dexlab.svg')"></inline-svg>
                    <inline-svg :src="require('../assets/partners/renaissance.svg')"></inline-svg>
                    <inline-svg :src="require('../assets/partners/am.svg')"></inline-svg>
                    <inline-svg :src="require('../assets/partners/atoz.svg')"></inline-svg>
                    <inline-svg :src="require('../assets/partners/runup.svg')"></inline-svg>
                </ul>
            </div>
        </section>
    </main>
</template>

<script>
// import ScrollReveal from 'scrollreveal';

export default {
    props: ['propNavHeight', 'lang'],
    name: 'Home',
    data() {
        return {
            navHeight: this.propNavHeight,
        };
    },
    mounted() {
        this.$emit('nav-height', document.querySelector('#nav').getBoundingClientRect().height);
        document.querySelectorAll('.anchor').forEach((anchor) => {
            anchor.style.top = `-${this.propNavHeight}px`;
        });
        this.firstSectionPaddingTop();
        // this.sectionMinHeight();
        // ScrollReveal().reveal('section', { duration: 2000, distance: '100px' });
        // ScrollReveal().reveal('hr', { duration: 2000, distance: '100px' });
    },
    methods: {
        firstSectionPaddingTop() {
            this.$refs['section-1'].style.paddingTop = this.navHeight + 'px';
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
        max-width: 1200px;
        margin: 0 auto;
    }
}

.section-1 {
    .section__content {
        padding-top: 0;
    }
    .img-container {
        border-radius: 10px;
        aspect-ratio: 16/9;
        background-image: url('../assets/home-img.png');
        margin-bottom: 30px;
    }
    .info-container {
        max-width: 400px;
        margin-right: 0;
        margin-left: auto;
        margin-bottom: 30px;

        h3 {
            margin-bottom: 30px;
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
        margin-top: 100px;
        display: inline-block;
        position: relative;
        left: 50%;
        font-weight: 700;
        transform: translateX(-50%);
        transition: transform 0.2s;
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
            transform: translateX(-50%) scale(1.1);
        }
    }
}
</style>
