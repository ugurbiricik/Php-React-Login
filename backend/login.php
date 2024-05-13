<?php

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, GET, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");

include "connection.php";

// POST işlemi
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $data = json_decode(file_get_contents("php://input"), true);

    if (isset($data['email']) && isset($data['password'])) {
        $email = $data['email'];
        $password = $data['password'];

        if (!empty($email) && !empty($password)) {
            $sql = "SELECT * FROM logininfo WHERE email='$email'";
            $result = $conn->query($sql);

            if ($result->num_rows > 0) {
                $row = $result->fetch_assoc();
                if (password_verify($password, $row['password'])) {
                    echo json_encode(array("message" => "Giriş başarılı"));
                } else {
                    echo json_encode(array("message" => "Hatalı şifre"));
                }
            } else {
                echo json_encode(array("message" => "Kullanıcı bulunamadı"));
            }
        } else {
            echo json_encode(array("message" => "Boş alan bırakmayınız."));
        }
    } else {
        echo json_encode(array("message" => "Eksik veri gönderildi."));
    }
    exit(); // POST işlemi tamamlandıktan sonra çıkış yap
}