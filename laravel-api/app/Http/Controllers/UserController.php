<?php

namespace App\Http\Controllers;

use App\BanDeleteUser;
use App\Role;
use App\RoleUser;
use App\User;
use http\Env\Response;
use Illuminate\Http\Request;

use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Lang;
use Illuminate\Support\Facades\Validator;


class UserController extends Controller
{

    protected function registerUser(Request $request)
    {

        $validation = Validator::make($request->all(), [
            'name' => ['required', 'string', 'max:255', 'unique:users'],
            'email' => ['required', 'string', 'email', 'max:255', 'unique:users'],
            'password' => ['required', 'string', 'min:8'],
            ]);

        $secret = env('GOOGLE_RECAPTCHA_SECRET');
        $captchaId = $request->input('recaptcha');
        $responseCaptcha = json_decode(file_get_contents('https://www.google.com/recaptcha/api/siteverify?secret='.$secret.'&response='.$captchaId));

//        if($responseCaptcha->success == true) {
            if ($validation->fails()) {
                return response()->json(["error" => $validation->errors()]);
            } else {
                $user = User::create([
                    'name' => $request->name,
                    'email' => $request->email,
                    'first_name' => $request->first_name,
                    'last_name' => $request->last_name,
                    'password' => bcrypt($request->password),
                ]);

                $accessToken = $user->createToken('authToken')->accessToken;
                $role = Role::where('role', '=', 'Buyer')->get('id');
                $user->roles()->attach($role);

                return response()->json(['user' => $user, 'access_token' => $accessToken], 200);
            }

//            } else {
//                return response()->json(['error'=>[
//                    'recaptcha' => ['Recaptcha error']
//                ]]);
//            }

        }

    public function userLogin(Request $request)
    {
        $loginData = $request->validate([
            'name' => 'required',
            'password' => 'required'
        ]);

        if(!auth()->attempt($loginData)){
            return response()->json(['message' => Lang::get('messages_en.invalid_login')]);
        } elseif (auth()->user()->hasRole('Admin')){
            return response()->json(['message' => Lang::get('messages_en.if_you_are_admin')]);
        }

        $accessToken = auth()->user()->createToken('authToken')->accessToken;
        $user_id = auth()->user()->id;
        $user_name = auth()->user()->name;

        //pirmas variantas
//        $banned = DB::table('ban_delete_users')->select('*')
//            ->where('user_id', auth()->user()->id)
//            ->where('is_banned',1)->get();
//        if (count($banned) > 0)
//            return response()->json(["message" => "User is banned"], 200);

        //antras variantas
        $banned2 = BanDeleteUser::where('is_banned', '=', 1)->get('user_id');
        foreach ($banned2 as $bannedUser)
            if($user_id == $bannedUser->user_id)
                return response()->json(["message" => Lang::get('messages_en.user_is_banned')], 200);


        return response()->json(['user_id' => $user_id, 'username' => $user_name, 'access_token' => $accessToken]);
    }

}
