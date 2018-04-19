import React from "react";

export default ({ onUndo, onRedo, onSave }) => (
  <div className="io-editing-tools" style={{ display: "block", right: 300 }}>
    <ul className="io-control-list io-horizontal">
      <li className="io-control">
        <button title="undo" onClick={onUndo}>
          <span className="icon-undo" />
        </button>
      </li>
      <li className="io-control">
        <button title="redo" onClick={onRedo}>
          <span className="icon-redo" />
        </button>
      </li>
      <li className="io-control">
        <button title="save" onClick={onSave}>
          <span className="icon-save" />
        </button>
      </li>
      {/* <li className="io-control">
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
      </li> */}
    </ul>
  </div>
);
