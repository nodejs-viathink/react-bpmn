import React, { Component, Fragment } from "react";
import BpmnModeler from "bpmn-js/lib/Modeler";
import propertiesPanelModule from "bpmn-js-properties-panel";
// import propertiesProviderModule from "bpmn-js-properties-panel/lib/provider/bpmn";
import propertiesProviderModule from "./provider/magic";
import magicModdleDescriptor from "./descriptors/magic";

import ZoomControls from "./components/ZoomControls";
import FileControls from "./components/FileControls";
import EditingTools from './components/EditingTools';

import "./style/app.less";

import xmlStr from "../../assets/bpmn/xmlStr";

export default class extends Component {
  componentDidMount() {
    document.body.className = "shown";

    this.bpmnModeler = new BpmnModeler({
      additionalModules: [propertiesPanelModule, propertiesProviderModule],
      container: "#canvas",
      propertiesPanel: {
        parent: "#properties-panel"
      },
      moddleExtensions: {
        magic: magicModdleDescriptor
      }
    });

    // this.bpmnModeler.on('commandStack.changed', this.onChange);

    const { xml = xmlStr } = this.props;

    this.renderDiagram(xml);
  }

  componentWillReceiveProps(nextProps) {
    const { xml } = nextProps;
    if (xml && xml !== this.props.xml) {
      this.renderDiagram(xml);
    }
  }

  shouldComponentUpdate() {
    return false;
  }

  renderDiagram = (xml) => {
    this.bpmnModeler.importXML(xml, err => {
      if (err) {
        // import failed :-(
        console.log("error rendering", err);
      } else {
        // we did well!
        this.bpmnModeler.getDefinitions()
        console.log("successfully rendered");
      }
    });
  };

  // onChange = () => {
  //   this.bpmnModeler.saveXML({ format: true }, function(err, xml) {
  //     console.log(xml);
  //   });
  // };

  handleSave = (e) => {
    e.preventDefault();
    this.bpmnModeler.saveXML({ format: true }, (err, xml) => {
      console.log(xml);
      console.log(this.bpmnModeler.getDefinitions());
    });
  }

  render() {
    return (
      <Fragment>
        <div className="content">
          <div id="canvas" />
          <div id="properties-panel" />
        </div>
        <ZoomControls />
        <FileControls />
        <EditingTools onSave={this.handleSave} />
      </Fragment>
    );
  }
}
