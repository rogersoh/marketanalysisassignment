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
        <h5>
          Activity 1: Define the retail operations management tasks and
          inventory planning processes required to build a long-term
          relationship with its customers
        </h5>
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
        <h5>Activity 2: Plan the inventory to measure the performance.</h5>
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
        <h5>
          Activity 3: Determine the appropriate level and depth of information
          required for the management to take informed decisions and prepare the
          data.
        </h5>
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
              ImageURL, ProductURL, StopSaleDate, SizeRange, SizeUnitMeasureID
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
        <table class="table table-bordered">
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
          Calculated columns and measures will be created as needed during the
          visualisations
        </p>
        <p></p>
      </div>
    </div>
  </div>
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
      <div class="col-12">
        <h5>Activity 4: Analyse the store performance</h5>
        <p>
          KPI selected for the store are the Gross Sale per Selling Area and
          Gross Sale per employee. Instead of only comparing the total gross
          sale amount, the index normalises the store for better performance
          evaluation. And the store is further drilled down into its store type
          for comparison among the same type.
        </p>
        <p>
          As there is many stores, we have the top 10 and bottom 10 performing
          stores in each dashboard.
        </p>
        <p>
          The SellingAreaSize of the Contosa Asia Online Store is significant
          times higher than the other online store. The area is 9 time higher
          compare to the 2nd largest online store.
        </p>
        <p class="font-weight-bold">Calculated column and measures</p>
        <table class="table table-bordered">
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
                grossMargin = sum(FactSales[totalSales])-sum(FactSales[COGS])
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
      </div>
      <div class="col-12">
        <h5>
          Activity 5: Analyse the sales data and understand the product demand
        </h5>
        <ul>
          <li>Decide on the suitable KPI to identify the product movement.</li>
          <li>
            Analyse the product movement based on location, category, supplier,
            and others based on the datapoints
          </li>
          <li>
            Recommend the list of products to purchase to manage the inveontry
            efficiently.
          </li>
          <li>
            Recommend the list of products to markup or markdown the price based
            on the movement.
          </li>
        </ul>

        <p class="font-weight-bold">Reorder</p>
        <p>
          Criteria for reordering is when the stock on hand quantity is less
          than the minimum day in-stock quantity. I set the reorder quantity at
          10% higher to meet the minimum day in-stock quantity, and the reorder
          cost is the amount needed to place this order. The reorder quantity
          and cost are created as a calculated column instead of a new measure
          to allow for more effective subtotal in the various visual groups.
        </p>
        <p class="font-weight-bold">Markdown</p>
        <p>
          Criteria for markdown is when the stock on hand quantity is more than
          the max day in-stock quantity. We want to increase the sales quantity
          of these markdown products to reduce the inventory space and the
          inventory cost. The Reorder and Markdown are based on the latest month
          and year in the FactInventory.
        </p>
        <p class="font-weight-bold">Markup</p>
        <p>
          Criteria for markup is the top 3 selling products in 2009. The
          dashboard for the mark up can be drilled down for Country, Store,
          Product Category and Product Subcategory for the management to adjust
          according to individual country and store.
        </p>
        <p class="font-weight-bold">Calculated Column and Measures</p>
        <table class="table table-bordered">
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
                if(FactInventory[DaysInStock]>FactInventory[MaxDayInStock],TRUE(),FALSE())
              </p>
              <p>
                reorder? =
                if(FactInventory[MinDayInStock]>FactInventory[DaysInStock],TRUE(),FALSE())
              </p>
              <p>
                reorderCost = IF(FactInventory[reorder?],
                FactInventory[reorderQty] * FactInventory[UnitCost], BLANK())
              </p>
              <p>
                reorderQty = IF(FactInventory[reorder?], ROUNDUP(
                (DIVIDE(FactInventory[OnHandQuantity],
                FactInventory[DaysInStock])*FactInventory[MinDayInStock]-FactInventory[OnHandQuantity])
                * 1.1, 0), BLANK())
              </p>
            </td>
          </tr>
          <tr>
            <td class="font-weight-bold">FactSales</td>
            <td>
              <p class="font-weight-bold">Measures</p>
              <p>
                return % = DIVIDE( SUM(FactSales[ReturnQuantity]) ,
                SUM(FactSales[SalesQuantity] ))
              </p>
              <p>UPT = sum(FactSales[SalesQuantity])/COUNTROWS(FactSales)</p>
            </td>
          </tr>
        </table>
        <p>
          The dashboards for inventory product movement is Product Movement 1,
          Product Movement 2, Product Reorder, Mark down, and Mark up
        </p>
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
