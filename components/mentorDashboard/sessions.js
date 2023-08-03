import React, { useState } from "react";
import dynamic from "next/dynamic";
import Head from "next/head";
import styles from "../../styles/sessions.module.css";

function Sessions() {

  const [activeTab, setActiveTab] = useState('pending');

  return (
    <>

      <br />
      <br />
      <br />
      <div className={styles.router}>
        <div className={styles.userSessionParent}>
          <div className={styles.head}>
            <h1 className={styles.title}> Your Sessions </h1>
          </div>
          <div className={styles.bottom}>
  <div className={styles.menubar}>
    <div className={styles.antbar}>
      <div
        className={`${styles.anttabs} ${activeTab === 'pending' ? styles.active : ''}`}
        onClick={() => setActiveTab('pending')}
      >
        <span className={styles.ant1}>Pending</span>
      </div>
      <div
        className={`${styles.anttabs} ${activeTab === 'completed' ? styles.active : ''}`}
        onClick={() => setActiveTab('completed')}
      >
        <span className={styles.ant1}>Completed</span>
      </div>
    </div>
  </div>
</div>
<div className={styles.tableWrapper}>
  <div className={styles.nestedLoading}>
    <div className={styles.spinContainer}>
      <table className={styles.infoTable}>
        <thead>
          <tr>
            <th className={styles.antCell}>
              <span className={styles.tableColumn}>Topic</span>
            </th>
            <th className={styles.antCell}>
              <span className={styles.tableColumn}>User</span>
            </th>
            <th className={styles.antCell}>
              <span className={styles.tableColumn}>Time</span>
            </th>
            <th className={styles.antCell}>
              <span className={styles.tableColumn}>Date</span>
            </th>
            <th className={styles.antCell}>
              <span className={styles.tableColumn}>Amount</span>
            </th>
            <th className={styles.antCell}>
              <span className={styles.tableColumn}>Status</span>
            </th>
          </tr>
        </thead>
        <tbody>
          {activeTab === 'pending' ? (
            <tr>
              <td>ABCD</td>
              <td>EFGH</td>
              <td>IJKL</td>
              <td>MNOP</td>
              <td>QRST</td>
              <td>UVWX</td>
            </tr>
            // Add more rows for 'Pending' if needed
          ) : (
            // Rows for 'Completed'
            <tr>
              <td>1234</td>
              <td>5678</td>
              <td>9876</td>
              <td>5432</td>
              <td>1357</td>
              <td>Completed</td>
            </tr>
            // Add more rows for 'Completed' if needed
          )}
        </tbody>
      </table>
                  </div>
                </div>
              </div>
            </div>
          </div>

      

    </>
  );
}

export default Sessions;

