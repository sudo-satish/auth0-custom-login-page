import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import "./auto0-login.css";

const configAuth0Reset = () => {
  new window.Auth0ChangePassword({
      container:         "change-password-widget-container",
      email:             "{{email | escape}}",
      csrf_token:        "{{csrf_token}}",
      ticket:            "{{ticket}}",
      password_policy:   "{{password_policy}}",
      password_complexity_options:  '{{password_complexity_options}}',
      theme: {
        icon: "",
      },
      dict: {
        title: "",
      }
    });

  setTimeout(() => {
    document.querySelector(".auth0-lock-submit").style['background-color'] = '#001356';
  }, 100);
}

const MainComponent = () => {
  useEffect(() => {
    configAuth0Reset();
  }, []);
  return (
    <div className="main">
      <div className="container">
        <div className="row">
          <div className="col title-section">
            <div className="title-container">
              <div className="title">RESET PASSWORD</div>
              <div className="subtitle">Collect Cricketing History</div>
            </div>

            <div className="banner-section">
              <img
                src="https://assets.rario.com/images/auth-img.9d867bd2.png"
                alt="banner-img"
              />
            </div>
          </div>
          <div className="col form-section">
            <div id="error-message" className="alert alert-danger"></div>
            <div
              className="form-wrapper"
              id="change-password-widget-container"
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};
const Header = () => (
  <header className="header">
    <div className="container">
      <div
        className="log"
      >
        <a href="https://rario.com">
          <svg
            className="rarioLogo"
            width="131"
            height="24"
            viewBox="0 0 131 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12.3302 0.867597C13.0245 0.93671 13.1487 1.78023 12.519 2.08308C12.043 2.31203 11.5651 2.52387 11.0825 2.73779C8.03994 4.08651 4.81107 5.51781 0.681235 11.8417C0.469051 12.1667 -0.0169142 12.0388 0.000453533 11.6502C0.0365098 10.8435 0.159199 10.0283 0.375136 9.21614C1.82027 3.78086 6.94984 0.332061 12.3302 0.867597Z"
              fill="url(#paint0_radial)"
            ></path>
            <path
              d="M22.1009 15.0828C20.4934 21.1289 14.3266 24.717 8.32714 23.0969C4.5981 22.0899 1.81139 19.3079 0.622261 15.8946C0.47033 15.4585 0.545307 14.9759 0.816098 14.6029C4.96535 8.88687 13.1582 6.62412 20.3092 7.98689C21.269 8.16981 22.0532 8.88389 22.2522 9.84764C22.5992 11.5274 22.5716 13.3123 22.1009 15.0828Z"
              fill="url(#paint1_radial)"
            ></path>
            <path
              d="M49.144 8.50668C49.144 10.3672 48.6477 11.9976 47.6552 13.398C46.6825 14.7783 45.3029 15.8086 43.5163 16.4888L47.0001 22.6104H39.705L36.7571 17.329H35.0301L33.9879 22.6104H26.9608L31.1294 1.60488H40.4791C43.2186 1.60488 45.3426 2.21504 46.8512 3.43536C48.3798 4.63567 49.144 6.32611 49.144 8.50668ZM42.0275 9.19686C42.0275 7.77649 41.1541 7.0663 39.4072 7.0663H37.0549L36.0723 11.9876H38.9606C39.9332 11.9876 40.6876 11.7475 41.2236 11.2674C41.7595 10.7673 42.0275 10.0771 42.0275 9.19686Z"
              fill="white"
            ></path>
            <path
              d="M64.3334 18.9494H56.3831L54.2988 22.6104H46.8845L60.1647 1.60488H67.0728L72.0156 22.6104H65.0182L64.3334 18.9494ZM63.3507 13.8481L62.3384 8.47667L59.2714 13.8481H63.3507Z"
              fill="white"
            ></path>
            <path
              d="M95.3204 8.50668C95.3204 10.3672 94.8241 11.9976 93.8316 13.398C92.8589 14.7783 91.4792 15.8086 89.6927 16.4888L93.1765 22.6104H85.8813L82.9335 17.329H81.2065L80.1643 22.6104H73.1371L77.3058 1.60488H86.6555C89.3949 1.60488 91.5189 2.21504 93.0276 3.43536C94.5561 4.63567 95.3204 6.32611 95.3204 8.50668ZM88.2039 9.19686C88.2039 7.77649 87.3304 7.0663 85.5836 7.0663H83.2312L82.2486 11.9876H85.1369C86.1096 11.9876 86.8639 11.7475 87.3999 11.2674C87.9359 10.7673 88.2039 10.0771 88.2039 9.19686Z"
              fill="white"
            ></path>
            <path
              d="M99.4925 1.60488H106.52L102.351 22.6104H95.3239L99.4925 1.60488Z"
              fill="white"
            ></path>
            <path
              d="M117.466 23.0905C115.342 23.0905 113.476 22.7004 111.868 21.9202C110.28 21.12 109.049 20.0097 108.176 18.5893C107.322 17.1689 106.895 15.5385 106.895 13.698C106.895 11.2574 107.451 9.08683 108.563 7.18634C109.694 5.26584 111.252 3.77545 113.238 2.71517C115.242 1.65489 117.505 1.12476 120.026 1.12476C122.151 1.12476 124.007 1.52486 125.595 2.32507C127.203 3.10527 128.433 4.20556 129.287 5.62593C130.16 7.0463 130.597 8.67672 130.597 10.5172C130.597 12.9578 130.031 15.1384 128.9 17.0589C127.788 18.9594 126.23 20.4398 124.225 21.5001C122.24 22.5603 119.987 23.0905 117.466 23.0905ZM118.061 17.359C119.173 17.359 120.136 17.0689 120.95 16.4888C121.783 15.9086 122.418 15.1284 122.855 14.1482C123.292 13.1679 123.51 12.0976 123.51 10.9373C123.51 9.69699 123.143 8.70673 122.409 7.96654C121.694 7.22635 120.701 6.85625 119.431 6.85625C118.319 6.85625 117.347 7.14633 116.513 7.72648C115.699 8.30663 115.074 9.08683 114.637 10.0671C114.2 11.0473 113.982 12.1176 113.982 13.2779C113.982 14.5182 114.339 15.5085 115.054 16.2487C115.788 16.9889 116.791 17.359 118.061 17.359Z"
              fill="white"
            ></path>
            <defs>
              <radialGradient
                id="paint0_radial"
                cx="0"
                cy="0"
                r="1"
                gradientUnits="userSpaceOnUse"
                gradientTransform="translate(8.98261 2.78054) rotate(63.6733) scale(20.1244 19.9754)"
              >
                <stop stopColor="#FF996D"></stop>
                <stop offset="1" stopColor="#FF0000"></stop>
              </radialGradient>
              <radialGradient
                id="paint1_radial"
                cx="0"
                cy="0"
                r="1"
                gradientUnits="userSpaceOnUse"
                gradientTransform="translate(8.98261 2.78054) rotate(63.6733) scale(20.1244 19.9754)"
              >
                <stop stopColor="#FF996D"></stop>
                <stop offset="1" stopColor="#FF0000"></stop>
              </radialGradient>
            </defs>
          </svg>
        </a>
      </div>
    </div>
  </header>
);
const App = () => {
  return (
    <>
      {" "}
      <Header />
      <MainComponent />{" "}
    </>
  );
};

const domContainer = document.getElementById("app");
ReactDOM.render(<App />, domContainer);
