import { useState, useEffect } from "react";
import Card from "../components/Card";

export default function Pizzas() {

  const [pizzas, setPizzas] = useState(null)
  const [loading, setLoading] =useState(true)

  const getPizzas = async () => {

    try {
      setLoading(true)
      const res = await fetch('../../public/pizzas.json') 
      const data = await res.json()
      setPizzas(data)
           
    } catch (error) {
      console.log(error)
      
    }
    
  }

  useEffect(() => {
    getPizzas()   
  }, [])

  if(!pizzas) return <h1>loading...</h1>
   
  console.log(pizzas)
  return (
    <div>
      <h1>Pizzas</h1>
      <div className="row">
        {
        pizzas.map((item) =>{         
        return(
          <Card key={item.id} item={item} />
        )})}
      </div>
    </div>
  );
}
