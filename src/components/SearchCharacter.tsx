'use client';
import { FC, useState } from 'react';
import { SearchIconWrapper } from '@/components/SearchIconWrapper';
import { StyledInputBase } from '@/components/StyledInputBase';
import { Search } from '@/components/Search';
import SearchIcon from '@mui/icons-material/Search';
import {
  usePathname,
  useRouter,
  useSearchParams,
  useParams,
} from 'next/navigation';
import * as React from 'react';
import { useDebounce } from '@/hooks/useDebounce';

export const SearchCharacter: FC = () => {
  const router = useRouter();
  const pathname = usePathname();
  const params = useParams();
  const searchParams = useSearchParams();
  const debounce = useDebounce();
  const [search, setSearch] = useState<string>(
    searchParams.get('search') || '',
  );

  const handleSearch: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    const searchString = e.target.value || '';
    if (searchString === search) {
      return;
    }
    setSearch(e.target.value);
    debounce(async () => {
      const current = new URLSearchParams(Array.from(searchParams.entries()));
      const value = e.target.value.trim();
      current.delete('page');
      if (!value) {
        current.delete('search');
      } else {
        current.set('search', value);
      }
      const search = current.toString();
      const query = search ? `?${search}` : '';
      router.push(`${pathname}${query}`);
    });
  };
  if ('id' in params) {
    return;
  }
  return (
    <Search>
      <SearchIconWrapper>
        <SearchIcon />
      </SearchIconWrapper>
      <StyledInputBase
        placeholder="Search…"
        inputProps={{ 'aria-label': 'search' }}
        onInput={handleSearch}
        value={search}
      />
    </Search>
  );
};
