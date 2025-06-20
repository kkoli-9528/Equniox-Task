import styles from "./HeaderInfo.module.css";
import { FaPlus } from "react-icons/fa6";
import { RxHamburgerMenu } from "react-icons/rx";

const HeaderInfo = () => {
  return (
    <div className={styles.container}>
      <div className={styles.headerSection}>
        <div className={styles.firstHeaderSection}>
          <div className={styles.firstHeaderSectionHeaderText}>
            Burman Hospitality Pvt.Ltd.
          </div>
          <div className={styles.firstHeaderSectionSubText}>
            <p className={styles.firstHeaderSectionSubTextFont}>
              <span className={styles.dot}>●</span>Delhi
            </p>
            <p className={styles.firstHeaderSectionSubTextFont}>
              <span className={styles.dot}>●</span> Central Delhi
            </p>
            <p className={styles.firstHeaderSectionSubTextFont}>
              <span className={styles.dot}>●</span>110002
            </p>
            <p className={styles.dot} style={{ paddingRight: "6px" }}>
              |
            </p>
            <p className={styles.firstHeaderSectionSubTextFont}>
              Created on: 1 Jul 2022
            </p>
            <p className={styles.dot} style={{ paddingRight: "6px" }}>
              |
            </p>
            <p className={styles.postPaid}>POSTPAID</p>
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
            <p style={{ fontWeight: "600" }}>10,00,000</p>
            <p style={{ color: "lightgray", fontWeight: "500" }}>
              Total Revenue
            </p>
          </div>
          <div className={styles.middleSectionDivLeft}>
            <p style={{ fontWeight: "600" }}>7,00,000</p>
            <p style={{ color: "lightseagreen", fontWeight: "500" }}>
              Payment Received
            </p>
          </div>
          <div className={styles.middleSectionDivLeft}>
            <p style={{ fontWeight: "600" }}>1,00,000</p>
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
          <div className={styles.middleSectionDivRight}>
            <p style={{ fontWeight: "600" }}>20,000</p>
            <p style={{ color: "orange", fontWeight: "bold" }}>A</p>
          </div>
          <div className={styles.middleSectionDivRight}>
            <p style={{ fontWeight: "600" }}>50,000</p>
            <p style={{ color: "lightcoral", fontWeight: "bold" }}>B</p>
          </div>
          <div className={styles.middleSectionDivRight}>
            <p style={{ fontWeight: "600" }}>50,000</p>
            <p style={{ color: "#c5242c", fontWeight: "bold" }}>C</p>
          </div>
          <div className={styles.middleSectionDivRight}>
            <p style={{ fontWeight: "600" }}>30,000</p>
            <p style={{ color: "red", fontWeight: "bold" }}>D</p>
          </div>
        </div>
      </div>
      <hr className={styles.horizontalLine} />
      <div className={styles.lastSectionDiv}>
        <div>
          <p style={{ color: "gray", fontWeight: "500" }}>
            Latest Category - Source
          </p>
          <p style={{ fontWeight: "600" }}>Others - References</p>
        </div>
        <div>
          <p style={{ color: "gray", fontWeight: "500" }}>
            Latest Category - Lead Source
          </p>
          <p>-</p>
        </div>
        <div>
          <p style={{ color: "gray", fontWeight: "500" }}>Last Updated</p>
          <p style={{ fontWeight: "600" }}>07 Nov 2023</p>
        </div>
        <div>
          <p style={{ color: "gray", fontWeight: "500" }}>Total Outstanding</p>
          <p style={{ color: "red", fontWeight: "600" }}>10,00,000</p>
        </div>
        <div>
          <p style={{ color: "gray", fontWeight: "500" }}>Last Order Date</p>
          <p style={{ color: "red", fontWeight: "600" }}>
            10 Dec 2023 03:30 PM
          </p>
        </div>
      </div>
    </div>
  );
};

export default HeaderInfo;
