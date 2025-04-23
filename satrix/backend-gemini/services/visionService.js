const vision = require('@google-cloud/vision');
const client = new vision.ImageAnnotatorClient();

const patronesClave = [
  'token',
  'token de boleto',
  'token de facturacion',
  'codigo de facturacion',
  'codigo de acceso',
  'codigo para facturar',
  'clave de facturacion',
  'clave de acceso',
  'numero de token',
  'factura token',
  'no. ticket',
  'ticket',
  'no. de ticket',
  'numero de ticket',
  'folio',
  'folio de compra',
  'folio electronico',
  'no. de folio',
  'numero de folio',
  'comprobante no.',
  'tiquet',
  'id de transaccion',
  'id de venta',
  'facturar en linea',
  'para facturar use el codigo',
  'datos para factura',
  'solicite su factura con el siguiente numero',
  'ingrese el token',
  'facture su compra aqui'
];

function normalizar(texto) {
  return texto.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();
}

async function extraerTokenDesdeImagen(imagePath) {
  console.log("📸 Procesando imagen:", imagePath);

  const [result] = await client.textDetection(imagePath);
  const detections = result.textAnnotations;
  const texto = detections[0]?.description || '';

  console.log("📋 Texto OCR completo:\n", texto);

  const lineas = texto.split('\n').map(l => l.trim());
  let tokenDetectado = null;

  for (const linea of lineas) {
    const lnNorm = normalizar(linea);

    for (const clave of patronesClave) {
      if (lnNorm.includes(clave)) {
        // Extraer cualquier secuencia alfanumérica relevante
        const match = linea.match(/([A-Z0-9]{6,20})/i);

        if (match && match[1]) {
          const posibleToken = match[1];

          // Filtro de falsos positivos
          if (
            posibleToken.length < 6 ||
            /(factura|cturar|ticket|cliente|nombre|fecha|pago|total)/i.test(posibleToken)
          ) {
            console.log("🚫 Token sospechoso ignorado:", posibleToken);
            continue;
          }

          tokenDetectado = posibleToken;
          console.log("✅ Token detectado:", tokenDetectado);
          break;
        }
      }
    }

    if (tokenDetectado) break;
  }

  return {
    textoOCR: texto,
    tokenExtraido: tokenDetectado
  };
}

module.exports = { extraerTokenDesdeImagen };
