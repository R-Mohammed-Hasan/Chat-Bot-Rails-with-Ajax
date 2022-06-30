document.getElementById("inputChat").focus();
document.getElementsByTagName("body")[0].addEventListener("keypress", (e) => {
    e.key == "Enter" ? send() : "";
});

function send() {
    let input = document.getElementById("inputChat").value;
    if (input == "") {
        return;
    } else {
        let request = document.createElement("div");
        request.className = "request";
        request.innerText = input;
        document.getElementsByClassName("main")[0].appendChild(request);
        document.getElementById("inputChat").value = "";
        const options = {
            method: "POST",
            url: "https://waifu.p.rapidapi.com/path",
            params: {
                message: input,
                translate_from: "auto",
                translate_to: "auto",
                situation: "fun talk between two friends",
            },

            headers: {
                "content-type": "application/json",
                "X-RapidAPI-Key": "9c983ffa95msh7457a831e5d1342p196f2ejsn9449efb04136",
                "X-RapidAPI-Host": "waifu.p.rapidapi.com",
            },
            data: "{}",
        };

        axios
            .request(options)
            .then(function(response) {
                let responseContainer = document.createElement("div");
                responseContainer.className = "response";
                responseContainer.innerText = response.data;
                document
                    .getElementsByClassName("main")[0]
                    .appendChild(responseContainer);
                let scrollHeight =
                    document.getElementsByClassName("main")[0].scrollHeight;
                document.getElementsByClassName("main")[0].scrollTop =
                    scrollHeight + 100;
            })
            .catch(function(error) {
                console.error(error);
            });
        let scrollHeight = document.getElementsByClassName("main")[0].scrollHeight;
        document.getElementsByClassName("main")[0].scrollTop = scrollHeight + 100;
    }
}