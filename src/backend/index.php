<?php

require_once('database.php');

header('Content-Type: application/json');
http_response_code(200);
echo json_encode([
    'apis' => [
        '/event' => 'Manage events held by the EKKE Sports Institute',
        '/guest' => 'Manage participants\' information',
        '/guest_types' => 'Get list of supported guest types',
        '/sport' => 'Manage the list of sports',
        '/department' => 'Get information about the university departments',
        '/participate' => 'Update participation status for an event'
    ]
]);
