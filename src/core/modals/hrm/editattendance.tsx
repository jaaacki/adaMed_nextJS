"use client";
/* eslint-disable @next/next/no-img-element */

import React from 'react'
import Select from 'react-select'
import dayjs from 'dayjs';
import customParseFormat from "dayjs/plugin/customParseFormat";
import { TimePicker } from 'antd';
import Link from 'next/link';

dayjs.extend(customParseFormat);

const EditAttendance = () => {

    const employeename = [
        { value: 'Choose', label: 'Choose' },
        { value: 'Mitchum Daniel', label: 'Mitchum Daniel' },
        { value: 'Janet Hembre', label: 'Janet Hembre' },
        { value: 'Russell Belle', label: 'Russell Belle' },
    ];
    const onChange = () => {
        // console.log(time, timeString, "timepicker");
      };
    return (
        <div>
            {/* Edit Warehouse */}
            <div className="modal fade" id="edit-units">
                <div className="modal-dialog modal-dialog-centered custom-modal-two">
                    <div className="modal-content">
                        <div className="page-wrapper-new p-0">
                            <div className="content">
                                <div className="modal-header border-0 custom-modal-header">
                                    <div className="page-title">
                                        <h4>Edit Attendance</h4>
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
                                    <form>
                                        <div className="row">
                                            <div className="col-lg-12">
                                                <div className="input-blocks">
                                                    <label>Employee Name</label>
                                                    <Select
                                                    classNamePrefix="react-select"
                                                    options={employeename}
                                                    placeholder="Newest"
                                                />
                                                </div>
                                            </div>
                                            <div className="col-lg-6">
                                                <div className="input-blocks">
                                                    <label>Clock In</label>
                                                    <div className="form-icon">
                                                    <TimePicker
                                                    className="input-group-text"
                                                    onChange={onChange}
                                                    defaultValue={dayjs("00:00:00", "HH:mm:ss")}
                                                  />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-6">
                                                <div className="input-blocks">
                                                    <label>Clock Out</label>
                                                    <div className="form-icon">
                                                    <TimePicker
                                                    className="input-group-text"
                                                    onChange={onChange}
                                                    defaultValue={dayjs("00:00:00", "HH:mm:ss")}
                                                  />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="modal-footer-btn">
                                            <button
                                                type="button"
                                                className="btn btn-cancel me-2"
                                                data-bs-dismiss="modal"
                                            >
                                                Cancel
                                            </button>
                                            <Link href="#" className="btn btn-submit">
                                                Save Changes
                                            </Link>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* /Edit Warehouse */}
        </div>
    )
}

export default EditAttendance