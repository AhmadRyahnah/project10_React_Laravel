import axios from 'axios';
import React, { useEffect, useState } from 'react'
import styles from "./Location.module.css";
const Comments = (props) => {
    console.log("ryahnah" + props.idFarm);
    const [User, setUser] = useState(localStorage.getItem('loggedUser') ? JSON.parse(localStorage.getItem('loggedUser')) : [])

    const [inputs, setInputs] = useState([]);
    const [AddComent, setAddComent] = useState(0);
    const [Comments, setComments] = useState([]);
    const [deleted, setDeleted] = useState(0);

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;

        setInputs(values => ({ ...values, [name]: value, "user_id": User.id }));



    }
    // console.log(inputs);
    useEffect(() => {
        axios.get('http://127.0.0.1:8000/api/allComents/' + props.idFarm).then((response) => {

            setComments(response.data.comments)
        })
    }, [AddComent, deleted])
    let arrComment = []

    if (Comments)
        Comments.map(comment => { arrComment.unshift(comment) }
        )

    // console.log(arrComment);
    const handleSubmit = (event) => {

        event.preventDefault();

        axios.post('http://127.0.0.1:8000/api/addComents/' + props.idFarm, inputs).then((response) => {
            // console.log(response.data);

        });

        setAddComent(AddComent + 1)

        // navigate('/Farms')
    }


    const deleteProduct = async (id) => {
        console.log(id);
        await axios.delete(`http://127.0.0.1:8000/api/deleteComment/${id}`);
        setDeleted(deleted + 1)

    }
    return (
        <div className={styles.CommentsContainer}>
            <h1>Reviews ({Comments ? Comments.length : 0}) </h1>
            <hr />
            {localStorage.getItem('loggedUser') ? <form onSubmit={handleSubmit}>
                <textarea  onChange={handleChange} name="Comments" cols="30" rows="4" placeholder="Add Comment" required />
                <input className={styles.sendBtn} type="submit" value="Send" />

            </form> : null}
            <br /><br />
            {

                arrComment ? arrComment.map(Comment =>
                    <div>  <hr />
                        <h2>{Comment.name}</h2>
                        <p>{Comment.comments}


                            {Comment.user_id == User.id ? <button onClick={() => deleteProduct(Comment.id)} className={styles.deleteComment}>X</button>
                                : null}

                        </p>
                        <br />

                    </div>
                ) : null
            }
        </div>
    )
}

export default Comments
