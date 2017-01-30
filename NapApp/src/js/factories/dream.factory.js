angular
  .module('napApp')
  .factory('Dream', dreamFactory);

dreamFactory.$inject = ['API', '$resource'];
function dreamFactory(API, $resource){
  return $resource(`${API}/users/:id/dreams`, { id: '@_id'}, {
    // 'new': { method: 'POST', url: `${API}/users` },
    'update': { method: 'PUT' }
  });
}
