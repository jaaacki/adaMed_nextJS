"use client";
/* eslint-disable @next/next/no-img-element */

import React, { useEffect, useState } from "react";
import { Tooltip } from "antd";
import Link from "next/link";
import { all_routes } from "@/data/all_routes";
import { Settings, User } from "feather-icons-react";

const PosHeader = () => {
  const [isFullscreen, setIsFullscreen] = useState(false);

  const toggleFullscreen = () => {
    if (!isFullscreen) {
      if (document.documentElement.requestFullscreen) {
        document.documentElement.requestFullscreen().catch((err) => {});
        setIsFullscreen(true);
      }
    } else {
      if (document.exitFullscreen) {
        if (document.fullscreenElement) {
          document.exitFullscreen().catch((err) => {});
        }
        setIsFullscreen(false);
      }
    }
  };

  return (
    <>
      {/* Header */}
      <div className="header pos-header">
        {/* Logo */}
        <div className="header-left active">
          <Link href={all_routes.newdashboard} className="logo logo-normal">
            <img src="assets/img/logo.png" alt="Img" />
          </Link>
          <Link href={all_routes.newdashboard} className="logo logo-white">
            <img src="assets/img/logo-white.png" alt="Img" />
          </Link>
          <Link href={all_routes.newdashboard} className="logo-small">
            <img src="assets/img/logo-small.png" alt="Img" />
          </Link>
        </div>
        {/* /Logo */}
        <Link id="mobile_btn" className="mobile_btn d-none" href="#sidebar">
          <span className="bar-icon">
            <span />
            <span />
            <span />
          </span>
        </Link>
        {/* Header Menu */}
        <ul className="nav user-menu">
          {/* Search */}
          <li className="nav-item time-nav">
            <span className="bg-teal text-white d-inline-flex align-items-center">
              <img
                src="assets/img/icons/clock-icon.svg"
                alt="img"
                className="me-2"
              />
              09:25:32
            </span>
          </li>
          {/* /Search */}
          <li className="nav-item pos-nav">
            <Link
              href={all_routes.newdashboard}
              className="btn btn-purple btn-md d-inline-flex align-items-center"
            >
              <i className="ti ti-world me-1" />
              Dashboard
            </Link>
          </li>
          {/* Select Store */}
          <li className="nav-item dropdown has-arrow main-drop select-store-dropdown">
            <Link
              href="#"
              className="dropdown-toggle nav-link select-store"
              data-bs-toggle="dropdown"
            >
              <span className="user-info">
                <span className="user-letter">
                  <img
                    src="assets/img/store/store-01.png"
                    alt="Store Logo"
                    className="img-fluid"
                  />
                </span>
                <span className="user-detail">
                  <span className="user-name">Freshmart</span>
                </span>
              </span>
            </Link>
            <div className="dropdown-menu dropdown-menu-right">
              <Link href="#" className="dropdown-item">
                <img
                  src="assets/img/store/store-01.png"
                  alt="Store Logo"
                  className="img-fluid"
                />
                Freshmart
              </Link>
              <Link href="#" className="dropdown-item">
                <img
                  src="assets/img/store/store-02.png"
                  alt="Store Logo"
                  className="img-fluid"
                />
                Grocery Apex
              </Link>
              <Link href="#" className="dropdown-item">
                <img
                  src="assets/img/store/store-03.png"
                  alt="Store Logo"
                  className="img-fluid"
                />
                Grocery Bevy
              </Link>
              <Link href="#" className="dropdown-item">
                <img
                  src="assets/img/store/store-04.png"
                  alt="Store Logo"
                  className="img-fluid"
                />
                Grocery Eden
              </Link>
            </div>
          </li>
          {/* /Select Store */}
          <li className="nav-item nav-item-box">
            <Link
              href="#"
              data-bs-toggle="modal"
              data-bs-target="#calculator"
              className="bg-orange border-orange text-white"
            >
              <i className="ti ti-calculator" />
            </Link>
          </li>
          <li className="nav-item nav-item-box">
            <Tooltip title="Maximize" placement="right">
              <Link
                href="#"
                id="btnFullscreen"
                // onClick={() => toggleFullscreen()}
                className={isFullscreen ? "Exit Fullscreen" : "Go Fullscreen"}
              >
                <i className="ti ti-maximize" />
              </Link>
            </Tooltip>
          </li>
          <li
            className="nav-item nav-item-box"
            data-bs-toggle="tooltip"
            data-bs-placement="top"
            data-bs-title="Cash Register"
          >
            <Tooltip title="Cash Register" placement="right">
              <Link
                href="#"
                data-bs-toggle="modal"
                data-bs-target="#cash-register"
              >
                <i className="ti ti-cash" />
              </Link>
            </Tooltip>
          </li>
          <li
            className="nav-item nav-item-box"
            data-bs-toggle="tooltip"
            data-bs-placement="top"
            data-bs-title="Print Last Reciept"
          >
            <Tooltip title="Print Last Reciept" placement="right">
              <Link href="#">
                <i className="ti ti-printer" />
              </Link>
            </Tooltip>
          </li>
          <li
            className="nav-item nav-item-box"
            data-bs-toggle="tooltip"
            data-bs-placement="top"
            data-bs-title="Today’s Sale"
          >
            <Tooltip title="Today's Sale" placement="right">
              <Link
                href="#"
                data-bs-toggle="modal"
                data-bs-target="#today-sale"
              >
                <i className="ti ti-progress" />
              </Link>
            </Tooltip>
          </li>
          <li
            className="nav-item nav-item-box"
            data-bs-toggle="tooltip"
            data-bs-placement="top"
            data-bs-title="Today’s Profit"
          >
            <Tooltip title="Today’s Profit" placement="right">
              <Link
                href="#"
                data-bs-toggle="modal"
                data-bs-target="#today-profit"
              >
                <i className="ti ti-chart-infographic" />
              </Link>
            </Tooltip>
          </li>
          <li
            className="nav-item nav-item-box"
            data-bs-toggle="tooltip"
            data-bs-placement="top"
            data-bs-title="POS Settings"
          >
            <Tooltip title="POS Settings" placement="bottom">
              <Link href={all_routes.possettings}>
                <i className="ti ti-settings" />
              </Link>
            </Tooltip>
          </li>
          <li className="nav-item dropdown has-arrow main-drop profile-nav">
            <Link
              href="#"
              className="nav-link userset"
              data-bs-toggle="dropdown"
            >
              <span className="user-info p-0">
                <span className="user-letter">
                  <img
                    src="assets/img/profiles/avator1.jpg"
                    alt="Img"
                    className="img-fluid"
                  />
                </span>
              </span>
            </Link>
            <div className="dropdown-menu menu-drop-user">
              <div className="profilename">
                <div className="profileset">
                  <span className="user-img">
                    <img src="assets/img/profiles/avator1.jpg" alt="Img" />
                    <span className="status online" />
                  </span>
                  <div className="profilesets">
                    <h6>John Smilga</h6>
                    <h5>Super Admin</h5>
                  </div>
                </div>
                <hr className="m-0" />
                <Link className="dropdown-item" href={all_routes.profile}>
                  <User className="me-2" />
                  My Profile
                </Link>
                <Link
                  className="dropdown-item"
                  href={all_routes.generalsettings}
                >
                  <Settings className="me-2" />
                  Settings
                </Link>
                <hr className="m-0" />
                <Link
                  className="dropdown-item logout pb-0"
                  href={all_routes.signin}
                >
                  <img
                    src="assets/img/icons/log-out.svg"
                    className="me-2"
                    alt="img"
                  />
                  Logout
                </Link>
              </div>
            </div>
          </li>
        </ul>
        {/* /Header Menu */}
        {/* Mobile Menu */}
        <div className="dropdown mobile-user-menu">
          <Link
            href="#"
            className="nav-link dropdown-toggle"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <i className="fa fa-ellipsis-v" />
          </Link>
          <div className="dropdown-menu dropdown-menu-right">
            <Link className="dropdown-item" href={all_routes.profile}>
              My Profile
            </Link>
            <Link className="dropdown-item" href={all_routes.generalsettings}>
              Settings
            </Link>
            <Link className="dropdown-item" href={all_routes.signin}>
              Logout
            </Link>
          </div>
        </div>
        {/* /Mobile Menu */}
      </div>
      {/* Header */}
    </>
  );
};

export default PosHeader;
