import { useRouter } from 'next/router';

export function usePokemonPagination(searchQuery: string) {
  const router = useRouter();

  const handlePageChange = (page: number) => {
    const query: { page: number; search?: string } = { page };
    if (searchQuery) query.search = searchQuery;
    router.push({ pathname: '/pokemon', query });
  };

  const handleSearch = (query: string) => {
    const q: { page: number; search?: string } = { page: 1 };
    if (query.trim()) q.search = query.trim();
    router.push({ pathname: '/pokemon', query: q });
  };

  return { handlePageChange, handleSearch };
}
