import { useState } from "react";
import styles from "./Tabs.module.css";

const dashboardTabs = {
  site: {
    title: "Site",
    columns: [
      { key: "siteName", label: "Site Name" },
      { key: "state", label: "State" },
      { key: "city", label: "City" },
      { key: "revenue", label: "Revenue" },
      { key: "totalOrders", label: "Total Orders" },
      { key: "lastOrder", label: "Last Order" },
      { key: "createdAt", label: "Created At" },
    ],
  },
  orders: {
    title: "Orders",
    columns: [
      { key: "orderId", label: "Order ID" },
      { key: "site", label: "Site" },
      { key: "amount", label: "Amount" },
      { key: "status", label: "Status" },
      { key: "orderDate", label: "Order Date" },
      { key: "dueDate", label: "Due Date" },
    ],
  },
  vrs: {
    title: "VRs",
    columns: [
      { key: "vrId", label: "VR ID" },
      { key: "site", label: "Site" },
      { key: "submittedBy", label: "Submitted By" },
      { key: "submittedOn", label: "Submitted On" },
      { key: "status", label: "Status" },
    ],
  },
  reports: {
    title: "Reports",
    columns: [
      { key: "reportName", label: "Report Name" },
      { key: "type", label: "Type" },
      { key: "generatedOn", label: "Generated On" },
      { key: "download", label: "Download" },
    ],
  },
  invoices: {
    title: "Invoices",
    columns: [
      { key: "invoiceNo", label: "Invoice No" },
      { key: "client", label: "Client" },
      { key: "amount", label: "Amount" },
      { key: "paid", label: "Paid" },
      { key: "dueDate", label: "Due Date" },
      { key: "status", label: "Status" },
    ],
  },
  pi: {
    title: "PI",
    columns: [
      { key: "partnerId", label: "Partner ID" },
      { key: "name", label: "Name" },
      { key: "type", label: "Type" },
      { key: "onboardedDate", label: "Onboarded Date" },
      { key: "region", label: "Region" },
      { key: "status", label: "Status" },
    ],
    features: {
      statusBadges: true,
    },
  },
};

const Tabs = () => {
  const [activeTab, setActiveTab] = useState("site");
  const rows = new Array(6).fill({});

  return (
    <div className={styles.container}>
      <ul
        className="nav nav-underline"
        style={{
          marginTop: "2%",
          marginBottom: "4%",
          fontSize: "large",
          fontWeight: "600",
        }}
      >
        {Object.entries(dashboardTabs).map(([key, tab]) => (
          <li key={key} className="nav-item">
            <button
              className={`nav-link ${styles.navLink} ${
                activeTab === key ? styles.navLinkActive : ""
              }`}
              onClick={() => setActiveTab(key)}
              style={{
                background: "none",
                border: "none",
                cursor: tab.columns.length ? "pointer" : "not-allowed",
                color: tab.columns.length ? "" : "#aaa",
              }}
              disabled={!tab.columns.length}
            >
              {tab.title}
            </button>
          </li>
        ))}
      </ul>

      <div className={styles.tableWrapper}>
        <table className={styles.table}>
          <thead>
            <tr>
              {dashboardTabs[activeTab]?.columns.map((col) => (
                <th key={col.key}>{col.label}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((_, i) => (
              <tr key={i}>
                {dashboardTabs[activeTab]?.columns.map((col) => (
                  <td key={col.key}></td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Tabs;
