<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use App\Models\Order;
use Illuminate\Support\Facades\Hash;

class OrderController extends Controller
{
    public function store(Request $request)
    {
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|email|max:255',
            'address' => 'required|string|max:500',
            'cart' => 'required|array',
            'cart.*.laptop_id' => 'required|integer|exists:laptops,id',
            'cart.*.quantity' => 'required|integer|min:1',
        ]);

        $user = User::firstOrCreate(
            ['email' => $validated['email']],
            [
                'name' => $validated['name'],
                'password' => Hash::make('default123'),
            ]
        );

        foreach ($validated['cart'] as $item) {
            Order::create([
                'user_id' => $user->id,
                'laptop_id' => $item['laptop_id'],
                'quantity' => $item['quantity'],
                'status' => 'új',
            ]);
        }

        return response()->json(['message' => 'Rendelés sikeresen elmentve!'], 201);
    }
}
