function MyButton() {
  return (
    <button>I'm a button</button>
  );
}
function Karsilama() {
  const user = { name: "Ahmet" }; 

  return (
    <h1> Merhaba {user.name} </h1> 
  );
}
const user = {
  name: 'Hedy Lamarr',
  imageUrl: 'https://react.dev/images/docs/scientists/yXOvdOSs.jpg',
  imageSize: 90,
};
// süslü parantez değişken değerler için kullanılır.
// listlerin içindeki değerlere erişmek için . kullanılır.
// export diğer dosyalarda da bu fonkisyonları import etmemizi sağlar.
export function Profile() {
  return (
    <>
      <h1>{user.name}</h1>
      <img
        className="avatar"
        src={user.imageUrl}
        alt={'Photo of ' + user.name}
        style={{
          width: user.imageSize,
          height: user.imageSize
        }}
      />
    </>
  );
}
export default function MyApp() {
  return (
    <div>
      <h1>Welcome to my app</h1>
      <MyButton />
      <Karsilama />
      <img className="avatar" src="https://example.com/avatar.jpg" alt="Avatar" />
      <Profile></Profile>
      <Topiclist></Topiclist>
    </div>
  );
}
const products = [
  { title: 'first topic', id: 1 },
  { title: 'second topic', id: 2 },
  { title: 'topic x', id: 3 },
];
function Topiclist(){
  return( 
  <ul>
    {products.map((prdct) => <li id={prdct.id} className="topicList">{prdct.title}</li>)}
  </ul>
  );
}

