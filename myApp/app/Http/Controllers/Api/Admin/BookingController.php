<?php

namespace App\Http\Controllers\Api\Admin;

use App\Http\Controllers\Controller;

use App\Models\Booking;
use App\Models\Farm;
use App\Models\Governorate;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;

class BookingController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index($id)
    {
        $farm = Farm::find($id);
        $order = Booking::where('farm_id', '=', $id)->get();
        $countOrder=$order->count();
        return response(['farm' => $farm,'order' => $countOrder, 'status' => 200]);
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



        $date = $request->input('date');
        $userId = $request->input('user_id');
        $order = Booking::where([['user_id', '=', $userId], ['date', '=', $date]])->get();



        if ($order->isEmpty()) {
            if ($request->input('phone')) {
                $user = User::findOrFail($userId);
                $user->phone = $request->input('phone');
                $user->update();
            }
            $book = new Booking();
            $book->user_id = $request->input('user_id');
            $book->farm_id = $request->input('id');
            $book->governorate_id = $request->input('governorate_id');
            $book->farmName = $request->input('farmName');
            $book->price = $request->input('price');
            $book->date = $request->input('date');
            $book->save();
            return response(['Successfully Booked ' . $request->input('farmName') . ' farm on ' . $request->input('date')]);
        } else {
            return response(['You Are Booking Farm on ' . $request->input('date') . ' Please Choose Another Time']);
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Booking  $booking
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {

        $governorates = Governorate::all();
        $order = Booking::where('user_id', '=', $id)->get();
        return response(['order' => $order, 'governorates' => $governorates, 'status' => 200]);
    }

    public function OrderAdmin()
    {

        $orders = Booking::join('users', 'bookings.user_id', '=', 'users.id')
            ->join('governorates', 'bookings.governorate_id', '=', 'governorates.id')
            ->get(['price', 'date', 'bookings.id', 'name', 'farmName', 'status', 'phone', 'governorateName']);

        return response(['orders' => $orders, 'status' => 200]);
    }
    public function acceptedOrder(Request $request, $id)
    {

        $acceptedOrder = Booking::findOrFail($id);

        $acceptedOrder->status = 'accepted';
        $acceptedOrder->update();
    }
    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Booking  $booking
     * @return \Illuminate\Http\Response
     */
    public function edit(Booking $booking)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Booking  $booking
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Booking $booking)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Booking  $booking
     * @return \Illuminate\Http\Response
     */
    public function destroy(Booking $booking)
    {
        //
    }
}
