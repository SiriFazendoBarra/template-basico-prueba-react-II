export default function Card(pizza) {
  console.log(pizza)
  return (
    <article className="mb-2 col-12 col-md-6 col-xl-3">
      <div className="card">
        <img
          src={pizza.item.img}
          className="card-img-top"
          alt="card description"
        />
        <div className="card-body">
          <h2>
            <b>{pizza.item.name}</b>
          </h2>
          <h6>Ingrediente</h6>
          <ul>
            {pizza.item.map((item)=> (
              <li>{item}</li>
          ))}
          </ul>
          
          <h5>
            <b>Precio: ${pizza.item.price}</b>
          </h5>
          <div className="d-flex gap-2">
            <a
              href="/cart"
              className="btn btn-outline-primary"
            >
              Comprar
            </a>
            <a
              href="/pizzas/1"
              className="btn btn-outline-danger"
            >
              Ver detalles
            </a>
          </div>
        </div>
      </div>
    </article>
  );
}
