<head>

<meta name="viewport" content="width=device-width" /> <title>OnlineAndOffline</title>

<style>

#box{

background:Lightyellow;

width:400px;

height: 200px;

padding: 15px;

font-size:48px;

font-weight:bold;

border: 5px solid #eee;

</style>

</head>

<body>

<div id="box">

</div>


<script>

var target = document.querySelector("#box");

window.addEventListener('offline', function(){ target.innerHTML ="your Offline"; target.style.backgroundColor ="pink";

});

window.addEventListener('online', function(){ target.innerHTML="your Online"; target.style.backgroundColor ="lightgreen";

});

if(Navigator.onLine) {

console.log("Online");

Jelse

console.log("Offline");

}

</script>
