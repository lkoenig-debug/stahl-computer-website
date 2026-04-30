<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST');
header('Access-Control-Allow-Headers: Content-Type');

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Formulardaten empfangen
    $name = isset($_POST['name']) ? trim($_POST['name']) : '';
    $email = isset($_POST['email']) ? trim($_POST['email']) : '';
    $company = isset($_POST['company']) ? trim($_POST['company']) : '';
    $message = isset($_POST['message']) ? trim($_POST['message']) : '';
    
    // Validierung
    $errors = [];
    
    if (empty($name)) {
        $errors['name'] = 'Bitte geben Sie Ihren Namen an.';
    }
    
    if (empty($email)) {
        $errors['email'] = 'Bitte geben Sie Ihre E-Mail-Adresse an.';
    } elseif (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        $errors['email'] = 'Bitte geben Sie eine gültige E-Mail-Adresse an.';
    }
    
    if (empty($message)) {
        $errors['message'] = 'Bitte geben Sie eine Nachricht ein.';
    } elseif (strlen($message) < 2) {
        $errors['message'] = 'Die Nachricht muss mindestens 2 Zeichen enthalten.';
    }
    
    if (!empty($errors)) {
        echo json_encode(['success' => false, 'errors' => $errors]);
        exit;
    }
    
    // E-Mail senden
    $to = 'info@stahlcomputer.de';
    $subject = 'Neue Anfrage von ' . $name;
    $headers = [
        'From: ' . $email,
        'Reply-To: ' . $email,
        'Content-Type: text/plain; charset=UTF-8'
    ];
    
    $email_body = "Name: $name\n";
    $email_body .= "E-Mail: $email\n";
    $email_body .= "Unternehmen: " . (!empty($company) ? $company : '---') . "\n\n";
    $email_body .= "Nachricht:\n$message";
    
    if (mail($to, $subject, $email_body, implode("\r\n", $headers))) {
        echo json_encode(['success' => true]);
    } else {
        echo json_encode(['success' => false, 'error' => 'E-Mail konnte nicht gesendet werden.']);
    }
} else {
    echo json_encode(['success' => false, 'error' => 'Ungültige Anfragemethode.']);
}
?>
