import React from "react";

export default () => (
  <div className="screen error">
    <div className="note">
      <div className="message">
        <p>Ooops, we could not display the diagram.</p>
        <p>
          <small>
            You believe your input is valid{" "}
            <a href="http://www.omg.org/spec/BPMN/2.0/">BPMN 2.0 XML</a>?
          </small>
        </p>
        <p>
          <small>
            Consult our{" "}
            <a href="https://forum.bpmn.io/" target="_blank">
              forum
            </a>{" "}
            or
            <a href="https://github.com/bpmn-io/bpmn-js/issues" target="_blank">
              file an issue
            </a>
            with the details shown below.
          </small>
        </p>
      </div>
      <div className="details">
        <span>Import Error Details</span>
        <textarea className="error-log" />
      </div>
    </div>
  </div>
);
