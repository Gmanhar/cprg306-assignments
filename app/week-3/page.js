import ItemList from "./item-list";

export default function Page() {
  return (
    <main className="bg-slate-900">
      <h1 className="text-stone-50 font-semibold text-4xl p-5">
        Shopping List
      </h1>
      <ItemList />
    </main>
  );
}
