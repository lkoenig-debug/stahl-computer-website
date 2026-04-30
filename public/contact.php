<?php
/**
 * IONOS-optimiertes Kontaktformular
 * Kompatibel mit IONOS E-Mail-Restriktionen (seit 29.01.2024)
 */

header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST');
header('Access-Control-Allow-Headers: Content-Type');

// Konfiguration - ANPASSEN FÜR IHRE DOMAIN!
$config = [
    'from_email' => 'noreply@stahlcomputer.de',  // IONOS Domain erforderlich!
    'to_email' => 'info@stahlcomputer.de',        // Ihre E-Mail
    'from_name' => 'Stahl Computer Systemhaus',   // Absender Name
    'subject_prefix' => 'Kontaktanfrage von '
];

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Formulardaten empfangen und bereinigen
    $name = isset($_POST['name']) ? trim(htmlspecialchars($_POST['name'])) : '';
    $email = isset($_POST['email']) ? trim(htmlspecialchars($_POST['email'])) : '';
    $company = isset($_POST['company']) ? trim(htmlspecialchars($_POST['company'])) : '';
    $message = isset($_POST['message']) ? trim(htmlspecialchars($_POST['message'])) : '';
    
    // Validierung
    $errors = [];
    
    if (empty($name)) {
        $errors['name'] = 'Bitte geben Sie Ihren Namen an.';
    } elseif (strlen($name) < 2) {
        $errors['name'] = 'Der Name muss mindestens 2 Zeichen enthalten.';
    }
    
    if (empty($email)) {
        $errors['email'] = 'Bitte geben Sie Ihre E-Mail-Adresse an.';
    } elseif (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        $errors['email'] = 'Bitte geben Sie eine gültige E-Mail-Adresse an.';
    }
    
    if (empty($message)) {
        $errors['message'] = 'Bitte geben Sie eine Nachricht ein.';
    } elseif (strlen($message) < 10) {
        $errors['message'] = 'Die Nachricht muss mindestens 10 Zeichen enthalten.';
    }
    
    if (!empty($errors)) {
        echo json_encode(['success' => false, 'errors' => $errors]);
        exit;
    }
    
    // E-Mail zusammenbauen
    $subject = $config['subject_prefix'] . $name;
    
    // HTML-E-Mail für bessere Darstellung
    $htmlBody = '
    <!DOCTYPE html>
    <html>
    <head>
        <meta charset="UTF-8">
        <title>' . htmlspecialchars($subject) . '</title>
        <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: #2c3e50; color: white; padding: 20px; text-align: center; }
            .content { padding: 20px; background: #f9f9f9; }
            .field { margin-bottom: 15px; }
            .label { font-weight: bold; color: #2c3e50; }
            .footer { background: #34495e; color: white; padding: 15px; text-align: center; font-size: 12px; }
        </style>
    </head>
    <body>
        <div class="container">
            <div class="header">
                <h1>Stahl Computer Systemhaus</h1>
                <h2>Neue Kontaktanfrage</h2>
            </div>
            <div class="content">
                <div class="field">
                    <div class="label">Name:</div>
                    <div>' . htmlspecialchars($name) . '</div>
                </div>
                <div class="field">
                    <div class="label">E-Mail:</div>
                    <div>' . htmlspecialchars($email) . '</div>
                </div>';
    
    if (!empty($company)) {
        $htmlBody .= '
                <div class="field">
                    <div class="label">Unternehmen:</div>
                    <div>' . htmlspecialchars($company) . '</div>
                </div>';
    }
    
    $htmlBody .= '
                <div class="field">
                    <div class="label">Nachricht:</div>
                    <div>' . nl2br(htmlspecialchars($message)) . '</div>
                </div>
            </div>
            <div class="footer">
                <p>Diese E-Mail wurde über das Kontaktformular auf stahlcomputer.de gesendet.</p>
                <p>Gesendet am: ' . date('d.m.Y H:i') . '</p>
            </div>
        </div>
    </body>
    </html>';
    
    // Text-Version für E-Mail-Clients die kein HTML unterstützen
    $textBody = "Neue Kontaktanfrage von Stahl Computer Systemhaus\n\n";
    $textBody .= "Name: " . $name . "\n";
    $textBody .= "E-Mail: " . $email . "\n";
    if (!empty($company)) {
        $textBody .= "Unternehmen: " . $company . "\n";
    }
    $textBody .= "Nachricht:\n" . wordwrap($message, 70) . "\n\n";
    $textBody .= "---\n";
    $textBody .= "Gesendet am: " . date('d.m.Y H:i') . "\n";
    $textBody .= "Über: stahlcomputer.de";
    
    // E-Mail Headers (IONOS-kompatibel)
    $boundary = md5(time());
    $headers = [
        'From: ' . $config['from_name'] . ' <' . $config['from_email'] . '>',
        'Reply-To: ' . $name . ' <' . $email . '>',
        'Return-Path: ' . $config['from_email'],
        'MIME-Version: 1.0',
        'Content-Type: multipart/alternative; boundary="' . $boundary . '"',
        'X-Mailer: PHP/' . phpversion(),
        'X-Priority: 3',
        'X-MSMail-Priority: Normal'
    ];
    
    // Multipart E-Mail Body
    $emailBody = '--' . $boundary . "\r\n";
    $emailBody .= 'Content-Type: text/plain; charset=UTF-8' . "\r\n";
    $emailBody .= 'Content-Transfer-Encoding: 7bit' . "\r\n\r\n";
    $emailBody .= $textBody . "\r\n\r\n";
    
    $emailBody .= '--' . $boundary . "\r\n";
    $emailBody .= 'Content-Type: text/html; charset=UTF-8' . "\r\n";
    $emailBody .= 'Content-Transfer-Encoding: 7bit' . "\r\n\r\n";
    $emailBody .= $htmlBody . "\r\n\r\n";
    
    $emailBody .= '--' . $boundary . '--';
    
    // E-Mail senden
    if (mail($config['to_email'], $subject, $emailBody, implode("\r\n", $headers))) {
        // Erfolg-Response mit zusätzlichen Infos
        echo json_encode([
            'success' => true,
            'message' => 'Ihre Nachricht wurde erfolgreich gesendet.',
            'data' => [
                'sent_to' => $config['to_email'],
                'sent_from' => $config['from_email'],
                'reply_to' => $email,
                'timestamp' => date('d.m.Y H:i')
            ]
        ]);
    } else {
        // Detaillierte Fehlermeldung
        $error = error_get_last();
        echo json_encode([
            'success' => false, 
            'error' => 'E-Mail konnte nicht gesendet werden.',
            'debug_info' => [
                'php_error' => $error ? $error['message'] : 'Kein PHP Fehler',
                'from_email' => $config['from_email'],
                'to_email' => $config['to_email'],
                'subject' => $subject
            ]
        ]);
    }
} else {
    echo json_encode([
        'success' => false, 
        'error' => 'Ungültige Anfragemethode. Nur POST ist erlaubt.',
        'allowed_method' => 'POST'
    ]);
}
?>
