import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const PricingTable = () => {
  const pricingData = [
    { service: "Bedroom", standard: "$21.99", deep: "$39.99", addOn: "-" },
    { service: "Bathroom", standard: "$26.99", deep: "$44.99", addOn: "-" },
    {
      service: "Half Bathroom",
      standard: "$13.49",
      deep: "$24.99",
      addOn: "-",
    },
    { service: "Other Room", standard: "$31.49", deep: "$49.99", addOn: "-" },
    { service: "Refrigerator", standard: "-", deep: "-", addOn: "$14.99" },
    { service: "Microwave", standard: "-", deep: "-", addOn: "$4.99" },
    { service: "Oven", standard: "-", deep: "-", addOn: "$9.99" },
    { service: "Stovetop", standard: "-", deep: "-", addOn: "$9.99" },
    { service: "Dishwasher", standard: "-", deep: "-", addOn: "$9.99" },
    { service: "Toaster", standard: "-", deep: "-", addOn: "$4.99" },
    { service: "Coffee Maker", standard: "-", deep: "-", addOn: "$4.99" },
    { service: "Blender", standard: "-", deep: "-", addOn: "$4.99" },
    { service: "Washer", standard: "-", deep: "-", addOn: "$9.99" },
    { service: "Dryer", standard: "-", deep: "-", addOn: "$9.99" },
    { service: "Air Fryer", standard: "-", deep: "-", addOn: "$4.99" },
    { service: "Electric Kettle", standard: "-", deep: "-", addOn: "$4.99" },
    { service: "Dishes", standard: "-", deep: "-", addOn: "$7.99" },
  ];

  return (
    <section className="Pricingtable_procingMainDiv__4-Yro">
      <div className="Pricingtable_pricingContainer__a-eRl">
        <div className="Pricingtable_procingSubDiv__Vpiln">
          <div className="Pricingtable_tableMainDiv__s3rN5">
            {/* Title */}
            <h1 className="Pricingtable_pricingHeading__e1HKw">
              Simple, Honest Pricing
            </h1>
            <p className="Pricingtable_businessText__8WgsR">
              Every cleaning includes a free surface wipe of add-ons. Add-on
              prices are for a deeper clean - e.g., inside appliances.
            </p>
            {/* Table Container */}
            <div className="Pricingtable_tableContainer__-RaNc">
              <Table className="Pricingtable_pricingTable__JNs9l">
                <TableHeader>
                  <TableRow className="">
                    <TableHead className="Pricingtable_tableHeader__sWR98">
                      Service Type / ea
                    </TableHead>
                    <TableHead className="Pricingtable_tableHeader__sWR98">
                      Standard Cleaning
                    </TableHead>
                    <TableHead className="Pricingtable_tableHeader__sWR98">
                      Deep Cleaning
                    </TableHead>
                    <TableHead className="Pricingtable_tableHeader__sWR98">
                      Add-Ons
                    </TableHead>
                  </TableRow>
                </TableHeader>

                <TableBody>
                  {pricingData.map((item, index) => (
                    <TableRow
                      key={index}
                      className="Pricingtable_tableRow__qOkZn"
                    >
                      <TableCell className="Pricingtable_serviceCell__F96NP">
                        {item.service}
                      </TableCell>
                      <TableCell className="Pricingtable_serviceCell__F96NP">
                        {item.standard}
                      </TableCell>
                      <TableCell className="Pricingtable_serviceCell__F96NP">
                        {item.deep}
                      </TableCell>
                      <TableCell className="Pricingtable_serviceCell__F96NP">
                        {item.addOn}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingTable;
