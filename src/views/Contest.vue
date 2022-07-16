<template>
    <div class="contest">
        <div class="img-container">
            <img src="../assets/popup/contest_poster_kr.png" alt="" />
        </div>
        <div class="content-container">
            <h2>ClipClopz NFT Art Contest</h2>
            <section class="summary">
                <article>
                    <h4>개요</h4>
                    <ul>
                        <li>공모 기간 : 2022.07.18 ~ 07.29</li>
                        <li>지원 자격 : 시각 미술 분야 아티스트 및 일반인</li>
                        <li>
                            지원 분야 : 전시가 가능한 형태의 시각 미술 작품<br />
                            <div class="table">
                                <div class="table__row">
                                    <div class="cat">지원 가능 분야</div>
                                    <div class="content">회화, 판화판화, 조소조소, 조각 등</div>
                                </div>
                                <div class="table__row">
                                    <div class="cat">지원 제외 분야</div>
                                    <div class="content">
                                        디스플레이 장치를 이용한 작품 ex)디지털아트디지털아트, 프로젝션매핑프로젝션매핑, 미디어퍼포먼스 등
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li>선정 작품 : 총 15점</li>
                        <li>참가 신청 : 온라인 참가 신청서 작성 (홈페이지 팝업창)</li>
                        <ul class="sub-list">
                            <li>‘개인 정보수집 및 이용에 관한 사항사항’, ‘유의 사항사항’ 동의 필수</li>
                            <li>작품 사진 및 소개용 영상 링크 첨부 필수</li>
                        </ul>
                        <li>평가 기준 및 심사 방법</li>
                        <ul class="sub-list">
                            <li>평가 기준 : ClipClopz project에서 추구하는 이미지와 작가의 창의적 표현 의 조화</li>
                            <li>심사 방법 : NFT 홀더 온라인 투표 및 심 사위원 투표</li>
                        </ul>
                        <li>
                            시상
                            <div class="table">
                                <div class="table__row header">
                                    <div>구분</div>
                                    <div>상금</div>
                                    <div>선정작품 수</div>
                                </div>
                            </div>
                        </li>
                        <li>결과 발표 : 0200.28.23 홈페이지 공지</li>
                        <li>문의 : contest@clipclopz.io</li>
                    </ul>
                </article>
                <article>
                    <h4>선정 혜택</h4>
                    <ul>
                        <li>ClipClopz NFT Art Show 전시</li>
                        <ul>
                            <li>1차 : 22.08.08 ~ 22.08.19 / 하나금융그룹 클럽원한남 . 서울 용산구 한남대로 98 일신빌딩일신빌딩, 6층</li>
                            <li>2차 : 22.08.22 ~ 22.08.26 / 하나증권 롯데월드타 워워WM센터 . 서울 송파구 올림픽로 322, 10층</li>
                            <div class="notice">※ 전시 선정 작품은 28.26까지 원본 제출 을 완료 해야 합니다.</div>
                        </ul>
                        <li>ClipClopz NFT Art Auction</li>
                        <ul class="sub-list">
                            <li>내용 : 전문 경매사의 진행으로진행으로15점의 전시 작품에 대한 경매를 진행 예정</li>
                        </ul>
                    </ul>
                </article>
                <div class="buttons">
                    <div class="button">{{ lang == 'en' ? `Download detail guidlines` : `상세 모집요강 다운로드` }}</div>
                    <div class="button">
                        {{ lang == 'en' ? `Join` : `공모전 참가하기` }}
                        <a href="https://forms.gle/9CzbN9tiLrU6FK6Z7" target="_blank"></a>
                    </div>
                </div>
            </section>
        </div>
    </div>
</template>

<script>
export default {
    props: ['lang'],
};
</script>

<style lang="scss" scoped>
@import '../assets/scss/variable.scss';
.contest {
    max-width: 1200px;
    margin: 0 auto;
    padding: 30px;
    padding-bottom: 100px;
    display: flex;
    flex-wrap: wrap;
    gap: 60px;
    h2 {
        margin-bottom: 30px;
    }
    .img-container {
        width: calc((100% - 60px) / 2);
        img {
            width: 100%;
        }
    }
    .content-container {
        width: calc((100% - 60px) / 2);
    }
    ul {
        li {
            list-style: disc inside none;
            border-bottom: 1px solid gray;
            padding: 5px;

            .table {
                &__row {
                    display: flex;
                }
            }
        }
    }
    .sub-list {
        li {
            padding-left: 40px;
            list-style: circle inside none;
        }
    }
    .notice {
        padding: 5px;
        color: gray;
        font-size: 0.8em;
        border-bottom: 1px solid gray;
        text-indent: 50px;
    }
    h3 {
        margin-bottom: 30px;
    }
    h4 {
        font-size: 20px;
        margin-bottom: 15px;
        font-weight: 800;
    }
    article {
        margin-bottom: 30px;
    }
}
.buttons {
    display: flex;
    width: 100%;
    gap: 15px;
    .button {
        flex: 1;
        text-align: center;
        background: $orange;
        color: black;
        padding: 5px 10px;
        border-radius: 5px;
        transition: transform 0.2s;
        cursor: pointer;
        font-weight: 700;
        position: relative;
        a {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
        }
    }
}
@media (hover: hover) {
    .button:hover {
        transform: scale(1.1);
    }
}
@include mobile {
    .contest {
        flex-direction: column;
        padding: 30px 15px;
        gap: 15px;
        .img-container,
        .content-container {
            width: 100%;
        }
    }
}
</style>
