<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class BanDeleteUser extends Model
{
    protected $fillable = ['user_id', 'is_banned'];

    public function users(){
        return $this->hasMany(User::class);
    }
}
