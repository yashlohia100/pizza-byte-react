function ErrorBox({ message }) {
  return (
    <div className="mt-12 text-center">
      <p className="mb-2 font-medium uppercase text-red-500">Error!</p>

      <p>{message}</p>
    </div>
  );
}

export default ErrorBox;
