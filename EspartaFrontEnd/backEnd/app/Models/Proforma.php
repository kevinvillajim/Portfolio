<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Proforma extends Model
{
    protected $fillable = [
        'reference',
        'client_name',
        'client_company',
        'client_email',
        'client_phone',
        'client_address',
        'notes',
        'items',
        'subtotal',
        'total',
        'user_id',
    ];

    protected $casts = [
        'items' => 'array',
        'subtotal' => 'decimal:2',
        'total' => 'decimal:2',
    ];
}
