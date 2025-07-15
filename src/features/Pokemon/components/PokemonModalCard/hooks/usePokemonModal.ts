import { useState } from 'react';

export function usePokemonModal() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedId, setSelectedId] = useState<number | null>(null);

  const onOpenModal = (pokemon: { url: string }) => {
    const id = parseInt(pokemon.url.split('/').filter(Boolean).pop() || '', 10);
    if (!isNaN(id)) {
      setSelectedId(id);
      setIsModalOpen(true);
    }
  };

  const onCloseModal = () => {
    setIsModalOpen(false);
    setSelectedId(null);
  };

  return {
    isModalOpen,
    selectedId,
    onOpenModal,
    onCloseModal,
  };
}