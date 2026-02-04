<!DOCTYPE html>
<html lang="es">
  <head>
    <meta charset="utf-8">
    <title>Proforma Esparta</title>
    <style>
      * { box-sizing: border-box; }
      body {
        margin: 0;
        padding: 24px 28px;
        font-family: "Helvetica", "Arial", sans-serif;
        color: #0b0f1c;
        background: #f9f7f2;
        font-size: 12px;
        line-height: 1.5;
      }
      .page {
        border: 1px solid #d6c08a;
        border-radius: 18px;
        background: #ffffff;
        padding: 24px 26px;
      }
      .top-bar {
        height: 8px;
        width: 100%;
        background: #ba9f54;
        border-radius: 8px;
        margin-bottom: 18px;
      }
      .header-table {
        width: 100%;
        border-bottom: 1px solid #d6c08a;
        padding-bottom: 18px;
      }
      .brand {
        width: 65%;
        vertical-align: top;
      }
      .meta {
        width: 35%;
        text-align: right;
        vertical-align: top;
        color: #475569;
      }
      .logo {
        display: inline-block;
        height: 68px;
        width: 68px;
        border-radius: 16px;
        border: 1px solid #d6c08a;
        background: #fbfaf7;
        text-align: center;
        vertical-align: middle;
        line-height: 68px;
        padding: 0;
      }
      .logo img {
        max-height: 48px;
        max-width: 48px;
        vertical-align: middle;
      }
      .kicker {
        font-size: 9px;
        text-transform: uppercase;
        letter-spacing: 0.26em;
        color: #ba9f54;
      }
      .title {
        margin: 6px 0 0 0;
        font-size: 26px;
        font-weight: 600;
      }
      .tagline {
        margin-top: 6px;
        font-size: 13px;
        color: #475569;
      }
      .badge {
        display: inline-block;
        border: 1px solid #d6c08a;
        border-radius: 999px;
        padding: 4px 12px;
        font-size: 9px;
        text-transform: uppercase;
        letter-spacing: 0.26em;
        color: #0f172a;
        background: #fffaf0;
      }
      .section {
        margin-top: 16px;
      }
      .cards {
        width: 100%;
        border-spacing: 0;
      }
      .card {
        background: #fbfaf7;
        border: 1px solid #d6c08a;
        border-radius: 16px;
        padding: 14px 16px;
        vertical-align: top;
      }
      .card-gold {
        border: 1px solid #ba9f54;
        background: #fffaf0;
      }
      .card-title {
        font-size: 9px;
        text-transform: uppercase;
        letter-spacing: 0.26em;
        color: #6b7280;
      }
      .card-name {
        margin-top: 6px;
        font-size: 15px;
        font-weight: 600;
      }
      .card-dark {
        background: #0b0f1c;
        border-color: #0b0f1c;
        color: #e2e8f0;
      }
      .card-dark .card-title { color: rgba(255,255,255,0.7); }
      .card-grid {
        margin-top: 10px;
        font-size: 11px;
        color: #4b5563;
      }
      .card-grid span { display: block; margin-bottom: 4px; }
      .quote {
        margin-top: 8px;
        font-size: 12px;
        line-height: 1.5;
      }
      .table {
        width: 100%;
        border-collapse: collapse;
        margin-top: 12px;
      }
      .table th {
        text-align: left;
        font-size: 9px;
        text-transform: uppercase;
        letter-spacing: 0.26em;
        color: #f8fafc;
        padding: 10px 8px;
        background: #0b0f1c;
      }
      .table td {
        padding: 10px 8px;
        border-bottom: 1px solid #efe7d2;
      }
      .table .right { text-align: right; }
      .summary {
        margin-top: 14px;
        width: 100%;
      }
      .summary-box {
        width: 250px;
        margin-left: auto;
        border: 1px solid #ba9f54;
        border-radius: 16px;
        background: #fffaf0;
        padding: 12px;
      }
      .summary-row {
        display: table;
        width: 100%;
        color: #475569;
      }
      .summary-row span {
        display: table-cell;
      }
      .summary-row span:last-child { text-align: right; }
      .summary-total {
        margin-top: 8px;
        font-size: 14px;
        font-weight: 600;
        color: #0f172a;
      }
      .footer {
        margin-top: 16px;
        width: 100%;
        font-size: 11px;
        color: #475569;
      }
      .footer td {
        vertical-align: top;
        padding-right: 12px;
      }
      .footer-title {
        font-size: 9px;
        text-transform: uppercase;
        letter-spacing: 0.26em;
        color: #6b7280;
      }
      .signature {
        margin-top: 10px;
        font-weight: 600;
        color: #0f172a;
      }
      .signature-line {
        margin-top: 14px;
        border-top: 1px solid #d6c08a;
        width: 160px;
      }
    </style>
  </head>
  <body>
    <div class="page">
      <div class="top-bar"></div>
      <table class="header-table">
        <tr>
          <td class="brand">
            <div class="logo">
              <img src="{{ public_path('logo.png') }}" alt="Esparta">
            </div>
            <div style="display:inline-block; vertical-align: middle; margin-left: 12px;">
              <div class="kicker">Esparta Agencia Creativa</div>
              <div class="title">Proforma estrategica</div>
              <div class="tagline">Presencia digital premium para marcas que lideran.</div>
            </div>
          </td>
          <td class="meta">
            <div class="badge">Documento interno</div>
            <div style="margin-top: 10px; font-size: 16px; font-weight: 600; color:#0f172a;">
              {{ $reference }}
            </div>
            <div style="margin-top: 6px;">Fecha: {{ $date }}</div>
          </td>
        </tr>
      </table>

      <div class="section">
        <table class="cards">
          <tr>
            <td class="card card-gold" style="width:62%;">
              <div class="card-title">Cliente</div>
              <div class="card-name">{{ $client['name'] ?? 'Cliente sin nombre' }}</div>
              <div style="color:#475569; margin-top:2px;">{{ $client['company'] ?? '-' }}</div>
              <div class="card-grid">
                <span>Correo: {{ $client['email'] ?? '-' }}</span>
                <span>Telefono: {{ $client['phone'] ?? '-' }}</span>
                <span>Direccion: {{ $client['address'] ?? '-' }}</span>
              </div>
            </td>
            <td style="width:38%; padding-left: 12px;">
              <div class="card card-dark">
                <div class="card-title">Mensaje clave</div>
                <div class="quote">
                  Diseñamos experiencias que posicionan tu marca como referente y
                  generan confianza desde el primer contacto.
                </div>
              </div>
            </td>
          </tr>
        </table>
      </div>

      <div class="section">
        <table class="table">
          <thead>
            <tr>
              <th>Detalle</th>
              <th class="right">Cantidad</th>
              <th class="right">Precio</th>
              <th class="right">Total</th>
            </tr>
          </thead>
          <tbody>
            @foreach ($items as $item)
              <tr style="background: {{ $loop->odd ? '#ffffff' : '#f8fafc' }};">
                <td>{{ $item['detail'] ?: 'Detalle sin definir' }}</td>
                <td class="right">{{ $item['quantity'] }}</td>
                <td class="right">${{ number_format($item['price'], 2) }}</td>
                <td class="right">${{ number_format($item['total'], 2) }}</td>
              </tr>
            @endforeach
          </tbody>
        </table>
      </div>

      <div class="summary">
        <div class="summary-box">
          <div class="summary-row">
            <span>Subtotal</span>
            <span>${{ number_format($subtotal, 2) }}</span>
          </div>
          <div class="summary-row summary-total">
            <span>Total</span>
            <span>${{ number_format($total, 2) }}</span>
          </div>
        </div>
      </div>

      <div class="section">
        <table class="footer">
          <tr>
            <td style="width:45%;">
              <div class="footer-title">Observaciones</div>
              <div style="margin-top:6px;">{{ $notes ?: 'Sin observaciones por el momento.' }}</div>
            </td>
            <td style="width:30%;">
              <div class="footer-title">Condiciones</div>
              <div style="margin-top:6px;">
                Propuesta valida por 15 dias. Inicio sujeto a confirmacion de pago inicial.
              </div>
            </td>
            <td style="width:25%;">
              <div class="footer-title">Firma</div>
              <div class="signature-line"></div>
              <div class="signature">Equipo Esparta</div>
            </td>
          </tr>
        </table>
      </div>
    </div>
  </body>
</html>
