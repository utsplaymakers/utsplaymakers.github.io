<template>
  <div>
    <scroll-fixed-header :fixed.sync="fixed" :threshold="56">
      <div class="shane_tm_topbar">
        <div class="topbar_inner">
          <div class="logo">
            <router-link to="/">
              <img src="../assets/img/logo/new/dark.png" alt="partners brand" />
            </router-link>
          </div>
          <!-- End logo -->
          <div class="menu">
            <scrollactive
              class="anchor_nav"
              bezier-easing-value=".5,0,.35,1"
              :offset="95"
              :duration="100"
              :alwaysTrack="true"
            >
              <a href="#home" class="scrollactive-item">Home</a>
              <a href="#about" class="scrollactive-item">About</a>
              <a href="#portfolio" class="scrollactive-item">Portfolio</a>
              <a href="#news" class="scrollactive-item">News</a>

              <a
                class="white-fill-bg btn-outline btn_sm"
                target="_blank"
                rel="noreferrer"
                href="#"
              >
                Buy Now
              </a>
            </scrollactive>
          </div>
          <!-- End menu -->
        </div>
      </div>
      <!--  End shane_tm_topbar -->
    </scroll-fixed-header>

  </div>
</template>

<script>

export default {
  components: {

  },
  data() {
    return {
      active: false,
      fixed: false,
    };
  },
};
</script>

<style lang="scss" scoped></style>
