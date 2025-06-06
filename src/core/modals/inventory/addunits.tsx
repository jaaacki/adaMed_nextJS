"use client";
import { all_routes } from "@/data/all_routes";
import Link from "next/link";
/* eslint-disable @next/next/no-img-element */

import React from "react";

const Addunits = () => {
  const route = all_routes;
  return (
    <>
      {/* Add Unit */}
      <div className="modal fade" id="add-unit">
        <div className="modal-dialog modal-dialog-centered custom-modal-two">
          <div className="modal-content">
            <div className="page-wrapper-new p-0">
              <div className="content">
                <div className="modal-header border-0 custom-modal-header">
                  <div className="page-title">
                    <h4>Add Unit</h4>
                  </div>
                  <button
                    type="button"
                    className="close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  >
                    <span aria-hidden="true">×</span>
                  </button>
                </div>
                <div className="modal-body custom-modal-body">
                  <div className="mb-3">
                    <label className="form-label">Unit</label>
                    <input type="text" className="form-control" />
                  </div>
                  
                </div>
                <div className="modal-footer">
                    <Link
                      href="#"
                      className="btn btn-cancel me-2"
                      data-bs-dismiss="modal"
                    >
                      Cancel
                    </Link>
                    <Link href={route.addproduct} className="btn btn-submit">
                      Submit
                    </Link>
                  </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* /Add Unit */}
    </>
  );
};

export default Addunits;
