import Code from "@atlasschool/code";

import EventHandling from "./EventHandling";
import EventHandlingString from "./EventHandling?raw";

export function Example6() {
  return (
    <div className="example">
      <h3>Example 6 - Event Handling</h3>
      <p>
        Function{" "}
        <a href="https://react.dev/learn/responding-to-events">
          event handlers
        </a>{" "}
        can be bound to html elements to execute javascript on certain
        behaviors.
      </p>

      <Code
        title="ReactFragment.jsx"
        lineNumbers
        language="jsx"
        component={<EventHandling />}
      >
        {EventHandlingString}
      </Code>
    </div>
  );
}
