<template>
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-12">
        <h1>Selected Consumer Item Price from 2010 to 2021</h1>
      </div>
    </div>
  </div>

  <div class="container">
    <div class="row">
      <div class="col-md-12 my-3">
        <h5>Background</h5>
        <p>
          Average prices compiled are based on monthly retail prices of selected
          goods and services collected from a wide range of retailers and
          service providers commonly patronised by resident households in
          Singapore.
        </p>
        <p>
          Prices of items starting from January 2019 are based on the 2019-based
          CPI basket. While they are indicative of the average transaction price
          levels in the same base period, they are not a measure of pure price
          movements across CPI baskets due to changes in the sample of
          brands/varieties and outlets priced.
        </p>
      </div>
    </div>
  </div>
  <!--   embed PowerBI -->
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-12">
        <div class="embed-responisve embed-responsive-16by9">
          <iframe
            class="embed-responsive-item"
            title="Analytic Implementation Project Capstone"
            width="1024"
            height="612"
            src="https://app.powerbi.com/view?r=eyJrIjoiMmEzYjQ5NmUtZDBmYi00Yzg4LWE0ODUtZDUyMTgwOTk5OGJlIiwidCI6IjE5YjYyNGNlLTUyNGItNDE1MS05YjU4LWE4ZjBkYTU3NGFlYSIsImMiOjEwfQ%3D%3D&pageName=ReportSection"
            frameborder="1"
            allowFullScreen="true"
          ></iframe>
        </div>
      </div>
    </div>
  </div>

  <div class="container">
    <div class="row justify-content-center">
      <div class="col-12">
        <h5></h5>
      </div>
    </div>
  </div>
</template>

<script>
/* import { logEvent } from "firebase/analytics";
import { analytics } from "@/firebase/config";
const log = logEvent(analytics, "page_view", {
  page_title: "Consumer Item Price",
});
log; */
export default {
  name: "ConsumerItemPrice",
  title: "Consumer Item Price",
};
</script>

<style></style>
