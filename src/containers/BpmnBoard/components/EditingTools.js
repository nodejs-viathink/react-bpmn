import React from "react";

export default () => (
  <div
    className="io-editing-tools"
    jswidget="editing-tools"
    style={{ display: "block" }}
  >
    <ul className="io-control-list io-horizontal">
      <li className="io-control">
        <button
          title="Toggle keyboard shortcuts overlay"
          jsaction="click:bio.showKeyboard"
        >
          <span className="icon-keyboard"> </span>
        </button>
      </li>
      <li className="io-control">
        <button title="Toggle Fullscreen" jsaction="click:bio.toggleFullscreen">
          <span className="icon-resize-full"> </span>
        </button>
      </li>
    </ul>
  </div>
);
