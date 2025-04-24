<?php
add_action('rest_api_init', function () {
    register_rest_route('cotizador/v1', '/enviar', array(
        'methods' => 'POST',
        'callback' => 'enviar_cotizacion_email_pdf',
        'permission_callback' => '__return_true'
    ));
});

function enviar_cotizacion_email_pdf($request) {
    $params = $request->get_json_params();

    $to = 'ventas@sionline.com.mx'; // Correo fijo del administrador
    $subject = 'Nueva cotización desde el Catálogo de Servicios Web';

    // Construir mensaje de texto con todos los campos posibles
    $message = "Nombre: {$params['nombre']}\n";
    $message .= "Correo: {$params['correo']}\n";
    $message .= "Teléfono: {$params['telefono']}\n";
    $message .= "Servicio: {$params['servicio']}\n";
    $message .= "Plan: {$params['plan']}\n";
    $message .= "Número de páginas: {$params['numPaginas']}\n";
    $message .= "Diseño personalizado: {$params['diseno']}\n";
    $message .= "Pagos en línea: {$params['pagos']}\n";
    $message .= "Optimización SEO: {$params['seo']}\n";
    $message .= "Días de renta: {$params['diasRenta']}\n";
    $message .= "Cantidad de equipos: {$params['cantidadEquipos']}\n";
    $message .= "Total estimado: {$params['total']}\n";
    $message .= "Precio base: {$params['precioBase']}\n";
    $message .= "Fecha: {$params['fecha']}\n";
    // Puedes agregar más campos aquí según evolucione el cotizador

    $attachments = array();

    // Si viene el PDF en base64, crear archivo temporal y adjuntarlo
    if (!empty($params['pdf'])) {
        $pdf_data = base64_decode($params['pdf']);
        $tmp_pdf = tempnam(sys_get_temp_dir(), 'cotizacion_') . '.pdf';
        file_put_contents($tmp_pdf, $pdf_data);
        $attachments[] = $tmp_pdf;
    }

    $headers = array('Content-Type: text/plain; charset=UTF-8');

    $sent = wp_mail($to, $subject, $message, $headers, $attachments);

    // Eliminar archivo temporal
    if (!empty($attachments)) {
        foreach ($attachments as $file) {
            @unlink($file);
        }
    }

    if ($sent) {
        return array('success' => true);
    } else {
        return array('success' => false);
    }
}
