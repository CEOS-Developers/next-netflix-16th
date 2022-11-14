import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useRecoilState } from 'recoil';
import Footer from '../../components/elements/Footer';
import { selectedContentState } from '../../states/footerState';

const SearchPage = () => {
  const [selectedIcon, setSelectedIcon] = useRecoilState(selectedContentState);
  const router = useRouter();
  const pageName = router.asPath.slice(1);

  useEffect(() => {
    setSelectedIcon(pageName);
  }, []);

  return (
    <div style={{ justifyContent: 'center' }}>
      <div style={{ color: 'white' }}>search</div>
      <Footer />
    </div>
  );
};

export default SearchPage;
