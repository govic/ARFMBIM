const path = require('path');
const express = require('express');

const PORT = process.env.PORT || 3000;
const config = require('./config');
if (config.credentials.client_id == null || config.credentials.client_secret == null) {
    console.error('Missing FORGE_CLIENT_ID or FORGE_CLIENT_SECRET env. variables.');
   // return;
}

let app = express();

const fs = require('fs');

const multer  = require('multer');
const { BucketsApi, ObjectsApi, PostBucketsPayload } = require('forge-apis');




let router = express.Router();
const pool = require('./public/js/DBConnection');

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json({ limit: '50mb' }));
app.use('/api/forge/oauth', require('./routes/oauth'));
app.use('/api/forge/oss', require('./routes/oss'));
app.use('/api/forge/modelderivative', require('./routes/modelderivative'));

app.use((err, req, res, next) => {
    console.error(err);
    res.status(err.statusCode).json(err);
});
router.use(async (req, res, next) => {
    const token = await getInternalToken();
    req.oauth_token = token;
    req.oauth_client = getClient();
    next();
});


////////////INSERTAR BIM DATA///////////////////////////////////////////////////
app.post('/inserBIMData',async (req, res, next) => {
  //guardo los datos de la tabla en datavista
  

  const { id, id_obj,familia_obj, nivel_obj,tipo_obj,nombre_elemento_obj,marca_obj,modelo_obj,manual_obj,fecha_instalacion_obj,fecha_ultima_instalacion_obj,periodicidad_mantencion_obj,fecha_proxima_mantencion_obj,hh_obj,modelo_seleccionado,costo_mantencion_obj,responsable_mantencion_obj } = req.body;

  const insertPlan = {id, id_obj,familia_obj, nivel_obj,tipo_obj,nombre_elemento_obj,marca_obj,modelo_obj,manual_obj,fecha_instalacion_obj,fecha_ultima_instalacion_obj,periodicidad_mantencion_obj,fecha_proxima_mantencion_obj,hh_obj,modelo_seleccionado,costo_mantencion_obj,responsable_mantencion_obj };
 

  await pool.query('INSERT INTO data_bim set ?', [insertPlan], async (error, results) => {
    if (error) {
      console.log(error);
    } else {
      res.send( "OK" );
        console.log("Inserción Exitosa")
    }
  });
});

//////////////////INSERTAR ROL USUARIO
app.post('/insertRol',async (req, res, next) => {
  //guardo los datos de la tabla en datavista
  const { id, nombre } = req.body;

  const insertPlan = {id, nombre };
 

  await pool.query('INSERT INTO  roles set ?', [insertPlan], async (error, results) => {
    if (error) {
      console.log(error);
    } else {
      res.send( "OK" );
        console.log("Inserción Exitosa")
    }
  });
});

////////////////SET DATA BIM/////////////////////////////////////////

app.post('/setDATABIM',async (req, res, next) => {
  //guardo los datos de la tabla en datavista


 
  const { id, id_obj,familia_obj, nivel_obj,tipo_obj,nombre_elemento_obj,marca_obj,modelo_obj,manual_obj,fecha_instalacion_obj,fecha_ultima_instalacion_obj,periodicidad_mantencion_obj,fecha_proxima_mantencion_obj,hh_obj,responsable_mantencion_obj,costo_mantencion_obj ,modelo_seleccionado} = req.body;
  let i = parseInt(''+id_obj,0);
  const updatePlan = {id, id_obj,familia_obj, nivel_obj,tipo_obj,nombre_elemento_obj,marca_obj,modelo_obj,manual_obj,fecha_instalacion_obj,fecha_ultima_instalacion_obj,periodicidad_mantencion_obj,fecha_proxima_mantencion_obj,hh_obj,responsable_mantencion_obj,costo_mantencion_obj,modelo_seleccionado };
 

 

  await pool.query('UPDATE data_bim set ? WHERE id_obj = ?', [updatePlan, i], async (error, results) => {
    if (error) {
      console.log(error);
    } else {
      console.log( "update exitoso" );
      
    }
  });
});



////////////INSERTAR TAREA OBJETO///////////////////////////////////////////////////
app.post('/inserRolUsuario',async (req, res, next) => {
  //guardo los datos de la tabla en datavista
  const { id, nombre,apellido, email,rol,telefono } = req.body;

  const insertPlan = {id, nombre,apellido, email,rol,telefono };
 

  await pool.query('INSERT INTO  usuariorol set ?', [insertPlan], async (error, results) => {
    if (error) {
      console.log(error);
    } else {
      res.send( "OK" );
        console.log("Inserción Exitosa")
    }
  });
});




////////////INSERTAR TAREA OBJETO///////////////////////////////////////////////////
app.post('/inserTareaObjeto',async (req, res, next) => {
  //guardo los datos de la tabla en datavista
  const { id, nombre,fecha, responsable,objetos,descripcion,recursos } = req.body;

  const insertPlan = {id, nombre,fecha, objetos,responsable,descripcion,recursos };
 

  await pool.query('INSERT INTO  tarea_objeto set ?', [insertPlan], async (error, results) => {
    if (error) {
      console.log(error);
    } else {
      res.send( "OK" );
        console.log("Inserción Exitosa")
    }
  });
});


