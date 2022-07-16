<template>
    <div class="gallery">
        <h2>Gallery</h2>
        <div class="gallery-img-list">
            <template v-for="(img, index) in 200">
                <img :src="require(`../assets/gallery/${img}.png`)" :key="index" alt="" />
            </template>
        </div>
    </div>
</template>
<script>
export default {
    name: 'Gallery',
    props: ['lang'],
    data() {
        return {};
    },
};
</script>
<style lang="scss" scoped>
@import '../assets/scss/variable.scss';
h2 {
    max-width: 1200px;
    text-align: center;
    margin: 0 auto;
    margin-top: 100px;
    margin-bottom: 100px;
}
.gallery-img-list {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    padding: 30px;
    justify-content: center;
    max-width: 1200px;
    margin: 0 auto;
    img {
        width: calc((100% - 40px) / 3);
    }
}
@include mobile {
    h2 {
        margin-top: 30px;
        margin-bottom: 30px;
    }
    .gallery-img-list {
        padding: 15px;
        padding-top: 0;
        gap: 15px;
        img {
            width: calc((100% - 30px) / 2);
        }
    }
}
</style>
