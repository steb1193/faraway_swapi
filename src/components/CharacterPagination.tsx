'use client';
import { FC, useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import * as React from 'react';
import { getCharacters } from '@/api/getCharacters';
import { Pagination } from '@mui/material';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';

export const CharacterPagination: FC = () => {
  const searchParams = useSearchParams();

  const [page, setPage] = useState(+(searchParams.get('page') || 1));
  const router = useRouter();
  const pathname = usePathname();
  const { data, isFetching } = useQuery({
    queryKey: [
      'characters',
      { page: searchParams.get('page'), search: searchParams.get('search') },
    ],
    queryFn: async () => {
      const { data } = await getCharacters({
        page: searchParams.get('page'),
        search: searchParams.get('search'),
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
  ) => void = async (e, _page) => {
    if (+_page === +page) {
      return;
    }
    setPage(_page);
    const current = new URLSearchParams(Array.from(searchParams.entries()));
    if (!_page) {
      current.delete('page');
    } else {
      current.set('page', `${_page}`);
    }
    const search = current.toString();
    const query = search ? `?${search}` : '';
    router.push(`${pathname}${query}`);
  };
  const pageCount = data?.count ? Math.ceil(data?.count / 10) : 0;
  if (pageCount <= 1) {
    return;
  }
  return (
    <Pagination
      disabled={isFetching}
      count={pageCount}
      page={+searchParams.get('page') || 1}
      onChange={onChange}
    />
  );
};
