import New from "./New"

class Car {
  constructor(name) {
this.brand = name;
  }
  
  present() {
    return 'I have a ' + this.brand;
  }

}

class Model extends Car {
constructor(name, mod) {
super(name);
this.model = mod;
}
show() {
  return this.present() + ', it is a ' + this.model
}
}


function App() {
  
const mycar = new Model("Ford", "Mustang");


  return (
    <>

<h1>{mycar.show()}</h1>
 
<New/>
    </>
  )
}


export default App
