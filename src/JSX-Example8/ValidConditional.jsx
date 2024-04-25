export function OddNumber() {
  const number = 1;
  if (number % 2 === 0) {
    return <div>{number} is even</div>;
  } else {
    return <div>{number} is odd</div>;
  }
}

export function EvenNumber() {
  const number = 2;
  return (
    <div>
      {number} is {number % 2 === 0 ? "even" : "odd"}
    </div>
  );
}

export function ZeroNumber() {
  const number = 0;
  return (
    <div>
      {number % 2 === 0 && `${number} is even`}
      {number % 2 !== 0 && `${number} is odd`}
    </div>
  );
}
