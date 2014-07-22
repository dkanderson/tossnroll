        <section id="footer">
             <footer id="footer-menu">
                <div id="footer-inner" class="container">
                    <div class="row">
                        <div class="col-md-6 col-sm-6">
                            <ul class="make-contact">
                                <li><i class="fa fa-clock-o"></i><span class="hours">Monday to Friday 8:00AM - 5:00 PM</span></li>
                                <li><i class="fa fa-clock-o"></i><span class="hours">Saturday 8:00AM - 6:00PM</span></li>
                                <li><i class="fa fa-clock-o"></i><span class="hours">Breakfast 8:00 AM - 11:00 AM</span></li>
                            </ul>
                        </div>
                        <div class="col-md-6 col-sm-6">
                            <ul class="make-contact">
                                <li>Delivery anywhere in Kingston only $300.</li>
                                <li>All orders for delivery must be called in before 12 Noon</li>
                                <li>Monday to Friday - <a class="phone-number" href="tel:879-3310"><i class="fa fa-phone"></i>879-3310</a></li>
                                <li>All day delivery on Saturday</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="footer-footer">
                    <div class="container">
                        <div class="row">
                            <div class="col-xs-12 col-sm-4 col-md-3">
                                <div class="copy">
                                    &copy; <?php echo date('Y'); ?> Toss &amp; Roll.
                                </div>
                            </div>
                            <div class="col-xs-12 col-sm-8 col-md-6 col-md-offset-3">
                                <nav class="footer-nav">
                                    <ul class="">
                                        <li><a href="#">Privacy</a></li>
                                        <li><a href="#">Terms &amp; Conditions</a></li>
                                        <li><a href="#">Media</a></li>
                                        <li><a href="#">Contact</a></li>
                                        <li><a href="#">Love</a></li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </section>
        <!-- /Page Layout -->



        <script src="//ajax.googleapis.com/ajax/libs/jquery/1.11.0/jquery.min.js"></script>
        <script>window.jQuery || document.write('<script src="assets/js/vendor/jquery-1.11.0.min.js"><\/script>')</script>
        <script src="assets/js/scripts.min.js"></script>
        <?php if($body_class == 'home'){ ?>
        <script src="assets/js/vendor/jquery.cycle2.min.js"></script>
        <?php } ?>
        <?php if($body_class == 'love'){ ?>
        <script src='assets/js/vendor/instafeed.min.js'></script>
        <script src="assets/js/vendor/underscore.js"></script>
        <script src="assets/js/vendor/masonry.js"></script>
        <script src="assets/js/vendor/imagesloaded.js"></script>
        <?php } ?>

        <!-- Google Analytics: change UA-XXXXX-X to be your site's ID. -->
        <script>
            (function(b,o,i,l,e,r){b.GoogleAnalyticsObject=l;b[l]||(b[l]=
            function(){(b[l].q=b[l].q||[]).push(arguments)});b[l].l=+new Date;
            e=o.createElement(i);r=o.getElementsByTagName(i)[0];
            e.src='//www.google-analytics.com/analytics.js';
            r.parentNode.insertBefore(e,r)}(window,document,'script','ga'));
            ga('create','UA-XXXXX-X');ga('send','pageview');
        </script>
    </body>
</html>