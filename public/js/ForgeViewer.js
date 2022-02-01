var viewer;
//var datos;
var filtro1 = false;
var filtro2 = false;
var filtro3 = false;

function handleObjectLoaded(){
  

}

function getFiltros(){
   
// ["AEC Partición HA","AEC Piso","AEC Secuencia hormigonado"];

  var filtro1 = $('#checkbox-2').is(':checked');// AEC Piso'
  var filtro2 = $('#checkbox-3').is(':checked');// 'AEC Secuencia hormigonado'
  var filtro3 = $('#checkbox-4').is(':checked'); //  'AEC Partición HA'
  if(filtro2 == true  && filtro1 == false && filtro3 == false){
    
      let filtrado = ['AEC Piso'];
      let filtro_boton = "['AEC Piso']";
      consulta_filtro(filtrado).then((data) => {
                let keys = Object.keys(data);
                let datos = keys;
                console.log("Filtro 2:"+ datos);

                var i;
                var botones= "Sin Resultado";
                for (i = 0; i < datos.length; i++) {
                    var botones = "";
                    var botones =botones+ "<a class=\"dropdown-item\" onclick=\"selecciona("+"\'"+datos[i]+"\'"+ ","+filtro_boton+" );\">"+datos[i]+"</a>";
                
                }
                document.getElementById("selectores").innerHTML = botones;
           });
  }

  if(filtro1 == true && filtro2 == false && filtro3 == false){
    
      let filtrado = ['AEC Partición HA'];
      let filtro_boton = "['AEC Partición HA']";
      consulta_filtro(filtrado).then((data) => {
                let keys = Object.keys(data);
               let datos = keys;
                console.log("Filtro 1:"+ datos);

                var i;
                var botones= "";
                for (i = 0; i < datos.length; i++) {
                    var botones =botones+ "<a class=\"dropdown-item\" onclick=\"selecciona("+"\'"+datos[i]+"\'"+ ","+filtro_boton+" );\">"+datos[i]+"</a>";
                
                }
                document.getElementById("selectores").innerHTML = botones;
           });
  }
  
  if(filtro3 == true  && filtro2 == false && filtro1 == false){
    
      let filtrado = ["AEC Secuencia hormigonado"];
      let filtro_boton = "['AEC Secuencia hormigonado']";
      consulta_filtro(filtrado).then((data) => {
                let keys = Object.keys(data);
                 let datos = keys;
                console.log("Filtro 3:"+ datos);

                var i;
                var botones= "";
                for (i = 0; i < datos.length; i++) {
                    var botones =botones+ "<a class=\"dropdown-item\" onclick=\"selecciona("+"\'"+datos[i]+"\'"+ ","+filtro_boton+" );\">"+datos[i]+"</a>";
                
                }
                document.getElementById("selectores").innerHTML = botones;
           });
  }


  if(filtro1 == true && filtro2 == true && filtro3 == false  ){
    
      let filtrado = ["AEC Partición HA","AEC Piso"];
      let filtro_boton = "['AEC Partición HA','AEC Piso' ]";
      consulta_filtro(filtrado).then((data) => {
                let keys = Object.keys(data);
                let datos = keys;
                console.log("Filtro 1 y 2:"+ datos);

                var i;
                var botones= "";
                for (i = 0; i < datos.length; i++) {
                    var botones =botones+ "<a class=\"dropdown-item\" onclick=\"selecciona("+"\'"+datos[i]+"\'"+ ","+filtro_boton+" );\">"+datos[i]+"</a>";
                
                }
                document.getElementById("selectores").innerHTML = botones;
           });
  }
  if(filtro1 == true && filtro3 == true  && filtro2 == false ){
    
      let filtrado = ["AEC Partición HA","AEC Secuencia hormigonado"];
      let filtro_boton = "['AEC Partición HA','AEC Secuencia hormigonado' ]";
      consulta_filtro(filtrado).then((data) => {
                let keys = Object.keys(data);
                let datos = keys;
                console.log("Filtro 1 y 3:"+ datos);

                var i;
                var botones= "";
                for (i = 0; i < datos.length; i++) {
                    var botones =botones+ "<a class=\"dropdown-item\" onclick=\"selecciona("+"\'"+datos[i]+"\'"+ ","+filtro_boton+" );\">"+datos[i]+"</a>";
                
                }
                document.getElementById("selectores").innerHTML = botones;
           });
  }
  if(filtro2 == true && filtro3 == true   && filtro1 == false ){
    
      let filtrado = ["AEC Piso","AEC Secuencia hormigonado"];
      let filtro_boton = "['AEC Piso','AEC Secuencia hormigonado' ]";
      consulta_filtro(filtrado).then((data) => {
                let keys = Object.keys(data);
                 let datos = keys;
                console.log("Filtro 2 y 3:"+ datos);

                var i;
                var botones= "";
                for (i = 0; i < datos.length; i++) {
                    var botones =botones+ "<a class=\"dropdown-item\" onclick=\"selecciona("+"\'"+datos[i]+"\'"+ ","+filtro_boton+" );\">"+datos[i]+"</a>";
                
                }
                document.getElementById("selectores").innerHTML = botones;
           });
  }
  if(filtro1 == true &&  filtro2 == true &&filtro3 == true ){
    
      let filtrado = ["AEC Partición HA","AEC Piso","AEC Secuencia hormigonado"];
      let filtro_boton = "['AEC Partición HA','AEC Piso' ,'AEC Secuencia hormigonado']";
      consulta_filtro(filtrado).then((data) => {
                let keys = Object.keys(data);
                let datos = keys;
                console.log("Filtro 1 ,2 y 3:"+ datos);

                var i;
                var botones= "";
                for (i = 0; i < datos.length; i++) {
                    var botones =botones+ "<a class=\"dropdown-item\" onclick=\"selecciona("+"\'"+datos[i]+"\'"+ ","+filtro_boton+" );\">"+datos[i]+"</a>";
                
                }
                document.getElementById("selectores").innerHTML = botones;
           });
  }

}
function launchViewer(urn) {
  var options = {
    env: 'AutodeskProduction',
    getAccessToken: getForgeToken
  };

  Autodesk.Viewing.Initializer(options, () => {
    viewer = new Autodesk.Viewing.GuiViewer3D(document.getElementById('forgeViewer'), { extensions: ['Autodesk.DocumentBrowser', 'HandleSelectionExtension'] });
    viewer.start();
    var documentId = 'urn:' + urn;
    var list_urn = [

      { urn: "dXJuOmFkc2sub2JqZWN0czpvcy5vYmplY3Q6cHRmZ2EzcXNua283aDhhMGI3Y2VneWljdmVqY2t4ejYtdGVzdC9OT1ZPVEVMLUVMRUMucnZ0" , xform: {x:0,y:0,z:0}},
      { urn: "dXJuOmFkc2sub2JqZWN0czpvcy5vYmplY3Q6cHRmZ2EzcXNua283aDhhMGI3Y2VneWljdmVqY2t4ejYtdGVzdC9OT1ZPVEVMLUFSUS5ydnQ=" , xform: {x:0,y:0,z:0}},
      { urn: "dXJuOmFkc2sub2JqZWN0czpvcy5vYmplY3Q6cHRmZ2EzcXNua283aDhhMGI3Y2VneWljdmVqY2t4ejYtdGVzdC9OT1ZPVEVMLUFMQy5ydnQ=", xform: {x:0,y:0,z:0} },
     ];
    list_urn.map((m)=>{
      Autodesk.Viewing.Document.load(`urn:${m.urn}`, (doc) => {
          var viewables = doc.getRoot().getDefaultGeometry();
          viewer.loadDocumentNode(doc, viewables,{
              preserveView: true,
              keepCurrentModels: true,
              placementTransform: (new THREE.Matrix4()).setPosition(m.xform),
              keepCurrentModels: true,
              globalOffset: {x:0,y:0,z:0}
          })
          
      });

  })
   
  //  Autodesk.Viewing.Document.load(documentId, onDocumentLoadSuccess, onDocumentLoadFailure);
    viewer.addEventListener(Autodesk.Viewing.GEOMETRY_LOADED_EVENT, (event) => { 
         
        //   document.getElementById("selectores").innerHTML = "<a class=\"dropdown-item\" >Seleccione Filtro</a>";
  
  
          });


 viewer.addEventListener(Autodesk.Viewing.SELECTION_CHANGED_EVENT,(event)=>{
     let dbId = viewer.getSelection();
      

       document.getElementById("propiedades_id").innerHTML = "";
      viewer.getProperties(dbId[0], (result) => { 

          console.log("nombre"+result.name); 
         
          document.getElementById("propiedades_id").innerHTML += "<li><b> Nombre</b> :"+result.name+"</li>";
          for(i=0 ;i< 15;i++){
            document.getElementById("propiedades_id").innerHTML += "<li><b>"+result.properties[i].displayName+" :</b>"+result.properties[i].displayValue+"</li>";
          }
          
          console.log("VALORES");
          console.log(result);
          
      }) 
      
     
    

    
       

       viewer.model.getBulkProperties(dbId, ['Name','Level','Area','Volume','Thickness'], (result) => {
          let test = result.filter(x => x.properties[0].displayValue !== '');
          let data = {};
          test.forEach(elements => {
                let name= elements.properties[0].displayValue;
                let level= elements.properties[1].displayValue;
                let struct= elements.properties[2].displayValue;
                let area= elements.properties[3].displayValue;
                let vol= elements.properties[4].displayValue;
            
           
            });
            
        }, (error) => {
            reject(error);
        });
    });
     
    
  });

}

