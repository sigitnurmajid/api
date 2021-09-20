import { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
    return knex.schema.createTable('mo', table => {
        table.increments('id')
        table.string('MfgOrderNo').notNullable()
        // table.string('OrdStsTyp').notNullable()
        table.string('OrdStsTypNm').notNullable()
        table.string('ItmCD')
        table.dateTime('ProdStSchdDt')
        table.dateTime('ProdEndSchdDt')
        table.integer('ProdStSchdQty')
        table.integer('ProdStSchdBackLogQty')
        table.dateTime('ProdStActDt')
        table.dateTime('ProdEndActDt')
        table.string('ProdLocCD')
        table.integer('availableItemOutput')
        table.string('LineCD')
        table.string('LineNm')
        table.integer('StdPckgQty')
        table.timestamps()
    })
}


export async function down(knex: Knex): Promise<void> {
    return knex.schema.dropTable('mo');
}



