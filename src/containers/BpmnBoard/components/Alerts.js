import React from "react";

export default () => (
  <div className="io-alerts">
    <div className="io-control alert" jswidget="import-warnings-alert">
      <a
        href="https://demo.bpmn.io/"
        className="close"
        aria-hidden="true"
        jsaction="click:bio.clearImportDetails"
      >
        ×
      </a>
      Diagram may not render correctly due to import warnings.
      <a href="https://demo.bpmn.io/" jsaction="click:bio.showImportDetails">
        Show details
      </a>.
    </div>

    <div className="io-control alert" jswidget="undo-redo-alert">
      You edited the diagram.
      <a href="https://demo.bpmn.io/" jsaction="click:bio.undo">
        Undo last change
      </a>.
      <a
        href="https://demo.bpmn.io/"
        className="close"
        aria-hidden="true"
        jsaction="click:bio.hideUndoAlert"
      >
        ×
      </a>
    </div>
  </div>
);
