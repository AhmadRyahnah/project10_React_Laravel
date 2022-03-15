<?php

use App\Http\Controllers\Api\Admin\AuthController;
use App\Http\Controllers\Api\Admin\FarmController;
use App\Http\Controllers\Api\Admin\GovernorateController;
use App\Http\Controllers\Api\Admin\UserController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
// Route::post('/register', [AuthController::class, 'register']);


// insertImg

Route::post('/register', [AuthController::class, 'register']);
Route::post('/login', [AuthController::class, 'login']);



// users
Route::get('/users', [UserController::class, 'index']);
Route::delete('/deleteusers/{id}', [UserController::class, 'destroy']);
Route::get('/editShowUser/{id}', [UserController::class, 'edit']);
Route::put('/editUser/{id}', [UserController::class, 'update']);
Route::post('/createUser', [UserController::class, 'store']);


// farms
Route::get('/farms', [FarmController::class, 'index']);
Route::delete('/deleteFarm/{id}', [FarmController::class, 'destroy']);
Route::get('/editShow/{id}', [FarmController::class, 'edit']);
Route::put('/editFarm/{id}', [FarmController::class, 'update']);
Route::get('/createFarm', [FarmController::class, 'create']);
Route::post('/insertFarm', [FarmController::class, 'store']);
Route::post('/insertImg', [FarmController::class, 'storeImg']);
// Governorates

Route::get('/Governorates', [GovernorateController::class, 'index']);
Route::delete('/deleteGovernorate/{id}', [GovernorateController::class, 'destroy']);
Route::get('/editShowGovernorate/{id}', [GovernorateController::class, 'edit']);
Route::put('/editGovernorate/{id}', [GovernorateController::class, 'update']);
Route::get('/createGovernorate', [GovernorateController::class, 'create']);
Route::post('/insertGovernorate', [GovernorateController::class, 'store']);
Route::get('/showFarm/{governorate_id}', [GovernorateController::class, 'show']);
Route::post('/insertImgGover', [GovernorateController::class, 'storeImg']);
