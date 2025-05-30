/* eslint-disable no-unused-vars */
import React  from 'react';

export function itemRender({current, type, originalElement}:any) {
    if (type === "prev") {
      return <a>Previous</a>;
    }
    if (type === "next") {
      return <a>Next</a>;
    }
    return originalElement;
  }

  export function onShowSizeChange({current, pageSize}:any) {
    // console.log(current, pageSize);
  }