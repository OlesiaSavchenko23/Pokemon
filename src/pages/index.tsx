export const getServerSideProps = async () => {
  return {
    redirect: {
      destination: '/pokemon',
      permanent: false,
    },
  };
};

export default function Stub() {
  return null;
}
