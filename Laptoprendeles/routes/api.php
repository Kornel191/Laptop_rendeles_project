<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Controller;
use App\Http\Controllers\LaptopController;
use App\Http\Controllers\OrderController;


Route::get('/laptops', [LaptopController::class, 'index']);
Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');

Route::get('/', [Controller::class, 'index']);

Route::get('/endpoint/{id}', [Controller::class, 'show']);

Route::post('/orders', [OrderController::class, 'store']);
