<?php

require_once('../database.php');
require_once('../protected/user.php');

$db = new db();
$request_method = $_SERVER['REQUEST_METHOD'];

switch ($request_method) {
    case 'GET':
        if (!isset($_GET['id'])) {
            $result = $db->select("SELECT * FROM ParticipantType");
            header('Content-Type: application/json', false, 200);
            echo json_encode($result);
        }
        else {
            header('Content-Type: application/json', false, 404);
        }
        break;
    default:
        break;
}