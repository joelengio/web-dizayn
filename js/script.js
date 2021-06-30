const finn = document.getElementById("finn");
const obstacle = document.getElementById("obstacle")

function jump() {
	if (finn.classList != "jump") {
		finn.classList.add("jump");

		setTimeout(function() {
			finn.classList.remove("jump");
		}, 300);
	}
}

document.addEventListener("keydown", function(event){
	jump();
});

