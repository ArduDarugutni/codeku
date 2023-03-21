<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Form Jajar Genjang</title>
</head>

<body style="background-color: lightblue; text-align:left;">
    <div style="background-color: white; padding: 20px; width: 31%; margin: 0 auto;">
        <h2 style="text-align:center">Jajar Genjang</h2>
        <form method="post">
            <table>
                <tr>
                    <td><label for="alas">Masukkan nilai alas</label></td>
                    <td>:</td>
                    <td><input type="number" name="alas" id="alas" required></td>
                </tr>
                <tr>
                    <td><label for="tinggi">Masukkan nilai tinggi</label></td>
                    <td>:</td>
                    <td><input type="number" name="tinggi" id="tinggi" required></td>
                </tr>
                <tr>
                    <td><label for="sisi">Masukkan nilai sisi</label></td>
                    <td>:</td>
                    <td><input type="number" name="sisi" id="sisi" required></td>
                    <td><input type="submit" name="hitung" value="Hitung"></td>
                </tr>
            </table>
        </form>

        <?php
        if (isset($_POST['hitung'])) {
            $alas = $_POST['alas'];
            $tinggi = $_POST['tinggi'];
            $sisi = $_POST['sisi'];
            $luas = $alas * $tinggi;
            $keliling = 2 * ($alas + $sisi);
            echo "<h3>Hasil Perhitungan:</h3>";
            echo 'Diketahui : ';
            echo '<br> Alas : ' . $alas;
            echo '<br> Tinggi : ' . $tinggi;
            echo '<br> Sisi : ' . $sisi . "<br>";
            echo '<br> Jadi : ' . "<br><br>";
            echo "Luas Jajar Genjang : " . $luas . "<br>";
            echo "Keliling Jajar Genjang : " . $keliling;
        }
        ?>

    </div>

</body>

</html>