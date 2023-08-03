import type { NextPage } from 'next';
import { getSingleCharacter } from '@/api/getSingleCharacter';
import { notFound } from 'next/navigation';
import { CharacterCardEdit } from '@/components/CharacterCardEdit';
const PersonPage: NextPage<{ params?: { id?: string } }> = async ({
  params,
}) => {
  try {
    if (params?.id === undefined) {
      return notFound();
    }
    const character = await getSingleCharacter({
      id: +params.id,
    });
    return <CharacterCardEdit {...(character?.data || [])} />;
  } catch (_) {
    return notFound();
  }
};
export default PersonPage;
