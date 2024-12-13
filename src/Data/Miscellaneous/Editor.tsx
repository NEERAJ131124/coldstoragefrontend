// Ace editor
export const javascriptData = `   
                /* Sample JavaScript edit source */
                // Define a module
                var app = angular.module('app', ['ui.bootstrap']);
                // Define a conroller.
                app.controller('GrokController', ['$scope', '$filter',
                    function($scope, $filter) {
                        $scope.today = function() {
                        $scope.dt = new Date();
                        };
                        $scope.today();
                        $scope.isOpened = false;
                        $scope.open = function($event) {
                        $event.preventDefault();
                        $event.stopPropagation();
                        $scope.isOpened = true;
                    };
                }]);
                /* End of sample edit source */`;

export const htmlData = ` 
        <!--Page header start-->
        <div class="page-header">
            <div class="row">
                <div class="col-xl-6">
                    <h3>Ace Text editor</h3>
                    <small>Yuri Admin panel</small>
                </div>
                <div class="col-xl-6">
                <ol class="breadcrumb pull-right">
                    <li class="breadcrumb-item"><a href="#JavaScript"><i class="fa fa-home"></i></a></li>
                    <li class="breadcrumb-item">Editor </li>
                    <li class="breadcrumb-item active">Ace Text editor</li>
                </ol>
                </div>
            </div>
        </div>
        <!--Page header end-->`;

export const CssData = ` 
                .text-layer
                {
                font: 12px Monaco, "Courier New", monospace;
                font-size: 3vmin;
                cursor: text;
                }
                .blinker {
                animation: blink 1s linear infinite alternate;
                }
                @keyframes blink {
                0%, 40% {
                opacity: 1
                }
                40.5%, 100% {
                opacity: 1
                }
                }
                @document url(http://c9.io/), url-prefix(http://ace.c9.io/build/),
                domain(c9.io), regexp("https:.*") /**/
                {
                /**/
                img[title]:before
                {
                content: attr(title) "/AImage/retrieved from" attr(src); /**/
                white-space: pre;
                display: block;
                background: url(asdasd); "err
                }
                }
                @viewport {
                min-zoom: 1;
                max-zoom: 200%;
                user-zoom: fixed;
                } `;

export const phpData = `
                      <?php
                      function nfact($n) {
                      if ($n == 0) {
                      return 1;
                      }
                      else {
                      return $n * nfact($n - 1);
                      }
                      }
                      echo "Please enter a whole number ... ";
                      $num = trim(fgets(STDIN));
                      // ===== PROCESS - Determing the factorial of the input number =====
                      $output = "Factorial " . $num . " = " . nfact($num) . "";
                      echo $output;
                      ?>;`

//Quill editor
export const standardQuillText = `<div class="quill-paragraph" id="editor7">
<p>There was a road along with that open place. When the tiger saw any man passing by he said to him, “Brother, here is a good bangle. I wish to give it to you. Don’t fear. lam old and infirm now. I now pray to God five times a day and doing it will be useful to you. Don’t fear, come to me and take other religious acts. This bangle is useless to me. It will be useful to you. Don’t fear, come to me and take this.”</p>
</div>`

export const snowThemeContent = `<div class="quill-paragraph" id="editor5">
<p>As a <strong>web designer</strong>, your role is crucial in creating visually appealing and user-friendly websites. You are responsible for designing the layout, selecting color schemes, and creating an intuitive user interface. You work closely with clients to understand their requirements and translate them into stunning website designs. Your expertise lies in using HTML, CSS, and JavaScript to bring these designs to life. You pay attention to detail, ensuring that every element is pixel-perfect and responsive across different devices.</p>
<ol>
  <li>Artist </li>
  <li>Developer  </li>
  <li>Musician</li>
</ol>
<ul> 
  <li>Web-designer </li>
  <li>UI-UX designer </li>
  <li>Software engineer</li>
</ul>
</div>`

export const bubbleThemeContent = `<div class="quill-paragraph" id="editor6">
<p>Being the best designer requires a combination of exceptional creativity, technical expertise, and a deep understanding of user experience. I pride myself on my ability to think outside the box and create visually stunning designs that captivate and inspire. With a keen eye for detail, I carefully craft every element of a design, ensuring that it is not only aesthetically pleasing but also functional and user-friendly. I stay up to date with the latest design trends and constantly push myself to explore new techniques and technologies. My passion for design goes beyond aesthetics; I strive to create meaningful experiences that evoke emotion and leave a lasting impression. Collaboration is key, and I value open communication with clients to truly understand their vision and bring it to life. As the best designer, I am committed to delivering excellence and surpassing expectations on every project.</p>
<ul> 
  <li>Navigation</li>
  <li>Web Friendly</li>
  <li>Turnaround Time </li>
  <li>Conversion</li>
</ul>
</div>`