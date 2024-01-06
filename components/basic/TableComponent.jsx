import React, { useEffect, useMemo, useState } from "react";
import { useTable } from "react-table";

const TableComponent = ({ isMentor, sessions, activeTab }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const filteredSessions = sessions.filter(
      (session) =>
        (activeTab?.toLocaleLowerCase() === "pending" && session.isbooked) ||
        (activeTab?.toLocaleLowerCase() !== "pending" && !session.isbooked),
    );
    setData(filteredSessions);
  }, [activeTab, sessions]);

  const columns = useMemo(
    () => [
      {
        Header: "Topic",
        accessor: "sessionName",
      },
      {
        Header: isMentor ? "Mentee" : "Mentor",
        accessor: isMentor ? "userName" : "mentorName",
      },
      {
        Header: "Date",
        accessor: "sessionDate",
      },
      {
        Header: "Time",
        accessor: "sessionTime",
      },
    ],
    [isMentor],
  );

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data });

  return (
    <table
      {...getTableProps()}
      className="tw-border-collapse tw-w-full tw-bg-slate-200 tw-rounded-sm"
    >
      {/* header */}
      <thead>
        {headerGroups.map((headerGroup) => (
          <tr
            className="tw-bg-[#845ec2] tw-rounded-sm"
            {...headerGroup.getHeaderGroupProps()}
          >
            {headerGroup.headers.map((column) => (
              <th
                className="tw-p-3 max-[366px]:tw-p-1 tw-text-white tw-font-normal max-[366px]:tw-text-md"
                {...column.getHeaderProps()}
              >
                {column.render("Header")}
              </th>
            ))}
          </tr>
        ))}
      </thead>

      {/* body */}
      <tbody {...getTableBodyProps()}>
        {rows.map((row) => {
          prepareRow(row);
          return (
            <tr {...row.getRowProps()}>
              {row.cells.map((cell) => (
                <td
                  className="tw-p-3 max-[366px]:tw-p-1 tw-text-gray-500 tw-text-md max-[366px]:tw-text-sm"
                  {...cell.getCellProps()}
                >
                  {cell.render("Cell")}
                </td>
              ))}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default TableComponent;
