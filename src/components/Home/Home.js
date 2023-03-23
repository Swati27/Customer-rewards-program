import Config from "../../configs/config.json";
import CustomerByMonth from "../Customer/CustomerByMonth";
import React from "react";
import TransactionList from "../Transactions/TransactionList";

function Home() {
  return (
    <>
      <h1>{Config.Home.title}</h1>
      <TransactionList />
      <CustomerByMonth />
    </>
  );
}

export default Home;
