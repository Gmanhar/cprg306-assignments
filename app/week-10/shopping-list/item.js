export default function Item({ name, quantity, category, onSelect }) {
  const handleClick = () => {
    if (onSelect) {
      onSelect(name);
    }
  };

  return (
    <section>
      <li
        onClick={handleClick}
        className="bg-slate-800 rounded-md p-5 m-5 text-stone-50 mr-96 cursor-pointer hover:bg-slate-700 transition"
      >
        <p className="text-lg font-semibold">{name}</p>
        <p>
          Buy {quantity} in <span className="italic">{category}</span>
        </p>
      </li>
    </section>
  );
}
