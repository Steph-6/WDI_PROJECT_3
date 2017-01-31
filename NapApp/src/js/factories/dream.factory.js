angular
  .module('napApp')
  .factory('Dream', dreamFactory);

dreamFactory.$inject = ['API', '$resource'];
function dreamFactory(API, $resource){
  return $resource(`${API}/dreams/:id`, { id: '@_id'}, {
    'update': { method: 'PUT' }
  });
}
