import React, { useState } from "react";
import "./Account.css";

export const Account = ({ user }) => {
  const accountDetails = [
    { title: "User Name: ", value: user.userName },
    { title: "Email: ", value: user.email },
    { title: "User Icon: ", value: user.icon },
  ];

  const topupHistory = [
    { transactionId: "asas", amount: 1, gateway: "asasd", date: "12/12/12" },
    { transactionId: "asas", amount: 2, gateway: "asasd", date: "12/12/12" },
    { transactionId: "asas", amount: 3, gateway: "asasd", date: "12/12/12" },
    { transactionId: "asas", amount: 4, gateway: "asasd", date: "12/12/12" },
    { transactionId: "asas", amount: 5, gateway: "asasd", date: "12/12/12" },
    { transactionId: "asas", amount: 6, gateway: "asasd", date: "12/12/12" },
    { transactionId: "asas", amount: 7, gateway: "asasd", date: "12/12/12" },
    { transactionId: "asas", amount: 8, gateway: "asasd", date: "12/12/12" },
    { transactionId: "asas", amount: 9, gateway: "asasd", date: "12/12/12" },
    { transactionId: "asas", amount: 10, gateway: "asasd", date: "12/12/12" },
    { transactionId: "asas", amount: 11, gateway: "asasd", date: "12/12/12" },
  ];

  const [tableStartIndex, setTableStartIndex] = useState(0);

  const [topupHistoryTable, setTopupHistoryTable] = useState(
    topupHistory.slice(0, 5)
  );

  const navTableBackword = () => {
    if (tableStartIndex - 5 < 0) {
      return;
    }
    if (tableStartIndex - 5 < 5) {
      setTopupHistoryTable(topupHistory.slice(0, 5));
    } else {
      setTopupHistoryTable(
        topupHistory.slice(tableStartIndex - 5, tableStartIndex)
      );
    }
    setTableStartIndex(tableStartIndex - 5);
  };

  const navTableForword = () => {
    if (tableStartIndex + 5 > topupHistory.length) {
      return;
    }
    if (tableStartIndex + 10 > topupHistory.length) {
      setTopupHistoryTable(topupHistory.slice(tableStartIndex + 5));
    } else {
      setTopupHistoryTable(
        topupHistory.slice(tableStartIndex + 5, tableStartIndex + 10)
      );
    }
    setTableStartIndex(tableStartIndex + 5);
  };

  return (
    <div className="container">
      <div className="heading">Account</div>
      <div className="account-details-container">
        <div className="account-details-heading">Account Details</div>
        <div className="account-details">
          <div className="user-img-wrapper">
            <img
              className="user-img"
              src={accountDetails[accountDetails.length - 1]?.value}></img>
          </div>
          <div>
            {accountDetails.slice(0, -1).map((detail, index) => (
              <div
                className="account-detail"
                key={index}>
                <p className="account-detail-title">{detail.title}</p>
                <div className="account-detail-value">{detail.value}</div>
              </div>
            ))}
          </div>
        </div>
        <div>
          <button className="reset-password-button button">
            Reset Password
          </button>
        </div>
      </div>
      <div className="topup-history-container">
        <div className="topup-history-title">Top-Up History</div>
        <div className="topup-table-container">
          <table className="topup-table">
            <thead className="topup-table-head">
              <tr className="topup-table-head-row">
                <th className="topup-table-head-value"> Transaction ID </th>
                <th className="topup-table-head-value"> Amount </th>
                <th className="topup-table-head-value"> Gateway </th>
                <th className="topup-table-head-value"> Date </th>
              </tr>
            </thead>
            <tbody className="topup-table-body">
              {topupHistoryTable.length !== 0 ? (
                topupHistoryTable.map((history, index) => (
                  <tr
                    key={index}
                    className="topup-table-body-row">
                    <td className="topup-table-body-value">
                      {history.transactionId}
                    </td>
                    <td className="topup-table-body-value">{history.amount}</td>
                    <td className="topup-table-body-value">
                      {history.gateway}
                    </td>
                    <td className="topup-table-body-value">{history.date}</td>
                  </tr>
                ))
              ) : (
                <tr className="topup-table-body-row">
                  <td
                    colspan="4"
                    className="topup-table-body-value">
                    No transactions
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
        <div className="table-navigation-container">
          <div className="page-no">
            Showing{" "}
            <span className="page-no-value">
              {tableStartIndex + 1} -{" "}
              {topupHistoryTable.length + tableStartIndex}
            </span>{" "}
            of <span className="page-no-value">{topupHistory.length}</span>
          </div>
          <div className="navigation-button-container">
            <button
              className="navigation-button button"
              onClick={() => navTableBackword()}>
              Previous
            </button>
            <button
              className="navigation-button button"
              onClick={() => navTableForword()}>
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
