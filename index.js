const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send(`ey ihr könnt einfach mit dem vercel cli deployen. 
   [0. cd /path/to/your/repo]
    1. npm i -g vercel 
    2. vercel login 
    3. vercel --prod
    Is dann nur nich offiziell mit Github verknüpft aber so what 🤷  `);
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});

