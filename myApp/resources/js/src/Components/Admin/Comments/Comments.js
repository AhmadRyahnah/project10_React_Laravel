import React, { useEffect, useState } from 'react'
import styled from '../Button.module.css'
import axios from 'axios';

const Comments = () => {

  const [Comments, setComments] = useState();
  const [deleted, setDeleted] = useState(0);


  let i = 1;
  useEffect(async () => {

      await axios.get("http://127.0.0.1:8000/api/Comments").then((response) => {
          setComments(response.data);
          // console.log(response.date);
      });
  }, [deleted]);



  const deleteProduct = async (id) => {
      await axios.delete(`http://127.0.0.1:8000/api/deleteComment/${id}`);
      setDeleted(deleted + 1)
  }



  return (
      <div >
          <h1>Comments Details</h1>

          <br /><br />
          <table id="customers" >
              <thead>
                  <tr>
                  {/* 'name','farmName','comments','comments.created_at' */}
                      <th>#</th>
                      <th>User Name</th>
                      <th>Farm Name</th>
                      <th style={{ width:'30%' }}>Comments</th>
                      <th>Time Comment</th>

                      <th style={{ width:'10%' }}><center>Action</center></th>

                  </tr>
              </thead>
              {Comments ? Comments.reverse().map(Comment =>


                  <tbody>
                      <tr>
                          <td>{i++}</td>
                          <td>{Comment.name}</td>
                          <td>{Comment.farmName}</td>
                          <td>{Comment.comments}</td>
                          <td>{Comment.created_at}</td>


                          <td>


                        <button className={styled.btnDelete} variant="danger" onClick={() => deleteProduct(Comment.id)}>
                              Delete
                          </button></td>



                      </tr>
                  </tbody>) : null}

          </table>
      </div>
  )
}

export default Comments
