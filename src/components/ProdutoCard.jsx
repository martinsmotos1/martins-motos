export default function ProdutoCard({ produto }) {
  return (
    <div className="border p-4 rounded-xl shadow-md hover:shadow-lg transition duration-300">
      <img src={produto.imagem} alt={produto.nome} className="w-full h-48 object-cover rounded" />
      <h2 className="mt-2 font-semibold text-lg">{produto.nome}</h2>
      <p className="text-sm text-gray-600">Marca: {produto.fornecedor}</p>
      <p className="text-xl font-bold text-green-600">R$ {produto.preco.toFixed(2)}</p>
      <button className="mt-2 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
        Adicionar ao Carrinho
      </button>
    </div>
  );
}