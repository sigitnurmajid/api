import { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
    return knex.schema.createTable('defect', table => {
        table.increments('id')
        table.string('MfgOrderNo')
        table.integer('DefectiveQuantity')
        table.string('DefectiveReason')
        table.string('DefectiveStorageLocCD')
        table.timestamps()
    })
}


export async function down(knex: Knex): Promise<void> {
    return knex.schema.dropTable('defect');
}

