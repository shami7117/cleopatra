import React from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

const PricingTable = () => {
  const pricingData = [
    { service: 'Bedroom', standard: '$21.99', deep: '$39.99', addOn: '-' },
    { service: 'Bathroom', standard: '$26.99', deep: '$44.99', addOn: '-' },
    { service: 'Half Bathroom', standard: '$13.49', deep: '$24.99', addOn: '-' },
    { service: 'Other Room', standard: '$31.49', deep: '$49.99', addOn: '-' },
    { service: 'Refrigerator', standard: '-', deep: '-', addOn: '$14.99' },
    { service: 'Microwave', standard: '-', deep: '-', addOn: '$4.99' },
    { service: 'Oven', standard: '-', deep: '-', addOn: '$9.99' },
    { service: 'Stovetop', standard: '-', deep: '-', addOn: '$9.99' },
    { service: 'Dishwasher', standard: '-', deep: '-', addOn: '$9.99' },
    { service: 'Toaster', standard: '-', deep: '-', addOn: '$4.99' },
    { service: 'Coffee Maker', standard: '-', deep: '-', addOn: '$4.99' },
    { service: 'Blender', standard: '-', deep: '-', addOn: '$4.99' },
    { service: 'Washer', standard: '-', deep: '-', addOn: '$9.99' },
    { service: 'Dryer', standard: '-', deep: '-', addOn: '$9.99' },
    { service: 'Air Fryer', standard: '-', deep: '-', addOn: '$4.99' },
    { service: 'Electric Kettle', standard: '-', deep: '-', addOn: '$4.99' },
    { service: 'Dishes', standard: '-', deep: '-', addOn: '$7.99' },
  ];

  return (
    <section className="w-full px-4 md:px-8 lg:px-16 py-16 md:py-24 bg-white">
      <div className="max-w-4xl mx-auto">
        {/* Title */}
        <h2 className="text-3xl md:text-[44px]  lg:text-[52px] font-semibold text-[#FD037E] text-center mb-8 md:mb-12">
          Simple, Honest Pricing
        </h2>

        {/* Table Container */}
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100">
          <div className="overflow-x-auto">
            <Table>
             <TableHeader>
  <TableRow className="bg-[#C70163]">
    <TableHead className="text-white font-bold text-sm md:text-base py-4 px-4 md:px-6">
      Service Type / ea
    </TableHead>
    <TableHead className="text-white font-bold text-sm md:text-base text-center py-4 px-4 md:px-6">
      Standard Cleaning
    </TableHead>
    <TableHead className="text-white font-bold text-sm md:text-base text-center py-4 px-4 md:px-6">
      Deep Cleaning
    </TableHead>
    <TableHead className="text-white font-bold text-sm md:text-base text-center py-4 px-4 md:px-6">
      Add-Ons
    </TableHead>
  </TableRow>
</TableHeader>

              <TableBody>
                {pricingData.map((item, index) => (
                  <TableRow 
                    key={index}
                    className="hover:bg-gray-50 transition-colors border-b border-gray-100"
                  >
                    <TableCell className="font-medium text-gray-700 text-sm md:text-base py-4 px-4 md:px-6">
                      {item.service}
                    </TableCell>
                    <TableCell className="text-gray-600 text-sm md:text-base text-center py-4 px-4 md:px-6">
                      {item.standard}
                    </TableCell>
                    <TableCell className="text-gray-600 text-sm md:text-base text-center py-4 px-4 md:px-6">
                      {item.deep}
                    </TableCell>
                    <TableCell className="text-gray-600 text-sm md:text-base text-center py-4 px-4 md:px-6">
                      {item.addOn}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingTable;