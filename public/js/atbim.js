

function consulta_filtro(filtros){
    return new Promise((resolve, reject) => {
        
        viewer.model.getBulkProperties([], filtros, (result) => {
            let test = result.filter(x => x.properties[0].displayValue !== '');
            let data = {};
            test.forEach(element => {
                let key = element.properties[0].displayValue;

                if (key in data) {
                    data[key].cantidad++;
                    data[key].dbIds.push(element.dbId);
                } else {
                    let a = {
                        cantidad: 1,
                        dbIds: []
                    }
                    a.dbIds.push(element.dbId);
                    data[key] = a;
                }
            });
            resolve(data);
        }, (error) => {
            reject(error);
        });
    });
}