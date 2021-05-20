import { Request, Response, NextFunction } from 'express'
import knex from '../database/knex'

class MoController {

  static async store(req: Request, res: Response) {

    const date = new Date
    try {
      await knex('MO').insert({
        manufacturingOrder: req.body.manufacturingOrder,
        operationStatus: req.body.operationStatus,
        itemCode: req.body.itemCode,
        scheduleStartDate: req.body.scheduleStartDate,
        scheduleManufacturingQuantity: req.body.scheduleManufacturingQuantity,
        scheduleBacklog: req.body.scheduleBacklog,
        actualStartDate: req.body.actualStartDate,
        actualFinishDate: req.body.actualFinishDate,
        availableItemOutput: req.body.availableItemOutput,
        lineCode: req.body.lineCode,
        lineName: req.body.lineName,
        standardPalletQuantity: req.body.standardPalletQuantity,
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
      const operationStatus: string = req.query.operationStatus.toString()

      const result = await knex.select('*').from('MO').where('lineCode', '=', lineCode)
        .andWhere('operationStatus', '=', operationStatus)

      res.send(result).status(200)
    } catch (error) {
      res.status(400).send(error)
    }

  }

  static async save(req: Request, res: Response) {
    const date = new Date
    try {
      await knex('mo_result').insert({
        manufacturingOrder: req.body.manufacturingOrder,
        actualStartDate: req.body.actualStartDate,
        actualFinishDate: req.body.actualFinishDate,
        availableItemOutput: req.body.availableItemOutput,
        inputCheck: req.body.inputCheck,
        resultCheck: req.body.resultCheck,
        created_at : date,
        updated_at : date
      })
      
      let defect = new Array

      defect = Object.assign([],req.body.defect)
      
      for (let index = 0; index < defect.length; index++) {
        try {
          await knex('defect').insert({
            defectiveQuantity: defect[index].defectiveQuantity,
            defectiveReason: defect[index].defectiveReason,
            manufacturingOrder: req.body.manufacturingOrder,
            created_at : date,
            updated_at : date
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
}

export default MoController;