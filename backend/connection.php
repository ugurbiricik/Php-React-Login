<?php
$servername = "localhost";
$username = "root";
$password = "1-Galatasaray";
$dbname = "php-react-login";

// Veritabanına bağlanma
$conn = new mysqli($servername, $username, $password, $dbname);

// Bağlantıyı kontrol et
if ($conn->connect_error) {
    die("Bağlantı başarısız: " . $conn->connect_error);
}