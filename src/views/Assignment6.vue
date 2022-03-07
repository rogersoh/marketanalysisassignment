<template>
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-12">
        <h1>Assignment 6: Marketing and Sales</h1>
        <h6>Still work in progress</h6>
        <p>
          For this assignment consider the following KPIs and create the
          Marketing performance dashboard.
        </p>
        <ul>
          <li>Click Through Rate (CTR)</li>
          <li>Cost per Click (CPC)</li>
          <li>Cost per Acquisition (CPA)</li>
        </ul>
        <div class="embed-responisve embed-responsive-16by9">
          <iframe
            class="embed-responsive-item"
            title="Market Analysis assignment 6 Soh Eng Khiong"
            width="1024"
            height="612"
            src="https://app.powerbi.com/view?r=eyJrIjoiNGUxNDllZTUtZGNkYS00MmM2LWIyYTEtZWRjNjUyZTA1ZTQ5IiwidCI6IjE5YjYyNGNlLTUyNGItNDE1MS05YjU4LWE4ZjBkYTU3NGFlYSIsImMiOjEwfQ%3D%3D"
            frameborder="1"
            allowFullScreen="true"
          ></iframe>
        </div>
      </div>
    </div>
  </div>

  <div class="container">
    <div class="row justify-content-center">
      <div class="col-lg-6, col-xl-6">
        <h5>My understanding and assumption of the dataset</h5>
      </div>
      <div class="col-lg-6, col-xl-6">
        <h5>My choice of the PowerBi layout</h5>
        <p>
          Power Bi service is selected as the visualisation tool because it
          allows the user to drill down deep into each category and
          corresponding visual reflect the detail of their choice.
        </p>
        <p>
          My layout choice is that I choose the place the "Overview" as the
          first contents page before the Top management can quickly have an
          summary of the key information he need on the awareness channel and
          the customers profile.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import { logEvent } from "firebase/analytics";
import { analytics } from "@/firebase/config";
const log = logEvent(analytics, "page_view", {
  page_title: "Assignment 6",
});
log;
export default {
  name: "Assignment6",
  title: "Assignment 6",
};
</script>

<style></style>
