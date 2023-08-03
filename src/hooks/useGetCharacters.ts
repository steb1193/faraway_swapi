import { useQuery } from '@tanstack/react-query';
import { getCharacters } from '@/api/getCharacters';
import { useSearchParams } from 'next/navigation';

export const useGetCharacters = () => {
  const searchParams = useSearchParams();

  const { data, isFetching } = useQuery({
    queryKey: [
      'characters',
      {
        page: searchParams.get('page'),
        search: searchParams.get('search'),
      },
    ],
    queryFn: async () => {
      const { data } = await getCharacters({
        page: searchParams.get('page') || undefined,
        search: searchParams.get('search') || undefined,
      });
      return data;
    },
    keepPreviousData: true,
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,
    retry: false,
    staleTime: 300000,
  });
  return { data, isFetching };
};
