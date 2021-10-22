import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

const Custom404 = () => {
  const router = useRouter();
  const [count, setCount] = useState(5);

  const goToHome = () => {
    router.push('/');
  };

  useEffect(() => {
    setInterval(() => {
      setCount(count - 1);
    }, 1000);

    if (count < 1) {
      goToHome();
    }
  }, [count, goToHome]);

  const onClick = () => {
    goToHome();
  };

  return (
    <div>
      <h1 className="title-not-found">Ooops...</h1>
      <h1 className="title-not-found">Halaman yang anda cari tidak ditemukan</h1>
      <p>
        auto redirection in
        {count}
      </p>

      <button type="submit" onClick={onClick}>Go to Home</button>
    </div>
  );
};

export default Custom404;
