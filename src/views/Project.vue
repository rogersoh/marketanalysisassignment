<template>
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-12">
        <h1>Project: Marketing Analytics of Food Chain</h1>
        <div class="embed-responisve embed-responsive-16by9">
          <iframe
            class="embed-responsive-item"
            title="Market Analysis Project Soh Eng Khiong v2"
            width="1024"
            height="612"
            src="https://app.powerbi.com/view?r=eyJrIjoiMzBhZjcyMDktY2EwNC00ZDYwLThiYTgtNTc1OTYwNTU1ODQwIiwidCI6IjE5YjYyNGNlLTUyNGItNDE1MS05YjU4LWE4ZjBkYTU3NGFlYSIsImMiOjEwfQ%3D%3D"
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
        <p>Assumption I make:</p>
        <ul>
          <li>
            Survey question respondance are all F&B Fast-Food customer and it
            was done in many location, not only in Popfiery store.
          </li>
          <li>
            The surveyed responses are mostly related to their favourite fast
            food store. Except for question asking about awareness,
            recommendation, and Preferred store are related to Popfiery.
          </li>
          <li>
            The preference store, Store 1 to 5 referred to the different type of
            Popfiery store and they are all located in different States.
            Possible is that Store 1 is those mega-store restaurant with large
            sitting capacity.
          </li>
          <li>
            The questionaire for the survey is at
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSejUmYXz461d1_0WuI32a9doTqvmZuhvr8D0i9lVtAx4yrRdw/viewform?usp=sf_link"
            >
              google survey form</a
            >
          </li>
        </ul>
      </div>
      <div class="col-lg-12, col-xl-6">
        <h5>My choice of the PowerBi layout</h5>
        <p>
          Power Bi service is selected as the visualisation tool because it
          allows the user to drill down deep into each category and
          corresponding visual reflect the detail of their choice.
        </p>
        <p>
          Now is still in the first draft stage and the layout and presentation
          had not been decided yet.
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
        <h5>Preparing the data</h5>
        <p class="font-weight-bold">
          Calculated Column are mainly use for the new data.
        </p>
        <pre>
          <code>
            delivery = If(OR(demand[Preference]="Drive In", 
            demand[Preference] = "Eat In"), False, True)
          </code>
        </pre>
        <p>
          I am very lazy so instead of typing all the words in the condition I
          uses the 3 character from the left of text of the switch condition.
        </p>
        <p>
          The Monthly spend potential calculate the potential spending of the
          surveyed customer in our store.
        </p>
        <pre>
          <code>
            Monthly spend potential = SWITCH(demand[How Often], "Occasionally",
            0.25, "Once a Month", 1, "Once a week", 4, "Everyday", 30) *
            SWITCH(left(demand[amount you spent per purchase],3) ,"les", 5, "$10",
            15, "$20", 25, "$30", 35, "$40", 45, "$50", 55)
          </code>
          <code>
            Probability = (if(demand[Favourite Place]="Popfiery", 0.85, 0.2) + 
            if(demand[Near your  Place]="Popfiery", 0.85, 0.2))- (if(demand[Favourite Place]=
            "Popfiery", 0.85, 0.2) * if(demand[Near your  Place]="Popfiery", 0.85, 0.2))
          </code>
          <code>
            Projected spending = demand[Monthly spend potential] * demand[Probability]
          </code>
        </pre>
        <p>
          This is the Sale report, I am using the CONCATENATE function to change
          S1 into Store 1 and so on
        </p>
        <pre>
          <code>
            Store = CONCATENATE("Store ", RIGHT(PopfireySales[Outlet],1))
          </code>
        </pre>
      </div>
      <div class="col-lg-12, col-xl-12">
        <h5>Visualisation and relationship between table</h5>
        <p>
          I have created 2 tables. Date and F&B to link the datasets and also as
          the slicer
        </p>
        <p>The relationship link between the table is as follows.</p>
        <img
          class="img-fluid"
          src="../assets/image/module5/Relationship.svg"
          alt="Relationship between tables"
          width="800px"
        />
        <p></p>
        <p>
          The visuals are grouped into different dashboards. “Overview”
          summarises the key data for the top management. At the same time, the
          “Survey”, “Delivery”, and “Sales” dashboards are for management to
          drill deeper into the data to understand the situation.
        </p>
      </div>
    </div>
  </div>
  <p></p>
  <p></p>
</template>

<script>
/* import { logEvent } from "firebase/analytics";
import { analytics } from "@/firebase/config";
const log = logEvent(analytics, "page_view", {
  page_title: "Project",
});
log; */
export default {
  name: "Project",
  title: "Project",
};
</script>

<style></style>
