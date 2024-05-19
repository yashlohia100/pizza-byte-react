import Button from './Button';

function Homepage() {
  return (
    <div className="mt-8 px-6 text-center">
      <h1 className="text-2xl text-stone-600">Craving pizza?</h1>

      <p className="mb-12 mt-5 text-3xl text-yellow-500">
        Get sizzling pizza at your doorstep in minutes.
      </p>

      <Button to="/menu" type="primary">
        Go to menu
      </Button>
    </div>
  );
}

export default Homepage;
