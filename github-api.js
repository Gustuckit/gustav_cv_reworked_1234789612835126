
const main = $(".mainPortfolio")

$.ajax({
    url: "https://api.github.com/users/gustuckit/repos",
    method: "GET"
}).then(results => {
    console.log(results)

        for(let i = 0; i < results.length; i++) {
            if (results[i].stargazers_count != 0) {
                let article = "<article><header><h2>" + results[i].name + "</h1></header><p>" + results[i].description + "</p>" + "<div><button><a href=" + results[i].html_url + " target=_blank>GitHub Repository</a></button><button><a href=" + results[i].homepage + " target=_blank class=button>Deployed App</a></button></div></article>"

                main.append(article)
            }
        }
})