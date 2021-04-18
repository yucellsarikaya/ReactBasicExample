import Demo from "./Demo";

function App() {
  let data = {data1:"one", data2:"two", data3:"there", data4:"four"};
  return (
    <div className="App">
       <Demo info={data}/>
    </div>
  );
}

export default App;
