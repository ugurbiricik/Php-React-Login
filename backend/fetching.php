<?php

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, GET, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");

include "connection.php";

// POST işlemi
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $data = json_decode(file_get_contents("php://input"), true);

    if (isset($data['name']) && isset($data['email']) && isset($data['password'])) {
        $name = $data['name'];
        $email = $data['email'];
        $password = $data['password'];

        if (!empty($name) && !empty($email) && !empty($password)) {
            if (strlen($password) >= 8 && preg_match('/\d/', $password)) { // Şifrenin 8 karakterden uzun ve en az bir rakam içermesi kontrol ediliyor
                // Parolayı hashle
                $hashed_password = password_hash($password, PASSWORD_DEFAULT);



                $sql = "INSERT INTO logininfo ( name, email, password) VALUES ('$name', '$email', '$hashed_password')";


                if ($conn->query($sql) === TRUE) {
                    echo json_encode(array("message" => "Yeni kayıt başarıyla eklendi"));
                } else {
                    echo json_encode(array("message" => "Hata oluştu: " . $conn->error));
                }
            } else {
                echo json_encode(array("message" => "Şifre en az 8 karakter uzunluğunda olmalı ve en az bir rakam içermelidir." . $conn->error));
            }
        } else {
            echo json_encode(array("message" => "Boş alan bırakmayınız." . $conn->error));
        }
    } else {
        echo json_encode(array("message" => "Eksik veri gönderildi." . $conn->error));
    }
    exit(); // POST işlemi tamamlandıktan sonra çıkış yap
}

// GET işlemi
if ($_SERVER["REQUEST_METHOD"] == "GET") {
    $sql = "SELECT * FROM logininfo";
    $result = $conn->query($sql);

    $response = array();
    if ($result->num_rows > 0) {
        while ($row = $result->fetch_assoc()) {
            $response[] = $row;
        }
    }
    echo json_encode($response);
}

$conn->close();