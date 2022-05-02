<?php

require_once('../database.php');
require_once('../protected/user.php');
require_once('../protected/cors.php');

cors();

$db = new db();
$request_method = $_SERVER['REQUEST_METHOD'];

switch ($request_method) {
    case 'GET':
        if (!isset($_GET['id'])) {
            $result = $db->select("SELECT * FROM Sport");
            header('Content-Type: application/json', false, 200);
            echo json_encode($result);
        }
        else {
            $id = $_GET['id'];
            $result = $db->select("SELECT * FROM Sport WHERE id=:id", ['id'=>$id]);
            if ($result && count($result) == 1) {
                header('Content-Type: application/json', false, 200);
                echo json_encode($result[0]);
            }
            else {
                header('Content-Type: application/json', false, 404);
            }
        }
        break;
    case 'POST':
        $request = json_decode(file_get_contents('php://input'), true);
        if (!isset($_SERVER['PHP_AUTH_USER']) || 
            !isset($_SERVER['PHP_AUTH_PW']) || 
            !user_authenticate($db, $_SERVER['PHP_AUTH_USER'], $_SERVER['PHP_AUTH_PW'])) {
            header('Content-Type: application/json', false, 401);
        }
        else {
            if (isset($request['id']) && isset($request['name'])) {
                
                $success = $db->execute("INSERT INTO Sport VALUES (:id, :name)", [
                    'id' => $request['id'],
                    'name' => $request['name']
                ]);
                
                if ($success) {
                    header('Content-Type: application/json', false, 200);
                }
                else {
                    header('Content-Type: application/json', false, 500);
                }                
            }
            else {
                header('Content-Type: application/json', false, 400);
            }
        }
        break;
    case 'PUT':
        if (isset($_GET['id'])) {
            $request = json_decode(file_get_contents('php://input'), true);
            if (!isset($_SERVER['PHP_AUTH_USER']) || 
                !isset($_SERVER['PHP_AUTH_PW']) || 
                !user_authenticate($db, $_SERVER['PHP_AUTH_USER'], $_SERVER['PHP_AUTH_PW'])) {
                header('Content-Type: application/json', false, 401);
            }
            else {
                if (isset($request['id']) && isset($request['name'])) {
                    
                    $success = $db->execute("UPDATE Sport SET name=:name WHERE id=:id", [
                        'id' => $request['id'],
                        'name' => $request['name']
                    ]);
                    
                    if ($success) {
                        header('Content-Type: application/json', false, 200);
                    }
                    else {
                        header('Content-Type: application/json', false, 500);
                    }                
                }
                else {
                    header('Content-Type: application/json', false, 400);
                }
            }
        }
        else {
            header('Content-Type: application/json', false, 400);
        }

        break;
    case 'DELETE':
        if (!isset($_SERVER['PHP_AUTH_USER']) || 
            !isset($_SERVER['PHP_AUTH_PW']) || 
            !user_authenticate($db, $_SERVER['PHP_AUTH_USER'], $_SERVER['PHP_AUTH_PW'])) {
            header('Content-Type: application/json', false, 401);
        }
        else {
            if (!isset($_GET['id'])) {
                header('Content-Type: application/json', false, 400);
            }
            else {
                $id = $_GET['id'];
                $success = $db->execute("DELETE FROM Sport WHERE id=:id", ['id'=>$id]);

                if ($success) {
                    header('Content-Type: application/json', false, 200);
                }
                else {
                    header('Content-Type: application/json', false, 400);
                }
            }
        }
        break;
    default:
        break;
}