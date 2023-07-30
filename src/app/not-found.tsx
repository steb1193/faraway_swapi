import Link from 'next/link';
import { FC } from 'react';

const NotFound: FC = () => {
  return (
    <div>
      <h2>Not Found</h2>
      <p>Could not find requested resource</p>
      <p>
        View <Link href="/">all characters</Link>
      </p>
    </div>
  );
};

export default NotFound;
