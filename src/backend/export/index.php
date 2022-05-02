<?php

require_once('../database.php');
require_once('../protected/user.php');
require_once('../protected/cors.php');

cors();

$db = new db();

if (!isset($_SERVER['PHP_AUTH_USER']) || 
    !isset($_SERVER['PHP_AUTH_PW']) || 
    !user_authenticate($db, $_SERVER['PHP_AUTH_USER'], $_SERVER['PHP_AUTH_PW'])) {
    header('Content-Type: application/json', false, 401);
}
else {
    header('Content-Type: application/json', false, 200);

    $sql = <<<SQL
    SELECT E.id          uuid,
       E.name        event_name,
       S.name        sport_name,
       E.date        date,
       P.id          participant_id,
       PT.name       participant_type,
       P.name        participant_name,
       P.city        city,
       D.name        department,
       P.neptun_code neptun_code,
       P.email       email
    FROM Event E
            INNER JOIN Event_Participant EP ON E.id = EP.event_id
            LEFT JOIN Participant P ON EP.participant_id = P.id
            LEFT JOIN ParticipantType PT ON P.type = PT.id
            LEFT JOIN Department D ON P.department_id = D.id
            LEFT JOIN Sport S on E.sport_id = S.id;
    SQL;
    $result = $db->select($sql, []);
    echo json_encode($result);
}