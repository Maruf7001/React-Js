

function App() {

  const myArray = ['apple', 'banana', 'orange'];

  
  return (
    <>
      
{myArray.map((item, index) => (<p key={index}>{item} </p>))}

    </>
  )
}

export default App
