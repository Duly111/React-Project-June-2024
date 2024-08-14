import { Link } from 'react-router-dom';

export default function RecipeListItem({
    _id,
    name,
    img,
}) {
    return (
        <div style={{padding: '20px'}}>
            <h2 className="text-3xl font-bold tracking-tight text-black sm:text-4xl">{name}</h2>
            <img src={img} alt={name} /> {/* Добави alt текст за достъпност */}
            <div className="mt-6 flex justify-center max-w-md gap-x-4">
                <Link
                    to={`/recipe/${_id}/details`}
                    className="flex-none rounded-md bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
                >
                    Details
                </Link>
            </div>
        </div>
    );
}
