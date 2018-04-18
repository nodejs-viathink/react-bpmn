import React from "react";

export default ({ onAdd, onSave }) => (
  <div className="io-import-export">
    <ul className="io-import io-control io-control-list io-horizontal">
      <li>
        <button
          title="open BPMN diagram from local file system"
          jsaction="click:bio.openLocal"
        >
          <span className="icon-open" />
        </button>
      </li>
      <li className="vr" style={{ marginLeft: "2px" }} />
      <li>
        <button onClick={onAdd} title="create new BPMN diagram" jsaction="click:bio.createNew">
          <span className="icon-plus-circled" />
        </button>
      </li>
    </ul>
    <ul className="io-export io-control io-control-list io-horizontal">
      <li>
        <a
          onClick={onSave}
          target="_blank"
          rel="noopener noreferrer"
          href="data:application/bpmn20-xml;charset=UTF-8,%3C%3Fxml%20version%3D%221.0%22%20encoding%3D%22UTF-8%22%3F%3E%0A%3Cbpmn%3Adefinitions%20xmlns%3Axsi%3D%22http%3A%2F%2Fwww.w3.org%2F2001%2FXMLSchema-instance%22%20xmlns%3Abpmn%3D%22http%3A%2F%2Fwww.omg.org%2Fspec%2FBPMN%2F20100524%2FMODEL%22%20xmlns%3Abpmndi%3D%22http%3A%2F%2Fwww.omg.org%2Fspec%2FBPMN%2F20100524%2FDI%22%20xmlns%3Adc%3D%22http%3A%2F%2Fwww.omg.org%2Fspec%2FDD%2F20100524%2FDC%22%20id%3D%22Definitions_0mssz0j%22%20targetNamespace%3D%22http%3A%2F%2Fbpmn.io%2Fschema%2Fbpmn%22%3E%0A%20%20%3Cbpmn%3Aprocess%20id%3D%22Process_1%22%20isExecutable%3D%22false%22%3E%0A%20%20%20%20%3Cbpmn%3AstartEvent%20id%3D%22StartEvent_1%22%20%2F%3E%0A%20%20%3C%2Fbpmn%3Aprocess%3E%0A%20%20%3Cbpmndi%3ABPMNDiagram%20id%3D%22BPMNDiagram_1%22%3E%0A%20%20%20%20%3Cbpmndi%3ABPMNPlane%20id%3D%22BPMNPlane_1%22%20bpmnElement%3D%22Process_1%22%3E%0A%20%20%20%20%20%20%3Cbpmndi%3ABPMNShape%20id%3D%22_BPMNShape_StartEvent_2%22%20bpmnElement%3D%22StartEvent_1%22%3E%0A%20%20%20%20%20%20%20%20%3Cdc%3ABounds%20x%3D%22173%22%20y%3D%22102%22%20width%3D%2236%22%20height%3D%2236%22%20%2F%3E%0A%20%20%20%20%20%20%3C%2Fbpmndi%3ABPMNShape%3E%0A%20%20%20%20%3C%2Fbpmndi%3ABPMNPlane%3E%0A%20%20%3C%2Fbpmndi%3ABPMNDiagram%3E%0A%3C%2Fbpmn%3Adefinitions%3E%0A"
          className="download"
          title="download BPMN diagram"
          jswidget="downloadBPMN"
          data-track="diagram:download-bpmn"
          download="diagram.bpmn"
        >
          <span className="icon-download" />
        </a>
      </li>
      <li>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="data:application/bpmn20-xml;charset=UTF-8,%3C%3Fxml%20version%3D%221.0%22%20encoding%3D%22utf-8%22%3F%3E%0A%3C!--%20created%20with%20bpmn-js%20%2F%20http%3A%2F%2Fbpmn.io%20--%3E%0A%3C!DOCTYPE%20svg%20PUBLIC%20%22-%2F%2FW3C%2F%2FDTD%20SVG%201.1%2F%2FEN%22%20%22http%3A%2F%2Fwww.w3.org%2FGraphics%2FSVG%2F1.1%2FDTD%2Fsvg11.dtd%22%3E%0A%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%20width%3D%2248%22%20height%3D%2248%22%20viewBox%3D%22167%2096%2048%2048%22%20version%3D%221.1%22%3E%3Cg%20class%3D%22djs-group%22%3E%3Cg%20class%3D%22djs-element%20djs-shape%20selected%22%20data-element-id%3D%22StartEvent_1%22%20style%3D%22display%3A%20block%3B%22%20transform%3D%22translate(173%20102)%22%3E%3Cg%20class%3D%22djs-visual%22%3E%3Ccircle%20cx%3D%2218%22%20cy%3D%2218%22%20r%3D%2218%22%20style%3D%22stroke%3A%20black%3B%20stroke-width%3A%202px%3B%20fill%3A%20white%3B%20fill-opacity%3A%200.95%3B%22%2F%3E%3C%2Fg%3E%3Crect%20x%3D%220%22%20y%3D%220%22%20width%3D%2236%22%20height%3D%2236%22%20class%3D%22djs-hit%22%20style%3D%22fill%3A%20none%3B%20stroke-opacity%3A%200%3B%20stroke%3A%20white%3B%20stroke-width%3A%2015px%3B%22%2F%3E%3Crect%20x%3D%22-6%22%20y%3D%22-6%22%20width%3D%2248%22%20height%3D%2248%22%20class%3D%22djs-outline%22%20style%3D%22fill%3A%20none%3B%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3Cg%20class%3D%22djs-group%22%3E%3Cg%20class%3D%22djs-element%20djs-shape%22%20data-element-id%3D%22StartEvent_1_label%22%20style%3D%22display%3A%20none%3B%22%20transform%3D%22translate(146%20138)%22%3E%3Cg%20class%3D%22djs-visual%22%3E%3Ctext%20class%3D%22djs-label%22%20style%3D%22font-family%3A%20Arial%2C%20sans-serif%3B%20font-size%3A%2011px%3B%22%3E%3Ctspan%20x%3D%220%22%20y%3D%2212.3125%22%2F%3E%3C%2Ftext%3E%3C%2Fg%3E%3Crect%20x%3D%220%22%20y%3D%220%22%20width%3D%2290%22%20height%3D%2220%22%20class%3D%22djs-hit%22%20style%3D%22fill%3A%20none%3B%20stroke-opacity%3A%200%3B%20stroke%3A%20white%3B%20stroke-width%3A%2015px%3B%22%2F%3E%3Crect%20x%3D%22-6%22%20y%3D%22-6%22%20width%3D%22102%22%20height%3D%2232%22%20class%3D%22djs-outline%22%20style%3D%22fill%3A%20none%3B%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E"
          className="download"
          title="download as SVG image"
          jswidget="downloadSVG"
          data-track="diagram:download-svg"
          download="diagram.svg"
        >
          <span className="icon-picture" />
        </a>
      </li>
    </ul>
  </div>
);
