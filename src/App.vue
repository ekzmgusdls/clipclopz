<template>
    <div id="app">
        <div class="pop-up-container" v-if="this.isPopupContainer">
            <transition name="fade" v-for="(popupInfo, index) in popupInfos" :key="popupInfo.popup.ID">
                <pop-up :lang="lang" :popupInfo="popupInfo" :index="index" @checkPopupContainer="checkPopupContainer" @closePopupContainer="closePopupContainer"></pop-up>
            </transition>
        </div>
        <div id="nav" ref="nav">
            <router-link class="logo-container" to="/home">
                <inline-svg :src="require('./assets/main-logo.svg')"></inline-svg>
            </router-link>
            <div class="nav-list">
                <router-link to="/home/#buy-a-horse" @click.native="setNavHeight">BUY A HORSE</router-link>
                <router-link to="/home/#roadmap" @click.native="setNavHeight">ROADMAP</router-link>
                <router-link to="/home/#team" @click.native="setNavHeight">TEAM</router-link>
                <router-link to="/gallery">GALLERY</router-link>
                <router-link to="/home/#member" @click.native="setNavHeight" v-if="this.isMember">MEMBERSHIP</router-link>
                <!-- <router-link to="/contest">CONTEST</router-link> -->
                <router-link to="/event">EVENT</router-link>
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
            <router-view @nav-height="getNavHeight" :prop-nav-height="navHeight" :lang="lang" :is-mobile="isMobile" :intro="this.intro" :is-member="this.isMember" />
        </transition>
        <footer>
            <div class="footer">
                <ul class="footer__sns-container" v-if="isMobile">
                    <li v-for="sns in this.sns" :key="sns.sns_logo.id">
                        <img :src="sns.sns_logo.sizes.large" alt="" />
                        <a :href="sns.sns_link"></a>
                    </li>
                </ul>
                <div class="footer__email-container">
                    E-MAIL
                    <form action="">
                        <input type="text" v-model="email" />
                        <button @click.prevent="sendMail">Submit</button>
                    </form>
                </div>
                <div class="footer__main-logo-container" v-if="!isMobile">
                    <inline-svg :src="require('./assets/main-logo.svg')"></inline-svg>
                </div>
                <ul class="footer__sns-container" v-if="!isMobile">
                    <li v-for="sns in this.sns" :key="sns.sns_logo.id">
                        <img :src="sns.sns_logo.sizes.large" alt="" />
                        <a :href="sns.sns_link"></a>
                    </li>
                </ul>
            </div>
        </footer>
        <transition name="fade">
            <div class="mail-status-popup" v-show="this.mailStatusPopup">
                <template v-if="!this.mailSendSuccess">Loading...</template>
                <template v-if="this.mailSendSuccess">
                    <p v-html="lang == 'en' ? `Thank you.<br/>The transmission of mail was successful.` : `감사합니다. <br/>메일 전송이 성공했습니다.`"></p>
                </template>
            </div>
        </transition>
    </div>
