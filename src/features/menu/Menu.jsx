import ErrorBox from '../../ui/ErrorBox';
import Loader from '../../ui/Loader';
import MenuItem from './MenuItem';
import { useGetPizzas } from './useGetPizzas';

function Menu() {
  const { isPending, pizzas, error } = useGetPizzas();

  if (isPending) {
    return <Loader />;
  }

  if (error) {
    return <ErrorBox message={error.message} />;
  }

  return (
    <div className="px-4">
      <h2 className="mb-6 mt-8 text-center text-2xl uppercase tracking-wider text-yellow-500">
        Pizza Menu
      </h2>

      <ul className="divide-y-2 divide-stone-200">
        {pizzas.map((pizzaObj) => (
          <MenuItem key={pizzaObj.id} pizzaObj={pizzaObj} />
        ))}
      </ul>
    </div>
  );
}

export default Menu;
