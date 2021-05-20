import { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
    return knex.schema.createTable('mo_result', table => {
        table.increments('id')
        table.string('manufacturingOrder')
        table.dateTime('actualStartDate')
        table.dateTime('actualFinishDate')
        table.integer('availableItemOutput')
        table.boolean('inputCheck')
        table.boolean('resultCheck')
        table.integer('standardPalletQuantity')
        table.timestamps()
    })
}


export async function down(knex: Knex): Promise<void> {
    return knex.schema.dropTable('mo_result');
}

