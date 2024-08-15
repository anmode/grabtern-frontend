import React, { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

const Table = ({ tabs, headers, data, filterFunction, formatDate }) => {
  const [activeTab, setActiveTab] = useState(tabs[0]);

  return (
    <div className="tw-p-8 tw-w-full">
      <Tabs>
        <TabList className="tw-flex tw-gap-8 tw-border-b-2 tw-pb-1.5">
          {tabs.map((tab, index) => (
            <Tab
              key={index}
              className={`hover:tw-cursor-pointer tw-relative tw-bottom-[2px] tw-pb-1 tw-bg-[#f1f5f9] ${
                activeTab === tab
                  ? "tw-text-primary-100 tw-font-semibold tw-border-b-2 tw-border-b-primary-100 tw-bg-[#f1f5f9]"
                  : "tw-text-base-400 tw-bg-[#f1f5f9]"
              }`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </Tab>
          ))}
        </TabList>

        {tabs.map((tab, index) => (
          <TabPanel key={index}>
            <div className="tw-overflow-x-auto">
              <table className="tw-w-full tw-table-auto tw-border-collapse">
                <thead>
                  <tr className="tw-bg-[#845ec2]">
                    {headers.map((header, index) => (
                      <th
                        key={index}
                        className="tw-font-sans tw-text-white tw-font-normal tw-px-4 tw-py-2 tw-border tw-border-gray-300"
                      >
                        {header}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {data.length > 0 ? (
                    data
                      .filter((item) => filterFunction(item, activeTab))
                      .map((row, index) => {
                        return (
                          <tr key={index} className="tw-bg-white">
                            {headers.map((header, idx) => (
                              <td
                                key={idx}
                                className="tw-font-sans tw-px-4 tw-py-2 tw-border tw-border-gray-300"
                              >
                                {header === "Date Submitted"
                                  ? formatDate(row.datesubmitted)
                                  : row[header.toLowerCase().replace(" ", "")]}
                              </td>
                            ))}
                          </tr>
                        );
                      })
                  ) : (
                    <tr>
                      <td
                        colSpan={headers.length}
                        className="tw-font-sans tw-text-red-500 tw-px-4 tw-py-2 tw-text-center"
                      >
                        Data not found
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </TabPanel>
        ))}
      </Tabs>
    </div>
  );
};

export default Table;
