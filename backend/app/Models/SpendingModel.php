<?php namespace App\Models;

use CodeIgniter\Model;

class SpendingModel extends Model
{
  protected $table      = 'spending';
  protected $primaryKey = 'id';
  protected $allowedFields = [
    'name', 'type', 'description', 'value', 'date'
  ];

}