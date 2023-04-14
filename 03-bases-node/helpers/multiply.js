const fs = require("fs");

const createMultiplyFileTable = async (base = 1, listar = false, top = 10) => {
  
  try{

    let output = "";
    
    for (let i = 0; i <= top; i++) {
      output += `${base} * ${i} = ${base * i}\n`;
    }

    if (listar) {
      console.log("=========================");
      console.log(`Tabla del numero: ${base}`);
      console.log("=========================");
      console.log(`${output}`);
    }

  
    fs.writeFileSync(`./output/table-${base}.txt`, output);
  
    return(`Tabla-${base}.txt`);

    // fs.writeFile(`table-${base}.txt`, output, (err) => {
    //   if (err) throw err;
    //   console.log(`Table-${base}.txt created`);
    // });

  }catch(err){
    throw err;
  }
  
};

module.exports = {
    createMultiplyFileTable
}