import React from "react";

export default ({ text = 'loading diagram, please hang tight' }) => (
  <div className="screen loading">
    <div className="note">
      <div className="project-logo">
        <span className="icon-bpmn-io" />
      </div>
      <div className="message">
        {text}
        <span className="icon-loading animate-spin" />
      </div>
    </div>
  </div>
);
