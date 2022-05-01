<?php

function user_authenticate($db, $username, $password)
{
    $result = $db->select("SELECT password FROM Administrator WHERE name=:username", ['username'=>$username]);
    $hash = $result[0]['password'];
    return password_verify($password, $hash);
}