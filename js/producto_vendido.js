<<!doctype html>
    <html lang="en">

    <head>
        <title>Venta Realizada</title>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
        <!-- Bootstrap CSS v5.2.1 -->
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/css/bootstrap.min.css" rel="stylesheet"
            integrity="sha384-iYQeCzEYFbKjA/T2uDLTpkwGzCiq6soy8tYaI1GyVh/UjpbCx/TYkiZhlZB6+fzT" crossorigin="anonymous">
    </head>

    <body>
        <header id="header">
            <!-- place navbar here -->
            <nav class="navbar navbar-expand-sm navbar-light bg-light">
                <div class="container" style="background-color: cadetblue; border-radius: 10px; height: 60px;">
                    <a class="navbar-brand" href="index.html"></a>
                    <button class="navbar-toggler d-lg-none" type="button" data-bs-toggle="collapse"
                        data-bs-target="#collapsibleNavId" aria-controls="collapsibleNavId" aria-expanded="false"
                        aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="collapsibleNavId">
                        <ul class="navbar-nav me-auto mt-2 mt-lg-0">
                            <li class="nav-item">
                                <a class="nav-link active" href="index.html" aria-current="page"
                                    style="font-size: 30px; font-family: 'Times New Roman', Times, serif; color: white;"><strong>Inicio</strong>
                                    <span class="visually-hidden">(current)</span></a>
        </header>
        <main>
            <div id="app" class="container"><br>
                <h1 style="text-align: center;">Detalle de Venta Realizada</h1><br>
                <a href="https://www.chevrolet.com.ar/" target="_blank"><img src="imagenes/logo-ch.jpeg" alt="" style="margin-left: 42%;
                 width: 200px; height: 100px;"><br>
                </a>
                <br>
                <div class="container" id="app">
                    <form style="background-color: white; border-style: double; margin: 10px auto; width: 400px; padding: 20px;
                font-family: 'Times New Roman', Times, serif;">
                        <h2 style="text-align: center;"></h2><br>
                        <!--<p>Precio:{{precio}}</p>-->
                        <div class="mb-3">
                            <label for="id"
                                style="font-size: 20px; margin-right: 15px; text-align: center;"><strong>ID</strong></label>
                            <input type="number" name="id" id="id" disabled v-model="id" style="width: 100%;">
                        </div>
                        <div class="mb-3">
                            <label for="nombre"
                                style="font-size: 20px; margin-right: 15px; text-align: center;"><strong>Nombre</strong></label>
                            <input type="text" name="nombre" id="nombre" disabled v-model="nombre" style="width: 100%;">
                        </div>
                        <div class="mb-3">
                            <label for="precio"
                                style="font-size: 20px; margin-right: 15px; text-align: center;"><strong>Precio</strong></label>
                            <input type="number" name="precio" id="precio" disabled v-model="precio"
                                style="width: 100%;">
                        </div>
                        <!--<div class="mb-3">
                        <label for="stock"
                            style="font-size: 20px; margin-right: 15px; text-align: center;"><strong>Stock</strong></label>
                        <input type="number" name="stock" id="stock" disabled v-model="stock" style="width: 100%;">
                    </div>-->

                        <div class="mb-3">
                            <label for="stock"
                                style="font-size: 20px; margin-right: 15px; text-align: center;"><strong>Cantidad</strong></label>
                            <input type="number" value="1" disabled style="width: 100%;">
                        </div>

                        <div class="mb-3">
                            <label for="imagen"
                                style="font-size: 20px; margin-right: 15px; text-align: center;"><strong>Imagen</strong></label>
                            <input type="text" name="imagen" id="imagen" disabled v-model="imagen"
                                style="width: 100%;"><br><br>
                            <img width="250" height="100" :src="imagen" alt="">
                        </div><br>
                        <button type="button" class="btn btn-success" v-on:click="modificar()" style="background-color: rgb(77, 75, 75); width: 100%; height: 60px; color: white;
                    font-size: 30px;">Confirmar Venta</button>
                    </form>
                </div>
        </main>
        <footer>
            <!-- place footer here -->
        </footer>
        <!-- Bootstrap JavaScript Libraries -->
        <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.6/dist/umd/popper.min.js"
            integrity="sha384-oBqDVmMz9ATKxIep9tiCxS/Z9fNfEXiDAYTujMAeBAsjFuCZSmKbSSUnQlmh/jp3"
            crossorigin="anonymous"> </script>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/js/bootstrap.min.js"
            integrity="sha384-7VPbUDkoPSGFnVtYi0QogXtr74QeVeeIs99Qfg5YCF+TidwNdjvaKZX19NZ/e6oz"
            crossorigin="anonymous"> </script>
        <script src="./js/main.js"></script>
        <script src="https://unpkg.com/vue@3/dist/vue.global.js"></script>
        <script src="./js/producto_vendido.js"></script>
    </body>
    </html>
