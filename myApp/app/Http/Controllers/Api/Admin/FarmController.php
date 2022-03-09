<?php

namespace App\Http\Controllers\Api\Admin;

use App\Http\Controllers\Controller;

use App\Models\Farm;
use App\Models\Governorate;
use Illuminate\Http\Request;

class FarmController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {

        $farms = Governorate::join('farms', 'farms.governorate_id', '=', 'governorates.id')
        ->get(['*']);

    return $farms;
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
      $Governorates=Governorate::all();
      return $Governorates;
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {

        $farm = new Farm();
        $farm->farmName = $request->input('farmName');
        $farm->governorate_id = $request->input('governorate_id');
        $farm->phone = $request->input('phone');
        $farm->price = $request->input('price');
        $farm->Time = $request->input('Time');
        $farm->description = $request->input('description');

        $farm->image = substr($request->input('image'),12);
        // if($request->hasFile('image'))
        // {
        //     $file = $request->file('image');

        //     $filename = $file->getClientOriginalName();;
        //     $file->move('img\Farms',$filename);
        //     $farm->image = $filename;
        // }

        $response["status"] = "successs";
        $response["message"] = "Success! image(s) uploaded";
        $farm->save();
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
            $file->move('img\Farms',$filename);
            // $farm->image = $filename;
        }

        // $response["status"] = "successs";
        // $response["message"] = "Success! image(s) uploaded";
        // $farm->save();
        // return response()->json($request);
    }
    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Farm  $farm
     * @return \Illuminate\Http\Response
     */
    public function show(Farm $farm)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Farm  $farm
     * @return \Illuminate\Http\Response
     */
    public function edit(Farm $farm)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Farm  $farm
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $farm = Farm::findOrFail($id);

        $farm->farmName = $request->input('farmName');
        $farm->governorate_id = $request->input('governorate_id');
        $farm->phone = $request->input('phone');
        $farm->price = $request->input('price');
        $farm->Time = $request->input('Time');
        $farm->description = $request->input('description');
        if($request->input('image')[0]==='C' && $request->input('image')[1]===':'){
            $farm->image = substr($request->input('image'),12);
        }else{

            $farm->image = $request->input('image');
        }
        $farm->save();
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Farm  $farm
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $farm = Farm::find($id);
        $farm->delete();
    }
}
