
document.addEventListener("DOMContentLoaded", function(e) {
	var a = document.getElementById("mode").value;
	if(a == "" || a == "satu"){
		document.getElementById("mode").value = 'satu';
		document.getElementById("judul").innerHTML = 'Masukkan suhu derajat Celcius (&#8451;) ke kotak di bawah lalu klik tombol Konversi untuk mendapatkan hasil konversi ke dalam bentuk Fahrenheit (&#8457;)';
		document.getElementById("labelA").innerHTML = 'Celcius (&#8451;):';
		document.getElementById("labelB").innerHTML = 'Fahrenheit (&#8457;):';
		document.getElementById("rubah").innerHTML = 'Fahrenheit ke Celcius';
		document.getElementById("keterangan").innerHTML 
		= '<h4>Cara Rubah Celcius ke Fahrenheit</h4>S(&#8457;) = (S&#8451; x 9/5) + 32<br/>atau<br/>S(&#8457;) = (S&#8451; x 1.8) + 32';
	}
});
function konversi() {
	var mode = document.getElementById("mode").value;
	let valA = document.getElementById("a").value;
	let hasil = 0;
	if(mode == "satu"){
		if(valA == ""){
		}else{
			hasil = (valA * (9/5)) + 32;
			document.getElementById("b").value = hasil;
			document.getElementById("hasil").innerHTML = valA+'&#8451; * (9/5) + 32 = '+hasil+'&#8457;';
		}
	}else{
		if(valA == ""){
		}else{
			hasil = (valA - 32) * 5/9;
			document.getElementById("b").value = hasil;
			document.getElementById("hasil").innerHTML = '('+valA+'&#8457;-32) * 5/9 = '+hasil+'&#8451;';
		}
	}
}
function reset() {
	document.getElementById("a").value = '';
	document.getElementById("b").value = '';
	document.getElementById("hasil").innerHTML = '';
}
function reverse() {
	var mode = document.getElementById("mode").value;
	let a = document.getElementById("a").value;
	let b = document.getElementById("b").value;
	if(a == "" || b == ""){
		alert('nilai dan hasil konversi suhu tidak boleh kosong!');
	}else{
		if(mode == "satu"){
			document.getElementById("mode").value = 'dua';
			let a = document.getElementById("a").value;
			let b = document.getElementById("b").value;
			let hasil = 0;
			document.getElementById("judul").innerHTML = 'Masukkan suhu derajat Fahrenheit (&#8457;) ke kotak di bawah lalu klik tombol Konversi untuk mendapatkan hasil konversi ke dalam bentuk Celcius (&#8451;)';
			document.getElementById("labelA").innerHTML = 'Fahrenheit (&#8457;):';
			document.getElementById("labelB").innerHTML = 'Celcius (&#8451;):';
			document.getElementById("a").value = b;
			document.getElementById("b").value = a;
			if(a == ""){

			}else{
				hasil = (b - 32) * 5/9;
				document.getElementById("b").value = hasil;
				document.getElementById("hasil").innerHTML = '('+b+'&#8457;-32) * 5/9 = '+hasil+'&#8451;';
				document.getElementById("rubah").innerHTML = 'Celcius ke Fahrenheit';
				document.getElementById("keterangan").innerHTML 
				= '<h4>Cara Rubah Fahrenheit ke Celcius</h4>S(&#8451;) = (S&#8457; - 32) x 5/9<br/>atau<br/>S(&#8451;) = (S&#8457; - 32) x 0.556';
			}
		}else{
			document.getElementById("mode").value = 'satu';
			let a = document.getElementById("a").value;
			let b = document.getElementById("b").value;
			let hasil = 0;
			document.getElementById("judul").innerHTML = 'Masukkan suhu derajat Celcius (&#8451;) ke kotak di bawah lalu klik tombol Konversi untuk mendapatkan hasil konversi ke dalam bentuk Fahrenheit (&#8457;)';
			document.getElementById("labelA").innerHTML = 'Celcius (&#8451;):';
			document.getElementById("labelB").innerHTML = 'Fahrenheit (&#8457;):';
			document.getElementById("a").value = b;
			document.getElementById("b").value = a;
			if(a == ""){

			}else{
				hasil = (b * (9/5)) + 32;
				document.getElementById("b").value = hasil;
				document.getElementById("hasil").innerHTML = b+'&#8451; * (9/5) + 32 = '+hasil+'&#8457;';
				document.getElementById("rubah").innerHTML = 'Fahrenheit ke Celcius';
				document.getElementById("keterangan").innerHTML 
				= '<h4>Cara Rubah Celcius ke Fahrenheit</h4>S(&#8457;) = (S&#8451; x 9/5) + 32<br/>atau<br/>S(&#8457;) = (S&#8451; x 1.8) + 32';
			}
		}
	}
}
function rubah() {
	var a = document.getElementById("mode").value;
	if(a == "satu"){
		reverse();
		document.getElementById("mode").value = 'dua';
		document.getElementById("rubah").innerHTML = 'Celcius ke Fahrenheit';
		document.getElementById("keterangan").innerHTML 
		= '<h4>Cara Rubah Fahrenheit ke Celcius</h4>S(&#8451;) = (S&#8457; - 32) x 5/9<br/>atau<br/>S(&#8451;) = (S&#8457; - 32) x 0.556';
	}else{
		reverse();
		document.getElementById("mode").value = 'satu';
		document.getElementById("rubah").innerHTML = 'Fahrenheit ke Celcius';
		document.getElementById("keterangan").innerHTML 
		= '<h4>Cara Rubah Celcius ke Fahrenheit</h4>S(&#8457;) = (S&#8451; x 9/5) + 32<br/>atau<br/>S(&#8457;) = (S&#8451; x 1.8) + 32';
	}
	document.getElementById("a").value = '';
	document.getElementById("b").value = '';
	document.getElementById("hasil").innerHTML = '';
}