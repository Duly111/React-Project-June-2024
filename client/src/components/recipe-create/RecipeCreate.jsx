import { useNavigate } from "react-router-dom";
import { useForm } from "../../hooks/useForm";
import { useCreateRecipe } from "../../hooks/useRecipes";


const initialValues = {
  name: '',
  img: '',
  ingredients: '',
  steps: '',
};

export default function RecipeCreate() {
  const navigate = useNavigate();
  const createRecipe = useCreateRecipe();

  const createHendler = async (values) => {
    try {
      const { _id: recipeId } = createRecipe(values);

      navigate(`/recipe`);
    } catch (error) {
      console.log(error.message);
    }
  };

  const {
    values,
    changeHendler,
    submitHendler,
  } = useForm(initialValues, createHendler);

  return (
    <form onSubmit={submitHendler}>
      <div className="isolate bg-white px-6 py-24 sm:py-32 lg:px-8">
        <div
          aria-hidden="true"
          className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]"
        >
          <div
            className="relative left-1/2 -z-10 aspect-[1155/678] w-[36.125rem] max-w-none -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-40rem)] sm:w-[72.1875rem]"
          />
        </div>
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Create Recipe</h2>
          <p className="mt-2 text-lg leading-8 text-gray-600">
            
          </p>
        </div>
        <div action="#" method="POST" className="mx-auto mt-16 max-w-xl sm:mt-20">
          <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
            <div>
              <label htmlFor="first-name" className="block text-sm font-semibold leading-6 text-gray-900">
                Name
              </label>
              <div className="mt-2.5">
                <input
                  id="first-name"
                  name="name"
                  type="text"
                  value={values.name}
                  onChange={changeHendler}
                  autoComplete="given-name"
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 font-sizw: 18px"
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="image" className="block text-sm font-semibold leading-6 text-gray-900">
                Image
              </label>
              <div className="mt-2.5">
                <input
                  id="image"
                  name="img"
                  type="text"
                  value={values.img}
                  onChange={changeHendler}
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="ingredients" className="block text-sm font-semibold leading-6 text-gray-900">
                Ingredients
              </label>
              <div className="mt-2.5">
                <textarea
                  id="ingredients"
                  name="ingredients"
                  rows={4}
                  value={values.ingredients}
                  onChange={changeHendler}
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="steps" className="block text-sm font-semibold leading-6 text-gray-900">
                Steps
              </label>
              <div className="mt-2.5">
                <textarea
                  id="steps"
                  name="steps"
                  value={values.steps}
                  onChange={changeHendler}
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
          </div>
          <div className="mt-10">
            <button
              type="submit"
              className="block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Create Recipe
            </button>
          </div>
        </div>
      </div>
    </form>
  );
}



