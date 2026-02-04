<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\ProformaController;
use Illuminate\Support\Facades\Route;

Route::prefix('auth')->group(function () {
    Route::post('login', [AuthController::class, 'login']);

    Route::middleware('auth:api')->group(function () {
        Route::get('me', [AuthController::class, 'me']);
        Route::post('logout', [AuthController::class, 'logout']);
    });
});

Route::middleware('auth:api')->group(function () {
    Route::get('proformas', [ProformaController::class, 'index']);
    Route::post('proformas', [ProformaController::class, 'store']);
    Route::get('proformas/{proforma}', [ProformaController::class, 'show']);
    Route::put('proformas/{proforma}', [ProformaController::class, 'update']);
    Route::delete('proformas/{proforma}', [ProformaController::class, 'destroy']);
    Route::post('proformas/pdf', [ProformaController::class, 'pdf']);
    Route::get('proformas/{proforma}/pdf', [ProformaController::class, 'pdfFromProforma']);
});
