<?php

$host = "localhost";
$user = "root";
$pass = "";
$bd = "cadastros";

$mysqli = new mysqli($host, $user, $pass, $bd);

if ($mysqli->connect_errno){
    echo "Connect failed: " . mysqli->connection_error;
    exit();
}
