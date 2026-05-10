function MyButton() {
  return (
    <button>I'm a button</button>
  );
}
function Karsilama() {
  const user = { name: "Ahmet" }; // JavaScript'te verimizi tanımladık

  return (
    <h1> Merhaba {user.name} </h1> 
  );
}
export default function MyApp() {
  return (
    <div>
      <h1>Welcome to my app</h1>
      <MyButton />
      <Karsilama />
      <img className="avatar" src="https://example.com/avatar.jpg" alt="Avatar" />
    </div>
  );
}
