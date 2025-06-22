import styles from "./HeaderInfo.module.css";
import { FaPlus } from "react-icons/fa6";
import { RxHamburgerMenu } from "react-icons/rx";
import Button from "react-bootstrap/Button";
import { useState } from "react";
import RaiseQueryModal from "./RaiseQueryModal";

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
          <RxHamburgerMenu className={styles.hamburger} />
          <Button
            className={styles.btnPrimary}
            onClick={() => setShowModal(true)}
          >
            <FaPlus className={styles.plusIcon} />
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
            <p className={styles.boldText}>{revenue.total}</p>
            <p className={styles.grayText}>Total Revenue</p>
          </div>
          <div className={styles.middleSectionDivLeft}>
            <p className={styles.boldText}>{revenue.received}</p>
            <p className={styles.greenText}>Payment Received</p>
          </div>
          <div className={styles.middleSectionDivLeft}>
            <p className={styles.boldText}>{revenue.notDue}</p>
            <p className={styles.blueText}>Not Yet Due</p>
          </div>
        </div>

        <hr className={styles.hiddenLine} />
        <p className={styles.dot2}>|</p>

        <div className={styles.headerMiddleSectionRight}>
          <div className={styles.middleSectionDivRight}>
            <p className={styles.redTextBold}>
              Payment
              <br />
              Overdue
            </p>
          </div>

          {overdue.map((item, i) => (
            <div key={i} className={styles.middleSectionDivRight}>
              <p className={styles.boldText}>{item.amount}</p>
              <p style={{ color: item.color, fontWeight: "bold" }}>
                {item.label}
              </p>{" "}
            </div>
          ))}
        </div>
      </div>

      <hr className={styles.horizontalLine} />

      <div className={styles.lastSectionDiv}>
        <div className={styles.lastInnerDiv}>
          <p className={styles.labelText}>Latest Category - Source</p>
          <p className={styles.boldText}>{meta.category}</p>
        </div>
        <div className={styles.lastInnerDiv}>
          <p className={styles.labelText}>Latest Category - Lead Source</p>
          <p>{meta.leadSource}</p>
        </div>
        <div className={styles.lastInnerDiv}>
          <p className={styles.labelText}>Last Updated</p>
          <p className={styles.boldText}>{meta.lastUpdated}</p>
        </div>
        <div className={styles.lastInnerDiv}>
          <p className={styles.labelText}>Total Outstanding</p>
          <p className={styles.redTextBold1}>{meta.outstanding}</p>
        </div>
        <div className={styles.lastInnerDiv}>
          <p className={styles.labelText}>Last Order Date</p>
          <p className={styles.redTextBold1}>{meta.lastOrderDate}</p>
        </div>
      </div>
    </div>
  );
};

export default HeaderInfo;
