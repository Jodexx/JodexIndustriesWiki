import React, { useEffect } from 'react';
import Layout from '@theme-original/Layout';

export default function LayoutWrapper(props) {
  useEffect(() => {
    const script1 = document.createElement('script');
    script1.type = 'text/javascript';
    script1.innerHTML = `
      var id_user = 864408;
      var domains_include = ['spigotmc.org', 'bukkit.org', 'papermc.io'];
    `;
    document.head.appendChild(script1);

    const script2 = document.createElement('script');
    script2.type = 'text/javascript';
    script2.src = 'https://adfoc.us/js/fullpage/script.js';
    document.body.appendChild(script2);

    return () => {
      document.head.removeChild(script1);
      document.body.removeChild(script2);
    };
  }, []);

  return <Layout {...props} />;
}
