import { Link } from "react-router-dom";
import { useGetAllRecipes } from "../../hooks/useRecipes";
import RecipeListItem from "./recipe-list-item/RecipeListItem";

export default function RecipeList() {
    const [recipes,setRecipes] = useGetAllRecipes(); 
  
    return (
      <div className="relative isolate overflow-hidden bg-white py-16 sm:py-24 lg:py-32">
  <div className="mx-auto max-w-7xl px-6 lg:px-8">
    <div className="flex flex-wrap justify-center items-center mx-auto gap-x-8 gap-y-16">
      <div className="w-full text-center">
        <h1 className="text-3xl font-bold tracking-tight text-black text-center sm:text-4xl" style={{ color: '#6366F1' }}>
          All Recipes
        </h1>

        <div className="flex flex-wrap justify-around">
          {recipes.length > 0
            ? recipes.map(recipe => (
                <div
                  key={recipe._id}
                  className="border-3 border-indigo-500 p-4 rounded-lg m-2"
                  style={{ maxWidth: '300px' }}
                >
                  <RecipeListItem {...recipe} />
                </div>
              ))
            : <h3>No articles yet!</h3>
          }
        </div>

      </div>
    </div>
  </div>
  <div aria-hidden="true" className="absolute left-1/2 top-0 -z-10 -translate-x-1/2 blur-3xl xl:-top-6">
    <div
      style={{
        clipPath:
          'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
      }}
      className="aspect-[1155/678] w-[72.1875rem] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30"
    />
  </div>
</div>

    
    )
  }
  