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
          <RxHamburgerMenu style={{ color: "#0691d1", fontSize: "24px" }} />
          <button type="button" className={styles.btnPrimary}>
            <FaPlus style={{ marginRight: "5px", fontSize: "14px" }} />
            Raise Query
          </button>
        </div>
      </div>
      <hr className={styles.horizontalLine} />
      <div className={styles.headerMiddleSection}>
        <div className={styles.headerMiddleSectionLeft}>
          <div>
            <p>10,00,000</p>
            <p>Total Revenue</p>
          </div>
          <div>
            <p>7,00,000</p>
            <p>Payment Received</p>
          </div>
          <div>
            <p>1,00,000</p>
            <p>Not Yet Due</p>
          </div>
        </div>
        <div className={styles.headerMiddleSectionRight}>
          <div>
            <p>
              Payment
              <br />
              Overdue
            </p>
          </div>
          <div>
            <p>20,000</p>
            <p>A</p>
          </div>
          <div>
            <p>50,000</p>
            <p>B</p>
          </div>
          <div>
            <p>50,000</p>
            <p>C</p>
          </div>
          <div>
            <p>30,000</p>
            <p>D</p>
          </div>
        </div>
      </div>
      <div>
        <p>Latest Category - Source</p>
        <p>Others - References</p>
        <p>Latest Category - Lead Source</p>
        <p>-</p>
        <p>Last Updated</p>
        <p>07 Nov 2023</p>
        <p>Total Outstanding</p>
        <p>10,00,000</p>
        <p>Last Order Date</p>
        <p>10 Dec 2023 03:30 PM</p>
      </div>
    </div>
  );
};

export default HeaderInfo;
