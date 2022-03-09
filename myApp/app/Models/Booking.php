<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Booking extends Model
{
    use HasFactory;
    protected $fillable = [
        'farmName',
        'description',
        'phone',
        'price',
        'image',
        'Time',
        'governorate_id',
        'user_id'
    ];

    public function governorates(){
        return $this->belongsTo(Governorate::class);
    }

    public function users()
    {
        return $this->belongsTo(User::class);
    }
}
