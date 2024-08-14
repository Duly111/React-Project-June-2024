import { Link, useNavigate, useParams } from "react-router-dom";
import { useCreateComment, useGetAllComments } from "../../hooks/useComments";
import { useGetOneRecipes } from "../../hooks/useRecipes";
import { useAuthContext } from "../../context/AuthContext";
import { useForm } from "../../hooks/useForm";
import recipesAPI from "../../api/recipes-api";

const initialValues = {
    comment: '',
}

export default function RecipeDetails() {
    const navigate = useNavigate();
    const { recipeId } = useParams();
    const [comments, dispatch] = useGetAllComments(recipeId);
    const { email, userId } = useAuthContext();
    const createComment = useCreateComment();
    const [recipe] = useGetOneRecipes(recipeId);
    const { isAuthenticated } = useAuthContext();

    const {
        values,
        changeHendler,
        submitHendler,
    } = useForm(initialValues, async ({ comment }) => {
        try {
            const newComment = await createComment(recipeId, comment);
            dispatch({ type: 'ADD_COMMENT', payload: { ...newComment, author: { email } } });
        } catch (error) {
            console.log(error.message);
        }
    });

    const recipeDeleteHendler = async () => {
        const isConfirm = confirm(`Are you sure you want to delete ${recipe.name}?`);
        if (!isConfirm) {
            return;
        }

        try {
            await recipesAPI.remove(recipeId);
            navigate('/');
        } catch (error) {
            console.log(error.message);
        }
    };

    const isOwner = userId === recipe._ownerId;

    if (!recipe) {
        return <p>Loading...</p>;
    }

    return (
        <section id="game-details">
            <h1>Game Details</h1>
            <div className="info-section">
                <div className="game-header">
                    <img className="game-img" src={recipe.img} alt={recipe.name} />
                    <h1>{recipe.name}</h1>
                </div>
                <h3 style={{ fontWeight: 'bold', marginBottom: '0.5rem' }}>Ingredients:</h3>
                <p className="text" style={{ marginTop: '0.2rem' }}>
                    {recipe.ingredients}
                </p>

                <h3 style={{ fontWeight: 'bold', paddingLeft: '60px', marginBottom: '0.5rem' }}>Steps</h3>
                <p className="text" style={{ marginTop: '0.2rem' }}>
                    {recipe.steps}
                </p>

                <div className="details-comments">
                    <h2 style={{ fontWeight: 'bold', paddingLeft: '60px' }}>Comments:</h2>
                    <ul>
                        {comments.map(comment => (
                            <li key={comment._id} className="comment">
                                <p>{comment.author.email}: {comment.text}</p>
                            </li>
                        ))}
                    </ul>
                    {comments.length === 0 && <p className="no-comment">No comments.</p>}
                </div>
                {isOwner && (
                    <div className="buttons">
                        <Link to={`/recipe/${recipeId}/edit`} className="button">Edit</Link>
                        <a href="#" onClick={recipeDeleteHendler} className="button">Delete</a>
                    </div>
                )}
            </div>

            {isAuthenticated && (
                <article className="create-comment">
                    <label>Add new comment:</label>
                    <form className="htmlForm" onSubmit={submitHendler}>
                        <textarea
                            name="comment"
                            placeholder="Comment..."
                            onChange={changeHendler}
                            value={values.comment}
                        ></textarea>

                        <input
                            className="btn submit"
                            type="submit"
                            value="Add Comment"
                        />
                    </form>
                </article>
            )}
        </section>
    );
}
