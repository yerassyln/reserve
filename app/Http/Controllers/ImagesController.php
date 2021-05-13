<?php

namespace App\Http\Controllers;

use App\Models\Images;
use Illuminate\Http\Request;

class ImagesController extends Controller
{
    public function getFirst(Request $request){
        $result = array();
        $images = Images::select('id','image1')->get();
        foreach ($images as $image){
            $result[$image['id']] = $image['image1'];
        }
        return $result;
    }
    public function getImages(Request $request){
        $images = Images::select('image1','image2','image3','image4')->where('restaurant_id',$request->id)->get();
        return $images[0];
    }
}
