import styles from "./RightSection.module.css";

const RightSection = () => {
  return (
    <div style={{ marginTop: "2%" }}>
      <center style={{ fontWeight: "600", fontSize: "x-large" }}>
        11 Oct 2023
      </center>
      <div className={styles.container}>
        <div className={styles.innerDiv}>
          <div style={{ minWidth: "100px", textAlign: "end" }}>
            Proposal Sent <br /> 05:30 PM
          </div>
          <div className={styles.dotLineWrapper}>
            <span className={styles.dot}></span>
            <span className={styles.verticalLine}></span>
          </div>
          <div>
            <div>Discussn Done</div>
            <div>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero
              possimus vitae obcaecati beatae a laudantium{" "}
            </div>
            <div>Follow Up: 11 Oct 23 10:30 AM</div>
            <div style={{ textAlign: "right" }}>- Bhinkumar Prasad</div>
          </div>
        </div>
        <div className={styles.innerDiv2}>
          <div style={{ minWidth: "100px", textAlign: "end" }}>
            Interested <br />
            05:30 PM
          </div>
          <div className={styles.dotLineWrapper}>
            <span className={styles.dot}></span>
            <span className={styles.verticalLine}></span>
          </div>
          <div>
            <div>Discussn Done</div>
            <div>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero
              possimus vitae obcaecati beatae a laudantium{" "}
            </div>
            <div>Follow Up: 11 Oct 23 10:30 AM</div>
            <div style={{ textAlign: "right" }}>- Bhinkumar Prasad</div>
          </div>
        </div>
      </div>
      <center style={{ fontWeight: "600", fontSize: "x-large" }}>
        7 Oct 2023
      </center>
      <div className={styles.container}>
        <div className={styles.innerDiv}>
          <div style={{ minWidth: "100px", textAlign: "end" }}>
            Proposal Sent <br /> 05:30 PM
          </div>
          <div className={styles.dotLineWrapper}>
            <span className={styles.dot}></span>
            <span className={styles.verticalLine}></span>
          </div>
          <div>
            <div>Discussn Done</div>
            <div>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero
              possimus vitae obcaecati beatae a laudantium{" "}
            </div>
            <div>Follow Up: 11 Oct 23 10:30 AM</div>
            <div style={{ textAlign: "right" }}>- Bhinkumar Prasad</div>
          </div>
        </div>
        <div className={styles.innerDiv2}>
          <div style={{ minWidth: "100px", textAlign: "end" }}>
            Interested <br />
            05:30 PM
          </div>
          <div className={styles.dotLineWrapper}>
            <span className={styles.dot}></span>
            <span className={styles.verticalLine}></span>
          </div>
          <div>
            <div>Discussn Done</div>
            <div>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero
              possimus vitae obcaecati beatae a laudantium{" "}
            </div>
            <div>Follow Up: 11 Oct 23 10:30 AM</div>
            <div style={{ textAlign: "right" }}>- Bhinkumar Prasad</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightSection;
