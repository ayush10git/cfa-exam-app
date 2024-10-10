const MockTestPage = () => {
  return <div>Mock Test Number X</div>;
};

MockTestPage.getLayout = (page) => <MockTestLayout>{page}</MockTestLayout>;

export default MockTestPage;
