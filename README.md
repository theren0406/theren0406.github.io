<html>
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <title></title>
    <meta charset="utf-8" />
    <style>
        body {
            font-family:'Microsoft JhengHei';
            font-size:20px;
        }
        p {
            color: lightcoral;
            margin-bottom:40px;
        }
        span {
            color: paleturquoise;
        }
        button {
            font-size:16px;
            height: 30px;
            background-color:lightcoral;
            color:white;
            border-width: 0 2px 2px 0;
        }
        button:focus {
            outline-width:0;
        }
    </style>
    <script src="https://code.jquery.com/jquery-1.10.2.js"></script>
</head>
<body>
    <p>Has an attached custom event.</p>
    <button>Trigger custom event</button>
    <span style="display:none;"></span>

    <script>
        $("p").on("myCustomEvent", function (event, myName) {
            $(this).text(myName + ", hi there!");
            $("span")
              .stop()
              .css("opacity", 1)
              .text("myName = " + myName)
              .fadeIn(30)
              .fadeOut(1000);
        });
        $("button").click(function () {
            $("p").trigger("myCustomEvent", "John");
        });
    </script>

</body>
</html>
