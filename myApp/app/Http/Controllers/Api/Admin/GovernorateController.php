<?php

namespace App\Http\Controllers\Api\Admin;

use App\Http\Controllers\Controller;
use App\Models\Farm;
use App\Models\Governorate;
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


        $Governorate->Image = substr($request->input('image'),12);
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

        // $farm = new Farm();
        // $farm->farmName = $request->input('farmName');
        // $farm->governorate_id = $request->input('governorate_id');
        // $farm->phone = $request->input('phone');
        // $farm->price = $request->input('price');
        // $farm->Time = $request->input('Time');
        // $farm->description = $request->input('description');

        // $farm->image = substr($request->input('image'),12);
        if($request->hasFile('image'))
        {
            $file = $request->file('image');

            $filename = $file->getClientOriginalName();;
            $file->move('img\Governorate',$filename);
            // $farm->image = $filename;
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
        $farms = governorate::find($governorate_id)->farms;
        return $farms;
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Governorate  $governorate
     * @return \Illuminate\Http\Response
     */
    public function edit(Governorate $governorate)
    {
        //
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
        if($request->input('image')[0]==='C' && $request->input('image')[1]===':'){
            $Governorate->Image = substr($request->input('image'),12);
        }else{

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
