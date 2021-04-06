const Slug = () => {
  return <div>Slug</div>;
};

export default Slug;

export const getStaticProps = async () => {
  return {
    revalidate: 60,
    props: {},
  };
};

export async function getStaticPaths() {
  // do async work to fetch from server

  return {
    paths: ["//", "/test"],
    fallback: "blocking",
  };
}
