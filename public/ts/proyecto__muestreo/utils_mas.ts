/// <reference path="./index.d.ts" />

declare var jStat: any

export const calculateTamanoMuestra = (cf_n: number, cf_p: number, cf_z: number, cf_e: number) => {
  const cf_q: number = Math.round((1 - cf_p) * 10) / 10

  const n1: number = cf_p * cf_q
  const n2: number = Math.abs(jStat.studentt.inv((1 - cf_z) / 2, 100000))
  const n3: number = Math.pow(cf_e / 100 / n2, 2)
  const n4: number = n1 / cf_n

  return Math.round(n1 / (n3 + n4))
}

export const generarMuestras = (muestrasOriginal: MuestraItem[], tamano_muestra: number) => {
  let muestras = _.clone(muestrasOriginal, true)

  muestras = _.shuffle(muestras) // desordena
  muestras = _.take(muestras, tamano_muestra) // toma las N primeras
  muestras = _.sortBy(muestras, 'cod') // Las vuelve a ordenar

  return muestras
}
