<template>
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-12">
        <h1>Analytics Implement Project Capstone</h1>
        <h6>Still work in progress</h6>
      </div>
    </div>
  </div>

  <div class="container">
    <div class="row">
      <div class="col-md-12 my-3">
        <h5>Project Background</h5>
        <p>
          Popfiery is a supermarket chain. The company continues looking into
          improvement in their operation. Popfiery wants to improve its store
          operation in the following area:
        </p>
        <ul>
          <li>The store's architecture and aesthetics</li>
          <li>Functions of Customer Service</li>
          <li>Control of Inventories</li>
          <li>Administration</li>
          <li>Management of the Store</li>
        </ul>
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
            src="https://app.powerbi.com/view?r=eyJrIjoiZTMyNTU5MWItNmI2YS00NjMwLWEzODYtMWRlYzg2YzBiMTM5IiwidCI6IjE5YjYyNGNlLTUyNGItNDE1MS05YjU4LWE4ZjBkYTU3NGFlYSIsImMiOjEwfQ%3D%3D&pageName=ReportSection9d229e071c34765dc602"
            frameborder="1"
            allowFullScreen="true"
          ></iframe>
        </div>
      </div>
    </div>
  </div>

  <!--   using vue.js data for card -->
  <div class="container">
    <div class="row justify-content-center">
      <template v-for="task in tasks" v-bind:key="task.Name">
        <div class="col-12 col-md-5 col-xl-3 my-3">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">{{ task.Name }}</h5>
              <button
                type="button"
                class="btn btn-brand"
                data-toggle="modal"
                v-bind:data-target="task.target"
              >
                Details
              </button>
            </div>
          </div>
        </div>

        <div
          class="modal fade"
          v-bind:id="task.id"
          tabindex="-1"
          aria-labelledby="taskModalLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog modal-dialog-centered modal-xl">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title">
                  {{ task.LongName }}
                </h5>
                <button
                  type="button"
                  class="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="container">
                <span v-html="task.contentHtmlText"></span>
                <div v-if="task.image !== ''">
                  <img v-bind:src="require(`../assets/image/${task.image}`)" />
                </div>
              </div>
              <div class="modal-footer">
                <button
                  type="button"
                  class="btn btn-brand"
                  data-dismiss="modal"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      </template>
    </div>
  </div>

  <div class="container"></div>
</template>

