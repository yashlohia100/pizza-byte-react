function Main({ children }) {
  return (
    <div className="overflow-scroll">
      <main className="mx-auto max-w-2xl">{children}</main>
    </div>
  );
}

export default Main;
