import styles from "./Tabs.module.css";

const Tabs = () => {
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
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">
            Site
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link disabled" aria-disabled="true">
            Orders
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link disabled" aria-disabled="true">
            VRs
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link disabled" aria-disabled="true">
            Reports
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link disabled" aria-disabled="true">
            Invoices
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link disabled" aria-disabled="true">
            PI
          </a>
        </li>
      </ul>
      <div className={styles.tableWrapper}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>Site Name</th>
              <th>State</th>
              <th>City</th>
              <th>Revenue</th>
              <th>Total orders</th>
              <th>Last Order</th>
              <th>Created At</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((_, i) => (
              <tr key={i}>
                <td colSpan={7}></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Tabs;
