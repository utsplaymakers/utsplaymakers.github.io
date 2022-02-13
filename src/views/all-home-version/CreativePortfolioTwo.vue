<template>
  <div class="home-four">
    <Header />
    <Slider />
    <!-- End Slider Section -->


    <div class="shane_tm_section" id="portfolio">
      <div class="shane_tm_portfolio">
        <Portfolio />
      </div>
    </div>
    <!-- End Portfolio Section -->

    <div class="shane_tm_section" id="news">
      <div class="shane_tm_news">
        <div class="container">
          <div class="shane_tm_title">
            <span>News</span>
            <h3>Latest News</h3>
          </div>
          <!-- End shane_tm_title -->
          <News />
          <!-- End news  -->
        </div>
      </div>
    </div>
    <!-- End  news -->


    <!-- End  call to actions -->

    <Footer />
    <!-- End  footer  -->
  </div>
</template>

<script>
import Slider from "../../components/slider/SliderFour";
import Header from "../../components/Header"
import Portfolio from "../../components/portfolio/PortfolioTwo";



import News from "../../components/news/NewsTwo";

import Footer from "../../components/Footer";
export default {
  components: {
    Slider,
    Header,
    Portfolio,


    News,

    Footer,
  },
};
</script>

<style lang="scss" scoped></style>