////////////INSERTAR TAREA ROL///////////////////////////////////////////////////
app.post('/inserTareaRol',async (req, res, next) => {
  //guardo los datos de la tabla en datavista
  const { id, nombre,fecha, rol,descripcion,recursos } = req.body;

  const insertPlan = {id, nombre,fecha, rol,descripcion,recursos };
 

  await pool.query('INSERT INTO  tarea_rol set ?', [insertPlan], async (error, results) => {
    if (error) {
      console.log(error);
    } else {
      res.send( "OK" );
        console.log("Inserción Exitosa")
    }
  });
});


///////////GET DATA BIM/////////////////////////////////////////////////////

app.get('/getDataBIM',  async (req, res, next) => {
   
    
  const datavista = await pool.query('SELECT * FROM data_bim');

   res.send( datavista );
   console.log( datavista );


});

///////////GET DATA BIM ID//////////////////////

app.post('/getTareaData',  async (req, res, next) => {
   
  const { id } = req.body;
  const datavista = await pool.query('SELECT * FROM data_bim WHERE id_obj = ?', [id]);

   res.send( datavista );
   console.log( datavista );


});
///////////GET ROL/////////////////////////////////////////////////////



app.get('/listaRol',  async (req, res, next) => {
   
    
  const datavista = await pool.query('SELECT * FROM roles');

   res.send( datavista );
   console.log( datavista );


});



//////////GET USUARIO ROL////////////////////////////////////////////


app.get('/listaUsuarioRol',  async (req, res, next) => {
   
    
  const datavista = await pool.query('SELECT * FROM usuariorol');

   res.send( datavista );
   console.log( datavista );


});




/////////////GET TAREAS obj /////////////////////////////////

app.get('/listaTareaObj',  async (req, res, next) => {
   
    
  const datavista = await pool.query('SELECT * FROM tarea_objeto');

   res.send( datavista );
   console.log( datavista );


});
/////////////GET TAREAS ROL /////////////////////////////////

app.get('/listaTareaRol',  async (req, res, next) => {
   
    
  const datavista = await pool.query('SELECT * FROM tarea_rol');

   res.send( datavista );
   console.log( datavista );


});

/////////////////DELETE DATA BIM/////////////////////////////////////////////
app.post('/deleteDataBIM', async (req, res) => {
  const { id } = req.body;
  await pool.query('DELETE FROM data_bim WHERE id_obj = ?', [id]);
  res.redirect('/proyectos.html');

});


/////////////////DELETE  ROL////////////////////////////////
app.post('/deleteRol', async (req, res) => {
    const { id } = req.body;
    await pool.query('DELETE FROM roles WHERE id = ?', [id]);
    res.redirect('/roles.html');
 
});

/////////////////DELETE USUARIO ROL////////////////////////////////
app.post('/deleteUsuarioRol', async (req, res) => {
  const { id } = req.body;



    await pool.query('DELETE FROM usuariorol WHERE id = ?', [id]);
    res.redirect('/roles.html');
 
});

/////////////////DELETE TAREA ROL///////////////////////
app.post('/deleteTareaRol', async (req, res) => {
  const { id } = req.body;



    await pool.query('DELETE FROM tarea_rol WHERE id = ?', [id]);
    res.redirect('/tareas.html');
 
});
/////////////////////////////////////


/////////////////DELETE TAREA OBJETO///////////////////////
app.post('/deleteTareaObjeto', async (req, res) => {
  const { id } = req.body;



    await pool.query('DELETE FROM tarea_objeto WHERE id = ?', [id]);
    res.redirect('/tareas.html');
 
});
/////////////////////////////////////



//*******INSERTAR PROYECTO */
app.post('/insertProyecto',async (req, res, next) => {
    //guardo los datos de la tabla en datavista
    const { id_proyecto, nombre,anotaciones, descripcion } = req.body;
    
    const insertPlan = { id_proyecto,nombre,anotaciones,descripcion};
   
  
    await pool.query('INSERT INTO  proyectos set ?', [insertPlan], async (error, results) => {
      if (error) {
        console.log(error);
      } else {
        res.send( "OK" );
          console.log("Inserción Exitosa")
      }
    });
 });


/////////////////////////////////////////////////////////////

//*******INSERTAR PROYECTO */
app.post('/insertProyecto',async (req, res, next) => {
    //guardo los datos de la tabla en datavista
    const { id_proyecto, nombre,anotaciones, descripcion } = req.body;
    
    const insertPlan = { id_proyecto,nombre,anotaciones,descripcion};
   
  
    await pool.query('INSERT INTO  proyectos set ?', [insertPlan], async (error, results) => {
      if (error) {
        console.log(error);
      } else {
        res.send( "OK" );
          console.log("Inserción Exitosa")
      }
    });
 });
 ///*************************************** */
 /////////////GET PROYECTOS////////////////////////
 app.get('/listaProyecto',  async (req, res, next) => {
   
    
     const datavista = await pool.query('SELECT * FROM proyectos');
  
      res.send( datavista );
      console.log( datavista );
   
  
  });


///**************Eliminar***************************** */
app.post('/deleteProyecto', async (req, res) => {
    const { id_proyecto } = req.body;



      await pool.query('DELETE FROM proyectos WHERE id_proyecto = ?', [id_proyecto]);
      res.redirect('/selector.html');
   
  });
 //************************************* */
///// GENERA LISTA DE TAREAS

app.get('/listaTareasCalendar',  async (req, res, next) => {
   
  var respuesta =[];
  const datavista = await pool.query('SELECT * FROM tarea_rol');


   res.send( datavista );
   console.log( datavista );


});
 ///////////////////////
app.listen(PORT, () => { console.log(`Server listening on port ${PORT}`); });
// To facilitate launching web browser
console.log('http://localhost:'+ PORT)
