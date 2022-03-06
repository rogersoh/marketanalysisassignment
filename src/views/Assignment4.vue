<template>
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-12">
        <h1>Assignment 4: Analyse Awareness and Engagement</h1>
        <p>
          For this assignment compute the following KPIs and present it with an
          appropriate visual.
        </p>
        <ul>
          <li>Brand Awareness Index by channel</li>
          <li>No of New Customers</li>
          <li>No of Loyal Customers</li>
        </ul>
        <div class="embed-responisve embed-responsive-16by9">
          <iframe
            class="embed-responsive-item"
            title="Market Analysis assignment 4 Soh Eng Khiong v2"
            width="1024"
            height="600"
            src="https://app.powerbi.com/view?r=eyJrIjoiOWFhOGRlZDItNTYxMC00ZGY2LTkzMWMtNTQ0ZWE3NzE4ZWVhIiwidCI6IjE5YjYyNGNlLTUyNGItNDE1MS05YjU4LWE4ZjBkYTU3NGFlYSIsImMiOjEwfQ%3D%3D&pageName=ReportSection97b6191a4b3964ec1e85"
            frameborder="1"
            allowFullScreen="true"
          ></iframe>
        </div>
      </div>
    </div>
  </div>

  <div class="container">
    <div class="row justify-content-center">
      <div class="col-lg-12, col-xl-6">
        <h5>My understanding and assumption of the dataset</h5>
        <p>
          <span class="font-weight-bold">New customers:</span> Answered 1 in the
          Q: "Are you first time buyer?". For Yes/No answer, I take it as 1 for
          Yes and 0 for No. The Data Legend have some missing information
          especially of those answered 0.
        </p>
        <p>
          <span class="font-weight-bold">Loyal customers:</span> Are those
          answered 1 in "Have you purchased our product before" and answer less
          than 4 in the question "I look for other products before buying our
          product". Because I assume they are loyal customer as they do not
          consider buy other company product before they buy our product.
        </p>
        <p>
          I assume all shopper are aware of our brand, and the question "Where
          have you seen or heard about our brand recently?" have covered all
          possible channel on where they get awareness of our brand. However,
          there is some who answered "0" in the survey, I will that is as they
          did not answered that question.
        </p>
      </div>
      <div class="col-lg-12, col-xl-6">
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
        <p>
          The rest of the pages showing the visuals of New Customers, Loyal
          Customers, and Channel have more detail for the line manager to drill
          into for their analysis.
        </p>
        <p>
          Donuts chart is effective to show the ratio of the category being
          analyse. While the bar and column chart can give the indication of the
          overall quanity.
        </p>
      </div>
    </div>
    <div class="row">
      <div class="col-lg-12, col-xl-12">
        <h5>Data cleaning</h5>
        <p class="font-weight-bold">
          Converting the number answer into readable text
        </p>
        <p>
          I am mostly using calculated column to convert the number into
          readable text instead of conditional column in the data queries. There
          is many instance of correspond value to text, and using calculated
          column I can 'cut and paste'.
        </p>
        <pre>
          <code>
            Brand = CONCATENATE("Brand ", 
            'Survery Data'[Which brand comes to mind as your top choice?])
            </code>
          <code>
            channel = SWITCH('Survery Data'[Where have you seen or heard 
            about our brand recently?],0, "No Answer", 1, "Friends", 2, 
            "Family", 3, "Collegues", 4, "Social Media", 5, "Advertisement" , 
            6, "Instore", 7, "Other")
            </code>
          <code>
            customerType = if('Survery Data'[Are you first time buyer?]=1, 
            "New", if(AND('Survery Data'[Have you purchased our product 
            before?],if('Survery Data'[I Look for other products before 
            buying our product]&lt;4,1,0)),"Loyal", "No purchase yet"))
          </code>
        </pre>
        <p></p>
        <p></p>
      </div>
    </div>
  </div>
</template>

<script>
import { logEvent } from "firebase/analytics";
import { analytics } from "@/firebase/config";
const log = logEvent(analytics, "page_view", {
  page_title: "Assignment 4",
});
log;
export default {
  name: "Assignment4",
  title: "Assignment 4",
};
</script>

<style></style>
