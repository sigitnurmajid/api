import { Request, Response, NextFunction } from 'express'
import knex from '../database/knex'

class MoController {

  static async store(req: Request, res: Response) {

    const date = new Date
    try {
      await knex('MO').insert({
        MfgOrderNo: req.body.MfgOrderNo,
        OrdStsTypNm: req.body.OrdStsTypNm,
        ItmCD: req.body.ItmCD,
        ProdStSchdDt: req.body.ProdStSchdDt,
        ProdEndSchdDt: req.body.ProdEndSchdDt,
        ProdStSchdQty: req.body.ProdStSchdQty,
        ProdStSchdBackLogQty: req.body.ProdStSchdBackLogQty,
        ProdStActDt: req.body.ProdStActDt,
        ProdEndActDt: req.body.ProdEndActDt,
        ProdLocCD: req.body.ProdLocCD,
        LineCD: req.body.LineCD,
        LineNm: req.body.LineNm,
        StdPckgQty: req.body.StdPckgQty,
        created_at: date,
        updated_at: date
      })
      res.status(200).send('ok')
    } catch (error) {
      res.status(401).send(error)
    }
  }

  static async index(req: Request, res: Response) {

    try {
      const lineCode: string = req.query.lineCode.toString()
      // const operationStatus: string = req.query.operationStatus.toString()

      const result = await knex.select('*').from('MO').where('lineCode', '=', lineCode)
        // .andWhere('operationStatus', '=', operationStatus)

      res.send(result).status(200)
    } catch (error) {
      res.status(400).send(error)
    }

  }

  static async save(req: Request, res: Response) {
    const date = new Date
    try {
      await knex('mo_result').insert({
        MfgOrderNo: req.body.MfgOrderNo,
        ProdStActDt: req.body.ProdStActDt,
        ProdEndActDt: req.body.ProdEndActDt,
        ItmCD: req.body.ItmCD,
        LineCD: req.body.LineCD,
        InputCheck: req.body.InputCheck,
        ResultCheck: req.body.ResultCheck,
        created_at: date,
        updated_at: date
      })

      let defect = new Array

      defect = Object.assign([], req.body.Defect)

      for (let index = 0; index < defect.length; index++) {
        try {
          await knex('defect').insert({
            DefectiveQuantity: defect[index].DefectiveQuantity,
            DefectiveReason: defect[index].DefectiveReason,
            DefectiveStorageLocCD: defect[index].DefectiveStorageLocCD,
            manufacturingOrder: req.body.manufacturingOrder,
            created_at: date,
            updated_at: date
          })
        } catch (error) {
          return res.send(error)
        }
      }

      res.send('ok')
    } catch (error) {
      return res.send(error)
    }
  }

  static async edit(req: Request, res: Response) {
    try {
      await knex('MO')
        .where('MfgOrderNo', '=', req.body.MfgOrderNo)
        .update({
          OrdStsTypNm: '7',
          ProdStActDt: req.body.ProdStActDt
        })
      res.send('ok')
    } catch (error) {
      return res.send(error)
    }
  }
}

export default MoController;