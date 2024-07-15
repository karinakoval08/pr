<!DOCTYPE html>
<html lang="en">

<head>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css" />
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"
        integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous" />
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js"></script>
    <script src="https://use.fontawesome.com/releases/v5.0.8/js/all.js"></script>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"
        integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous" />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700&display=swap"
        rel="stylesheet" />
    <script async src="https://kit.fontawesome.com/54bb8b5ea5.js" crossorigin="anonymous"></script>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>StarTur - web-сервіc гарячих турів</title>
    <link rel="stylesheet" href="style.css" />
</head>

<body>

    <div class="container">
        <div class="header">
            <div class="head">
                <div class="top-logo-img">
                    <img class="burger-menu" src="./img/menu.svg" />
                    <img class="logotip" src="img/startour_big.png" />
                </div>
                <div class="HeadSearch">
                    <div class="search">
                        <input class="SearchInput" type="text" placeholder="Search" />
                        <img class="SearchIcon" src="img/ico_search.png" />
                    </div>
                    <ul class="Menu">
                        <li class="MenuItem"><a href="./login.php">Увійти</a></li>
                        <li class="MenuItem"><a href="./index.php">Головна</a></li>
                        <li class="MenuItem"><a href="./oform.php">Оформленні тури</a></li>
                        <li class="MenuItem"><a href="./contact.php">Контакти</a></li>
                    </ul>
                </div>
            </div>
        </div>

        <div class="row">
            <?php
            $servername = "localhost";
            $username = "root";
            $password = "";
            $database = "kursova";

            $conn = new mysqli($servername, $username, $password, $database);

            if ($conn->connect_error) {
                die("Connection failed: " . $conn->connect_error);
            }
            if (isset($_GET["country"]))
                $countryId = $_GET["country"];

            $sql = "SELECT * FROM Готелі WHERE `ID країни` = $countryId";
            $result = $conn->query($sql);

            if ($result->num_rows > 0) {
                $count = 0;
                while ($row = $result->fetch_assoc()) {
                    echo "<div class='col-md-6'>";
                    echo "<div class='hotel'>";
                    echo "<img src='" . $row["Фото готелю"] . "' class='hotel-image'>"; 
                    echo "<div class='hotel-info'>"; 
                    echo "<p class='hotel-name'>" . $row["Назва готелю"] . "</p>"; 
                    echo "<p class='hotel-description'>" . $row["Опис готелю"] . "</p>"; 
                    echo "<p class='hotel-price'>" . $row["Ціна (за 1 добу)"] . "$</p>"; 
                    echo "<a href='booking.php?hotel_name=" . urlencode($row["Назва готелю"]) . "' class='btn btn-primary'>Забронювати</a>"; // Booking button
                    echo "</div>"; 
                    echo "</div>"; 
                    echo "</div>"; 
                    $count++;
                }
            } else {
                echo "Записів не знайдено";
            }
            $conn->close();
            ?>
        </div>

        <footer>
            <div id="footer_first">
                <div>
                    <ul>
                        <li><a href="./login.php">Увійти</a></li>
                        <li><a href="./index.php">Головна</a></li>
                        <li><a href="./oform.php">Оформленні тури</a></li>
                        <li><a href="./contact.php">Контакти</a></li>
                    </ul>
                </div>
            </div>
            <div id="footer_second">
                <p>StarTur © 2024</p>
            </div>
        </footer>
    </div>
</body>

</html>