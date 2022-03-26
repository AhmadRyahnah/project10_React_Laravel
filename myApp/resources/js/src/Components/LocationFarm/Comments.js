import axios from 'axios';
import { comment } from 'postcss';
import React, { useEffect, useState } from 'react'
import styles from "./Location.module.css";
const Comments = (props) => {
    console.log("ryahnah" + props.idFarm);
    const [User, setUser] = useState(localStorage.getItem('loggedUser') ? JSON.parse(localStorage.getItem('loggedUser')) : [])

    const [inputs, setInputs] = useState([]);
    const [AddComent, setAddComent] = useState(0);
    const [Comments, setComments] = useState([]);

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
    }, [AddComent])
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
    return (
        <div className={styles.CommentsContainer}>
            <h1>Reviews ({Comments ? Comments.length : 0}) </h1>
            <hr />
            <form onSubmit={handleSubmit}>
                <textarea onChange={handleChange} name="Comments" cols="30" rows="4" placeholder="Add Comment" required />
                <input type="submit" value="Send" />

            </form>
            <hr />
            {
                arrComment ? arrComment.map(Comment =>
                    <div>
                        <h2>{Comment.name}</h2>
                        <p>{Comment.comments}</p>
                        <br />
                        <hr />
                    </div>
                ) : null
            }
        </div>
    )
}

export default Comments
