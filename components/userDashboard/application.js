import React, { useEffect, useState } from "react";
import axios from "axios";
import TabsWithTable from "../../components/basic/TabsWithTable";

const Application = ({ user }) => {
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
      setApplications(response.data || []);
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

  const filterFunction = (application, activeTab) => {
    if (activeTab === "Active") {
      return (
        application[4] === "under review" || application[4] === "In Process"
      );
    }
    return application[4] === "Rejected" || application[4] === "Selected";
  };

  const applicationData = applications.map((app) => [
    app.jobID,
    app.jobTitle,
    <span className="tw-font-sans tw-text-[#845ec2]">Submitted</span>, // Apply purple color
    app.dateSubmitted,
    app.applicationAction,
  ]);

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

      <TabsWithTable
        tabs={["Active", "Inactive"]}
        headers={[
          "Job Id",
          "Job Title",
          "Application Status",
          "Date Submitted",
          "Action",
        ]}
        data={applicationData}
        filterFunction={filterFunction}
        formatDate={formatDate}
      />
    </div>
  );
};

export default Application;