</template>
<script>
import axios from 'axios';
import PopUp from './components/PopUp.vue';
export default {
    data() {
        return {
            navHeight: 84,
            lang: 'en',
            isPopup: true,
            isMobile: false,
            mobileMenuOn: false,
            email: null,
            mailStatusPopup: false,
            mailSendSuccess: false,
            sns: ``,
            // BUGS 고쳐놓자.
            isPopupContainer: false,
            popupInfos: {},
            intro: ``,
            isMember: false,
        };
    },
    components: {
        'pop-up': PopUp,
        // 'pop-up-2': PopUp2,
        // 'mobile-nav': MobileNav,
    },
    methods: {
        moveDetail() {
            this.isPopup = false;
        },
        getNavHeight(navHeight) {
            this.navHeight = navHeight;
        },
        setNavHeight() {
            this.navheight = this.$refs.nav.clientHeight;
        },
        changeLang(lang) {
            this.lang = lang;
        },
        popupExit() {
            document.querySelector('.pop-up-container').children.length == 1 ? (this.isPopup = false) : null;
        },
        toggleMobileMenu() {
            this.mobileMenuOn = !this.mobileMenuOn;
        },
        sendMail() {
            let ref = this;
            let data = {
                service_id: 'service_y9af0ph',
                template_id: 'template_wcm20ei',
                user_id: 'YBOFs8m1sNtE-oE4U',
                template_params: {
                    message: ref.email,
                },
            };
            let regExp = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
            if (ref.email !== null && ref.email.match(regExp)) {
                ref.mailStatusPopup = true;
                axios({
                    method: 'post',
                    url: 'https://api.emailjs.com/api/v1.0/email/send',
                    data,
                }).then(() => {
                    ref.email = null;
                    ref.mailSendSuccess = true;
                    setTimeout(function () {
                        ref.mailStatusPopup = false;
                        ref.mailSendSuccess = false;
                    }, 2500);
                });
            } else {
                this.lang == 'en' ? alert('Enter the proper email address here.') : alert(`이메일 주소를 정확히 입력해주세요.`);
            }
        },
        getFooterSNS() {
            axios({
                method: 'get',
                url: 'https://clipclopz.io/clipclopzback/wp-json/wp/v2/pages/94',
            }).then((res) => {
                this.sns = res.data.acf.sns;
            });
        },
        getPopup() {
            axios({
                method: 'get',
                url: 'https://clipclopz.io/clipclopzback/wp-json/wp/v2/pages/7',
            }).then((res) => {
                this.popupInfos = res.data.acf.popups;
                if (!this.popupInfos.length) {
                    this.isPopupContainer = false;
                }
            });
        },
        getIntro() {
            axios({
                method: 'get',
                url: 'https://clipclopz.io/clipclopzback/wp-json/wp/v2/pages/9',
            }).then((res) => {
                this.intro = res.data.acf;
            });
        },
        checkPopupContainer() {
            if (document.querySelectorAll('.pop-up').length <= 1) {
                this.isPopupContainer = false;
            }
        },
        closePopupContainer() {
            this.isPopupContainer = false;
        },
        getMemberStatus() {
            axios({
                method: 'get',
                url: 'https://clipclopz.io/clipclopzback/wp-json/wp/v2/pages/156',
            }).then((res) => {
                this.isMember = res.data.acf.is_membership;
            });
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
        this.getIntro();
    },
    mounted() {
        this.getFooterSNS();
        this.getPopup();
        this.getMemberStatus();
    },
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

    &__email-container {
        form {
            display: flex;
            border-radius: 5px;
            overflow: hidden;
            margin-top: 10px;
            button,
            input {
                font-family: pretendard, Arial, Arial, Helvetica, sans-serif;
                padding: 5px 10px;
                border: 0;
                outline: 0;
                background: white;
                border-radius: 0;
                font-weight: 600;
            }
            button {
                background: rgb(70, 70, 70);
                color: white;
                font-weight: 700;
            }
        }
    }
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
        gap: 5px;
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
        svg,
        img {
            height: 35px;
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

.mail-status-popup {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    background: black;
    font-size: 15px;
    font-weight: 700;
    z-index: 9999;
    text-align: center;
    color: #ecb320;
}

.pop-up-container {
    width: 100vw;
    height: 100vh;
    position: fixed;
    z-index: 991;
    padding: 30px;
    display: flex;
    background: rgba(0, 0, 0, 0.7);
    backdrop-filter: blur(3px);
    gap: 15px;
    align-items: flex-start;
}
@include mobile {
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
        flex-direction: column;
        gap: 15px;
        padding: 30px 25px;
        &__main-logo-container {
            position: static;
            width: 100%;
            max-width: 100%;
            display: flex;
            justify-content: center;
            transform: translate(0);
            svg {
                width: 150px;
            }
        }
        &__sns-container {
            justify-content: center;
        }
        &__email-container {
            form {
                input {
                    flex: 1;
                }
            }
        }
    }

    .pop-up-container {
        flex-direction: column;
        overflow: scroll;
        padding: 15px;
    }
}

@media (hover: hover) {
    .footer {
        &__email-container {
            button:hover {
                cursor: pointer;
            }
        }
    }
}
</style>
