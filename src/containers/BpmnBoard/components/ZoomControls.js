import React from "react";

export default ({ zoomIn, zoomOut, zoomReset }) => (
  <div className="io-zoom-controls" style={{ right: 300 }}>
    <ul className="io-zoom-reset io-control io-control-list">
      <li>
        <button title="reset zoom" onClick={zoomReset}>
          <span className="icon-size-reset" />
        </button>
      </li>
    </ul>

    <ul className="io-zoom io-control io-control-list">
      <li>
        <button title="zoom in" onClick={zoomIn}>
          <span className="icon-plus" />
        </button>
      </li>
      <li>
        <hr />
      </li>
      <li>
        <button href="" title="zoom out" onClick={zoomOut}>
          <span className="icon-minus" />
        </button>
      </li>
    </ul>
  </div>
);
