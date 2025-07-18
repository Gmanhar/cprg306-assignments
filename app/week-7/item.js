export default function Item({ name, quantity, category }) {
    return (
      <section>
        <li className="bg-slate-800 rounded-md p-5 m-5 text-stone-50 mr-96">
        <p className="text-lg font-semibold">{name}</p>
        <p>Buy {quantity} in {category} </p>
      </li>
      </section>

      
    );
  }