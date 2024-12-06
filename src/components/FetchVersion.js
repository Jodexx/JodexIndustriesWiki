import { useEffect, useState } from 'react';

export default function FetchVersion() {
  const [version, setVersion] = useState('loading');

  useEffect(() => {
    // Fetch the version asynchronously
    async function fetchVersion() {
      try {
        const response = await fetch(
          'https://repo.jodexindustries.xyz/api/maven/latest/version/releases/com/jodexindustries/donatecase/api?type=raw'
        );
        const data = await response.text();
        setVersion(data);
      } catch (error) {
        setVersion('Error fetching version');
      }
    }

    fetchVersion();
  }, []);

  return <strong>{version}</strong>;
}
