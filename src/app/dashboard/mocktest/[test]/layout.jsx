const MockTestLayout = ({ children }) => {
  return (
    <div className="mocktest-layout">
      mocktest sidebar
      <main className="main-content">{children}</main>
    </div>
  );
};

export default MockTestLayout;