/*

function generaBotones(){
    console.log("GENERA BOTONES LLAMADO");
     getData().then((data) => {

           let keys = Object.keys(data);
           datos = keys;
            console.log("DATOS DATA:"+ datos);

            var i;
            botones = "";
          for (i = 0; i < datos.length; i++) {
              if(datos[i] != "undefined"){
                var botones =botones+ "<a class=\"dropdown-item\" onclick=\"selecciona("+"\'"+datos[i]+"\'"+");\">ddd"+datos[i]+"55</a>";
              }
              
          
          }
          document.getElementById("selectores").innerHTML = botones;
           });
} 


*/


function selecciona(clave,filt){
    alert(filt);
    consulta_filtro(filt).then((data) => {
           let keys = Object.keys(data);
           
           let dbIds = data[clave].dbIds;                        
              viewer.isolate(dbIds);
              viewer.fitToView(dbIds, viewer.model);
    });
    

}
/*
function selecciona2(clave){

  getData().then((data) => {
         let keys = Object.keys(data);
         
         let dbIds = data[clave].dbIds;                        
            viewer.isolate(dbIds);
            viewer.fitToView(dbIds, viewer.model);
  });
  

}*/

function onDocumentLoadSuccess(doc) {
  var viewables = doc.getRoot().getDefaultGeometry();
  viewer.loadDocumentNode(doc, viewables).then(i => {
    // documented loaded, any action?
    viewer.addEventListener(Autodesk.Viewing.SELECTION_CHANGED_EVENT, (e) => {
      if (e.dbIdArray.length === 0) return;
      viewer.model.getBulkProperties(e.dbIdArray, ['4D_Task_ID'], (props) => {
        props.forEach((ele) => {
          if (ele.properties.lenght === 0) return;
          var taskId = ele.properties[0].displayValue;
          charts["Gantt"]._gantt.chart.get_bar(taskId).show_popup();
        })
      })
    })
  });
}

function onDocumentLoadFailure(viewerErrorCode) {
  console.error('onDocumentLoadFailure() - errorCode:' + viewerErrorCode);
}

function getForgeToken(callback) {
  fetch('/api/forge/oauth/token').then(res => {
    res.json().then(data => {
      callback(data.access_token, data.expires_in);
    });
  });
}