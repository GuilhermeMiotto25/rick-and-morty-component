import React from "react";

export default function CharacterCard({ character }) {
  return (
    <div className="relative bg-gradient-to-br from-yellow-200 via-orange-300 to-red-400 rounded-2xl p-[2px] shadow-xl hover:scale-105 hover:shadow-2xl transition-transform duration-300">
      {/* Container interno */}
      <div className="bg-white rounded-2xl p-4 flex flex-col items-center text-center h-full">
        {/* Imagem circular em destaque */}
        <div className="w-28 h-28 rounded-full overflow-hidden border-4 border-indigo-600 shadow-md -mt-12 bg-white">
          <img
            className="w-full h-full object-cover"
            src={character.image}
            alt={character.name}
            loading="lazy"
          />
        </div>

        {/* Nome do personagem */}
        <h2 className="mt-3 text-lg font-extrabold text-gray-900 tracking-wide">
          {character.name}
        </h2>

        {/* Badge de status */}
        <span
          className={`mt-1 px-3 py-1 text-xs rounded-full text-white font-semibold shadow ${
            character.status === "Alive"
              ? "bg-green-500"
              : character.status === "Dead"
              ? "bg-red-500"
              : "bg-gray-500"
          }`}
        >
          {character.status}
        </span>

        {/* Informações */}
        <div className="mt-4 space-y-1 text-sm text-gray-700 w-full bg-gray-50 rounded-lg p-3 shadow-inner">
          <p>
            <span className="font-semibold">Espécie:</span> {character.species}
          </p>
          <p>
            <span className="font-semibold">Gênero:</span> {character.gender}
          </p>
          <p>
            <span className="font-semibold">Origem:</span> {character.origin?.name}
          </p>
          <p>
            <span className="font-semibold">Localização:</span>{" "}
            {character.location?.name}
          </p>
        </div>
      </div>
    </div>
  );
}
