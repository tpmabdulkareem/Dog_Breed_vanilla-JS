	function myfunc() {
			document.getElementById("dog").innerHTML = "loading";
		};
  var dogName = new XMLHttpRequest();
		dogName.open("GET","https://dog.ceo/api/breeds/list" , true);
		dogName.send();
		dogName.onreadystatechange = function () {
			if (this.readyState == 4 && this.status == 200) {
				var dName = JSON.parse(this.responseText);
   console.log(dName.message);
				var i, list;
				for (i in dName.message) {
					list += "<li> <a onclick= \"sync('" + dName.message[i] + "')\" >" + dName.message[i] + "</a>" ;
					document.getElementById("dlist").innerHTML = list;
				}
			}
		}
	    var dogPic = new XMLHttpRequest();
			dogPic.onreadystatechange = function () {
				if (this.readyState == 4 && this.status == 200) {
				var dImg = JSON.parse(this.responseText);
				image1 = document.createElement('img');
				pic = dImg.message;
				image1.src = pic;
				document.getElementById("dimg").src = pic;
  console.log(dImg.message);
			}
		}
      var y;
      function sync(y){
        breed = y;
        api = "https://dog.ceo/api/breed/";
        end=  "/images/random";
			url = api + breed + end;
      document.getElementById("dog").innerHTML = y.toUpperCase();
        dogPic.open("GET",url , true);
			dogPic.send();
      }

		
		
