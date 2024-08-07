import React, { useState, useEffect } from "react";
import axios from "axios";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import "tailwindcss/tailwind.css";

const Application = ({ user }) => {
  const [activeTab, setActiveTab] = useState("Active");
  const tabs = ["Active", "Inactive"];
  const [applications, setApplications] = useState([]);
  const [error, setError] = useState("");
  const userEmail = user.user_email;

  const fetchApplications = async () => {
    try {
      setError("");
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/jobApplication/email/${userEmail}`,
        {
          withCredentials: true,
        },
      );

      if (Array.isArray(response.data)) {
        setApplications(response.data);
      } else if (response.data) {
        setApplications([response.data]);
      } else {
        setApplications([]);
      }
    } catch (error) {
      setError(error.response?.data?.message || "An error occurred");
    }
  };

  useEffect(() => {
    fetchApplications();
  }, [userEmail]);

  const formatDate = (isoDate) => {
    if (!isoDate) return "...";
    const date = new Date(isoDate);
    const day = date.getDate();
    const month = date.toLocaleString("default", { month: "short" });
    const year = date.getFullYear();
    return `${day} ${month} ${year}`;
  };

  return (
    <div className="tw-p-8 tw-w-full">
      <h1 className="tw-font-sans tw-text-2xl sm:tw-text-3xl lg:tw-text-4xl tw-font-semibold tw-mb-4 lg:tw-mb-8">
        My Applications
      </h1>

      <p className="tw-font-sans tw-text-sm tw-text-gray-600 tw-mb-6">
        As we are evaluating your qualifications, we may contact you to provide
        additional information. In this case, you will receive a notification
        with instructions. Thank you for your interest in joining our team!
      </p>

      <Tabs>
        <TabList className="tw-flex tw-gap-8 tw-border-b-2">
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
            {error && (
              <p className="tw-text-red-500 tw-text-center tw-mt-8">{error}</p>
            )}
            <div className="tw-overflow-x-auto">
              <table className="tw-w-full tw-table-auto tw-border-collapse">
                <thead>
                  <tr className="tw-bg-[#845ec2]">
                    <th className="tw-font-sans tw-text-white tw-font-normal tw-px-4 tw-py-2 tw-border tw-border-gray-300">
                      Job Id
                    </th>
                    <th className="tw-font-sans tw-text-white tw-font-normal tw-px-4 tw-py-2 tw-border tw-border-gray-300">
                      Job Title
                    </th>
                    <th className="tw-font-sans tw-text-white tw-font-normal tw-px-4 tw-py-2 tw-border tw-border-gray-300">
                      Application Status
                    </th>
                    <th className="tw-font-sans tw-text-white tw-font-normal tw-px-4 tw-py-2 tw-border tw-border-gray-300">
                      Date Submitted
                    </th>
                    <th className="tw-font-sans tw-text-white tw-font-normal tw-px-4 tw-py-2 tw-border tw-border-gray-300">
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {applications.length > 0 &&
                    applications
                      .filter((app) =>
                        activeTab === "Active"
                          ? app.applicationAction === "under review" ||
                            app.applicationAction === "In Process"
                          : app.applicationAction === "Rejected" ||
                            app.applicationAction === "Selected",
                      )
                      .map((application, index) => (
                        <tr key={index} className="tw-bg-white">
                          <td className="tw-font-sans tw-px-4 tw-py-2 tw-border tw-border-gray-300">
                            {application.jobID}
                          </td>
                          <td className="tw-font-sans tw-px-4 tw-py-2 tw-border tw-border-gray-300">
                            {application.jobTitle}
                          </td>
                          <td className="tw-font-sans tw-px-4 tw-py-2 tw-border tw-border-gray-300">
                            <span className="tw-font-sans tw-text-[#845ec2] tw-font-bold">
                              Submitted
                            </span>
                          </td>
                          <td className="tw-font-sans tw-px-4 tw-py-2 tw-border tw-border-gray-300">
                            {formatDate(application.dateSubmitted)}
                          </td>
                          <td className="tw-font-sans tw-px-4 tw-py-2 tw-border tw-border-gray-300">
                            {application.applicationAction}
                          </td>
                        </tr>
                      ))}
                </tbody>
              </table>
            </div>
          </TabPanel>
        ))}
      </Tabs>
    </div>
  );
};

export default Application;
