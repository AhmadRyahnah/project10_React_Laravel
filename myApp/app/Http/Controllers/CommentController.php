<?php

namespace App\Http\Controllers;

use App\Models\Comment;
use Illuminate\Http\Request;

class CommentController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $comments=Comment::join('users','comments.user_id','=','users.id')
        ->join('farms','comments.farm_id','=','farms.id')
        ->get(['comments.id','name','farmName','comments','comments.created_at']);
        return $comments;
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request, $id)
    {
        $coment = new Comment();
        // $coment = Comment::findOrFail($id);
        $coment->comments = $request->input('Comments');
        $coment->user_id = $request->input('user_id');
        $coment->farm_id = $id;
        $coment->save();
        return $request;
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Comment  $comment
     * @return \Illuminate\Http\Response
     */
    public function show(Comment $comment, $id)
    {
        // $userName = Comment::join('users', 'comments.user_id', '=', 'users.id')->get(['name']);
        $comments = Comment::where('farm_id', '=', $id)
        ->join('users', 'comments.user_id', '=', 'users.id')
        ->get(['comments.id','comments.farm_id','comments.user_id','users.name','comments.comments']);
        return response((['comments' => $comments,  'status' => 200]));
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Comment  $comment
     * @return \Illuminate\Http\Response
     */
    public function edit(Comment $comment)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Comment  $comment
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Comment $comment)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Comment  $comment
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $comment = Comment::find($id);
        $comment->delete();
    }
}
