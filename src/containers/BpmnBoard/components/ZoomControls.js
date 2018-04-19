import React from "react";

export default ({ onZoomIn, onZoomOut, onZoomReset }) => (
  <div className="io-zoom-controls" style={{ right: 300 }}>
    <ul className="io-zoom-reset io-control io-control-list">
      <li>
        <button title="reset zoom" onClick={onZoomReset}>
          <span className="icon-size-reset" />
        </button>
      </li>
    </ul>

    <ul className="io-zoom io-control io-control-list">
      <li>
        <button title="zoom in" onClick={onZoomIn}>
          <span className="icon-plus" />
        </button>
      </li>
      <li>
        <hr />
      </li>
      <li>
        <button href="" title="zoom out" onClick={onZoomOut}>
          <span className="icon-minus" />
        </button>
      </li>
    </ul>
  </div>
);
