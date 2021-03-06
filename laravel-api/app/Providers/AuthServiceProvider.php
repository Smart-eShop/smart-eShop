<?php

namespace App\Providers;

use Illuminate\Foundation\Support\Providers\AuthServiceProvider as ServiceProvider;
use Illuminate\Support\Facades\Gate;
use Laravel\Passport\Passport;

class AuthServiceProvider extends ServiceProvider
{
    /**
     * The policy mappings for the application.
     *
     * @var array
     */
    protected $policies = [
        // 'App\Model' => 'App\Policies\ModelPolicy',
    ];

    /**
     * Register any authentication / authorization services.
     *
     * @return void
     */
    public function boot()
    {
        $this->registerPolicies();
        Passport::routes();

        Gate::define('admin-role', function ($user){
            return $user->hasRole('Admin');
        });

        Gate::define('seller-role', function ($user){
            return $user->hasRole('Seller');
        });

        Gate::define('user-id', function ($user, $item){
            return $user->id === $item->user_id;
        });

        Gate::define('order-user-id', function ($user, $order){
            return $user->id === $order->user_id;
        });

    }
}
