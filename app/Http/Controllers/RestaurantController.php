<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Restaurant;
class RestaurantController extends Controller
{
    public function index(){
        return Restaurant::all();
    }
    public function getAll(Request $request){
        return Restaurant::select('category',$request->category)->get();
    }
    public function getRestaurant(Request $request){

        return Restaurant::where('name',$request->name)->get();
    }
    public function getMain(){

        return Restaurant::orderBy('rating','DESC')->take(3)->get();
    }
    public function getAllCategories(){
        return Restaurant::select('category')->distinct();
    }
    public function getCategories(){
        return Restaurant::select('category')->distinct()->take(3);
    }
}
