<?php namespace App\Controllers;

use CodeIgniter\RESTful\ResourceController;
use CodeIgniter\API\ResponseTrait;
use App\Models\SpendingModel;

class SpendingController extends ResourceController
{

  use ResponseTrait;
  
  public function options(): Response
    {
      return $this->response->setHeader('Access-Control-Allow-Origin', '*') //for allow any domain, insecure

        ->setheader("Access-Control-Allow-Headers: X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Request-Method")
        ->setHeader('Access-Control-Allow-Headers', '*') //for allow any headers, insecure
        ->setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE') //method allowed
        ->setStatusCode(200); //status code

        $method = $_SERVER['REQUEST_METHOD'];
        if($method == "OPTIONS") {
          die();
        }
    }

    public function setResponse($body = null, $statusCode = 200): Response
    {
      if (is_null($body)) {
          $body = null;
      } elseif (!is_string($body)) {
          $body = $this->format($body);
      } else {
          $body = '"' . $body . '"';
      }

      $this->response->setHeader('Access-Control-Allow-Origin', '*')
        ->setHeader('Access-Control-Allow-Headers', '*')
        ->setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
      return $this->respond($body, $statusCode);
    }

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
