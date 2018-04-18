import React from "react";

export default () => (
  <div className="screen loading">
    <div className="note">
      <div className="project-logo">
        <span className="icon-bpmn-io" />
      </div>
      <div className="message">
        loading diagram, please hang tight
        <span className="icon-loading animate-spin" />
      </div>
    </div>
  </div>
);
