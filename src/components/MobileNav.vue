<template>
    <div class="mobile-nav">
        <div class="exit" @click="toggleMobileMenu">EXIT</div>
        <ul>
            <router-link to="/home/#buy-a-horse" @click.native="setNavHeight">BUY A HORESE</router-link>
            <router-link to="/home/#roadmap" @click.native="setNavHeight">ROADMAP</router-link>
            <router-link to="/home/#team" @click.native="setNavHeight">TEAM</router-link>
            <router-link to="/gallery">GALLERY</router-link>
            <!-- <router-link to="/home/#member" @click.native="setNavHeight">MEMBER</router-link> -->
            <router-link to="/contest">CONTEST</router-link>
        </ul>
    </div>
</template>

<script>
export default {
    props: ['mobileMenuOn'],
    methods: {
        toggleMobileMenu() {
            this.$emit('toggleMobileMenu', !this.mobileMenuOn);
        },
    },
};
</script>

<style lang="scss" scoped>
@import '../assets/scss/variable.scss';
.mobile-nav {
    background: black;
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    color: white;

    z-index: 99;
    padding: 15px;
    ul {
        display: flex;
        flex-direction: column;
        border-top: 1px solid white;
        a {
            border-bottom: 1px solid white;
            padding: 10px;
        }
    }

    .exit {
        background: $orange;
        border-radius: 5px;
        color: black;
        width: 35%;
        padding: 5px 15px;
        text-align: center;
        margin-left: auto;
        margin-right: 0;
        margin-bottom: 30px;
    }
}
</style>
