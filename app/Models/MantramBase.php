<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class MantramBase extends Model
{
    use HasFactory;

    public function mantrams() {
        return $this->hasMany(Mantram::class);
    }
}
