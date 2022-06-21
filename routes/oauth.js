const express = require('express');

const { getPublicToken } = require('./common/oauth');

let router = express.Router();


// GET /api/forge/oauth/token - generates a public access token (required by the Forge viewer).
router.get('/token', async (req, res, next) => {
    try {
        const token = await getPublicToken();
        res.json({
            access_token: token.access_token,
            expires_in: token.expires_in    
        });
    } catch(err) {
        next(err);
    }
});

/*const ExcelJS = require('exceljs');

const wb = new ExcelJS.Workbook();

const fileName = 'routes/arbimfm.xlsx';

wb.xlsx.readFile(fileName).then(() => {
    
    const ws = wb.getWorksheet('Tabla ARQ');

    const c1 = ws.getColumn(1);
    const c2 = ws.getColumn(2);
    const c3 = ws.getColumn(3);
    const c4 = ws.getColumn(4);
    const c5 = ws.getColumn(5);
    const c6 = ws.getColumn(6);
    const c7 = ws.getColumn(7);
    const c8 = ws.getColumn(8);
    const c9 = ws.getColumn(9);
    const c10 = ws.getColumn(10);
    const c11 = ws.getColumn(11);
    const c12 = ws.getColumn(12);
    const c13 = ws.getColumn(13);
    const c14 = ws.getColumn(14);
    const c15 = ws.getColumn(15);
    const c16 = ws.getColumn(16);
    const c17 = ws.getColumn(17);
    const c18 = ws.getColumn(18);
    const c19 = ws.getColumn(19);
    const c20 = ws.getColumn(20);
    const c21 = ws.getColumn(21);
    const c22 = ws.getColumn(22);
    const c23 = ws.getColumn(23);
    const c24 = ws.getColumn(24);
    const c25 = ws.getColumn(25);
    const c26 = ws.getColumn(26);
    const c27 = ws.getColumn(27);
    const c28 = ws.getColumn(28);
    const c29 = ws.getColumn(29);
    const c30 = ws.getColumn(30);
 
    c1.eachCell(c => {

        console.log(c.value);
    });
    
    c2.eachCell(c => {

        console.log(c.value);
    });
    c3.eachCell(c => {

        console.log(c.value);
    });
    c4.eachCell(c => {

        console.log(c.value);
    });
    c5.eachCell(c => {

        console.log(c.value);
    });
    c6.eachCell(c => {

        console.log(c.value);
    });
    c7.eachCell(c => {

        console.log(c.value);
    });
    c8.eachCell(c => {

        console.log(c.value);
    });
    c9.eachCell(c => {

        console.log(c.value);
    });
    c10.eachCell(c => {

        console.log(c.value);
    });
    c11.eachCell(c => {

        console.log(c.value);
    });
    c12.eachCell(c => {

        console.log(c.value);
    });
    c13.eachCell(c => {

        console.log(c.value);
    });
    c14.eachCell(c => {

        console.log(c.value);
    });
    c15.eachCell(c => {

        console.log(c.value);
    });
    c16.eachCell(c => {

        console.log(c.value);
    });
    c17.eachCell(c => {

        console.log(c.value);
    });
    c18.eachCell(c => {

        console.log(c.value);
    });
    c19.eachCell(c => {

        console.log(c.value);
    });
    c20.eachCell(c => {

        console.log(c.value);
    });
    c21.eachCell(c => {

        console.log(c.value);
    });
    c22.eachCell(c => {

        console.log(c.value);
    });
    c23.eachCell(c => {

        console.log(c.value);
    });
    c24.eachCell(c => {

        console.log(c.value);
    });
    c25.eachCell(c => {

        console.log(c.value);
    });
    c26.eachCell(c => {

        console.log(c.value);
    });
    c27.eachCell(c => {

        console.log(c.value);
    });
    c28.eachCell(c => {

        console.log(c.value);
    });
    c29.eachCell(c => {

        console.log(c.value);
    });
    c30.eachCell(c => {

        console.log(c.value);
    });
   
}).catch(err => {
    console.log(err.message);
});*/
module.exports = router;
