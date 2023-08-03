'use client';
import { FC } from 'react';
import { useQuery } from '@tanstack/react-query';
import * as React from 'react';
import { getCharacters } from '@/api/getCharacters';
import { Pagination } from '@mui/material';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';

export const CharacterPagination: FC = () => {
  const searchParams = useSearchParams();

  const router = useRouter();
  const pathname = usePathname();
  const { data, isFetching } = useQuery({
    queryKey: [
      'characters',
      { page: searchParams.get('page'), search: searchParams.get('search') },
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

  const onChange: (
    event: React.ChangeEvent<unknown>,
    page: number,
  ) => void = async (e, page) => {
    if (`${page}` === searchParams.get('page')) {
      return;
    }
    const current = new URLSearchParams(Array.from(searchParams.entries()));
    if (!page) {
      current.delete('page');
    } else {
      current.set('page', `${page}`);
    }
    const search = current.toString();
    const query = search ? `?${search}` : '';
    const href = `${pathname}${query}`;
    router.push(href);
  };
  const pageCount = data?.count ? Math.ceil(data?.count / 10) : 0;
  if (pageCount <= 1) {
    return;
  }
  return (
    <Pagination
      disabled={isFetching}
      count={pageCount}
      page={+(searchParams.get('page') || 1)}
      onChange={onChange}
    />
  );
};
