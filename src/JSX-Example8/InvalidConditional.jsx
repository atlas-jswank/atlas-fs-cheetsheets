const InvalidConditional = () => {
	const number = 2
	return (
    <div>
      {
        if(number % 2 === 0) {
          "The number is even"
        }
      }
    </div>
  );
}

