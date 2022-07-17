<template>
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
</template>

<script>
export default {
    props: ['lang', 'isMobile'],

    data() {
        return {
            teams: [
                {
                    name: 'Dookie',
                    introduceKr: `스타트업 엔젤 투자자 및 크립토 펀드 출자자이며 사람보다 동물을 좋아하는 엔지니어`,
                    introduceEn: ` engineer, in love with animals actually prefer them to humans, angel investor managing the crypto fund`,
                },
                {
                    name: 'Sage',
                    introduceKr: `사람과 동물 모두에게 가치를 주는 일과 디지털 트윈에 관심이 많은 수의사`,
                    introduceEn: ` vet,
 puts effort to bring value to both animals and humans all together
 interested in the concept of digital twin in web 3.0`,
                },
                {
                    name: 'Jay',
                    introduceKr: `스타트업 창업가, 새로운 아이디어에 열광하는 R&D 리더`,
                    introduceEn: `entrepreneur, R&D leader motivated by and seeking after new and original ideas`,
                },
                {
                    name: 'Dan',
                    introduceKr: `스타트업과 빠르게 변화하는 기술들에 관심이 많고 Web3와 현실을 넘나드는 사고를 하고 싶은 창업가`,
                    introduceEn: ` entrepreneur
 enthusiastic about fast-paced start-up scenes and evolving technologies
 in pursuit of thinking beyond the integration of web 2.0 and 3.0`,
                },
                {
                    name: 'John',
                    introduceKr: `기술을 통해 사람과 동물의 행복한 미래를 꿈꾸는 B2B 마케터이자 음악을 즐기는 창업가

`,
                    introduceEn: `entrepreneur, B2B marketer
 hopes for a better future via advanced technology for all living creatures
 always inspired by music `,
                },
                {
                    name: 'Tarrent',
                    introduceKr: `탤런트 가득한 태런트 킴`,
                    introduceEn: `So talented Tarrent Kim`,
                },
            ],
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

    .team {
        .team-member-list {
            gap: 15px;
            row-gap: 30px;
            li {
                width: calc((100% - 15px) / 2);
            }
        }
    }
}
</style>
