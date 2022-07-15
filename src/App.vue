<template>
    <div id="app">
        <div id="nav" ref="nav">
            <router-link class="logo-container" to="/">
                <inline-svg :src="require('./assets/main-logo.svg')"></inline-svg>
            </router-link>
            <div class="nav-list">
                <router-link to="/home/#buy-a-horse" @click.native="setNavHeight">BUY A HORESE</router-link>
                <router-link to="/home/#roadmap" @click.native="setNavHeight">ROADMAP</router-link>
                <router-link to="/home/#team" @click.native="setNavHeight">TEAM</router-link>
                <router-link to="/gallery">GALLERY</router-link>
                <router-link to="/home/#member" @click.native="setNavHeight">MEMBER</router-link>
                <div class="lang-controller">
                    <span :class="lang === 'en' ? 'active-lang' : null">En</span> / <span :class="lang === 'ko' ? 'active-lang' : null">Kr</span>
                </div>
                <router-link to="/home/#links" @click.native="setNavHeight">LINKS</router-link>
            </div>
        </div>

        <transition name="fade">
            <router-view @nav-height="getNavHeight" :prop-nav-height="navHeight" :lang="lang" />
        </transition>
        <footer>
            <div class="footer">
                <div class="footer__email-container">email</div>
                <div class="footer__main-logo-container">Logo</div>
                <div class="footer__sns-container">SNS</div>
            </div>
        </footer>
    </div>
</template>
<script>
export default {
    data() {
        return {
            // BUG 일단은 하드코딩으로 해놓자. 위에서 Props니 Emit이니 해야할 이유가 있나? ... 왜한거지 황당하네
            navHeight: 84,
            lang: 'ko',
        };
    },
    methods: {
        getNavHeight(navHeight) {
            this.navHeight = navHeight;
        },
        setNavHeight() {
            this.navheight = this.$refs.nav.clientHeight;
        },
    },
    mounted() {},
};
</script>

<style lang="scss">
@import url('https://cdn.jsdelivr.net/gh/orioncactus/pretendard/dist/web/static/pretendard.css');
@import '~@/assets/scss/reset';
@import '~@/assets/scss/typography';

* {
    box-sizing: border-box;
}
html {
    background: black;
    color: white;
    scroll-behavior: smooth;
    font-size: 14px;
}
body {
    line-height: 1.7;
    font-weight: 600;
}
#app {
    font-family: pretendard, Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background: black;
}

footer {
    width: 100%;
    display: flex;
    justify-content: center;
    border-top: 1px solid white;
}
.footer {
    display: flex;
    justify-content: space-between;
    width: 100%;
    max-width: 1200px;
    padding: 30px;
}

.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0;
}

#nav {
    padding: 15px 30px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: fixed;
    width: 100vw;
    background: black;
    z-index: 99;
    .logo-container {
        display: flex;
        width: 200px;
        svg {
            width: 100%;
        }
    }
    .nav-list {
        display: flex;
        gap: 30px;
        font-weight: 800;
        font-size: 14px;
    }
}
</style>
