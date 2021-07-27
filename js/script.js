var n=false
		var e=false
		var nu=false
		var m=false
		function checkname(){
			var name=$('#name').val();
			var valid;
			var pattern=/^[a-zA-Z-()]+(\s+[-a-zA-Z-()]+)*$/;
			if (name=="") {
				valid="required field";
				n=false;
			}
			else if(name.match(pattern)&&name.length<=2){
				valid="please enter atleast 3 letter";
			}
			else if(name.match(pattern)){
				valid="";
				n=true;
			}
			else if(name.endsWith(" ")){
				valid="do not enter last character as space"
				n=false
			}
			else{
				n=false;
				valid="characters only";
			}
			$('#check1').html(valid);
		}
		function checkemail(){
			var mail=$('#email').val();
			var valid
			var pattern=/^[^]+@[^]+\.[a-z]{2,3}$/
			if (mail=="") {
				valid="required field"
				e=false
			}
			else if (mail.match(pattern)) {
				valid=""
				e=true
			}
			else{
				e=false
				valid="please enter valid email"
			}
			$('#check2').html(valid);
		}
		function checknum(){
			var num=$('#number').val();
			var valid
			var pattern=/^[0-9]*$/
			if(num==""){
				valid="required field"
				nu=false
			}
			else if (num.match(pattern) && num.length<10) {
				valid="please enter 10 digit number"
				nu=true
			}
			else if (num.match(pattern)) {
				valid=""
				nu=true
			}
			else{
				valid="please enter numbers only"
				nu=false
			}
			$('#check3').html(valid);
		}
		function checkmess(){
			var msg=$('#comments').val();
			var valid
			if(msg==""){
				valid="required field"
				m=false
			}
			else{
				valid=""
				m=true
			}
			$('#check4').html(valid);
		}
		$('#name').keyup(function(){
			checkname();
		});
		$('#email').keyup(function(){
			checkemail();
		});
		$('#number').keyup(function(){
			checknum();
		})
		$('#comments').keyup(function(){
			checkmess();
		})