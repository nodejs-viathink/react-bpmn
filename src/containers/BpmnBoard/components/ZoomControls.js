import React from "react";

export default () => (
  <div className="io-zoom-controls">
    <ul className="io-zoom-reset io-control io-control-list">
      <li>
        <button title="reset zoom" jsaction="click:bio.zoomReset">
          <span className="icon-size-reset" />
        </button>
      </li>
    </ul>

    <ul className="io-zoom io-control io-control-list">
      <li>
        <button title="zoom in" jsaction="click:bio.zoomIn">
          <span className="icon-plus" />
        </button>
      </li>
      <li>
        <hr />
      </li>
      <li>
        <button href="" title="zoom out" jsaction="click:bio.zoomOut">
          <span className="icon-minus" />
        </button>
      </li>
    </ul>
  </div>
);
