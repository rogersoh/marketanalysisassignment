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
      <div class="col-md-12, col-lg-6, col-xl-4">
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
      <div class="col-md-12, col-lg-6, col-xl-4">
        <h5>Project Objective</h5>
        <p>I am using Power BI as a visualisation tool to analyse in-depth.</p>
        <ul>
          <li>
            Assess the product's effectiveness, price, process and people
            management. There must be a chart to show how various activities
            impact the efficacy of the product mixes and how the operation
            impacts customer satisfaction and sales.
          </li>
          <li>
            To analyse the sales, returns and exchanges and identify which are
            the area that needs further improvement
          </li>
          <li>
            To improve inventory management by identifying fast-moving,
            slow-moving, and non-moving items.
          </li>
        </ul>
      </div>
      <div class="col-md-12, col-lg-6, col-xl-4">
        <h5>Project Requirements Specifications</h5>
        <ul>
          <li>Power BI Desktop for the visualisation and data preparation</li>
          <li>Excel for the dataset</li>
          <li>Word for the reports</li>
          <li>Power BI Service of the presentation</li>
        </ul>
      </div>
      <div class="col-lg-12, col-xl-12">
        <h5>Activity 1</h5>
        <p class="font-weight-bold">Functional Specification:</p>
        <ul>
          <li>
            Data points include Sales data, inventory data, product category
            table, and customer information. All these data can be retrieved
            from the company database.
          </li>
          <li>
            Transform the dataset and set up the relationship between the
            various tables. Create the required calculated columns and measures
            for the KPI indices
          </li>
          <li>
            Use appropriate visuals and dashboards for effective analysis of the
            data.
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
        <table class="table table-bordered">
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
              The Server must have the capacity to handle 50 users at the same
              time.
            </td>
          </tr>
          <tr>
            <td>Availability</td>
            <td>
              The Server should be available at all times except for scheduled
              maintenance time.
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
              The Popfiery visualisation in Power Bi must be accessible to all
              authorise user
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
        <table class="table table-bordered">
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
              <span class="font-weight-bold">Calculated column, measures </span
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
              Product Category, Product Subcategory, Total Cost, Sale Amounts
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
        <img
          class="img-fluid"
          src="../assets/image/capstone/relationshiptable.svg"
          alt="Relationship between tables"
          width="800px"
        />
        <p class="font-weight-bold">Relationship between tables<br /><br /></p>
      </div>
      <div class="col-lg-12, col-xl-12">
        <h5>Activity 2</h5>
        <img
          class="img-fluid"
          src="../assets/image/capstone/otb.png"
          alt="Open-to-buy 6 months plans"
        />
        <p>
          August's beginning of month inventory is lower than July because of
          the lower sales volume expected in August. And it will drop further in
          September and October
        </p>
        <p>
          There is a lower inventory level for September and October and an
          increase in the markdown because these months have significant sales.
        </p>
        <p>
          December has high sales volume because of the holiday seasons and
          year-end. Thus we need to increase the inventory. There is no need for
          markdown as the sales volume is high.
        </p>
      </div>
      <div class="col-lg-12, col-xl-12">
        <h5>Activity 3</h5>
        <p class="font-weight-bold">Cleaning the data</p>
        <p>
          Check for missing data, delete column that have 100% blank data, or
          column that is not useful for the data analysis.
        </p>
        <table class="table table-bordered">
          <tr class="font-weight-bold">
            <td>Table Name</td>
            <td>Delete column</td>
            <td>Reason for delete</td>
          </tr>
          <tr>
            <td>All tables</td>
            <td>ETLLoadID, LoadDate, UpdateDate</td>
            <td>Not useful for data analysis</td>
          </tr>
          <tr>
            <td>DimEmployee</td>
            <td>Title</td>
            <td>100% Blank data</td>
          </tr>
          <tr>
            <td>DimProduct</td>
            <td>
              ImageURL, ProductURL, StopSaleDate, SizeRange, SizeUnitMeasureID
            </td>
            <td>100% Blank data</td>
          </tr>
          <tr>
            <td>DimPromotion</td>
            <td>MinQuantity, MaxQuantity</td>
            <td>100% Blank data</td>
          </tr>
          <tr>
            <td>FactInventory</td>
            <td>CurrencyKey</td>
            <td>Not useful for data analysis, all currency key is 1.</td>
          </tr>
          <tr>
            <td>FactSales</td>
            <td>CurrencyKey</td>
            <td>Not useful for data analysis, all currency key is 1.</td>
          </tr>
        </table>
        <p class="font-weight-bold">Transform data</p>
        <table class="table table-bordered">
          <tr class="font-weight-bold">
            <td>Table Name</td>
            <td>Column</td>
            <td>Transform/Data category</td>
          </tr>
          <tr>
            <td>DimGeography</td>
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
            <td>DimProduct</td>
            <td>UnitCost, UnitPrice</td>
            <td>Currency</td>
          </tr>
          <tr>
            <td>FactSales</td>
            <td>
              UnitCost, UnitPrice, DiscountAmount, ReturnAmount, SalesAmount
            </td>
            <td>Currency</td>
          </tr>
          <tr>
            <td>DimCustomer</td>
            <td>CustomerLabel</td>
            <td>
              Text (some of the customer labels contain letters so need to
              transform to text)
            </td>
          </tr>
          <tr>
            <td>DimEmployee</td>
            <td>Status</td>
            <td>
              Created calculated column Status_edited to replace "NULL" in
              Status, and EndDate is not blank to "Resigned."
            </td>
          </tr>
        </table>
        <p>
          Calculated columns and measures will be created as needed during the
          visualisations
        </p>
        <p></p>
      </div>
    </div>
  </div>
</template>

<script>
import { logEvent } from "firebase/analytics";
import { analytics } from "@/firebase/config";
const log = logEvent(analytics, "page_view", {
  page_title: "Project Capstone",
});
log;
export default {
  name: "ProjectCapstone",
  title: "Project Capstone",
};
</script>

<style></style>
