<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
</head>
<body>


<div>
{{--    @foreach($order as $item)--}}
{{--        <p> Sveiki, {{$item->billing_first_name}}</p>--}}

{{--    @endforeach--}}
</div>




<table class="table">
    <thead>
    <tr>
        <th>Preke</th>
        <th>kiekis</th>
        <th>kaina</th>
    </tr>
    </thead>
    <tbody>
{{--    @foreach($cart as $item)--}}
{{--        @foreach($item as $i)--}}
{{--        <tr>--}}
{{--            <td scope="row">{{ $i->title }}</td>--}}
{{--            <td>{{ $i->quantity }}</td>--}}
{{--            <td>{{ $i->price}}</td>--}}
{{--        </tr>--}}
{{--        @endforeach--}}
{{--    @endforeach--}}
    </tbody>
</table>

<div>
{{--    @foreach($order as $item)--}}
{{--        <p>Kaina isviso {{$item->total_price}}</p>--}}
{{--    @endforeach--}}
</div>


</body>
</html>
