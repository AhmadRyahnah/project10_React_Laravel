<?php

namespace App\Http\Controllers\Api\Admin;

use App\Http\Controllers\Controller;
use App\Models\Farm;
use App\Models\Governorate;
use Database\Seeders\GovernorateSeeder;
use Illuminate\Http\Request;

class GovernorateController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
        $Governorates = Governorate::all();
        // $Governorates = Governorate::inRandomOrder()->limit(3)->get();

        return $Governorates;
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $Governorate = new Governorate();
        $Governorate->governorateName = $request->input('governorateName');


        $Governorate->Image = substr($request->input('image'), 12);
        // if($request->hasFile('image'))
        // {
        //     $file = $request->file('image');

        //     $filename = $file->getClientOriginalName();;
        //     $file->move('img\Farms',$filename);
        //     $farm->image = $filename;
        // }

        $response["status"] = "successs";
        $response["message"] = "Success! image(s) uploaded";
        $Governorate->save();
        return response()->json($request);
    }


    public function storeImg(Request $request)
    {


        if ($request->hasFile('image')) {
            $file = $request->file('image');

            $filename = $file->getClientOriginalName();;
            $file->move('img\Governorate', $filename);
        }
    }
    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Governorate  $governorate
     * @return \Illuminate\Http\Response
     */
    public function show($governorate_id)
    {
        //governorate_id
        $governorate = Governorate::find($governorate_id);
        if ($governorate_id === 'all') {
            $farms = Farm::all();
        } else {

            $farms = governorate::find($governorate_id)->farms;
        }
        // return $farms;
        return response(['Governorat' => $governorate, 'farm' => $farms, 'status' => 200]);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Governorate  $governorate
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        $Governorate = Governorate::find($id);

        return response(['Governorate' => $Governorate, 'status' => 200]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Governorate  $governorate
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $Governorate = Governorate::findOrFail($id);

        $Governorate->governorateName = $request->input('governorateName');
        if ($request->input('image')[0] === 'C' && $request->input('image')[1] === ':') {
            $Governorate->Image = substr($request->input('image'), 12);
        } else {

            $Governorate->Image = $request->input('image');
        }
        $Governorate->save();
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Governorate  $governorate
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $Governorate = Governorate::find($id);
        $Governorate->delete();
    }
}
