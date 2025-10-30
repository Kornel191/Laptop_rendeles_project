<?php

namespace App\Http\Controllers;

use App\Models\Laptop;
use Illuminate\Http\Request;

class LaptopController extends Controller
{

    public function index()
    {
        return response()->json(Laptop::all());
    }

    public function show($id)
    {
        $laptop = Laptop::findOrFail($id);
        return response()->json($laptop);
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'brand' => 'required|string|max:255',
            'model' => 'required|string|max:255',
            'price' => 'required|numeric|min:0',
            'stock' => 'required|integer|min:0',
        ]);

        $laptop = Laptop::create($validated);
        return response()->json($laptop, 201);
    }

    public function update(Request $request, $id)
    {
        $laptop = Laptop::findOrFail($id);
        $laptop->update($request->all());
        return response()->json($laptop);
    }

    // Laptop törlése
    public function destroy($id)
    {
        $laptop = Laptop::findOrFail($id);
        $laptop->delete();
        return response()->json(['message' => 'Laptop törölve.']);
    }
}
