import { Link, useNavigate, useParams } from "react-router-dom";
import { useCreateComment, useGetAllComments } from "../../hooks/useComments";
import { useGetOneRecipes } from "../../hooks/useRecipes";
import { useAuthContext } from "../../context/AuthContext";
import { useForm } from "../../hooks/useForm";

const initialValues = {
    comment: '',
}

export default function RecipeDetails(){
    const navigate = useNavigate();
    const {recipeId} = useParams();
    const [comments,dispatch] = useGetAllComments(recipeId);
    const {email,userId} = useAuthContext()
    const createComment = useCreateComment();
    const [recipe] = useGetOneRecipes(recipeId);
    const {isAuthenticated} = useAuthContext()

    const {
        values,
        changeHendler,
        submitHendler,
    } = useForm(initialValues,async({comment}) =>{
        try {
            const newComment = await createComment(recipeId,comment);

            dispatch({type: 'ADD_COMMENT',payload: {...newComment, author: {email} } })
        } catch (error) {
            console.log(error.message)
        }
    })

    const isOwner = userId  === recipe._ownerId;

    return(
        <section id="game-details">
        <h1>Game Details</h1>
        <div className="info-section">

            <div className="game-header">
                <img className="game-img" src={recipe.img} />
                <h1>{recipe.name}</h1>
            </div>

            <p className="text">
                {recipe.ingredients}
            </p>

            <p className="text">
                {recipe.steps}
            </p>

            <div className="details-comments">
                <h2>Comments:</h2>
                <ul>
                    {comments.map(comment =>(
                        <li key={comment._id} className="comment">
                            <p>{comment.author.email}: {comment.text}</p> 
                        </li>
                    ))}
                </ul>
                {comments.length === 0 && <p className="no-comment">No comments.</p>}
            </div>
            {(isOwner &&
                <div className="buttons">
                    <Link href="" className="button">Edit</Link>
                    <a href="#" className="button">Delete</a>
                </div>
            )}
           
        </div>

        {isAuthenticated && (
                <article className="create-comment">
                    <label>Add new comment:</label>
                    <form className="htmlForm" onSubmit={submitHendler}>

                        <textarea 
                            name="comment" 
                            placeholder="Comment......"
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
    )
}