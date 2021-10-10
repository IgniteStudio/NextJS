export const getStaticPaths = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();

  const paths = data.map(davo => {
    return {
      params: { id: davo.id.toString() },
    };
  });
  return {
    paths,
    fallback: false, // fallback pages
  };
};

export const getStaticProps = async (context) => {
  const id = context.params.id;
  const res = await fetch("https://jsonplaceholder.typicode.com/users/" + id);
  const data = await res.json();

  return {
    props: { davo: data },
  };
};

const Details = ({ davo }) => {
  return (
    <div>
      <h1>{davo.name}</h1>
      <p>{davo.email}</p>
      <p>{davo.website}</p>
      <p>{davo.address.city}</p>
    </div>
  );
};

export default Details;
