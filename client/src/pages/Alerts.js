// AlertsPage.js
import React, { useEffect, useState } from "react";

function AlertsPage() {
    const [backendData, setBackendData] = useState([]);
    const [displayedAlerts, setDisplayedAlerts] = useState([]);
    const [alertsToShow, setAlertsToShow] = useState(10);
  
    useEffect(() => {
      fetch("/api")
        .then((response) => response.json())
        .then((data) => {
          // Log the API response
          console.log(data);
  
          // Set the backend data
          setBackendData(data);
  
          // Set the displayed alerts to the first 10 alerts
          setDisplayedAlerts(data.slice(0, alertsToShow));
        })
        .catch((error) => {
          console.error(error); // Log any fetch errors
        });
    }, []);
  
    const loadMoreAlerts = () => {
      const newAlertsToShow = alertsToShow + 10;
      setAlertsToShow(newAlertsToShow);
      setDisplayedAlerts(backendData.slice(0, newAlertsToShow));
    };
  
    // Function to group alerts by date
    const groupAlertsByDate = (alerts) => {
      const groupedAlerts = {};
      alerts.forEach((alert) => {
        const date = alert.alertDate.split(" ")[0]; // Extract the date part
        if (!groupedAlerts[date]) {
          groupedAlerts[date] = [];
        }
        groupedAlerts[date].push(alert);
      });
      return groupedAlerts;
    };
  
    const groupedAlerts = groupAlertsByDate(displayedAlerts);
    const totalAlerts = backendData.length;

  return (
    <>
    <div className="alert-history-main">

      <div className="ah-title-wrap">
        {/* <h1 style={{ color: "#000" }} className="header-alerts">
          התרעות
        </h1> */}
      </div>
      <div id="historyBody">
        <div className="ah-notifications-wrapper ah-notifications-overflow">
          <h2
            id="res_head"
            class=""
            aria-hidden="true"
            role="document"
            aria-label="Accessibility instructions"
          >
            <span id="resultsCount">{totalAlerts} התרעות</span>
          </h2>

          {Object.entries(groupedAlerts).map(([date, alerts]) => (
            <div key={date}>
              <h3
                class="alertTableDate"
                aria-hidden="true"
                role="document"
                aria-label="על מנת להפוך את האתר לנגיש לקורא מסך לחץ alt + 1. על מנת להפסיק הודעה זאת לחץ alt + 2."
              >
                {date}
              </h3>

              <div className="alert_table alert_type_1 no_bottom_border">
                {alerts.map((alert, index) => (
                  <div
                    key={index}
                    className="alertDetails"
                    bis_skin_checked="1"
                  >
                    <h4
                      className="alertTableCategory"
                      aria-hidden="true"
                      role="document"
                      aria-label="על מנת להפוך את האתר לנגיש לקורא מסך לחץ alt + 1. על מנת להפסיק הודעה זאת לחץ alt + 2."
                    >
                      {alert.title}
                    </h4>
                    <h5
                      className="alertTableTime"
                      aria-hidden="true"
                      role="document"
                      aria-label="על מנת להפוך את האתר לנגיש לקורא מסך לחץ alt + 1. על מנת להפסיק הודעה זאת לחץ alt + 2."
                    >
                      {alert.alertDate}
                    </h5>
                    {alert.data}
                  </div>
                ))}
              </div>
            </div>
          ))}
          {alertsToShow < backendData.length && (
            <a
              href="#"
              className={`alertShowMore`}
              data-cls={`.more`}
              onClick={(e) => {
                e.preventDefault();
                loadMoreAlerts();
              }}
              aria-label="על מנת להפוך את האתר לנגיש לקורא מסך לחץ alt + 1. על מנת להפסיק הודעה זאת לחץ alt + 2."
            >
              <span>הצג עוד התרעות</span>
              <b className={`more`}>&nbsp;</b>
            </a>
          )}
        </div>
      </div>
    </div>
    </>
  );
}

export default AlertsPage;
