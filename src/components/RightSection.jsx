import styles from "./RightSection.module.css";

const timelineData = [
  {
    date: "11 Oct 2023",
    entries: [
      {
        label: "Proposal Sent",
        time: "05:30 PM",
        status: "Discussion Done",
        note:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero possimus vitae obcaecati beatae a laudantium.",
        followUp: "11 Oct 23 10:30 AM",
        author: "Bhinkumar Prasad",
      },
      {
        label: "Interested",
        time: "05:30 PM",
        status: "Discussion Done",
        note:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero possimus vitae obcaecati beatae a laudantium.",
        followUp: "11 Oct 23 10:30 AM",
        author: "Bhinkumar Prasad",
      },
    ],
  },
  {
    date: "7 Oct 2023",
    entries: [
      {
        label: "Proposal Sent",
        time: "05:30 PM",
        status: "Discussion Done",
        note:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero possimus vitae obcaecati beatae a laudantium.",
        followUp: "11 Oct 23 10:30 AM",
        author: "Bhinkumar Prasad",
      },
      {
        label: "Interested",
        time: "05:30 PM",
        status: "Discussion Done",
        note:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero possimus vitae obcaecati beatae a laudantium.",
        followUp: "11 Oct 23 10:30 AM",
        author: "Bhinkumar Prasad",
      },
    ],
  },
];

const RightSection = () => {
  return (
    <div style={{ marginTop: "2%" }}>
      {timelineData.map((section, dateIdx) => (
        <div key={dateIdx}>
          <center style={{ fontWeight: "600", fontSize: "x-large" }}>
            {section.date}
          </center>

          <div className={styles.container}>
            {section.entries.map((entry, idx) => (
              <div
                key={idx}
                className={idx % 2 === 0 ? styles.innerDiv : styles.innerDiv2}
              >
                <div style={{ minWidth: "100px", textAlign: "end" }}>
                  {entry.label} <br /> {entry.time}
                </div>

                <div className={styles.dotLineWrapper}>
                  <span className={styles.dot}></span>
                  <span className={styles.verticalLine}></span>
                </div>

                <div>
                  <div>{entry.status}</div>
                  <div>{entry.note}</div>
                  <div>Follow Up: {entry.followUp}</div>
                  <div style={{ textAlign: "right" }}>- {entry.author}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default RightSection;