<script>
/* import { logEvent } from "firebase/analytics";
import { analytics } from "@/firebase/config";
const log = logEvent(analytics, "page_view", {
  page_title: "Project Capstone",
});
log; */
export default {
  data() {
    return {
      tasks: [
        {
          Name: "Project objective, requirement, and specification",
          LongName: "Project objective, requirement, and specification",
          target: "#objective1",
          id: "objective1",
          contentHtmlText: objectivetext(),
          image: "",
        },
        {
          Name: "Active 1: Define task",
          LongName:
            "Activity 1: Define the retail operations management tasks and inventory planning processes required to build a long-term relationship with its customers",
          target: "#Activity1",
          id: "Activity1",
          contentHtmlText: activity1text(),
          image: "capstone/relationshiptable.svg",
        },
        {
          Name: "Activity 2: Plan the inventory to measure the performance.",
          LongName:
            "Activity 2: Plan the inventory to measure the performance.",
          target: "#Activity2",
          id: "Activity2",
          contentHtmlText: activity2text(),
          image: "capstone/otb.png",
        },
        {
          Name: "Activity 3: Define data point requirements",
          LongName:
            "Activity 3: Determine the appropriate level and depth of information required for the management to take informed decisions and prepare the data.",
          target: "#Activity3",
          id: "Activity3",
          contentHtmlText: activity3text(),
          image: "",
        },
        {
          Name: "Activity 4: Analyse Store Performance",
          LongName: "Activity 4: Analyse the store performance",
          target: "#Activity4",
          id: "Activity4",
          contentHtmlText: activity4text(),
          image: "",
        },
        {
          Name: "Activity 5: Analyse Product Movement",
          LongName:
            "Activity 5: Analyse the sales data and understand the product demand",
          target: "#Activity5",
          id: "Activity5",
          contentHtmlText: activity5text(),
          image: "",
        },
        {
          Name: "Activity 6: Know your customer",
          LongName: "Activity 6: Know your customer",
          target: "#Activity6",
          id: "Activity6",
          contentHtmlText: activity6text(),
          image: "",
        },
        /*{
          Name: "",
          LongName: "",
          target: "",
          id: "",
          contentHtmlText: "",
        },
        {
          Name: "",
          LongName: "",
          target: "",
          id: "",
          contentHtmlText: "",
        }, */
      ],
    };

    function objectivetext() {
      return `
          <div class="row">
            <div class="col-md-12 col-lg-6">
              <h5>Project Objective</h5>
              <p>
                I am using Power BI as a visualisation tool to analyse in-depth.
              </p>
              <ul>
                <li>
                  Assess the product's effectiveness, price, process and people
                  management. There must be a chart to show how various
                  activities impact the efficacy of the product mixes and how
                  the operation impacts customer satisfaction and sales.
                </li>
                <li>
                  To analyse the sales, returns and exchanges and identify which
                  are the area that needs further improvement
                </li>
                <li>
                  To improve inventory management by identifying fast-moving,
                  slow-moving, and non-moving items.
                </li>
              </ul>
            </div>
            <div class="col-md-12 col-lg-6">
              <h5>Project Requirements Specifications</h5>
              <ul>
                <li>
                  Power BI Desktop for the visualisation and data preparation
                </li>
                <li>Excel for the dataset</li>
                <li>Word for the reports</li>
                <li>Power BI Service of the presentation</li>
              </ul>
            </div>
          </div>
          `;
    }
    function activity1text() {
      return `
          <div class="col-lg-12, col-xl-12">
            <p class="font-weight-bold">Functional Specification:</p>
            <ul>
              <li>
                Data points include Sales data, inventory data, product category
                table, and customer information. All these data can be retrieved
                from the company database.
              </li>
              <li>
                Transform the dataset and set up the relationship between the
                various tables. Create the required calculated columns and
                measures for the KPI indices
              </li>
              <li>
                Use appropriate visuals and dashboards for effective analysis of
                the data.
              </li>
              <li>
                The visuals must allow the user to drill deeper to know the
                relationship between data points.
              </li>
              <li>Visual for Store performance by Inventory</li>
              <li>KPI to analyse the store performance</li>
              <li>Sales data to understand the product demand</li>
              <li>
                Customer feedback, reviews, traffic and purchase behaviour, and
                identify marketing mixes
              </li>
              <li>Employee performance evaluation</li>
            </ul>
            <p class="font-weight-bold">Non-Functional Specification:</p>
            <table class="table table-bordered table-responsive">
              <tr>
                <td>Performance</td>
                <td>
                  The report must be successfully loaded within 5 seconds when
                  co-users are more than 100.
                </td>
              </tr>
              <tr>
                <td>Capacity</td>
                <td>
                  The Server must have the capacity to handle 50 users at the
                  same time.
                </td>
              </tr>
              <tr>
                <td>Availability</td>
                <td>
                  The Server should be available at all times except for
                  scheduled maintenance time.
                </td>
              </tr>
              <tr>
                <td>Security</td>
                <td>
                  The Server must be resilient and resistant to external virus
                  attacks and constantly run antiviurs software to maintain a
                  healthy operational status
                </td>
              </tr>
              <tr>
                <td>Accessiblility</td>
                <td>
                  The Popfiery visualisation in Power Bi must be accessible to
                  all authorise user
                </td>
              </tr>
              <tr>
                <td>Portability</td>
                <td>It must be able to work with mobile device</td>
              </tr>
            </table>
            <p class="font-weight-bold">Technical specification:</p>
            <ul>
              <li>Computer using Windows 10 operating system and Mac</li>
              <li>Azure SQL database</li>
              <li>Internet connection</li>
              <li>Power BI Service</li>
              <li>Microsoft Excel</li>
              <li>Word</li>
            </ul>
            <table class="table table-bordered table-responsive">
              <tr class="font-weight-bold">
                <td>Page Name</td>
                <td>Report.Visual</td>
                <td>Data Points</td>
              </tr>
              <tr>
                <td class="font-weight-bold">Store</td>
                <td>
                  Store Gross Sale/sq area<br />
                  Store Gross Sale<br />
                  Store location map<br />
                  Store Sale Amount and Return Amount<br />
                  Sales by Store type
                </td>
                <td>
                  <span class="font-weight-bold">Table:</span> FactSales,
                  DimStore<br />
                  <span class="font-weight-bold"
                    >Calculated column, measures<br
                  /></span>
                  Gross Sale = SaleAmount – ReturnAmount<br />
                  <span class="font-weight-bold">Data points<br /></span>
                  StoreKey, StoreName, StoreLocation, SaleAmount, ReturnAmount,
                  SaleQuantity, StoreType
                </td>
              </tr>
              <tr>
                <td class="font-weight-bold">Product</td>
                <td>
                  Product Contribution Margin<br />
                  Inventory Turnover
                </td>
                <td>
                  <span class="font-weight-bold">Table:</span> FactSales,
                  FactInventory<br />
                  <span class="font-weight-bold"
                    >Calculated column, measures </span
                  ><br />
                  Product Contribution Margin = Total sales - variable cost<br />
                  <span class="font-weight-bold">Data points</span><br />
                  ProductCategory, ProductSubCategory, Brand, inventory amount,
                  total sales, COGS
                </td>
              </tr>
              <tr>
                <td class="font-weight-bold">Sales</td>
                <td>
                  Gross Margin<br />
                  Margin%
                </td>
                <td>
                  <span class="font-weight-bold">Table:</span> DimProduct,
                  DimProductCategory, DimProductSubcategory, FactSales <br />
                  <span class="font-weight-bold"
                    >Calculated column, measures <br
                  /></span>
                  Gross Margin = Total sales – COGS<br />
                  Margin% = (Retail price – Cost price)/Retail price
                  <br />
                  <span class="font-weight-bold">Data points<br /></span>
                  Product Category, Product Subcategory, Total Cost, Sale
                  Amounts
                </td>
              </tr>
              <tr>
                <td class="font-weight-bold">Customer</td>
                <td>
                  Customer location<br />
                  Customer rating<br />
                  Customer yearly income<br />
                  Customer gender<br />
                  Customer type
                </td>
                <td>
                  <span class="font-weight-bold">Table:</span> DimCustomer<br />
                  <span class="font-weight-bold">Data points</span><br />
                  Location, rating, yearly income, gender, type, company name
                </td>
              </tr>
              <tr>
                <td class="font-weight-bold">Employee</td>
                <td>
                  Total Employees<br />
                  Employee's status in the company<br />
                  Employee's years of service<br />
                  Department
                </td>
                <td>
                  <span class="font-weight-bold">Table:</span> DimEmployee<br />
                  <span class="font-weight-bold">Data points</span><br />
                  Status, HireDate, DepartmentName
                </td>
              </tr>
              <tr>
                <td class="font-weight-bold">Promotion</td>
                <td>
                  Promotion discount percent vs sales<br />
                  Promotion type vs sales<br />
                  Promotion name vs sales
                </td>
                <td>
                  <span class="font-weight-bold">Table:</span> DimPromotion,
                  FactSales<br />
                  <span class="font-weight-bold">Data points</span><br />
                  PromotionType, PromotionName, DiscountPercent, Sale Amount
                </td>
              </tr>
            </table>
            <p class="font-weight-bold">
              Relationship between tables
            </p>
          </div>`;
    }
    function activity2text() {
      return `
          <div class="col-lg-12, col-xl-12">
            <p>
              August's beginning of month inventory is lower than July because
              of the lower sales volume expected in August. And it will drop
              further in September and October
            </p><p>
                There is a lower inventory level for September and October and an
                increase in the markdown because these months have significant
                sales.
              </p><p>
                December has high sales volume because of the holiday seasons and
                year-end. Thus we need to increase the inventory. There is no need
                for markdown as the sales volume is high.
          </div>`;
    }
    function activity3text() {
      return `<div class="col-lg-12, col-xl-12">
            <p class="font-weight-bold">Cleaning the data</p>
            <p>
              Check for missing data, delete column that have 100% blank data,
              or column that is not useful for the data analysis.
            </p>
            <table class="table table-bordered table-responsive">
              <tr class="font-weight-bold">
                <td>Table Name</td>
                <td>Delete column</td>
                <td>Reason for delete</td>
              </tr>
              <tr>
                <td class="font-weight-bold">All tables</td>
                <td>ETLLoadID, LoadDate, UpdateDate</td>
                <td>Not useful for data analysis</td>
              </tr>
              <tr>
                <td class="font-weight-bold">DimEmployee</td>
                <td>Title</td>
                <td>100% Blank data</td>
              </tr>
              <tr>
                <td class="font-weight-bold">DimProduct</td>
                <td>
                  ImageURL, ProductURL, StopSaleDate, SizeRange,
                  SizeUnitMeasureID
                </td>
                <td>100% Blank data</td>
              </tr>
              <tr>
                <td class="font-weight-bold">DimPromotion</td>
                <td>MinQuantity, MaxQuantity</td>
                <td>100% Blank data</td>
              </tr>
              <tr>
                <td class="font-weight-bold">FactInventory</td>
                <td>CurrencyKey</td>
                <td>Not useful for data analysis, all currency key is 1.</td>
              </tr>
              <tr>
                <td class="font-weight-bold">FactSales</td>
                <td>CurrencyKey</td>
                <td>Not useful for data analysis, all currency key is 1.</td>
              </tr>
            </table>
            <p class="font-weight-bold">Transform data</p>
            <table class="table table-bordered table-responsive">
              <tr class="font-weight-bold">
                <td>Table Name</td>
                <td>Column</td>
                <td>Transform/Data category</td>
              </tr>
              <tr>
                <td class="font-weight-bold">DimGeography</td>
                <td>
                  ContinentName<br />
                  CityName<br />
                  StateProvinceName<br />
                  RegionCountryName
                </td>
                <td>
                  Continent<br />
                  City<br />
                  State or Province<br />
                  Country
                </td>
              </tr>
              <tr>
                <td class="font-weight-bold">DimProduct</td>
                <td>UnitCost, UnitPrice</td>
                <td>Currency</td>
              </tr>
              <tr>
                <td class="font-weight-bold">FactSales</td>
                <td>
                  UnitCost, UnitPrice, DiscountAmount, ReturnAmount, SalesAmount
                </td>
                <td>Currency</td>
              </tr>
              <tr>
                <td class="font-weight-bold">DimCustomer</td>
                <td>CustomerLabel</td>
                <td>
                  Text (some of the customer labels contain letters so need to
                  transform to text)
                </td>
              </tr>
              <tr>
                <td class="font-weight-bold">DimEmployee</td>
                <td>Status</td>
                <td>
                  Created calculated column Status_edited to replace "NULL" in
                  Status, and EndDate is not blank to "Resigned."
                </td>
              </tr>
            </table>
            <p>
              Calculated columns and measures will be created as needed during
              the visualisations
            </p>`;
    }
    function activity4text() {
      return `<div class="col-lg-12, col-xl-12">
            <p>
              KPI selected for the store are the Gross Sale per Selling Area and
              Gross Sale per employee. Instead of only comparing the total gross
              sale amount, the index normalises the store for better performance
              evaluation. And the store is further drilled down into its store
              type for comparison among the same type.
            </p>
            <p>
              As there is many stores, we have the top 10 and bottom 10
              performing stores in each dashboard.
            </p>
            <p>
              The SellingAreaSize of the Contosa Asia Online Store is
              significant times higher than the other online store. The area is
              90 times bigger compare to the 2nd largest online store.
            </p>
            <p class="font-weight-bold">Calculated column and measures</p>
            <table class="table table-bordered table-responsive">
              <tr class="font-weight-bold">
                <td>Table Name</td>
                <td>Calculated column or measure</td>
              </tr>

              <tr>
                <td class="font-weight-bold">FactSales</td>
                <td>
                  <p class="font-weight-bold">Column</p>
                  <p>COGS = FactSales[UnitCost]* FactSales[SalesQuantity]</p>
                  <p>
                    netSales =
                    FactSales[totalSales]-FactSales[DiscountAmount]-FactSales[ReturnAmount]
                  </p>
                  <p>
                    totalSales = FactSales[UnitPrice] * FactSales[SalesQuantity]
                  </p>
                  <p class="font-weight-bold">Measure</p>
                  <p>countMonth = DISTINCTCOUNT(FactSales[month])</p>
                  <p>
                    grossMargin =
                    sum(FactSales[totalSales])-sum(FactSales[COGS])
                  </p>
                  <p>
                    margin%_measure = DIVIDE((SUM(FactSales[UnitPrice])-
                    SUM(FactSales[UnitCost])), SUM(FactSales[UnitPrice]))
                  </p>
                  <p>
                    salePerEmployee = DIVIDE( SUM(FactSales[netSales]),
                    sum(DimStore[EmployeeCount]))
                  </p>
                  <p>
                    SPSF = divide( sum(FactSales[netSales]),
                    SUM(DimStore[SellingAreaSize]))
                  </p>
                </td>
              </tr>
              <tr>
                <td class="font-weight-bold">DimStore</td>
                <td>
                  <p>
                    lat = MID(DimStore[GeoLocation], FIND("
                    ",DimStore[GeoLocation],8)+1,
                    FIND(")",DimStore[GeoLocation])-FIND(" ",
                    DimStore[GeoLocation],8) - 1 )
                  </p>
                  <p>
                    long = MID(DimStore[GeoLocation],
                    FIND("(",DimStore[GeoLocation])+1, FIND(" ",
                    DimStore[GeoLocation], 8)-FIND("(",DimStore[GeoLocation])-1)
                  </p>
                </td>
              </tr>
            </table>
            <p>
              <span class="font-weight-bold">Filter on Store page:</span>
              CloseReason is not Relocation or Store
            </p>
            <p>
              Filter is done to remove closed store from the store analysis data
            </p>
            <p>The dashboards for Store performance is Store, Store Top 10, and Store Bottom 10</p>
          </div>`;
    }
    function activity5text() {
      return `<div class="col-lg-12, col-xl-12">
            <ul>
              <li>
                Decide on the suitable KPI to identify the product movement.
              </li>
              <li>
                Analyse the product movement based on location, category,
                supplier, and others based on the datapoints
              </li>
              <li>
                Recommend the list of products to purchase to manage the
                inveontry efficiently.
              </li>
              <li>
                Recommend the list of products to markup or markdown the price
                based on the movement.
              </li>
            </ul>

            <p class="font-weight-bold">Reorder</p>
            <p>
              Criteria for reordering is when the stock on hand quantity is less
              than the minimum day in-stock quantity. I set the reorder quantity
              at 10% higher to meet the minimum day in-stock quantity, and the
              reorder cost is the amount needed to place this order. The reorder
              quantity and cost are created as a calculated column instead of a
              new measure to allow for more effective subtotal in the various
              visual groups.
            </p>
            <p class="font-weight-bold">Markdown</p>
            <p>
              Criteria for markdown is when the stock on hand quantity is more
              than the max day in-stock quantity. We want to increase the sales
              quantity of these markdown products to reduce the inventory space
              and the inventory cost. The Reorder and Markdown are based on the
              latest month and year in the FactInventory.
            </p>
            <p class="font-weight-bold">Markup</p>
            <p>
              Criteria for markup is the top 3 selling products in 2009. The
              dashboard for the mark up can be drilled down for Country, Store,
              Product Category and Product Subcategory for the management to
              adjust according to individual country and store.
            </p>
            <p class="font-weight-bold">Calculated Column and Measures</p>
            <table class="table table-bordered table-responsive">
              <tr class="font-weight-bold">
                <td>Table</td>
                <td>Calculated Column and Measure</td>
              </tr>
              <tr>
                <td class="font-weight-bold">FactInventory</td>
                <td>
                  <p class="font-weight-bold">Columns</p>
                  <p>
                    markdown? =
                    if( FactInventory[DaysInStock] > FactInventory[MaxDayInStock], TRUE(), FALSE())
                  </p>
                  <p>
                    reorder? =
                    if( FactInventory[MinDayInStock] > FactInventory[DaysInStock], TRUE(), FALSE())
                  </p>
                  <p>
                    reorderCost = IF( FactInventory[reorder?],
                    FactInventory[reorderQty] * FactInventory[UnitCost],
                    BLANK())
                  </p>
                  <p>
                    reorderQty = IF( FactInventory[reorder?], ROUNDUP(
                    (DIVIDE ( FactInventory[OnHandQuantity],
                    FactInventory[DaysInStock] ) * FactInventory[MinDayInStock] - FactInventory[OnHandQuantity] )
                    * 1.1, 0), BLANK())
                  </p>
                </td>
              </tr>
              <tr>
                <td class="font-weight-bold">FactSales</td>
                <td>
                  <p class="font-weight-bold">Measures</p>
                  <p>
                    return % = DIVIDE( SUM( FactSales[ReturnQuantity]) ,
                    SUM( FactSales[SalesQuantity] ))
                  </p>
                  <p>
                    UPT = SUM( FactSales[SalesQuantity]) / COUNTROWS(FactSales) 
                  </p>
                </td>
              </tr>
            </table>
            <p>
              The dashboards for inventory product movement is Product Movement
              1, Product Movement 2, Product Reorder, Mark down, and Mark up
            </p>
          </div>`;
    }
    function activity6text() {
      return `
    <div class="col-lg-12, col-xl-12">
      <p>
        Consider the suitable KPI and create the reports to understand the
        customer.
      </p>
      <p>Identify the popular campaign among your customers</p>
      <p>Identify the right marketing mix and reflect.</p>
      <p></p>
      <p class="font-weight-bold">KPIs</p>
      <ul>
        <li>
          FDT - Foot & Digital Traffic is the number of people visiting the
          store (it does not matter whether they had made a purchase). As the
          data set did not measure the foot traffic, we will get just the number
          of sales transactions.
        </li>
        <li>
          Average Transaction Values: It is the average transaction amount per
          transaction.
        </li>
        <li>
          Rating – Consumer satisfaction rating. The satisfaction rating range
          from 1 (Extremely Dissatisfied) to 5 (Extremely Satisfied)
        </li>
      </ul>
      <p class="font-weight-bold">Calculated Column, Measures, and Bin</p>
      <table class="table table-bordered table-responsive">
        <tr class="font-weight-bold">
          <td>Table</td>
          <td>Calculated column, measure, bin</td>
        </tr>
        <tr>
          <td>FactSales</td>
          <td>
            <p>Measures</p>
            <p>
              averageTransactionValue = SUM( FactSales[totalSales] ) /
              COUNTROWS( FactSales )
            </p>
          </td>
        </tr>
        <tr>
          <td>DimCustomer</td>
          <td>
            <p>Column</p>
            <p>
              age = if( ISBLANK( DimCustomer[BirthDate] ), BLANK() , 2010 -
              year( DimCustomer[BirthDate] ))
            </p>
            <p>
              ratingDesc = SWITCH( DimCustomer[Rating], 1, "1 Extremely
              Dissatisfied", 2, "2 Dissatisfied", 3, "3 Neutral", 4, "4
              Satisfied", 5, "5 Extremely Satisfied")
            </p>
            <p>Bin group</p>
            <p>
              ageGroup = IF(INT( DimCustomer[age]/10 ) >= 8, "80 and above",
              SWITCH( INT( DimCustomer[age]/10 ), 3, "30 - 39", 4, "40 - 49", 5,
              "50 - 59", 6, "60 - 69", 7, "70 - 79"))
            </p>
            <p>
              yearIncomeGrp = IF(DimCustomer[CustomerType] == "Company",
              BLANK(), IF( ISBLANK( DimCustomer[YearlyIncome] ), "Not
              Disclosed", SWITCH( INT( DimCustomer[YearlyIncome] / 50000), 0,
              "below 50K", 1, "50K - 99K", 2, "100K - 149K", 3, "150K and above"
              )))
            </p>
          </td>
        </tr>
        <tr>
          <td>DimPromotion</td>
          <td>
            <p>Column</p>
            <p>duration = DimPromotion[EndDate] - DimPromotion[StartDate]</p>
            <p>Measure</p>
            <p>
              transaction/days = COUNTX(FactSales, FactSales[SalesKey])/ SUMX(
              DimPromotion, DimPromotion[PromotionDay])
            </p>
            <p>
              MarginPerDay = (SUMX(FactSales, FactSales[netSales]) -
              SUMX(FactSales, FactSales[COGS])) / SUMX(DimPromotion,
              DimPromotion[PromotionDay])
            </p>
          </td>
        </tr>
      </table>
    </div>      
      `;
    }
  },
  name: "ProjectCapstone",
  title: "Project Capstone",
};
</script>

<style></style>
