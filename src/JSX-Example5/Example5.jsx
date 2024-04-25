import Code from "@atlasschool/code";

import EvaluatingJS from "./EvaluatingJS";
import EvaluatingJSString from "./EvaluatingJS?raw";

export function Example5() {
  return (
    <div className="example">
      <h3>Example 5 - Evaluating JS in JSX</h3>
      <p>
        To{" "}
        <a href="https://react.dev/learn/javascript-in-jsx-with-curly-braces">
          evaluate javascript
        </a>{" "}
        or pass a variable in the html you must surround it in curly brackets.
      </p>

      <Code
        title="ReactFragment.jsx"
        lineNumbers
        language="jsx"
        component={<EvaluatingJS />}
      >
        {EvaluatingJSString}
      </Code>
    </div>
  );
}
