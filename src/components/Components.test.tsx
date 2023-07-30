import { render } from '@testing-library/react';
import mockRes from '@/__mocks__/people.json';
import { CharacterCard } from '@/components/CharacterCard';
import { CharacterCardEdit } from '@/components/CharacterCardEdit';
import { HomeButton } from '@/components/HomeButton';
import { Offset } from '@/components/Offset';
import { Search } from '@/components/Search';
import { SearchIconWrapper } from '@/components/SearchIconWrapper';
import { StyledInputBase } from '@/components/StyledInputBase';

describe('Components', () => {
  beforeEach(() => {
    global['mockAxios'].onGet('people').reply(200, mockRes);
    global['mockAxios'].onGet(/people\/*/).reply(200, mockRes.results[0]);
  });

  test('renders CharacterCard enabled unchanged', () => {
    const { container } = render(
      <CharacterCard {...mockRes.results[0]} disabled={false} />,
    );
    expect(container).toMatchSnapshot();
  });

  test('renders CharacterCard disabled unchanged', () => {
    const { container } = render(
      <CharacterCard {...mockRes.results[0]} disabled={true} />,
    );
    expect(container).toMatchSnapshot();
  });

  test('renders CharacterCardEdit unchanged', () => {
    const { container } = render(<CharacterCardEdit {...mockRes.results[0]} />);
    expect(container).toMatchSnapshot();
  });

  test('renders HomeButton unchanged', () => {
    const { container } = render(<HomeButton />);
    expect(container).toMatchSnapshot();
  });

  test('renders Offset unchanged', () => {
    const { container } = render(<Offset />);
    expect(container).toMatchSnapshot();
  });

  test('renders Search unchanged', () => {
    const { container } = render(<Search />);
    expect(container).toMatchSnapshot();
  });

  test('renders SearchIconWrapper unchanged', () => {
    const { container } = render(<SearchIconWrapper />);
    expect(container).toMatchSnapshot();
  });

  test('renders StyledInputBase unchanged', () => {
    const { container } = render(<StyledInputBase />);
    expect(container).toMatchSnapshot();
  });
});
