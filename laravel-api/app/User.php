<?php

namespace App;

use App\Notifications\PasswordResetNotification;
use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Passport\HasApiTokens;
use App\Role;

class User extends Authenticatable
{
    use HasApiTokens, Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name',
        'email',
        'first_name',
        'last_name',
        'address',
        'password'
    ];

    public function roles()
    {
        return $this->belongsToMany(Role::class, 'role_users', 'user_id', 'role_id')
            ->withTimestamps();
    }

    public function hasRole($role)
    {
        if($this->roles()->where('role', $role)->first()){
            return true;
        }
        return false;
    }

    public function sendPasswordResetNotification($token)
    {
        $this->notify(new PasswordResetNotification($token));
    }

    public function bandeleteusers(){

        return $this->belongsTo(BanDeleteUser::class);
    }

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password', 'remember_token',
    ];

    /**
     * The attributes that should be cast to native types.
     *
     * @var array
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
    ];

//    /* Role Authorization */
//    public function authorizeRoles($roles)
//    {
//        if (is_array($roles)) {
//            return $this->hasAnyRole($roles) ||
//                abort(401, 'This action is unauthorized.');
//        }
//        return $this->hasRole($roles) ||
//            abort(401, 'This action is unauthorized.');
//    }


}
