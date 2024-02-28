import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import Wrapper from "../Wrapper";
import Image from "next/image";
import { FiPlus } from "react-icons/fi";
import { FaArrowTrendDown, FaArrowTrendUp } from "react-icons/fa6";
import { MdArrowRight } from "react-icons/md";
import * as XLSX from "xlsx";
import { jsPDF } from "jspdf";
import "jspdf-autotable"; // Import the jspdf-autotable extension

const TradeTable = ({ trades }) => {
  const router = useRouter();
  const downloadExcel = (data) => {
    // Remove specified columns from each object in the data array
    const filteredData = data.map(({ userid, accid, _id, __v, created_at, ...rest }) => {
      // Convert created_at to formatted string
      const Recorded_In = new Date(created_at).toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
        day: "2-digit",
        month: "short"
      });

      return { ...rest, Recorded_In };
    });

    // Create worksheet from filtered data
    const worksheet = XLSX.utils.json_to_sheet(filteredData);

    // Create workbook and add the worksheet
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Sheet1");

    // Save the workbook to a file
    XLSX.writeFile(workbook, "DataSheet.xlsx");
  };
  const downloadPDF = (data) => {
    // Set the page size to a larger dimension (e.g., A3)
    const pdf = new jsPDF({ format: 'a3', orientation: 'landscape' });

    // Add page URL as a footer
    const pageUrl = window.location.origin;
    pdf.text(`Downloaded from Trade os: ${pageUrl} `, 10, pdf.internal.pageSize.height - 10);

    pdf.text("Trades", 10, 10);

    const columns = ["Symbol", "Status", "Date", "Position", "Pnl", "Status", "Margin", "Leverage", "Description", "Image"];
    const rows = data.map(item => [
      item.symbol.toUpperCase(),
      item.status.toUpperCase(),
      new Date(item.created_at).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit", day: "2-digit", month: "short" }),
      item.position_type.toUpperCase(),
      item.pnl,
      item.profitable === "loss" ? "Loss" : "Profit",
      item.margin,
      `${item.leverage}X`,
      `${item.description}`,
      item.image
    ]);

    pdf.autoTable({
      head: [columns],
      body: rows
    });

    // Save the PDF file
    const currentDate = new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit", day: "2-digit", month: "short" });
    pdf.save(`${currentDate} tradeos.pdf`);
  };


  return (
    <div>

      <div className="relative flex flex-col min-w-0 break-words rounded-2xl border-primary bg-light/30">

        <div className="grid grid-cols-12 gap-4 xxl:gap-6 m-3 ">

          <div className="box col-span-12 ">

            <div className="flex justify-between items-center gap-4 flex-wrap bb-dashed mb-4 pb-4 lg:mb-6 lg:pb-6">
              <h4 className="text-xl font-bold">Trades</h4>
              <div className="flex items-end gap-2 flex-wrap -pl-20 grow sm:justify-end">
             
             
             
                <Link href={`/account/${router.query.accid}/record`}>
                  <div
                    className="bg-white text-black border border-gray-600 font-bold py-2 px-4 rounded-lg text-sm ml-2"

                  >
                    Add New Trade
                    <FiPlus
                      className="inline-block ml-2 text-[#00386e] " />

                  </div>
                </Link>
                {/* <div className="flex items-center gap-3 whitespace-nowrap">
              <span>Sort By : </span>
              <select
                name="sort"
                className="nc-select green !rounded-3xl"
                // style="opacity: 0; width: 0px; padding: 0px; height: 0px;"
              >
                <option value="day">Last 15 Days</option>
                <option value="week">Last 1 Month</option>
                <option value="year">Last 6 Month</option>
              </select>
              <div
                className="nice-select nc-select green !rounded-3xl  "
                tabindex="0"
              >
                <span className="current">Last 15 Days</span>
                <div className="nice-select-dropdown">
                  <ul className="list">
                    <li data-value="day" className="option selected null">
                      Last 15 Days
                    </li>
                    <li data-value="week" className="option null">
                      Last 1 Month
                    </li>
                    <li data-value="year" className="option null">
                      Last 6 Month
                    </li>
                  </ul>
                </div>
              </div>
            </div> */}
              </div>
            </div>
            <div className="overflow-x-auto mb-4 lg:mb-6">
              <table className="w-full whitespace-nowrap">
                <thead className="bg-primary/10">
                  <tr className="bg-secondary1/5 dark:bg-bg3">
                    <th className="text-center py-5 px-6 min-w-[150px] cursor-pointer">
                      <div className="flex items-center gap-1">Symbol</div>
                    </th>
                    <th className="text-center py-5 min-w-[100px] cursor-pointer">
                      <div className="flex items-center gap-1">Status🔺</div>
                    </th>
                    <th className="text-center py-5 min-w-[200px] cursor-pointer">
                      <div className="flex items-center gap-1">Date</div>
                    </th>
                    <th className="text-center py-5 min-w-[100px] cursor-pointer">
                      <div className="flex items-center gap-1">Position</div>
                    </th>
                    <th className="text-center py-5 min-w-[100px] cursor-pointer">
                      <div className="flex items-center gap-1">Pnl</div>
                    </th>
                    <th className="text-center py-5 min-w-[120px] cursor-pointer">
                      <div className="flex items-center gap-1">Profit</div>
                    </th>
                    <th className="text-center py-5 min-w-[100px] cursor-pointer">
                      <div className="flex items-center gap-1">Margin</div>
                    </th>
                    <th className="text-center py-5 min-w-[100px] cursor-pointer">
                      <div className="flex items-center gap-1">leverage</div>
                    </th>

                    <th className="text-center py-5 min-w-[130px] cursor-pointer">
                      <div className="flex items-center gap-1">Chart</div>
                    </th>
                    {/* <th className="text-center py-5 min-w-[130px] cursor-pointer">
                      <div className="flex items-center gap-1">Description</div>
                    </th> */}
                  </tr>
                </thead>
                <tbody>
                  {trades.map(item => (<>
                    <tr className="hover:bg-primary/5 cursor-pointer duration-300 border-b border-n30 ">
                      <td className="py-2 ">
                        <div className="flex items-center gap-3">
                          <div className="flex shrink-0">
                            {/* <img src="/images/euro-sm.png" width="32" height="32" className="rounded-full" alt="payment medium icon">
                        <img src="/images/usa-sm.png" width="32" height="32" className="rounded-full ltr:-ml-3 rtl:-mr-3" alt="payment medium icon"> */}
                          </div>

                          <Link href={`/trade/${item._id}`} className=" uppercase hover:underline mb-1 tracking-normal">{item.symbol}</Link>
                        </div>
                      </td>
                      <td className="py-4 uppercase"><span className="bg-red-500 rounded-full text-white px-3 py-1 text-xs uppercase font-medium">{item.status}</span>
</td>
                      <td className="py-4 items-start">
                        {/* <span className="block max-w-[100px] text-xs text-center rounded-[30px]  border border-n30 py-2 bg-primary/10 dark:bg-bg3 text-primary">
                        </span> */}
                        {new Date(item.created_at).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit", day: "2-digit", month: "short" })}
                      </td>
                      <td className="py-4 uppercase">{item.position_type}</td>
                      <td className="py-4">
                        {item.profitable === "loss" ? <> <span className="text-red-500 font-bold">{item.pnl}


                        </span></> : <> <span className="text-green-500 font-bold">{item.pnl}</span></>
                        }
                      </td>
                      <td className="py-4">
                        {item.profitable === "loss" ? <> <span className="text-red-500 font-bold">Loss
                          <FaArrowTrendDown className="inline-block text-2xl pl-1" />

                        </span></> : <> <span className="text-green-500 font-bold">Profit<FaArrowTrendUp className="inline-block text-2xl pl-1" /></span></>
                        }
                      </td>
                      <td className="py-4">
                        {/* <div
                          className="trading-stat-chart-table"
                        // style="min-height: 40px;"
                        >
                          <div
                            id="apexchartsaw7g42jdl"
                            className="apexcharts-canvas apexchartsaw7g42jdl apexcharts-theme-light"
                          // style="width: 120px; height: 40px;"
                          >
                            
                          </div>
                        </div> */}
                        {item.margin}
                      </td>
                      <td className="py-4">
                        <span className="text-primary">{item.leverage}X</span>
                      </td>

                      <td className="py-4 hover:underline">

                        <a href={item.image} target="_blank" rel="noreffrer" className="text-primary">view chart</a>
                      </td>
                      {/* <td className="py-4">

                        <Link className="link link-hover" href={`/trade/${item._id}`}>
                          open <MdArrowRight className="inline-block" />
                        </Link>

                      </td> */}
                    </tr>
                  </>))}

                </tbody>
              </table>
            </div>
            <div className="flex col-span-12 pt-20 gap-4 sm:justify-between justify-center items-center flex-wrap">
              <div className="grid grid-flow-col gap-5">

            <button className=" link" onClick={() => downloadPDF(trades)}>
                 Download as PDF
                </button>
                <button className=" link" onClick={() => downloadExcel(trades)}>
                Download as Excel
                </button>
              </div>

              {/* <ul className="flex gap-2 md:gap-3 flex-wrap md:font-semibold items-center">
                <li>
                  <button className="hover:bg-primary text-primary rtl:rotate-180 hover:text-n0 border md:w-10 duration-300 md:h-10 w-8 h-8 flex items-center rounded-full justify-center border-primary">
                    <i className="las la-angle-left text-lg"></i>
                  </button>
                </li>
                <li>
                  <button className="hover:bg-primary text-n0 bg-primary hover:text-n0 border md:w-10 duration-300 md:h-10 w-8 h-8 flex items-center rounded-full justify-center border-primary">
                    1
                  </button>
                </li>
                <li>
                  <button className="hover:bg-primary text-primary hover:text-n0 border md:w-10 duration-300 md:h-10 w-8 h-8 flex items-center rounded-full justify-center border-primary">
                    2
                  </button>
                </li>
                <li>
                  <button className="hover:bg-primary text-primary hover:text-n0 border md:w-10 duration-300 md:h-10 w-8 h-8 flex items-center rounded-full justify-center border-primary">
                    3
                  </button>
                </li>
                <li>
                  <button className="hover:bg-primary text-primary hover:text-n0 rtl:rotate-180 border md:w-10 duration-300 md:h-10 w-8 h-8 flex items-center rounded-full justify-center border-primary">
                    <i className="las la-angle-right text-lg"></i>
                  </button>
                </li>
              </ul> */}
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default TradeTable;
