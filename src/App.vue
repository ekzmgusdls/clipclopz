<template>
    <div id="app">
        <transition name="fade">
            <pop-up v-show="isPopup" @popup-exit="popupExit" :lang="lang"></pop-up>
        </transition>
        <div id="nav" ref="nav">
            <router-link class="logo-container" to="/home">
                <inline-svg :src="require('./assets/main-logo.svg')"></inline-svg>
            </router-link>
            <div class="nav-list">
                <router-link to="/home/#buy-a-horse" @click.native="setNavHeight">BUY A HORESE</router-link>
                <router-link to="/home/#roadmap" @click.native="setNavHeight">ROADMAP</router-link>
                <router-link to="/home/#team" @click.native="setNavHeight">TEAM</router-link>
                <router-link to="/gallery">GALLERY</router-link>
                <!-- <router-link to="/home/#member" @click.native="setNavHeight">MEMBER</router-link> -->
                <router-link to="/contest">CONTEST</router-link>
                <div class="lang-controller">
                    <span :class="lang === 'en' ? 'active-lang' : null" @click="changeLang('en')">En</span>
                    <span :class="lang === 'ko' ? 'active-lang' : null" @click="changeLang('ko')">Kr</span>
                </div>
            </div>
            <!-- <div class="mobile-nav-btn" v-if="isMobile" @click="toggleMobileMenu">MENU</div> -->
        </div>
        <!-- <transition name="fade">
            <mobile-nav v-if="isMobile" v-show="mobileMenuOn" :mobileMenuOn="mobileMenuOn" @toggleMobileMenu="toggleMobileMenu"></mobile-nav>
        </transition> -->
        <transition name="fade">
            <router-view @nav-height="getNavHeight" :prop-nav-height="navHeight" :lang="lang" :is-mobile="isMobile" />
        </transition>
        <footer>
            <div class="footer">
                <div class="footer__email-container">
                    email
                    <form action="">
                        <input type="text" />
                        <button>Submit</button>
                    </form>
                </div>
                <div class="footer__main-logo-container">
                    <inline-svg :src="require('./assets/main-logo.svg')"></inline-svg>
                </div>
                <ul class="footer__sns-container">
                    <li>
                        <inline-svg :src="require('./assets/footer/facebook.svg')"></inline-svg>
                    </li>
                    <li>
                        <inline-svg :src="require('./assets/footer/google.svg')"></inline-svg>
                    </li>
                    <li>
                        <inline-svg :src="require('./assets/footer/twitter.svg')"></inline-svg>
                        <a href="https://twitter.com/clipclopz" target="_blank"></a>
                    </li>
                    <li>
                        <inline-svg :src="require('./assets/footer/youtube.svg')"></inline-svg>
                    </li>
                    <li>
                        <inline-svg :src="require('./assets/footer/discord.svg')"></inline-svg>
                    </li>
                    <li>
                        <inline-svg :src="require('./assets/footer/telegram.svg')"></inline-svg>
                    </li>
                </ul>
            </div>
        </footer>
    </div>
</template>
<script>
import PopUp from './components/PopUp.vue';
// import MobileNav from './components/MobileNav.vue';
export default {
    data() {
        return {
            // BUG 일단은 하드코딩으로 해놓자. 위에서 Props니 Emit이니 해야할 이유가 있나? ... 왜한거지 황당하네
            navHeight: 84,
            lang: 'en',
            isPopup: true,
            isMobile: false,
            mobileMenuOn: false,
        };
    },
    components: {
        'pop-up': PopUp,
        // 'mobile-nav': MobileNav,
    },
    methods: {
        getNavHeight(navHeight) {
            console.log(this.navHeight);
            this.navHeight = navHeight;
        },
        setNavHeight() {
            this.navheight = this.$refs.nav.clientHeight;
        },
        changeLang(lang) {
            this.lang = lang;
        },
        popupExit(val) {
            this.isPopup = val;
        },
        toggleMobileMenu() {
            console.log('hi');
            this.mobileMenuOn = !this.mobileMenuOn;
        },
    },
    beforeMount() {
        this.isMobile = innerWidth < 800;
        if (this.isMobile) {
            this.navHeight = 128;
        }
        addEventListener('resize', () => {
            this.isMobile = innerWidth < 800;
            if (this.isMobile) {
                this.navHeight = 128;
            }
        });
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
    position: relative;
    justify-content: space-between;
    width: 100%;
    padding: 60px 30px;
    &__main-logo-container {
        max-width: 150px;
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        svg {
            width: 100%;
        }
    }
    &__sns-container {
        display: flex;
        align-items: center;
        gap: 20px;
        li {
            position: relative;
            a {
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
            }
        }
        svg {
            height: 20px;
            width: auto;
        }
    }
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
    position: sticky;
    top: 0;
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
        align-items: center;
    }
}

.lang-controller {
    display: flex;
    background: rgb(40, 40, 40);
    border-radius: 9999px;
    padding: 5px;
    span {
        display: block;
        padding: 0 10px;
        border-radius: 9999px;
        transition: background 0.2s;
        cursor: pointer;
    }
    .active-lang {
        background: #ecb320;
        color: black;
        padding: 0 10px;
        border-radius: 9999px;
    }
}

@media all and (max-width: 800px) {
    #nav {
        width: 100%;
        // padding: 5px 15px;
        padding: 0;
        flex-wrap: wrap;
        .logo-container {
            width: 100%;
            display: flex;
            justify-content: flex-start;
            margin-top: 10px;
            margin-bottom: 10px;
            svg {
                padding-left: 15px;
                width: 180px;
            }
        }
        .nav-list {
            flex-wrap: wrap;
            gap: 15px;
            row-gap: 5px;
            padding: 15px;
            font-size: 13px;
            width: 100%;
            justify-content: space-between;
            border-top: 1px solid white;
            border-bottom: 1px solid white;
            .lang-controller {
                position: fixed;
                top: 20px;
                right: 15px;
            }
        }
    }

    .footer {
        padding: 30px 15px;
        flex-direction: column;
        &__main-logo-container {
            position: static;
            transform: translate(0);
        }
    }
}
</style>
