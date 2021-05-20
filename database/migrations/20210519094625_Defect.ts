import { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
    return knex.schema.createTable('defect', table => {
        table.increments('id')
        table.string('manufacturingOrder')
        table.string('defectiveReason')
        table.integer('defectiveQuantity')
        table.timestamps()
    })
}


export async function down(knex: Knex): Promise<void> {
    return knex.schema.dropTable('defect');
}

