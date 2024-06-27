<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Mantram extends Model
{
    use HasFactory;

    public function mantramBase() {
        return $this->belongsTo(MantramBase::class);
    }
}
