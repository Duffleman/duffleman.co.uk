<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
        <meta http-equiv="x-ua-compatible" content="ie=edge">
        <title>Duffleman</title>
        <link href="https://fonts.googleapis.com/css?family=Amatic+SC" rel="stylesheet">
        <link rel="stylesheet" href="/css/app.css">
    </head>
    <body>
        <div class="container">
            <div class="row m-t-1 m-b-1">
                <div class="col-lg-12 text-xs-center">
                    <h1 class="display-1">Duffleman</h1>
                    <h2 class="display-6">EFE1 8E88 7921 BFC1</h2>
                </div>
            </div>
            <div class="row m-b-1">
                <div class="col-lg-12 text-xs-center">
                    <p>My name is George Miller, I am {{ $age }} years old. I work for <a href="https://cuvva.co">Cuvva</a>!</p>
                </div>
            </div>

            @if ($photos)
            <div class="row m-b-1">
                <div class="col-lg-12">
                    <div class="card-columns">
                        <div class="card card-inverse">
                            <img src="http://s3.duffleman.co.uk/web/1.jpg" class="img-fluid" alt="George &amp; Kat" class="card-img">
                            <div class="card-img-overlay">
                                <h4 class="display-4 card-title">George &amp; Kat</h4>
                            </div>
                        </div>
                        <div class="card card-inverse">
                            <img src="http://s3.duffleman.co.uk/web/2.jpg" class="img-fluid" alt="Large Forehead" class="card-img">
                            <div class="card-img-overlay">
                                <h4 class="display-4 card-title">I have a large forehead</h4>
                            </div>
                        </div>
                        <div class="card card-inverse">
                            <img src="http://s3.duffleman.co.uk/web/3.jpg" class="img-fluid" alt="George" class="card-img">
                            <div class="card-img-overlay">
                                <h4 class="display-4 card-title">Me</h4>
                            </div>
                        </div>
                        <div class="card card-inverse">
                            <img src="http://s3.duffleman.co.uk/web/4.jpg" class="img-fluid" alt="George" class="card-img">
                            <div class="card-img-overlay">
                                <h4 class="display-4 card-title">I have a sister</h4>
                            </div>
                        </div>
                        <div class="card">
                            <img src="http://s3.duffleman.co.uk/web/5.jpg" class="img-fluid" alt="George" class="card-img">
                            <div class="card-img-overlay">
                                <h4 class="display-4 card-title">Big forehead, all ego</h4>
                            </div>
                        </div>
                        <div class="card card-inverse">
                            <img src="http://s3.duffleman.co.uk/web/6.jpg" class="img-fluid" alt="George" class="card-img">
                            <div class="card-img-overlay">
                                <h4 class="display-4 card-title">Tux</h4>
                            </div>
                        </div>
                        <div class="card card-inverse">
                            <img src="http://s3.duffleman.co.uk/web/7.jpg" class="img-fluid" alt="George" class="card-img">
                            <div class="card-img-overlay">
                                <h4 class="display-4 card-title">George &amp; Jess</h4>
                            </div>
                        </div>
                        <div class="card">
                            <img src="http://s3.duffleman.co.uk/web/8.jpg" class="img-fluid" alt="George" class="card-img">
                            <div class="card-img-overlay">
                                <h4 class="display-4 card-title">Superhot</h4>
                            </div>
                        </div>
                        <div class="card card-inverse">
                            <img src="http://s3.duffleman.co.uk/web/9.jpg" class="img-fluid" alt="George" class="card-img">
                            <div class="card-img-overlay">
                                <h4 class="display-4 card-title">2cute</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            @endif
        </div>
        <script src="/js/vendor.js"></script>
    </body>
</html>
