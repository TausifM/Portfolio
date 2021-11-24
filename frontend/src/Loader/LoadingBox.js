import React from "react";
import { FaSpinner } from "react-icons/fa";

export default function LoadingBox() {
  return (
    <div className="loading">
      <i>
        <FaSpinner />
      </i>{" "}
      Loading...
    </div>
  );
}
