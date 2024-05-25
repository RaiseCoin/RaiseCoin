"use client";
import React, { useState, useEffect } from "react";
import { useAccount, useReadContract } from "wagmi";
import contract_ABI from "../../../../Smart-contract/contractABI";
import { FaAngleDown, FaUpload, FaFileAlt } from "react-icons/fa6";

const InvestmentView = () => {
  const [investments, setInvestments] = useState([]);
  const { address, isConnected } = useAccount();

  const { data: userID } = useReadContract({
    address: process.env.NEXT_PUBLIC_CONTRACT_ADDRESS,
    abi: contract_ABI,
    chainId: 11155111,
    functionName: "getUserID",
    args: [address],
  });

  useEffect(() => {
    const url = `${process.env.NEXT_PUBLIC_SERVER_URL}/api/profiles/${userID}`;
    const fetchData = async () => {
      try {
        const response = await fetch(url, {
          method: "GET",
        });
        const jsonResponse = await response.json();
        console.log(jsonResponse, "res");
        if (jsonResponse.data) {
          if (jsonResponse.data.attributes.investmentDetail != null) {
            setInvestments(jsonResponse.data.attributes.investmentDetail);
          }
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, [userID]);

  const isRejectButtonEnabled = (investment) => {
    const currentDate = new Date();
    const investmentDate = new Date(investment.dateOfPurchase);
    const daysSinceInvestment = Math.ceil(
      (currentDate - investmentDate) / (1000 * 60 * 60 * 24)
    );

    return !investment.document && daysSinceInvestment >= 30;
  };

  const getDaysUntilUnlock = (investment) => {
    const currentDate = new Date();
    const investmentDate = new Date(investment.dateOfPurchase);
    const daysUntilUnlock = 30 - Math.ceil(
      (currentDate - investmentDate) / (1000 * 60 * 60 * 24)
    );

    return daysUntilUnlock;
  };

  return (
    <div className="overflow-hidden shadow-md rounded-lg">
      <table className="min-w-full leading-normal text-center">
        <thead className="bg-gray-100">
          <tr>
            <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
              Date
            </th>
            <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
              Startup Name
            </th>
            <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
              Amount in USD
            </th>
            <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
              Document
            </th>
            <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          {investments.map((investment, index) => (
            <tr key={index}>
              <td className="px-5 py-5 border-b border-gray-200 bg-white text-left text-gray-900">
                {new Date(investment.dateOfPurchase).toLocaleDateString()}
              </td>
              <td className="px-5 py-5 border-b border-gray-200 bg-white text-left text-gray-900">
                {investment.companyNamed}
              </td>
              <td className="px-5 py-5 border-b border-gray-200 bg-white text-left text-gray-900">
                {investment.shareValueInEth}
              </td>
              <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm text-center">
                {investment.document ? (
                  <a
                    href={investment.document}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center px-0.5 py-1 bg-white border border-gray-300 rounded text-green-600 text-sm cursor-pointer hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
                  >
                    View Document
                  </a>
                ) : (
                  <span className="text-black">Nothing Issued yet</span>
                )}
              </td>
              <td className="px-5 py-5 border-b border-gray-200 bg-white text-left">
                {investment.document ? (
                  <button
                    className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-700"
                    onClick={() =>
                      console.log("Approve investment", investment.id)
                    }
                  >
                    Approve
                  </button>
                ) : (
                  <button
                  className={`px-4 py-2 text-white rounded ${
                    isRejectButtonEnabled(investment)
                      ? "bg-red-500 hover:bg-red-700"
                      : "bg-red-500 opacity-50 cursor-not-allowed"
                  }`}
                  onClick={() => isRejectButtonEnabled(investment) && console.log("Reject investment", investment.id)}
                  disabled={!isRejectButtonEnabled(investment)}
                  title={
                    !isRejectButtonEnabled(investment)
                      ? `Will unlock in ${getDaysUntilUnlock(investment)} days`
                      : ""
                  }
                >
                  Reject
                </button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default InvestmentView;
