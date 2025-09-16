import React, { useEffect, useState } from "react";
import axios from "axios";
import CharacterCard from "./components/CharacterCard";

export default function App() {
  const [characters, setCharacters] = useState([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchCharacters = async (pageNum = 1) => {
    setLoading(true);
    setError(null);
    try {
      const res = await axios.get(
        `https://rickandmortyapi.com/api/character?page=${pageNum}`
      );

      // validação defensiva
      const results = res?.data?.results ?? [];
      const next = res?.data?.info?.next ?? null;

      if (results.length) {
        setCharacters((prev) => [...prev, ...results]);
        setHasMore(Boolean(next));
      } else {
        setHasMore(false);
      }
    } catch (err) {
      console.error("Erro ao buscar personagens:", err);
      setError("Erro ao carregar personagens — veja o console para detalhes.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCharacters(page);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page]);

  return (
    <div className="min-h-screen p-6 bg-gradient-to-br from-blue-50 to-purple-100">
      <header className="max-w-7xl mx-auto mb-8">
        <h1 className="text-4xl font-extrabold text-center mb-2 text-gray-900">
          Rick and Morty — Cards
        </h1>
      </header>

      <main className="max-w-7xl mx-auto">
        {error && (
          <div className="mb-4 text-center text-red-600 font-medium">{error}</div>
        )}

        <section className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {characters.map((char) => (
            <CharacterCard key={char.id} character={char} />
          ))}
        </section>

        <div className="flex justify-center mt-8">
          {hasMore ? (
            <button
              onClick={() => setPage((p) => p + 1)}
              disabled={loading}
              className="px-6 py-2 bg-indigo-600 text-white rounded-lg shadow hover:bg-indigo-700 disabled:opacity-50 transition"
            >
              {loading ? "Carregando..." : "Carregar mais"}
            </button>
          ) : (
            <span className="text-gray-600">Todos os personagens carregados.</span>
          )}
        </div>
      </main>
    </div>
  );
}
