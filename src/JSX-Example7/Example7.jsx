import Code from "@atlasschool/code";

import ExportingComponentsString from "./ExportingComponents?raw";
import ImportingComponents from "./ImportingComponents";
import ImportingComponentsString from "./ImportingComponents?raw";

export function Example7() {
  return (
    <div className="example">
      <h3>Example 7 - Importing/exporting modules</h3>
      <p>
        React components rely on{" "}
        <a href="https://react.dev/learn/importing-and-exporting-components">
          ES module syntax
        </a>{" "}
        to export/import components. A file can only have one default export.
        The default export does not need brackets when importing becuase it is
        assumed to be the default component.
      </p>

      <Code title="ExportingComponents.jsx" lineNumbers language="jsx">
        {ExportingComponentsString}
      </Code>
      <Code
        title="ImportingComponents.jsx"
        lineNumbers
        language="jsx"
        component={<ImportingComponents />}
      >
        {ImportingComponentsString}
      </Code>
    </div>
  );
}
