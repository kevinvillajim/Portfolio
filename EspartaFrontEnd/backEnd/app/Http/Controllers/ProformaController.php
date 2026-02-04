<?php

namespace App\Http\Controllers;

use App\Models\Proforma;
use Barryvdh\DomPDF\Facade\Pdf;
use Illuminate\Http\Request;

class ProformaController extends Controller
{
    public function index()
    {
        return Proforma::query()
            ->latest()
            ->get([
                'id',
                'reference',
                'client_name',
                'client_company',
                'total',
                'created_at',
            ]);
    }

    public function show(Proforma $proforma)
    {
        return $proforma;
    }

    public function store(Request $request)
    {
        $payload = $this->validatePayload($request);
        $items = $payload['items'];
        $subtotal = collect($items)->sum('total');
        $reference = $payload['reference'] ?? ('ESP-' . now()->format('ymd-Hi'));

        $proforma = Proforma::create([
            'reference' => $reference,
            'client_name' => $payload['client']['name'] ?? null,
            'client_company' => $payload['client']['company'] ?? null,
            'client_email' => $payload['client']['email'] ?? null,
            'client_phone' => $payload['client']['phone'] ?? null,
            'client_address' => $payload['client']['address'] ?? null,
            'items' => $items,
            'notes' => $payload['notes'] ?? null,
            'subtotal' => $subtotal,
            'total' => $subtotal,
            'user_id' => optional(auth('api')->user())->id,
        ]);

        return response()->json($proforma, 201);
    }

    public function update(Request $request, Proforma $proforma)
    {
        $payload = $this->validatePayload($request);
        $items = $payload['items'];
        $subtotal = collect($items)->sum('total');

        $proforma->update([
            'client_name' => $payload['client']['name'] ?? null,
            'client_company' => $payload['client']['company'] ?? null,
            'client_email' => $payload['client']['email'] ?? null,
            'client_phone' => $payload['client']['phone'] ?? null,
            'client_address' => $payload['client']['address'] ?? null,
            'items' => $items,
            'notes' => $payload['notes'] ?? null,
            'subtotal' => $subtotal,
            'total' => $subtotal,
        ]);

        return $proforma;
    }

    public function destroy(Proforma $proforma)
    {
        $proforma->delete();

        return response()->json(['message' => 'Proforma eliminada.']);
    }

    public function pdf(Request $request)
    {
        $payload = $this->validatePayload($request);
        $items = $payload['items'];
        $subtotal = collect($items)->sum('total');
        $reference = $payload['reference'] ?? ('ESP-' . now()->format('ymd-Hi'));

        return $this->renderPdf([
            'client' => $payload['client'],
            'items' => $items,
            'notes' => $payload['notes'] ?? '',
            'subtotal' => $subtotal,
            'total' => $subtotal,
            'reference' => $reference,
            'date' => now()->format('d/m/Y'),
        ], $reference);
    }

    public function pdfFromProforma(Proforma $proforma)
    {
        return $this->renderPdf([
            'client' => [
                'name' => $proforma->client_name,
                'company' => $proforma->client_company,
                'email' => $proforma->client_email,
                'phone' => $proforma->client_phone,
                'address' => $proforma->client_address,
            ],
            'items' => collect($proforma->items)->map(function ($item) {
                $qty = (float) ($item['quantity'] ?? 0);
                $price = (float) ($item['price'] ?? 0);
                return [
                    'detail' => $item['detail'] ?? '',
                    'quantity' => $qty,
                    'price' => $price,
                    'total' => $qty * $price,
                ];
            }),
            'notes' => $proforma->notes ?? '',
            'subtotal' => $proforma->subtotal,
            'total' => $proforma->total,
            'reference' => $proforma->reference,
            'date' => optional($proforma->created_at)->format('d/m/Y'),
        ], $proforma->reference);
    }

    private function validatePayload(Request $request): array
    {
        $data = $request->validate([
            'client' => ['required', 'array'],
            'client.name' => ['nullable', 'string'],
            'client.company' => ['nullable', 'string'],
            'client.email' => ['nullable', 'string'],
            'client.phone' => ['nullable', 'string'],
            'client.address' => ['nullable', 'string'],
            'items' => ['required', 'array', 'min:1'],
            'items.*.detail' => ['nullable', 'string'],
            'items.*.quantity' => ['nullable', 'numeric', 'min:0'],
            'items.*.price' => ['nullable', 'numeric', 'min:0'],
            'notes' => ['nullable', 'string'],
            'reference' => ['nullable', 'string'],
        ]);

        $items = collect($data['items'])->map(function ($item) {
            $qty = (float) ($item['quantity'] ?? 0);
            $price = (float) ($item['price'] ?? 0);
            return [
                'detail' => $item['detail'] ?? '',
                'quantity' => $qty,
                'price' => $price,
                'total' => $qty * $price,
            ];
        })->values()->all();

        $data['items'] = $items;

        return $data;
    }

    private function renderPdf(array $viewData, string $reference)
    {
        $pdf = Pdf::loadView('proformas.pdf', $viewData)->setPaper('a4');

        return $pdf->download("Proforma-{$reference}.pdf");
    }
}
