import React from "react";
import dynamic from "next/dynamic";
import Head from "next/head";
import styles from "../../styles/sessions.module.css";

function Sessions() {
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
                <div className={styles.anttabs} role="tablist">
                  <div className={styles.anttabsactive}>
                    <span className={styles.ant1}>Pending</span>
                  </div>
                </div>
                <div className={styles.anttabs}>
                  <div className={styles.anttabsactive}>
                    <span className={styles.ant1}>Completed</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.contentHolder}>
            <div className={styles.contentTop}>
              <div className={styles.tabpane}></div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.tableDiv}>
        <div className={styles.tableWrapper}>
          <div className={styles.nestedLoading}>
            <div className={styles.spinContainer}>
              <div className={styles.antTable}>
                <div className={styles.antContainer}>
                  <div className={styles.antHeader}>
                    <table className={styles.infoTable}>
                      <colgroup>
                        <col />
                        <col />
                        <col />
                        <col />
                        <col />
                        <col />
                        <col />
                      </colgroup>
                      <thead className={styles.antTable}>
                        <tr>
                          <th className={styles.antCell}>
                            <span className={styles.tableColumn}></span>
                          </th>
                          <th className={styles.antCell}>
                            <span className={styles.tableColumn}>Topic</span>
                          </th>
                          <th className={styles.antCell}>
                            <span className={styles.tableColumn}>Mentor</span>
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
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Sessions;
