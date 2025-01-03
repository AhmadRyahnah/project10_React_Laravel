<?php

namespace App\Http\Controllers\Api\Admin;



use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;

class AuthController extends Controller
{
    //
    public function register(Request $request)
    {

        $user = new User();
        $user->name = $request->input('name');
        $user->email = $request->input('email');

        $user->password = Hash::make($request->input('password'));
        $user->save();
        // $accessToken = auth()->user()->createToken('authToken')->accessToken;
        return response(['status' => 'created', 'user' => $user, 200]);
    }

    public function login(Request $req)
    {

        $email =  $req->input('email');
        $password = $req->input('password');

        $user = DB::table('users')->where('email', $email)->first();
        if (!Hash::check($password, $user->password)) {
            return response(["Not Matched"]);
        } else {
            return response(['status' => 'created', 'user' => $user, 200]);
        }
    }
}
