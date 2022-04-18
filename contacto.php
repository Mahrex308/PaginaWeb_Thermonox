<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Contacto</title>

    <link rel="stylesheet" type="text/css" href="assets/bootstrap-5.1.3-dist/bootstrap.min.css">
    <link rel="stylesheet" type="text/css" href="assets/css/font-awesome.css">
    <link rel='stylesheet' href='https://unpkg.com/boxicons@2.1.2/css/boxicons.min.css'>
    <link rel="stylesheet" href="assets/css/styles.css">
    <link rel="stylesheet" href="assets/css/contacto.css">
    <script src="assets/js/contacto.js" type="text/javascript"></script>

    <script src="https://kit.fontawesome.com/5fb0beb110.js" crossorigin="anonymous"></script>

</head>

<body>
    <header class="hero">
        <nav class="nav_hero">
            <div class="container nav_container">
                <div class="logo">
                    <img src="assets/images/thermonoxLogo.png"  class="logo_img" alt="">
                    <h2 class="logo_name">ThermoNox<span class="point">.</span></h2>
                </div>

                <div class="links">
                    <a href="/index.html" class="link">Inicio</a>
                    <a href="/Thermonox.html" class="link">ThermoNox</a>
                    <a href="/ThermoNoxilo.html" class="link">ThermoNoxilo</a>
                    <!-- <a href="#" class="link">Pag3</a> -->
                    <a href="#" class="link link-active">Contacto</a>
                </div>
            </div>
        </nav>
    </header>

    <center>
    <br><br><br>

    <?php
        function conecta(){
            $cs=mysqli_connect("localhost","root","");
            $cbd=mysqli_select_db($cs,"thermonox");
            return $cs;
        }

        function msg(){
            echo "<p>La informacion ha sido enviada</p>";	
        }

        global $nombre, $correo, $asunto, $mensaje, $ciudad, $codigo, $pais;
        $nombre=$_GET['nombre'];
        $correo=$_GET['correo'];
        $asunto=$_GET['asunto'];
        $mensaje=$_GET['mensaje'];
        $ciudad=$_GET['ciudad'];
        $codigo=$_GET['codigo'];
        $pais=$_GET['pais'];
        $cs = conecta();
        $query = "INSERT INTO contactos VALUES ('$nombre','$correo','$asunto','$mensaje','$ciudad','$codigo','$pais')";
        $sql=mysqli_query($cs,$query);
		msg();
    ?>
</center>


<footer class="footer">
    <div class="container footer_caption">
        <section class="download">
            <h3 class="title_footer">Thermonox</h3>
            <div class="download_app">
                <!--
                <div class="download_item">
                    <i class='bx bxl-apple download_logo'></i>
                    <h4 class="download_title">App Store</h4>
                </div>
                <div class="download_item">
                    <i class='bx bxl-play-store download_logo'></i>
                    <h4 class="download_title">Play Store</h4>
                </div> -->
            </div>

            <div class="footer_copy">
                <p class="copyright">Thermonox &copy; 2022 Todos los derechos reservados</p>

                <a href="#" class="politica_privacidad politica_privacidad-margin">Politica de privacidad</a>
                <a href="#" class="politica_privacidad">Terminos y condiciones</a>
            </div>
        </section>

        <section class="get-email">
            <h3 class="title_footer">¿Quires colaborar con nosotros?</h3>
            <form class="newsletter newsletter-modifier">
                <input type="text" class="newsletter_input" placeholder="Ingresa tu email">
                <input type="submit" class="newsletter_submit" value="Correo">
            </form>
            <div class="socialmedia">
                <p class="socialmedia_legend">Siguenos en:</p>
                <i class='socialmedia_icon bx bxl-facebook-circle'></i>
                <i class='socialmedia_icon bx bxl-linkedin-square'></i>
                <i class='socialmedia_icon bx bxl-twitter'></i>
                <i class='socialmedia_icon bx bxl-instagram'></i>
                <i class='socialmedia_icon bx bxl-github'></i>
            </div>
        </section>
    </div>

    <div class="contact">
        <div class="item_contact">
            <i class='bx bx-copyright contact_icon'></i>
            <h3 class="contact_title">ThermoNox.de</h3>
        </div>

        <div class="item_contact">
            <i class='bx bx-mail-send contact_icon'></i>
            <h3 class="contact_title">hola@correo.mx</h3>
        </div>

        <div class="item_contact">
            <i class='bx bxs-edit-location contact_icon'></i>
            <h3 class="contact_title">Telefono</h3>
        </div>

        <div class="item_contact item_contact-gold">
            <i class='bx bx-chat contact_icon contact_icon-modifier'></i>
            <h3 class="contact_title">Contactanos ahora</h3>
        </div>
    </div>
</footer>

    <!-- Bootstrap -->
    <script src="assets/js/bootstrap.min.js"></script>

    <!-- Plugins -->
</body>
</html>