<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\product;

class productController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $searchText = (isset($request->searchText) AND ($request->searchText!='')) ? $request->searchText : '';
        // $products = product::all();
        if ($searchText!=""){
            $products = product::query()->where('product_name', 'LIKE', "%{$searchText}%")->orderByDesc('id')->paginate(3);
        } else {
            $products = product::query()->orderByDesc('id')->paginate(3);
        }
        return response()->json(['status' => 200 , 'searchText'=>$searchText, 'products' => $products]);

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

    public function showproduct(Request $request){
        $proId = $request->pro;
        $product = Product::whereIn('id', [$proId])->get();
        // $products = product::where('product_name', 'like', "%{$data}%")->get();
        return response()->json(['status' => 200 , 'product' => $product]);
    }
    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $newProduct = product::create([
            'product_name' => $request->product_name,
            'product_price' => $request->product_price,
            'product_image' => $request->product_image
        ]);
        if ($newProduct){
            return response()->json(['status' => 200]);
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
