import React, { useEffect, useState } from "react";

function LatestNews() {
  const [xmlData, setXmlData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://www.lanacion.com.ar/arc/outboundfeeds/rss/?outputType=xml"
        );
        const xmlText = await response.text();
        console.log(xmlText);

        // Una vez que tengas el texto del archivo XML, puedes parsearlo
        // utilizando la biblioteca xml2js o cualquier otra de tu elección.
        // A continuación, se muestra un ejemplo de cómo usar xml2js:

        const parser = new DOMParser();
        const xmlDoc = parser.parseFromString(xmlText, "text/xml");
        // Aquí puedes trabajar con xmlDoc como un documento XML

        // O, si prefieres usar xml2js
        const xml2js = require("xml2js");
        const parser2 = new xml2js.Parser();
        parser2.parseString(xmlText, (err, result) => {
          if (err) {
            console.error("Error al analizar el archivo XML", err);
          } else {
            // Aquí puedes acceder a los datos como objeto JavaScript
            console.log(result);
          }
        });

        setXmlData(xmlText);
      } catch (error) {
        console.error("Error al obtener el archivo XML", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="latestNews-container">
      {/* Aquí puedes mostrar los datos del archivo XML */}
      {xmlData && <pre>{xmlData}</pre>}
    </div>
  );
}

export default LatestNews;
