import React, { useEffect, useMemo, useState } from "react";
import { useTable } from "react-table";

const TableComponent = ({ sessions, activeTab }) => {
  const [data, setData] = useState([]);

  const pendingSessions = sessions.filter((session) => session.isBooked);
  // console.log(pendingSessions);

  const completedSessions = sessions.filter((session) => !session.isBooked);
  // console.log(completedSessions);

  useEffect(() => {
    if (activeTab.toLocaleLowerCase() === "pending") {
      setData(pendingSessions);
    } else {
      setData(completedSessions);
    }
  }, [activeTab]);

  const columns = useMemo(
    () => [
      {
        Header: "Topic",
        accessor: "sessionName",
      },
      {
        Header: "Mentee",
        accessor: "userName",
      },
      {
        Header: "Day",
        accessor: "sessionDay",
      },
      {
        Header: "Time",
        accessor: "sessionTime",
      },
    ],
    [],
  );

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data });

  return (
    <div className="tw-flex">
      <div className="tw-overflow-y-scroll">
        <table
          className="tw-w-full tw-border-collapse tw-border tw-border-gray-200 tw-rounded-md tw-table-auto tw-min-w-full max-[468px]:tw-text-sm"
          {...getTableProps()}
        >
          <thead className="tw-flex tw-bg-[#845ec2] tw-text-white ">
            {headerGroups.map((headerGroup) => (
              <tr
                className="tw-flex tw-w-full tw-justify-between tw-items-center tw-gap-10 tw-p-[6px]"
                {...headerGroup.getHeaderGroupProps()}
              >
                {headerGroup.headers.map((column) => (
                  <th
                    className="tw-p-2 tw-text-left"
                    {...column.getHeaderProps()}
                  >
                    {column.render("Header")}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody className="tw-flex tw-flex-col" {...getTableBodyProps()}>
            {rows.map((row) => {
              prepareRow(row);
              return (
                <tr
                  className="tw-flex tw-w-full tw-justify-between tw-items-center tw-gap-14 max-[568px]:tw-gap-2 tw-py-[6px] tw-border-b tw-border-gray-200"
                  {...row.getRowProps}
                >
                  {row.cells.map((cell) => (
                    <td
                      className="tw-p-2 tw-text-left"
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
      </div>
    </div>
  );
};

export default TableComponent;
