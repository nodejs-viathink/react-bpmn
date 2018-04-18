import React, { Fragment } from "react";

export default () => (
  <Fragment>
    <div className="io-dialog about" jswidget="about-dialog">
      <div className="content">
        <h1>About bpmn.io</h1>

        <p>
          bpmn.io offers tools to view, annotate and edit{" "}
          <a href="http://www.bpmn.org/">BPMN 2.0</a> diagrams on the web. Refer
          to our <a href="http://bpmn.io/">project website</a> for more
          information.
        </p>

        <p>
          This is a demo of{" "}
          <a href="https://github.com/bpmn-io/bpmn-js">bpmn-js</a> the
          JavaScript toolkit that powers bpmn.io.
        </p>
        <p />
        <h2>Built with open-source software</h2>

        <p>
          <a href="https://github.com/bpmn-io/bpmn-js">bpmn-js</a> is built with
          the help of a number of open-source libraries:
        </p>

        <ul>
          <li>
            <a href="https://github.com/isaacs/sax-js">saxjs</a>
          </li>
          <li>
            <a href="http://snapsvg.io/">snapsvg</a>
          </li>
          <li>
            <a href="http://jquery.com/">jquery</a>
          </li>
        </ul>

        <p>
          Icons are assembled using <a href="http://fontello.com/">fontello</a>{" "}
          from the following icon fonts:
        </p>

        <ul>
          <li>
            <a href="http://fontello.com/">Fontelico</a> crowdsourced, for
            Fontello project
          </li>
          <li>
            <a href="http://fortawesome.github.com/Font-Awesome/">
              Font Awesome
            </a>{" "}
            by Dave Gandy
          </li>
          <li>
            <a href="http://www.entypo.com/">Entypo</a> by Daniel Bruce
          </li>
          <li>
            <a href="http://somerandomdude.com/work/iconic/">Iconic</a> by P.J.
            Onori
          </li>
        </ul>

        <a className="project-logo" href="http://bpmn.io/">
          <span className="icon-bpmn-io" />
        </a>

        <p>
          You can find all bpmn.io related open-source projects on
          <a href="https://github.com/bpmn-io">GitHub</a>.
        </p>
      </div>
    </div>

    <div
      className="io-dialog import-warnings"
      jswidget="import-warnings-dialog"
    >
      <div className="content">
        <h1>Import Warnings</h1>

        <p>
          One or more problems have been identified when trying to import the
          BPMN 2.0 diagram:
        </p>

        <p>
          <textarea className="error-log" />
        </p>
        <p />
        <p>
          This may have been caused by malformed input data. As a result the
          diagram may not render correctly.
        </p>

        <h2>Need help on this?</h2>

        <p>
          File a report in{" "}
          <a href="https://forum.bpmn.io/" target="_blank">
            our forum
          </a>. Attach your diagram and the above error log.
        </p>

        <a className="project-logo" href="http://bpmn.io/">
          <span className="icon-bpmn-io" />
        </a>
      </div>
    </Fragment>

    <div className="io-dialog keybindings-dialog" jswidget="keybindings-dialog">
      <div className="content bindings-mac">
        <h1>Keyboard Shortcuts</h1>
        <table>
          <tbody>
            <tr>
              <td>Undo</td>
              <td className="binding">⌘ + Z</td>
            </tr>
            <tr>
              <td>Redo</td>
              <td className="binding">⌘ + ⇧ + Z</td>
            </tr>
            <tr>
              <td>Select All</td>
              <td className="binding">⌘ + A</td>
            </tr>
            <tr>
              <td>Scrolling (Vertical)</td>
              <td className="binding">⌥ + Scrolling</td>
            </tr>
            <tr>
              <td>Scrolling (Horizontal)</td>
              <td className="binding">⌥ + ⇧ + Scrolling</td>
            </tr>
            <tr>
              <td>Direct Editing</td>
              <td className="binding">E</td>
            </tr>
            <tr>
              <td>Hand Tool</td>
              <td className="binding">H</td>
            </tr>
            <tr>
              <td>Lasso Tool</td>
              <td className="binding">L</td>
            </tr>
            <tr>
              <td>Space Tool</td>
              <td className="binding">S</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="content bindings-default">
        <h1>Keyboard Shortcuts</h1>
        <table>
          <tbody>
            <tr>
              <td>Undo</td>
              <td className="binding">
                <code>ctrl + Z</code>
              </td>
            </tr>
            <tr>
              <td>Redo</td>
              <td className="binding">
                <code>ctrl + ⇧ + Z</code>
              </td>
            </tr>
            <tr>
              <td>Select All</td>
              <td className="binding">
                <code>ctrl + A</code>
              </td>
            </tr>
            <tr>
              <td>Scrolling (Vertical)</td>
              <td className="binding">ctrl + Scrolling</td>
            </tr>
            <tr>
              <td>Scrolling (Horizontal)</td>
              <td className="binding">ctrl + ⇧ + Scrolling</td>
            </tr>
            <tr>
              <td>Direct Editing</td>
              <td className="binding">E</td>
            </tr>
            <tr>
              <td>Hand Tool</td>
              <td className="binding">H</td>
            </tr>
            <tr>
              <td>Lasso Tool</td>
              <td className="binding">L</td>
            </tr>
            <tr>
              <td>Space Tool</td>
              <td className="binding">S</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </Fragment>
);
