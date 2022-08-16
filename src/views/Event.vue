<template>
    <div class="contest">
        <h2>{{ this.event.title }}</h2>
        <div class="sub-copy" v-if="this.lang == 'en'" v-html="this.event.description_en"></div>
        <div class="sub-copy" v-else v-html="this.event.description"></div>
        <div class="img-container">
            <video muted autoplay playsinline controls loop>
                <source :src="this.event.video.url" />
            </video>
            <img v-for="(img, index) in this.event.pictures" :key="index" :src="img.sizes.large" alt="" />
        </div>
        <div class="content-container">
            <section class="summary summary--en" v-if="lang == 'en'">
                <article v-html="this.event.details_en"></article>
            </section>
            <section class="summary" v-else>
                <article v-html="this.event.details"></article>
            </section>
        </div>
        <div class="notice-container" v-if="this.lang == 'en'">{{ this.event.notice_en }}</div>
        <div class="notice-container" v-else>{{ this.event.notice }}</div>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    props: ['lang'],
    data() {
        return {
            event: ``,
        };
    },
    mounted() {
        // Axios
        axios({
            method: 'get',
            url: 'https://clipclopz.io/clipclopzback/wp-json/wp/v2/pages/205',
        }).then((res) => {
            this.event = res.data.acf;
        });
    },
};
</script>

<style lang="scss" scoped>
@import '../assets/scss/variable.scss';
.contest {
    max-width: 1200px;
    margin: 0 auto;
    padding: 30px;
    padding-bottom: 200px;
    display: flex;
    flex-wrap: wrap;
    gap: 60px;
    h2 {
        // margin-bottom: 30px;
        text-align: center;
        width: 100%;
    }
    .sub-copy {
        width: 60%;
        text-align: center;
        margin: 0 auto;
        word-break: keep-all;
        margin-bottom: 60px;
    }
    .img-container {
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        gap: 1rem;
        margin-bottom: 30px;
        img {
            width: calc((100% - 1rem) / 2);
        }
        video {
            width: 100%;
            margin-bottom: 30px;
        }
    }
    .content-container {
        width: 100%;
    }
    ul {
        li {
            list-style: disc inside none;
            border-bottom: 1px solid gray;
            padding: 5px;

            .table {
                color: gray;
                &__row {
                    display: flex;
                    border-top: 1px solid gray;
                    padding: 5px;
                    padding-left: 40px;
                    font-size: 0.9em;
                    .cat {
                        flex: 0.35;
                    }
                    .content {
                        flex: 1;
                    }
                    div {
                        flex: 1;
                    }
                    &.rowrow {
                        padding: 0;
                    }
                }
                .table-left {
                    flex: 2;
                }
                .table-right {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }
                &__rowrow {
                    display: flex;
                    flex: 1;
                    padding: 5px 0;
                    padding-left: 40px;
                    border-bottom: 1px solid gray;
                    &:last-of-type {
                        border-bottom: 0;
                    }
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
    .summary--en {
        ul {
            li {
                list-style: none;
                display: flex;
                .cat {
                    min-width: 100px;
                }
                .content {
                    width: 100%;
                }
                .sub-list {
                    width: 100%;
                    li {
                        padding-top: 0;
                        padding-left: 0;
                        &.no-border-bottom {
                            padding-top: 5px;
                            border-bottom: 0;
                        }
                    }
                }
            }
        }
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
        padding: 10px 20px;
        border-radius: 5px;
        transition: transform 0.2s;
        cursor: pointer;
        font-weight: 700;
        position: relative;
        line-height: 1.1;
        display: flex;
        justify-content: center;
        align-items: center;
        a {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
        }
    }
}
.notice-container {
    color: $orange;
    text-align: center;
    width: 100%;
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
        .sub-copy {
            width: 100%;
        }
    }
}
</style>
