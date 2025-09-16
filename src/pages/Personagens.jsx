import { useEffect } from 'react';
import useCharacters from '../hooks/useCharacters';

function Personagens() {
  const { characters, loading, getCharacters } = useCharacters();
  useEffect(() => {
    getCharacters();
  }, []);
  if (loading) {
    <div>Essa merda ta carregando ainda!</div>;
  }
  return (
    <div className="text-3xl font-bold underline">
      {characters.map((item) => item.name)}
    </div>
  );
}

export default Personagens;
