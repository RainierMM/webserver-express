const http = require("http");

http
  .createServer((req, res) => {
    res.writeHead(299, { "Content-Type": "application/json" });

    let salida = {
      nombre: "rainier",
      edad: 24,
      url: req.url,
    };
    res.write(JSON.stringify(salida));
    // res.write("Hola Mundo");
    res.end();
  })
  .listen(8080);

console.log("Escuchando el puerto 8080");
