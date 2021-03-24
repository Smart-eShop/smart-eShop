@component('mail::message')
# Invoice

That is your order
nepavyko graziai atvaizduoti, todel buvo pasirinktas paprastas blade'as (test.blade.php)

<table>
    <thead>
    <tr>
        <th>Kaina</th>
    </tr>
    </thead>
    <tbody>
    @foreach($order as $item)
    <tr>
        <td>{{$item->total_quantity}}</td>

    </tr>
    @endforeach

    </tbody>
</table>

    @foreach($cart as $item)
    @foreach($item as $i)
        <p>{{$i->title}}</p>
    @endforeach
    @endforeach


Thanks,<br>
{{ config('app.name') }}
@endcomponent
