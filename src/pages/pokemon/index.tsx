import { PokemonView, PokemonModalCard } from '@/features/Pokemon/components'
import { usePokemonModal } from '@/features/Pokemon/components/PokemonModalCard/hooks'
import { usePokemonPagination } from '@/features/Pokemon/components/PokemonView/hooks'
import { fetchPokemonList, searchPokemon } from '@/features/Pokemon/services';
import { PokemonListResponse } from '@/features/Pokemon/types';
import { PageSection } from '@/shared/ui/atoms'
import { GetServerSideProps } from 'next';

interface PokemonPageProps {
  initialData: PokemonListResponse;
  currentPage: number;
  searchQuery: string;
}


export default function PokemonPage({ initialData, currentPage, searchQuery }: PokemonPageProps) {
  const { isModalOpen, selectedId, onOpenModal, onCloseModal } = usePokemonModal();
  const { handlePageChange, handleSearch } = usePokemonPagination(searchQuery);

  return (
    <PageSection title="Pokemon Table">
      
      <PokemonView
        data={initialData}
        currentPage={currentPage}
        searchQuery={searchQuery}
        onRowClick={onOpenModal}
        onPageChange={handlePageChange}
        onSearch={handleSearch}
      />

      {isModalOpen && selectedId !== null && (
        <PokemonModalCard
          id={selectedId}
          isOpen={isModalOpen}
          onClose={onCloseModal}
        />
      )}
    </PageSection>
  );
}

export const getServerSideProps: GetServerSideProps<PokemonPageProps> = async ({ query }) => {
  const page = parseInt(query.page as string) || 1;
  const searchQuery = (query.search as string) || '';

  try {
    const data = searchQuery
      ? await searchPokemon(searchQuery)
      : await fetchPokemonList(page);

    return {
      props: {
        initialData: data,
        currentPage: page,
        searchQuery,
      },
    };
  } catch {
    return {
      props: {
        initialData: { results: [], count: 0, next: null, previous: null },
        currentPage: 1,
        searchQuery: '',
      },
    };
  }
};
