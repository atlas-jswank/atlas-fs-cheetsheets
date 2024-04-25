import Code from "@atlasschool/code";

import SelfClosingTags from "./SelfClosingTags";
import SelfClosingTagsBrokenString from "./SelfClosingTagsBroken?raw";
import SelfClosingTagsString from "./SelfClosingTags?raw";
import Error from "../Error";

export function Example4() {
  return (
    <div className="example">
      <h3>Example 4 - Self Closing Tags</h3>
      <p>
        While it is valid html to have tags that do not close, All tags in JSX
        must have a closing tag. If it is a single tag it must have a trailing
        slash before the last bracket.
      </p>
      <Code
        title="ReactFragmentBroken.jsx"
        lineNumbers
        language="jsx"
        component={<Error>Unterminated JSX contents.</Error>}
      >
        {SelfClosingTagsBrokenString}
      </Code>
      <Code
        title="ReactFragment.jsx"
        lineNumbers
        language="jsx"
        component={<SelfClosingTags />}
      >
        {SelfClosingTagsString}
      </Code>
    </div>
  );
}
