const Index = () => {
  return <div>Index</div>;
};

export default Index;

export const getStaticProps = async () => {
  return {
    revalidate: 60,
    props: {},
  };
};
