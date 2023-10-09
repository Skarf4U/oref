import "./App.css";
import React, { useEffect, useState } from "react";

function App() {
  const [backendData, setBackendData] = useState([]);
  const [displayedAlerts, setDisplayedAlerts] = useState([]);
  const [alertsToShow, setAlertsToShow] = useState(10);

  useEffect(() => {
    fetch("/api")
      .then((response) => response.json())
      .then((data) => {
        console.log(data); // Log the API response
        setBackendData(data);
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
    <div className="alert-history-main">
      <header className="flex flex-col sm:flex-row gap-2 items-center justify-center">
        <a href="tel:105" className="text-sm font-bold flex flex-row gap-2">
          <span className="text-xs">מוקד נעדרים - 105</span>
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              viewBox="0 0 24 24"
            >
              <path d="M18.48 22.926l-1.193.658c-6.979 3.621-19.082-17.494-12.279-21.484l1.145-.637 3.714 6.467-1.139.632c-2.067 1.245 2.76 9.707 4.879 8.545l1.162-.642 3.711 6.461zm-9.808-22.926l-1.68.975 3.714 6.466 1.681-.975-3.715-6.466zm8.613 14.997l-1.68.975 3.714 6.467 1.681-.975-3.715-6.467z"></path>
            </svg>
          </span>
        </a>
        <a href="tel:1201" className="text-sm font-bold flex flex-row gap-2">
          <span className="text-xs">ער״ן - עזרה ראשונה נפשית - 1201</span>
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              viewBox="0 0 24 24"
            >
              <path d="M18.48 22.926l-1.193.658c-6.979 3.621-19.082-17.494-12.279-21.484l1.145-.637 3.714 6.467-1.139.632c-2.067 1.245 2.76 9.707 4.879 8.545l1.162-.642 3.711 6.461zm-9.808-22.926l-1.68.975 3.714 6.466 1.681-.975-3.715-6.466zm8.613 14.997l-1.68.975 3.714 6.467 1.681-.975-3.715-6.467z"></path>
            </svg>
          </span>
        </a>
      </header>
      <div className="ah-title-wrap">
        <h1 style={{ color: "#000" }} className="header-alerts">
          התרעות
        </h1>
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
  );
}

export default App;
