<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/


Route::get('/{any?}', App\Http\Controllers\PagesController::class);
Route::get('/category/{any?}', App\Http\Controllers\PagesController::class);

Route::post('/getRestaurantsMain',[App\Http\Controllers\RestaurantController::class,'getMain']);
Route::post('/getRestaurant',[App\Http\Controllers\RestaurantController::class,'getRestaurant']);
Route::post('/getRestaurantsAll',[App\Http\Controllers\RestaurantController::class,'index']);
Route::post('/getAllCategories',[App\Http\Controllers\RestaurantController::class,'getAllCategories']);
Route::post('/getCategories',[App\Http\Controllers\RestaurantController::class,'getCategories']);
Route::post('/getFirstImage',[App\Http\Controllers\ImagesController::class,'getFirst']);
Route::post('/getImages',[App\Http\Controllers\ImagesController::class,'getImages']);

//Auth::routes();
//
//Route::get('/{any}', [App\Http\Controllers\ApplicationController::class, 'index'])->name('home');
