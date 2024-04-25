import Code from "@atlasschool/code";

import BasicJsx from "./BasicJsx";
import BasicJsxString from "./BasicJsx?raw";

export function Example1() {
  return (
    <div className="example">
      <h3>Example 1 - Basic JSX Component</h3>
      <p>
        The first few lines are how you would create a heading component in
        plain javascript. The last few lines are how you accomplish the same
        output with jsx. A react component's function name must start with a
        capital letter. It must also contain a return statement that returns
        html.
      </p>
      <Code
        title="BasicJsx.ts"
        lineNumbers
        language="jsx"
        component={<BasicJsx />}
      >
        {BasicJsxString}
      </Code>
    </div>
  );
}
