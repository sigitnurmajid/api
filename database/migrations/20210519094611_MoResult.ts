import { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
    return knex.schema.createTable('mo_result', table => {
        table.increments('id')
        table.string('MfgOrderNo')
        table.dateTime('ProdStActDt')
        table.dateTime('ProdEndActDt')
        table.string('ItmCD')
        table.string('LineCD')
        table.integer('ProdActQty')
        table.boolean('InputCheck')
        table.boolean('ResultCheck')
        table.timestamps()
    })
}


export async function down(knex: Knex): Promise<void> {
    return knex.schema.dropTable('mo_result');
}

