const { app } = require('./core');
const { db, update } = require('./db');

app.listen(3000, () => {
  console.log('API for smart home 1.1 up n running.');
});

/* CODE YOUR API HERE */

//request för lampor
// url request exempel: /lights/2/on
app.get('/lights/:id/:status', (req, res) => {
  const isActive = req.params.status === 'on' ? true : false;
  // tar siffran som skrivs in i url och lägger till LIG så det korrekta id:t kan hittas
  const urlId = req.params.id;
  const id = 'LIG' + urlId;

  db.get('devices')
    .find({ id: id })
    .assign({ on: isActive }) // sätt på/stäng av
    .value();

  update(); // uppdatera frontend

  //använd url siffran för att visa vilken lampa som har tänds/släckts
  if (isActive) {
    res.send(`Light ${urlId} is on `);
  } else {
    res.send(`Light ${urlId} is off `);
  }
});

// request för AC
// url request exempel: http://localhost:3000/ac/on
app.get('/ac/:status', (req, res) => {
  const isActive = req.params.status === 'on' ? true : false;

  db.get('devices')
    .find({ id: 'AC1' })
    .assign({ on: isActive }) //
    .value();

  update();

  if (isActive) {
    res.send(`AC is on `);
  } else {
    res.send(`AC is off `);
  }
});

// request för Blind
// url request exempel: http://localhost:3000/blind/on
app.get('/blind/:status', (req, res) => {
  const isActive = req.params.status === 'on' ? true : false;

  db.get('devices')
    .find({ id: 'BLI1' })
    .assign({ on: isActive }) //
    .value();

  update();

  if (isActive) {
    res.send(`Blind is down `);
  } else {
    res.send(`Blind is up `);
  }
});

// request för Camera
// url request exempel: http://localhost:3000/camera/on
app.get('/camera/:status', (req, res) => {
  const isActive = req.params.status === 'on' ? true : false;

  db.get('devices')
    .find({ id: 'CAM1' })
    .assign({ on: isActive }) //
    .value();

  update();

  if (isActive) {
    res.send(`Camrea is on `);
  } else {
    res.send(`Camera is off `);
  }
});

/* app.get('/door/:status', (req, res) => {
  const isActive = req.params.status === 'locked' ? true : false;

  db.get('devices')
    .find({ id: 'LOC1' })
    .assign({ on: isActive }) //
    .value();

  update();

  if (isActive) {
    res.send(`door is unlocked? `);
  } else {
    res.send(`door is locked? `);
  }
}); */

// request för vacuum
// url request exempel: http://localhost:3000/vacuum/on
app.get('/vacuum/:status', (req, res) => {
  const isActive = req.params.status === 'on' ? true : false;

  db.get('devices')
    .find({ id: 'VAC1' })
    .assign({ on: isActive }) //
    .value();

  update();

  if (isActive) {
    res.send(`Vacuum is on `);
  } else {
    res.send(`Vacuum is off `);
  }
});

// request för speaker
// url request exempel: http://localhost:3000/speaker/on
app.get('/speaker/:status', (req, res) => {
  const isActive = req.params.status === 'on' ? true : false;

  db.get('devices')
    .find({ id: 'SPE1' })
    .assign({ on: isActive }) //
    .value();

  update();

  if (isActive) {
    res.send(`Speaker is on `);
  } else {
    res.send(`Speaker is off `);
  }
});
