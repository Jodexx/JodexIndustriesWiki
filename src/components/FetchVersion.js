import { useEffect, useState } from 'react';
import CodeBlock from '@theme/CodeBlock';

export default function FetchVersion({ type = 'maven', artifactId = 'api' }) {
  const [version, setVersion] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem(`version_${artifactId}`) || 'loading';
    }
    return 'loading';
  });

  useEffect(() => {
    if (version !== 'loading') return;

    async function fetchVersion() {
      try {
        const response = await fetch(
          `https://repo.jodexindustries.xyz/api/maven/latest/version/releases/com/jodexindustries/donatecase/${artifactId}?type=raw`
        );
        const data = await response.text();
        const fetchedVersion = data.trim();

        setVersion(fetchedVersion);
        if (typeof window !== 'undefined') {
          localStorage.setItem(`version_${artifactId}`, fetchedVersion);
        }
      } catch (error) {
        setVersion('Error fetching version');
      }
    }

    fetchVersion();
  }, [artifactId]);

  const dependency =
    type === 'gradle'
      ? `dependencies {
    compileOnly("com.jodexindustries.donatecase:${artifactId}:${version}")
}`
      : `<dependency>
    <groupId>com.jodexindustries.donatecase</groupId>
    <artifactId>${artifactId}</artifactId>
    <version>${version}</version>
    <scope>provided</scope>
</dependency>`;

  return <CodeBlock language={type === 'gradle' ? 'groovy' : 'xml'}>{dependency}</CodeBlock>;
}
