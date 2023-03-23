import { useEffect, useState } from "react";

import Config from "../../configs/config.json";
import React from "react";
import { getPointsEarned } from "../../utils/RetailRewards";
import { getTransactions } from "../../apis/Api";

function TransactionList() {
  const [transactionData, setTransactionData] = useState([]);
  useEffect(() => {
    async function fetchTransactionData() {
      try {
        const response = await getTransactions();
        if (!response.ok) {
          throw new Error(`HTTP error: ${response.status}`);
        }
        const data = await response.json();
        return data;
      } catch (error) {
        console.error(`Could not get transaction data: ${error}`);
      }
    }
    fetchTransactionData().then((data) => setTransactionData(data));
  }, []);

  const { transactionId, date, customerId, amountUsd, pointsEarned } =
    Config.TransactionList.transactionListTable;

  return (
    <>
      <h2>{Config.TransactionList.title}</h2>
      <div class="scrollit">
      <table className="customers">
     
        <thead>
          <tr>
            <th>{transactionId}</th>
            <th>{date}</th>
            <th>{customerId}</th>
            <th>{amountUsd}</th>
            <th>{pointsEarned}</th>
          </tr>
        </thead>
        <tbody>
          {transactionData.length > 0 ? (
            transactionData.map((transaction) => (
              <tr key={transaction.transId}>
                <td>{transaction.transId}</td>
                <td>{transaction.date}</td>
                <td>{transaction.custId}</td>
                <td>{transaction.amount}</td>
                <td>{getPointsEarned(transaction.amount)}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td>{Config.LoadingText}</td>
            </tr>
          )}
        </tbody>
      </table>
      </div>
      
    </>
  );
}

export default TransactionList;
