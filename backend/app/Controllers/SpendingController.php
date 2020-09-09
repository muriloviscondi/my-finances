<?php namespace App\Controllers;

use CodeIgniter\RESTful\ResourceController;
use CodeIgniter\API\ResponseTrait;
use App\Models\SpendingModel;

class SpendingController extends ResourceController
{

  use ResponseTrait;

  // get all spendings
  public function index()
  {
    $model = new SpendingModel();
    $data = $model->findAll();

    return $this->respond($data);
  }

  // Get single Spending
  public function show($id = null)
  {
    $model = new SpendingModel();
    $data = $model->getWhere(['id' => $id])->getResult();

    if($data) {
      return $this->respond($data);
    }
    
    return $this->failNotFound('Nenhum dado encontrado com id ' . $id);
    
  }

  // Create spending
  public function create()
  {
    $model = new SpendingModel();
  
    $data = [
      "name" => $this->request->getVar("name"),
      'type' => $this->request->getVar('type'),
      'description' => $this->request->getVar('description'),
      'value' => $this->request->getVar('value'),
      'date' => $this->request->getVar('date'),
    ];

    $model->insert($data);

    $response = [
      'status' => 201,
      'error' => null,
      'messages' => [
        'success' => 'Data Saved'
      ]
    ];

    return $this->respondCreated($data);
    
  }

  // update spending
  public function update($id = null) 
  {
    $model = new SpendingModel();

    $input = $this->request->getRawInput();

    $data = [
      'name' => $input['name'],
      'type' => $input['type'],
      'description' => $input['description'],
      'value' => $input['value'],
      'date' => $input['date'],
    ];

    $model->update($id, $data);

    $response = [
      'status' => 200,
      'error' => null,
      'messages' => [
        'success' => 'Data Updated'
      ]
    ];

    return $this->respond($response);
  }

  // delete product
  public function delete($id = null)
  {
    $model = new SpendingModel();
    $data = $model->find($id);

    if ($data) {
      $model->delete($id);

      $response = [
        'status' => 200,
        'error' => null,
        'messages' => [
          'success' => 'Data Deleted'
        ]
      ];
      return $this->respond($response);
    }

    return $this->failNotFound('No data found with id ' . $id);

  }
}