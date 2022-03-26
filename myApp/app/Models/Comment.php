<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Comment extends Model
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
        // 'user_id'
    ];

    public function farms(){
        return $this->belongsTo(Farm::class);
    }


}
