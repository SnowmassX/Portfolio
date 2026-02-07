const searchBox = document.getElementById("searchBar");

searchBox.addEventListener("keypress", function (e) {
    if (e.key === "Enter") {

        let keyword = searchBox.value.trim();
        if (!keyword) return;

        // remove previous highlights
        document.body.innerHTML = document.body.innerHTML.replace(/<mark>|<\/mark>/g, "");

        // highlight matches
        let regex = new RegExp(`(${keyword})`, "gi");
        document.body.innerHTML = document.body.innerHTML.replace(regex, "<mark>$1</mark>");
    }
});
