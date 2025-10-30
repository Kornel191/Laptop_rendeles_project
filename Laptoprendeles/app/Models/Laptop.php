<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Laptop extends Model
{
    use HasFactory;

    protected $fillable = ['brand', 'model', 'price', 'stock'];

    public function orders()
    {
        return $this->hasMany(Order::class);
    }
}

