import styles from "./HeaderInfo.module.css";
import { FaPlus } from "react-icons/fa6";
import { RxHamburgerMenu } from "react-icons/rx";

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
          <RxHamburgerMenu style={{ color: "#0691d1", fontSize: "30px" }} />
          <button type="button" className={styles.btnPrimary}>
            <FaPlus style={{ marginRight: "5px", fontSize: "18px" }} />
            Raise Query
          </button>
        </div>
      </div>

      <hr className={styles.horizontalLine} />

      <div className={styles.headerMiddleSection}>
        <div className={styles.headerMiddleSectionLeft}>
          <div className={styles.middleSectionDivLeft}>
            <p style={{ fontWeight: "600" }}>{revenue.total}</p>
            <p style={{ color: "lightgray", fontWeight: "500" }}>
              Total Revenue
            </p>
          </div>
          <div className={styles.middleSectionDivLeft}>
            <p style={{ fontWeight: "600" }}>{revenue.received}</p>
            <p style={{ color: "lightseagreen", fontWeight: "500" }}>
              Payment Received
            </p>
          </div>
          <div className={styles.middleSectionDivLeft}>
            <p style={{ fontWeight: "600" }}>{revenue.notDue}</p>
            <p style={{ color: "rgb(0, 119, 255)", fontWeight: "500" }}>
              Not Yet Due
            </p>
          </div>
        </div>

        <p className={styles.dot2}>|</p>

        <div className={styles.headerMiddleSectionRight}>
          <div className={styles.middleSectionDivRight}>
            <p style={{ color: "red", fontWeight: "500" }}>
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
          <p style={{ color: "gray", fontWeight: "500" }}>
            Latest Category - Source
          </p>
          <p style={{ fontWeight: "600" }}>{meta.category}</p>
        </div>
        <div>
          <p style={{ color: "gray", fontWeight: "500" }}>
            Latest Category - Lead Source
          </p>
          <p>{meta.leadSource}</p>
        </div>
        <div>
          <p style={{ color: "gray", fontWeight: "500" }}>Last Updated</p>
          <p style={{ fontWeight: "600" }}>{meta.lastUpdated}</p>
        </div>
        <div>
          <p style={{ color: "gray", fontWeight: "500" }}>Total Outstanding</p>
          <p style={{ color: "red", fontWeight: "600" }}>{meta.outstanding}</p>
        </div>
        <div>
          <p style={{ color: "gray", fontWeight: "500" }}>Last Order Date</p>
          <p style={{ color: "red", fontWeight: "600" }}>
            {meta.lastOrderDate}
          </p>
        </div>
      </div>
    </div>
  );
};

export default HeaderInfo;
