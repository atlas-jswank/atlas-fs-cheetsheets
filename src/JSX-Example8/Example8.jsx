import Code from "@atlasschool/code";

import InvalidConditionalString from "./InvalidConditional?raw";
import ValidConditionalString from "./ValidConditional?raw";
import { EvenNumber, OddNumber, ZeroNumber } from "./ValidConditional";

import Error from "../Error";

const errorString = `
InvalidConditional.jsx: Unexpected token (6:2)
  9 | }
/atlas-react-intro/src/Example8/InvalidConditional.jsx:6:2
4  |  <div>
5  |  	{
6  |  		if(number % 2 === 0) {
   |    ^
7  |  			"The number is even"
8  |  		}
`;

export function Example8() {
  return (
    <div className="example">
      <h3>Example 8 - Conditional</h3>
      <p>
        If statements cannot be used in the jsx return statement but you can use
        inline conditionals.
      </p>

      <Code
        title="InvalidConditional.jsx"
        lineNumbers
        language="jsx"
        component={<Error>{errorString}</Error>}
      >
        {InvalidConditionalString}
      </Code>
      <Code
        title="ValidConditional.jsx"
        lineNumbers
        language="jsx"
        component={
          <>
            <OddNumber />
            <EvenNumber />
            <ZeroNumber />
          </>
        }
      >
        {ValidConditionalString}
      </Code>
    </div>
  );
}
