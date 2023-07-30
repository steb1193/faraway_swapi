import type { NextPage } from 'next';
import { getSingleCharacter } from '@/api/getSingleCharacter';
import { notFound } from 'next/navigation';
import { CharacterCardEdit } from '@/components/CharacterCardEdit';
const PersonPage: NextPage = async ({ params }) => {
  try {
    const character = await getSingleCharacter({
      id: params.id,
    });
    return <CharacterCardEdit {...(character?.data || [])} />;
  } catch (_) {
    return notFound();
  }
};
export default PersonPage;
