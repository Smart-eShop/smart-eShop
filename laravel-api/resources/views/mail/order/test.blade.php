<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
</head>
<body>


<div>
    @foreach($order as $item)
        <p> Sveiki, {{$item->billing_first_name}}</p>

    @endforeach
</div>


<table>
    <thead>
    <tr>
        <th>Preke</th>
        <th>kiekis</th>
        <th>kaina</th>
    </tr>
    </thead>
    <tbody>
    @foreach($cart as $item)
        @foreach($item as $i)
        <tr>
            <td>{{ $i->title }}</td>
            <td>{{ $i->quantity }}</td>
            <td>{{ $i->price}}</td>
        </tr>
        @endforeach
    @endforeach
    </tbody>
</table>

<div>
    @foreach($order as $item)
        <p>Kaina is viso: {{$item->total_price}}</p>
    @endforeach
</div>
<div>
    @foreach($payments as $item)
        <p>Mokejimo budas: {{$item->name}}</p>
    @endforeach
</div>

<div>
    @foreach($deliveries as $item)
        <p>Pristatymo budas: {{$item->name}}</p>
        <p>Pristatymo laikas: {{$item->time}}</p>
        <p>Pristatymo kaina: {{$item->price}}</p>
    @endforeach
</div>

</body>
</html>
