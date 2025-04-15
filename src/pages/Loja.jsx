import ProdutoCard from "../components/ProdutoCard";
import { produtos } from "../data/produtos";

export default function Loja() {
  return (
    <div className="p-6 max-w-7xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-center">Catálogo Martins Motos</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {produtos.map((p, i) => (
          <ProdutoCard key={i} produto={p} />
        ))}
      </div>
    </div>
  );
}