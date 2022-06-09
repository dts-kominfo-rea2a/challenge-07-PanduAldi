const { promiseTheaterIXX, promiseTheaterVGC } = require("./external.js");

// TODO: Buat fungsi promiseOutput sesuai ketentuan readme
const promiseOutput = async (emosi) => {

  const iix = await promiseTheaterIXX();
  const vgc = await promiseTheaterVGC();
 
  return new Promise(
    (resolve) => {
        let hasil;

        if(emosi === "marah") {  
          const iixMarah = iix.filter((el) => el.hasil === "marah").length;
          const vgcMarah = vgc.filter((el) => el.hasil === "marah").length;
          hasil = iixMarah + vgcMarah;
        } else if(emosi === "tidak marah") {
          const iixtidakMarah = iix.filter((el) => el.hasil === "tidak marah").length;
          const vgctidakMarah = vgc.filter((el) => el.hasil === "tidak marah").length;
          hasil = iixtidakMarah + vgctidakMarah;
        }

        return resolve(hasil);
    }
  )
};

module.exports = {
  promiseOutput,
};
