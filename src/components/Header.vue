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


              <a
                class="white-fill-bg btn-outline btn_sm"
                target="_blank"
                rel="noreferrer"
                href="https://discord.gg/CMD2YPG"
              >
                Discord
              </a>


              <a
                class="white-fill-bg btn-outline btn_sm"
                target="_blank"
                rel="noreferrer"
                href="https://www.facebook.com/utsplaymakers"
              >
                Facebook
              </a>


              <a
                class="white-fill-bg btn-outline btn_sm"
                target="_blank"
                rel="noreferrer"
                href="https://activateuts.com.au/clubs/playmakers"
              >
                Membership
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
