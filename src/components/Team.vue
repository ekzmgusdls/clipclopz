<template>
    <section class="team">
        <a id="team" class="anchor"></a>
        <div class="section__content">
            <h2>TEAM</h2>
            <ul class="team-member-list">
                <li v-for="team in teams" :key="team.name">
                    <img :src="team.img.sizes.large" alt="" />
                    <h3>{{ team.name }}</h3>
                    <p :class="lang == 'en' ? 'en-line-height' : null" v-html="lang == 'en' ? team.description : team.description_kr"></p>
                </li>
            </ul>
        </div>
    </section>
</template>

<script>
import axios from 'axios';

export default {
    props: ['lang', 'isMobile'],

    data() {
        return {
            teams: ``,
        };
    },
    mounted() {
        axios({
            axiosmethod: 'get',
            url: 'https://clipclopz.io/clipclopzback/wp-json/wp/v2/pages/17',
        }).then((res) => {
            this.teams = res.data.acf.team;
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
