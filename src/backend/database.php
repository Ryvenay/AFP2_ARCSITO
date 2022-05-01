<?php

define('DB_TYPE','mysql');
define('DB_HOST', $_ENV['MYSQL_HOST']);
define('DB_NAME', $_ENV['MYSQL_DATABASE']);
define('DB_USER', $_ENV['MYSQL_USER']);
define('DB_PASS', $_ENV['MYSQL_PASSWORD']);
define('DB_PORT', $_ENV['MYSQL_PORT']);

class db {
    function getConnection() {
        $dsn = DB_TYPE.':host='.DB_HOST.':'.DB_PORT.';dbname='.DB_NAME;
        $connection = new PDO($dsn,DB_USER, DB_PASS);
        $connection->exec("SET NAMES 'utf8'");
        return $connection;
    }

    public function execute($query, $params) {
        $connection = $this->getConnection();
        $stmt = $connection->prepare($query);
        $success = $stmt->execute($params);
        $stmt->closeCursor();
        $connection = null;
        return $success;
    }

    public function select($query, $params = []) {
        $connection = $this->getConnection();
        $stmt = $connection->prepare($query);
        $success = $stmt->execute($params);

        $records = $success ? $stmt->fetchAll(PDO::FETCH_ASSOC) : [];
        $stmt->closeCursor();
        $connection = null;

        return $records;
    }
}