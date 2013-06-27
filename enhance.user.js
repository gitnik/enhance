$(document).ready(function() {

	if(!document.getElementById("hdtb_more"))
		return;

	var moreOptions = document.getElementById("hdtb_more_mn").innerHTML;

	var node = document.getElementById("hdtb_more");
	node.parentNode.removeChild(node);

	node = document.getElementById("hdtb_more_mn");
	node.parentNode.removeChild(node);

	$(moreOptions).insertBefore("#hdtb_tls");

	//$("#hdtb_tls").click();
});
