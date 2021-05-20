import { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
    return knex.schema.createTable('mo', table => {
        table.increments('id')
        table.string('manufacturingOrder').notNullable()
        table.string('operationStatus').notNullable()
        table.dateTime('scheduleStartDate')
        table.string('itemCode')
        table.integer('scheduleManufacturingQuantity')
        table.integer('scheduleBacklog')
        table.dateTime('actualStartDate')
        table.dateTime('actualFinishDate')
        table.integer('availableItemOutput')
        table.string('lineCode')
        table.string('lineName')
        table.integer('standardPalletQuantity')
        table.timestamps()
    })
}


export async function down(knex: Knex): Promise<void> {
    return knex.schema.dropTable('mo');
}



