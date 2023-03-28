import { useContext } from 'react';
import { SettingsContext } from "../App";
import { NavLink } from "react-router-dom";

export const Navbar = () => {
  const [,classes] = useContext(SettingsContext);
  const linkCommonClasses = `${classes.primaryText} flex flex-col justify-center items-center self-stretch flex-grow-0 flex-shrink-0 relative gap-0.5 py-3`;

  return (
    <>
      <h1 className={`${classes.primaryText} text-4xl font-bold text-center pt-16 pb-8`}>プチプチ番組表</h1>
      <div
        className={`${classes.bg} ${classes.text} flex justify-center items-center w-full fixed left-0 bottom-0 z-30`}
        style={classes.shadow}
      >
        <div className="flex flex-col justify-center items-center self-stretch flex-grow">
          <div className="flex flex-col justify-center items-center self-stretch flex-grow-0 flex-shrink-0">
            <NavLink
              to="/"
              className={
                ({ isActive }) => isActive ? `before:content-[''] before:absolute before:left-0 before:top-0 before:w-full before:h-1 before:${classes.primaryBg} ${linkCommonClasses}` : linkCommonClasses
              }
            >
              <svg
                width={25}
                height={25}
                viewBox="0 0 25 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="flex-grow-0 flex-shrink-0 w-8 h-8 relative"
                preserveAspectRatio="xMidYMid meet"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M6.87499 5.29999C5.92021 5.29999 5.00454 5.67927 4.32941 6.3544C3.65428 7.02953 3.27499 7.94521 3.27499 8.89999V16.1C3.27499 17.0548 3.65428 17.9704 4.32941 18.6456C5.00454 19.3207 5.92021 19.7 6.87499 19.7H18.875C19.8298 19.7 20.7454 19.3207 21.4206 18.6456C22.0957 17.9704 22.475 17.0548 22.475 16.1V8.89999C22.475 7.94521 22.0957 7.02953 21.4206 6.3544C20.7454 5.67927 19.8298 5.29999 18.875 5.29999H6.87499ZM5.67499 16.1V14.9H11.675V17.3H6.87499C6.55673 17.3 6.25151 17.1736 6.02647 16.9485C5.80142 16.7235 5.67499 16.4182 5.67499 16.1ZM14.075 17.3H18.875C19.1933 17.3 19.4985 17.1736 19.7235 16.9485C19.9486 16.7235 20.075 16.4182 20.075 16.1V14.9H14.075V17.3ZM14.075 12.5H20.075V10.1H14.075V12.5ZM11.675 10.1H5.67499V12.5H11.675V10.1Z"
                  fill="currentColor"
                />
              </svg>
              <p className="flex-grow-0 flex-shrink-0 text-xs font-medium text-left">
                番組表
              </p>
            </NavLink>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center self-stretch flex-grow">
          <div className="flex flex-col justify-center items-center self-stretch flex-grow-0 flex-shrink-0">
            <NavLink
              to="/tasks"
              className={
                ({ isActive }) => isActive ? `before:content-[''] before:absolute before:left-0 before:top-0 before:w-full before:h-1 before:${classes.primaryBg} ${linkCommonClasses}` : linkCommonClasses
              }
            >
              <svg
                width={25}
                height={25}
                viewBox="0 0 25 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="flex-grow-0 flex-shrink-0 w-8 h-8 relative"
                preserveAspectRatio="xMidYMid meet"
              >
                <path
                  d="M8.0282 17.0955L8.02812 17.0954C7.70938 16.7765 7.5304 16.3439 7.53056 15.893C7.53072 15.4421 7.71 15.0097 8.02897 14.6909C8.34794 14.3722 8.78047 14.1932 9.2314 14.1934C9.68225 14.1935 10.1146 14.3727 10.4333 14.6916C10.4334 14.6916 10.4334 14.6917 10.4335 14.6918M8.0282 17.0955L15.1702 15.0452C14.4951 15.7201 13.5796 16.0992 12.625 16.0992C11.6704 16.0992 10.7549 15.7201 10.0798 15.0452L10.4335 14.6918M8.0282 17.0955C8.6318 17.6993 9.34843 18.1782 10.1372 18.505C10.9259 18.8317 11.7713 18.9999 12.625 18.9999C13.4787 18.9999 14.3241 18.8317 15.1128 18.505C15.9016 18.1782 16.6182 17.6993 17.2218 17.0955L16.8682 16.742L17.2219 17.0954C17.3797 16.9375 17.5049 16.75 17.5903 16.5437C17.6756 16.3374 17.7195 16.1163 17.7194 15.893C17.7194 15.6697 17.6753 15.4486 17.5898 15.2424C17.5043 15.0361 17.379 14.8487 17.221 14.6909C17.0631 14.5331 16.8756 14.4079 16.6693 14.3225C16.463 14.2372 16.2419 14.1933 16.0186 14.1934C15.7953 14.1934 15.5742 14.2375 15.368 14.323C15.1618 14.4085 14.9745 14.5337 14.8167 14.6916C14.8166 14.6916 14.8166 14.6917 14.8165 14.6918M8.0282 17.0955L14.8165 14.6918M10.4335 14.6918C11.0148 15.2728 11.8031 15.5992 12.625 15.5992C13.4469 15.5992 14.2352 15.2728 14.8165 14.6918M10.4335 14.6918H14.8165M19.0597 18.9347C17.3531 20.6412 15.0385 21.6 12.625 21.6C10.2115 21.6 7.89691 20.6412 6.19033 18.9347C4.48375 17.2281 3.525 14.9135 3.525 12.5C3.525 10.0865 4.48375 7.7719 6.19033 6.06532C7.89691 4.35874 10.2115 3.39999 12.625 3.39999C15.0385 3.39999 17.3531 4.35874 19.0597 6.06532C20.7663 7.7719 21.725 10.0865 21.725 12.5C21.725 14.9135 20.7663 17.2281 19.0597 18.9347ZM9.025 11.8C9.47587 11.8 9.90827 11.6209 10.2271 11.3021C10.5459 10.9833 10.725 10.5509 10.725 10.1C10.725 9.64913 10.5459 9.21672 10.2271 8.89791C9.90827 8.5791 9.47587 8.39999 9.025 8.39999C8.57413 8.39999 8.14173 8.5791 7.82292 8.89791C7.50411 9.21672 7.325 9.64913 7.325 10.1C7.325 10.5509 7.50411 10.9833 7.82292 11.3021C8.14173 11.6209 8.57413 11.8 9.025 11.8ZM17.4271 11.3021C17.7459 10.9833 17.925 10.5509 17.925 10.1C17.925 9.64913 17.7459 9.21672 17.4271 8.89791C17.1083 8.5791 16.6759 8.39999 16.225 8.39999C15.7741 8.39999 15.3417 8.5791 15.0229 8.89791C14.7041 9.21672 14.525 9.64913 14.525 10.1C14.525 10.5509 14.7041 10.9833 15.0229 11.3021C15.3417 11.6209 15.7741 11.8 16.225 11.8C16.6759 11.8 17.1083 11.6209 17.4271 11.3021Z"
                  fill="currentColor"
                  stroke="currentColor"
                />
              </svg>
              <p className="flex-grow-0 flex-shrink-0 text-xs font-medium text-left">
                見たい
              </p>
            </NavLink>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center self-stretch flex-grow">
          <div className="flex flex-col justify-center items-center self-stretch flex-grow-0 flex-shrink-0">
            <NavLink
              to="/archives"
              className={
                ({ isActive }) => isActive ? `before:content-[''] before:absolute before:left-0 before:top-0 before:w-full before:h-1 before:${classes.primaryBg} ${linkCommonClasses}` : linkCommonClasses
              }
            >
              <svg
                width={25}
                height={25}
                viewBox="0 0 25 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="flex-grow-0 flex-shrink-0 w-8 h-8 relative"
                preserveAspectRatio="xMidYMid meet"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M4.1814 6.70641C5.08153 5.80655 6.30221 5.30104 7.575 5.30104C8.84779 5.30104 10.0685 5.80655 10.9686 6.70641L12.375 8.11161L13.7814 6.70641C14.2242 6.24796 14.7538 5.88229 15.3395 5.63072C15.9251 5.37916 16.5549 5.24675 17.1923 5.24121C17.8296 5.23567 18.4617 5.35712 19.0516 5.59847C19.6415 5.83982 20.1774 6.19623 20.6281 6.64691C21.0788 7.0976 21.4352 7.63353 21.6765 8.22343C21.9179 8.81333 22.0393 9.4454 22.0338 10.0827C22.0283 10.7201 21.8958 11.3499 21.6443 11.9356C21.3927 12.5212 21.027 13.0508 20.5686 13.4936L12.375 21.6884L4.1814 13.4936C3.28154 12.5935 2.77602 11.3728 2.77602 10.1C2.77602 8.82722 3.28154 7.60654 4.1814 6.70641V6.70641Z"
                  fill="currentColor"
                />
              </svg>
              <p className="flex-grow-0 flex-shrink-0 text-xs font-medium text-left">
                スキ
              </p>
            </NavLink>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center self-stretch flex-grow">
          <div className="flex flex-col justify-center items-center self-stretch flex-grow-0 flex-shrink-0">
            <NavLink
              to="/settings"
              className={
                ({ isActive }) => isActive ? `before:content-[''] before:absolute before:left-0 before:top-0 before:w-full before:h-1 before:${classes.primaryBg} ${linkCommonClasses}` : linkCommonClasses
              }
            >
              <svg
                width={25}
                height={25}
                viewBox="0 0 25 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="flex-grow-0 flex-shrink-0 w-8 h-8 relative"
                preserveAspectRatio="xMidYMid meet"
              >
                <path
                  d="M6.125 5.30001C6.125 4.98175 5.99857 4.67652 5.77352 4.45148C5.54848 4.22643 5.24326 4.10001 4.925 4.10001C4.60674 4.10001 4.30151 4.22643 4.07647 4.45148C3.85142 4.67652 3.725 4.98175 3.725 5.30001V14.0216C3.36018 14.2323 3.05723 14.5352 2.84661 14.9001C2.63598 15.2649 2.5251 15.6787 2.5251 16.1C2.5251 16.5213 2.63598 16.9351 2.84661 17.3C3.05723 17.6648 3.36018 17.9678 3.725 18.1784V19.7C3.725 20.0183 3.85142 20.3235 4.07647 20.5485C4.30151 20.7736 4.60674 20.9 4.925 20.9C5.24326 20.9 5.54848 20.7736 5.77352 20.5485C5.99857 20.3235 6.125 20.0183 6.125 19.7V18.1784C6.48981 17.9678 6.79276 17.6648 7.00338 17.3C7.21401 16.9351 7.32489 16.5213 7.32489 16.1C7.32489 15.6787 7.21401 15.2649 7.00338 14.9001C6.79276 14.5352 6.48981 14.2323 6.125 14.0216V5.30001ZM13.325 5.30001C13.325 4.98175 13.1986 4.67652 12.9735 4.45148C12.7485 4.22643 12.4433 4.10001 12.125 4.10001C11.8067 4.10001 11.5015 4.22643 11.2765 4.45148C11.0514 4.67652 10.925 4.98175 10.925 5.30001V6.82161C10.5602 7.03226 10.2572 7.33523 10.0466 7.70006C9.83599 8.06489 9.7251 8.47874 9.7251 8.90001C9.7251 9.32127 9.83599 9.73512 10.0466 10.1C10.2572 10.4648 10.5602 10.7678 10.925 10.9784V19.7C10.925 20.0183 11.0514 20.3235 11.2765 20.5485C11.5015 20.7736 11.8067 20.9 12.125 20.9C12.4433 20.9 12.7485 20.7736 12.9735 20.5485C13.1986 20.3235 13.325 20.0183 13.325 19.7V10.9784C13.6898 10.7678 13.9928 10.4648 14.2034 10.1C14.414 9.73512 14.5249 9.32127 14.5249 8.90001C14.5249 8.47874 14.414 8.06489 14.2034 7.70006C13.9928 7.33523 13.6898 7.03226 13.325 6.82161V5.30001ZM19.325 4.10001C19.6433 4.10001 19.9485 4.22643 20.1735 4.45148C20.3986 4.67652 20.525 4.98175 20.525 5.30001V14.0216C20.8898 14.2323 21.1928 14.5352 21.4034 14.9001C21.614 15.2649 21.7249 15.6787 21.7249 16.1C21.7249 16.5213 21.614 16.9351 21.4034 17.3C21.1928 17.6648 20.8898 17.9678 20.525 18.1784V19.7C20.525 20.0183 20.3986 20.3235 20.1735 20.5485C19.9485 20.7736 19.6433 20.9 19.325 20.9C19.0067 20.9 18.7015 20.7736 18.4765 20.5485C18.2514 20.3235 18.125 20.0183 18.125 19.7V18.1784C17.7602 17.9678 17.4572 17.6648 17.2466 17.3C17.036 16.9351 16.9251 16.5213 16.9251 16.1C16.9251 15.6787 17.036 15.2649 17.2466 14.9001C17.4572 14.5352 17.7602 14.2323 18.125 14.0216V5.30001C18.125 4.98175 18.2514 4.67652 18.4765 4.45148C18.7015 4.22643 19.0067 4.10001 19.325 4.10001V4.10001Z"
                  fill="currentColor"
                />
              </svg>
              <p className="flex-grow-0 flex-shrink-0 text-xs font-medium text-left">
                設定
              </p>
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
};
