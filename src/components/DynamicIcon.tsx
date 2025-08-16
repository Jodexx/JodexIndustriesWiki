import { useEffect, useState } from 'react';

export function DynamicIcon({ name }: { name: string }) {
  const [Icon, setIcon] = useState<React.ComponentType | null>(null);

  useEffect(() => {
    import('react-icons/fa').then((icons) => {
      if (icons[name]) {
        setIcon(() => icons[name] as React.ComponentType);
      }
    });
  }, [name]);

  return Icon ? <Icon /> : null;
}