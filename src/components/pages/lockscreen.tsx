"use client";
/* eslint-disable @next/next/no-img-element */

import { all_routes } from "@/data/all_routes";
import Link from "next/link";
import React from "react";

const Lockscreen = () => {
  const route = all_routes;
  return (
    <>
    <img src="assets/img/bg/lock-screen-bg.png" alt="bg" className="lock-screen-bg position-absolute img-fluid d-sm-none d-md-none d-lg-flex" />
    <div className="main-wrapper login-body">
      <div className="login-wrapper">
        <div className="container">
          <img
            className="img-fluid logo-dark mb-5"
            src="assets/img/logo.png"
            alt="Logo"
          />
          <div className="loginbox">
            <div className="login-right">
              <div className="login-right-wrap">
                <div className="login-info">
                  <p className="account-subtitle">Welcome back!</p>
                  <img
                    src="assets/img/login-user.png"
                    className="img-fluid"
                    alt="User-Img"
                  />
                  <h5>John Smilga</h5>
                </div>
                <form action="#">
                  <div className="input-blocks">
                    <div className="pass-group">
                      <input
                        type="password"
                        className="form-control pass-input"
                        placeholder="Enter your password"
                      />
                      <span className="fas toggle-password fa-eye-slash" />
                    </div>
                  </div>
                  <Link
                    className="btn btn-lg btn-block btn-primary"
                    href={route.dashboard}
                  >
                    Log In
                  </Link>
                </form>
              </div>
            </div>
          </div>
          <div className="row">
            <ul className="terms d-flex">
              <li>Terms &amp; Condition</li>
              <li>Privacy</li>
              <li>Help</li>
              <li className="has-submenu">
                <Link href="#">
                  English <i className="fas fa-chevron-down" />
                </Link>
                <ul className="submenu dropdown-menu">
                  <li>
                    <Link href="#">American</Link>
                  </li>
                  <li>
                    <Link href="#">British</Link>
                  </li>
                </ul>
              </li>
            </ul>
            <div className="my-4 d-flex justify-content-center align-items-center copyright-text">
              <p>Copyright © 2024 DreamsPOS. All rights reserved</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
   
  );
};

export default Lockscreen;
