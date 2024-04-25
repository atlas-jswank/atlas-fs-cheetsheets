export default function EventHandling() {
  function handleClick() {
    alert("Today's date is: " + new Date());
  }
  return (
    <div>
      <button onClick={handleClick}>Click Me</button>
    </div>
  );
}
