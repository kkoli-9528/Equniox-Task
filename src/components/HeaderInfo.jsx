import styles from "./HeaderInfo.module.css";
import { FaPlus } from "react-icons/fa6";
import { RxHamburgerMenu } from "react-icons/rx";
import Button from "react-bootstrap/Button";
import { useState } from "react";
import RaiseQueryModal from "./RaiseQueryModal";
import ThemeToggle from "./ThemeToggle";

const headerInfo = {
  company: {
    name: "Burman Hospitality Pvt.Ltd.",
    location: ["Delhi", "Central Delhi", "110002"],
    createdAt: "1 Jul 2022",
    type: "POSTPAID",
  },
  revenue: {
    total: "10,00,000",
    received: "7,00,000",
    notDue: "1,00,000",
  },
  overdue: [
    { label: "A", amount: "20,000", color: "orange" },
    { label: "B", amount: "50,000", color: "lightcoral" },
    { label: "C", amount: "50,000", color: "#c5242c" },
    { label: "D", amount: "30,000", color: "red" },
  ],
  meta: {
    category: "Others - References",
    leadSource: "-",
    lastUpdated: "07 Nov 2023",
    outstanding: "10,00,000",
    lastOrderDate: "10 Dec 2023 03:30 PM",
  },
};

const HeaderInfo = () => {
  const { company, revenue, overdue, meta } = headerInfo;
  const [showModal, setShowModal] = useState(false);

  return (
    <div className={styles.container}>
      <div className={styles.headerSection}>
        <div className={styles.firstHeaderSection}>
          <div className={styles.firstHeaderSectionHeaderText}>
            {company.name}
          </div>
          <div className={styles.firstHeaderSectionSubText}>
            {company.location.map((item, i) => (
              <p key={i} className={styles.firstHeaderSectionSubTextFont}>
                <span className={styles.dot}>●</span>
                {item}
              </p>
            ))}
            <p className={styles.dot1}>|</p>
            <p className={styles.firstHeaderSectionSubTextFont}>
              Created on: {company.createdAt}
            </p>
            <p className={styles.dot1}>|</p>
            <p className={styles.postPaid}>{company.type}</p>
          </div>
        </div>

        <div className={styles.innerDiv}>
          <ThemeToggle />
          <RxHamburgerMenu className={styles.hamburgerIcon} />
          <Button onClick={() => setShowModal(true)}>
            <FaPlus style={{ marginRight: "5px", fontSize: "18px" }} />
            Raise Query
          </Button>
          <RaiseQueryModal
            show={showModal}
            handleClose={() => setShowModal(false)}
          />
        </div>
      </div>

      <hr className={styles.horizontalLine} />

      <div className={styles.headerMiddleSection}>
        <div className={styles.headerMiddleSectionLeft}>
          <div className={styles.middleSectionDivLeft}>
            <p style={{ fontWeight: "600" }}>{revenue.total}</p>
            <p className={styles.totalRevenue}>
              Total Revenue
            </p>
          </div>
          <div className={styles.middleSectionDivLeft}>
            <p style={{ fontWeight: "600" }}>{revenue.received}</p>
            <p className={styles.paymentReceived}>
              Payment Received
            </p>
          </div>
          <div className={styles.middleSectionDivLeft}>
            <p style={{ fontWeight: "600" }}>{revenue.notDue}</p>
            <p className={styles.notYetDue}>
              Not Yet Due
            </p>
          </div>
        </div>

        <p className={styles.dot2}>|</p>

        <div className={styles.headerMiddleSectionRight}>
          <div className={styles.middleSectionDivRight}>
            <p className={styles.paymentOverdue}>
              Payment
              <br />
              Overdue
            </p>
          </div>

          {overdue.map((item, i) => (
            <div key={i} className={styles.middleSectionDivRight}>
              <p style={{ fontWeight: "600" }}>{item.amount}</p>
              <p style={{ color: item.color, fontWeight: "bold" }}>
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      <hr className={styles.horizontalLine} />

      <div className={styles.lastSectionDiv}>
        <div>
          <p className={styles.metaLabel}>
            Latest Category - Source
          </p>
          <p style={{ fontWeight: "600" }}>{meta.category}</p>
        </div>
        <div>
          <p className={styles.metaLabel}>
            Latest Category - Lead Source
          </p>
          <p>{meta.leadSource}</p>
        </div>
        <div>
          <p className={styles.metaLabel}>Last Updated</p>
          <p style={{ fontWeight: "600" }}>{meta.lastUpdated}</p>
        </div>
        <div>
          <p className={styles.metaLabel}>Total Outstanding</p>
          <p className={styles.outstanding}>{meta.outstanding}</p>
        </div>
        <div>
          <p className={styles.metaLabel}>Last Order Date</p>
          <p className={styles.lastOrderDate}>
            {meta.lastOrderDate}
          </p>
        </div>
      </div>
    </div>
  );
};

export default HeaderInfo;