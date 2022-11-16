import { useRouter } from 'next/router';
import MyHead from '../../components/MyHead';

export default function Detail({ params }) {
  const [title, id] = params || [];
  return (
    <div>
      <MyHead title={title} />
      <h4>{title}</h4>
    </div>
  );
}

export function getServerSideProps({ params: { params } }) {
  return { props: { params } };
}
