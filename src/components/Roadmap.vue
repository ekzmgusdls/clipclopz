<template>
    <section class="roadmap">
        <a id="roadmap" class="anchor"></a>
        <div class="section__content">
            <h2>ROADMAP</h2>

            <ul class="roadmap-list">
                <li v-for="(roadmap, index) in roadmapLists" :key="index">
                    <div class="numbering">#{{ index + 1 }}</div>
                    <div class="content" v-if="lang == 'en'">
                        <div v-html="roadmap.content"></div>
                        <strong v-html="roadmap.date"></strong>
                    </div>
                    <div class="content" v-else>
                        <div v-html="roadmap.content_kr"></div>
                        <strong v-html="roadmap.date_kr"></strong>
                    </div>
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
            roadmapLists: ``,
        };
    },
    mounted() {
        axios({
            axiosmethod: 'get',
            url: 'https://clipclopz.io/clipclopzback/wp-json/wp/v2/pages/15',
        }).then((res) => {
            this.roadmapLists = res.data.acf.roadmap_lists;
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
.roadmap {
    background-image: url('../assets/background-img.jpg');
    background-size: contain;
    background-position: center center;
    max-width: 100%;
    :deep(.roadmap-list) {
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
                :deep(.title) {
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
