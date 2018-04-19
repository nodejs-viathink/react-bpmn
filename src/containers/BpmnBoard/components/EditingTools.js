import React from "react";

export default ({ onUndo, onRedo, onSave }) => (
  <div className="io-editing-tools" style={{ display: "block", right: 300 }}>
    <ul className="io-control-list io-horizontal">
      <li className="io-control">
        <button title="undo" onClick={onUndo}>
          <img alt="undo" src={require("../style/image/undo.png")} width={22} />
        </button>
      </li>
      <li className="io-control">
        <button title="redo" onClick={onRedo}>
          <img alt="redo" src={require("../style/image/redo.png")} width={22} />
        </button>
      </li>
      <li className="io-control">
        <button title="save" onClick={onSave}>
          <img alt="save" src={require("../style/image/save.png")} width={22} />
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
