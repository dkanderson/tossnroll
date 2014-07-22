        <?php $body_class = 'home'; ?>
        
        <?php include 'templates/header.php'; ?>

        <section id="slider">
            <div class="cycle-slideshow responsive" 
                data-cycle-timeout=3000
                data-cycle-next="#next"
                data-cycle-prev="#prev"
                data-cycle-center-horz=true
                >
                <div class="cycle-pager"></div>

                <img src="assets/img/slide1.jpg">
                <img src="assets/img/slide2.jpg">
            </div>

            <div class="carousel-nav">
                <a href='#' id='prev'></a>
                <a href='#' id='next'></a>
            </div>
        </section>
        <section id="featured-articles" class="container">
            <div class="row">
                <article class="col-md-6">
                    
                    <div class="inner">
                        <img src="assets/img/shake-it.jpg" alt="Shake it up">
                        <div class="text-wrap">
                            <h1>Shake it Up</h1>
                            <p>Now available at Toss and Roll, healthy peanut and mango shake..</p>
                            <a href="menu.php">more like this</a>
                        </div>
                    </div>
                </article>
                <article class="col-md-6">
                    <div class="inner">
                        <img src="assets/img/meals-for-all.jpg" alt="Meals for all">
                        <div class="text-wrap">
                            <h1>Meals for all</h1>
                            <p>Literally. We offer a wide range of meals that cater to almost every dietary restriction.</p>
                            <a href="love">learn more</a>
                        </div>
                    </div>
                </article>
            </div>
        </section>

       <?php include 'templates/footer.php'; ?>