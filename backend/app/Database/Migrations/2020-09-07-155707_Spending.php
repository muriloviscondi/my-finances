<?php namespace App\Database\Migrations;

use CodeIgniter\Database\Migration;

class Spending extends Migration
{
	public function up()
	{
		$this->forge->addField([
      'id' => [
        'type'           => 'INT',
        'constraint'     => 5,
        'unsigned'       => true,
        'auto_increment' => true,
      ],
      'name' => [
        'type'        => 'VARCHAR',
        'constraint'  => '50',
      ],
      'type' => [
        'type' => 'VARCHAR',
        'constraint' => '10',
      ],
      'description' => [
        'type'        => 'VARCHAR',
        'constraint'  => '100',
        'null'        => true
      ],
      'value' => [
        'type' => 'FLOAT',
      ],
      'date' => [
        'type' => 'DATE',
        'null' => true
      ]
    ]);
    $this->forge->addKey('id', true);
    $this->forge->createTable('spending');
	}

	//--------------------------------------------------------------------

	public function down()
	{
		$this->forge->dropTable('spending');
	}
}
