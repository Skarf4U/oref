import React, { useEffect, useState } from "react";

export default function Home() {
  const [headlines, setHeadlines] = useState([]);

  useEffect(() => {
    // Fetch the news headlines from the News API
    fetch("/news-api") // Assuming this endpoint corresponds to your News API
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json(); // Parse the JSON response
      })
      .then((data) => {
        // Get the first 3 articles
        const articles = data.articles.slice(0, 3);
        setHeadlines(articles);
      })
      .catch((error) => {
        console.error("Error fetching news data:", error);
      });
  }, []);

  return (
    <div className="black bg-white">
      <div className="container">
        <div className="pb11 pb9-ns pt11 pt10-ns">
          <div className="container">
            <div className="black-900 f6 fw6 lh-4 mb7">עדכונים אחרונים</div>
            <div className="mb0 mb6-ns row">
              {headlines.map((headline, index) => (
                <div
                  className="mb6 mb0-ns col-lg-4 col-md-4 col-12"
                  key={index}
                >
                  <div className="flex flex-column h-100 box-article">
                    <div className="flex flex-column justify-between h-100">
                      <div className>
                        <noscript />
                        <div className="lazyload-wrapper mb3">
                          <span style={{ fontWeight: "600" }}>
                            {headline.author}
                          </span>
                        </div>
                        <noscript />
                        <p className="f2">{headline.title} </p>
                        <p className="f2">- {headline.publishedAt}</p>
                      </div>
                      <a
                        href={headline.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="f3 fw5 lh-7"
                      >
                        <span className="learn-more learn-more-orange-1-500-caret fw5 f2">
                          מעבר לכתבה
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="pb11 pb9-ns pt11 pt10-ns">
          <div className="container">
            <div className="black-900 f6 fw6 lh-4 mb7">
              חומרים ואתרים לשימוש האזרחים
            </div>
            <div className="mb0 mb6-ns row">
              <div className="mb6 mb0-ns col-lg-4 col-md-4 col-12">
                <div className="flex flex-column h-100">
                  <div className="flex flex-column justify-between h-100">
                    <div className>
                      <noscript />
                      <div className="lazyload-wrapper mb3">
                        <span style={{ fontWeight: "600" }}>
                          needarim.org.il
                        </span>
                      </div>
                      <noscript />
                      <div className="lazyload-wrapper mb3 relative br-8">
                        <div className>
                          <div
                            className="br-8 overflow-hidden top-0"
                            style={{
                              position: "relative",
                              paddingTop: "56.2061%",
                            }}
                          >
                            <img
                              src="https://i.ibb.co/TMwDc6p/Screenshot-2023-10-09-at-8-21-21-PM.png"
                              style={{
                                position: "absolute",
                                inset: "0px",
                                height: "100%",
                                width: "100%",
                              }}
                            />
                          </div>
                        </div>
                      </div>
                      <p className="f2">
                        זוהי פלטפורמה אזרחית-התנדבותית לאיסוף המידע והדיווחים
                        הנועדה לעזור לאזרחי ישראל ולמשפחות המודאגות להבין ולו
                        במידה מעוטה מה קורה עם היקרים להם.
                      </p>
                    </div>
                    <a
                      href="https://needarim.org.il/"
                      target="_blank"
                      className="f3 fw5 lh-7"
                    >
                      <span className="learn-more learn-more-orange-1-500-caret fw5 f2">
                        מעבר לאתר
                      </span>
                    </a>
                  </div>
                </div>
              </div>
              <div className="mb6 mb0-ns col-lg-4 col-md-4 col-12">
                <div className="flex flex-column h-100">
                  <div className="flex flex-column justify-between h-100">
                    <div className>
                      <noscript />
                      <div className="lazyload-wrapper mb3">
                        <span style={{ fontWeight: "600" }}>
                          fuck-hamas.com
                        </span>
                      </div>
                      <noscript />
                      <div className="lazyload-wrapper mb3 relative br-8">
                        <div className>
                          <div
                            className="br-8 overflow-hidden top-0"
                            style={{
                              position: "relative",
                              paddingTop: "56.2061%",
                            }}
                          >
                            <img
                              src="https://i.ibb.co/3fJpmGx/Screenshot-2023-10-09-at-8-34-09-PM.png"
                              style={{
                                position: "absolute",
                                inset: "0px",
                                height: "100%",
                                width: "100%",
                              }}
                            />
                          </div>
                        </div>
                      </div>
                      <p className="f2">
                        עזרו לנו לבצע מתקפה על תשתיות ואתרי תעמולה של חמאס, כל
                        משתמש שלוחץ על הכפתור ומשאיר את האתר פתוח ברקע עוזר
                        להתקפה.
                      </p>
                    </div>
                    <a
                      href="https://fuck-hamas.com/"
                      target="_blank"
                      className="f3 fw5 lh-7"
                    >
                      <span className="learn-more learn-more-orange-1-500-caret fw5 f2">
                        מעבר לאתר
                      </span>
                    </a>
                  </div>
                </div>
              </div>
              <div className="mb6 mb0-ns col-lg-4 col-md-4 col-12">
                <div className="flex flex-column h-100">
                  <div className="flex flex-column justify-between h-100">
                    <div className>
                      <noscript />
                      <div className="lazyload-wrapper mb3">
                        <span style={{ fontWeight: "600" }}>sahar.org.il</span>
                      </div>
                      <noscript />
                      <div className="lazyload-wrapper mb3 relative br-8">
                        <div className>
                          <div
                            className="br-8 overflow-hidden top-0"
                            style={{
                              position: "relative",
                              paddingTop: "56.2061%",
                            }}
                          >
                            <img
                              src="https://i.ibb.co/5WdQtXn/Screenshot-2023-10-09-at-8-40-02-PM.png"
                              style={{
                                position: "absolute",
                                inset: "0px",
                                height: "100%",
                                width: "100%",
                              }}
                            />
                          </div>
                        </div>
                      </div>
                      <p className="f2">
                        חשים בדידות? חרדה? כאב עמוק? אל תשארו עם זה לבד היכנסו
                        לצ'אט שאפשר לדבר בו על הכל, יש מי שיקשיב ויתן כוחות.
                      </p>
                    </div>
                    <a
                      href="https://sahar.org.il/"
                      target="_blank"
                      className="f3 fw5 lh-7"
                    >
                      <span className="learn-more learn-more-orange-1-500-caret fw5 f2">
                        מעבר לאתר
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
