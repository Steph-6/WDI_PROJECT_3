angular
  .module('napApp')
  .service('CurrentUserService', CurrentUserService);

CurrentUserService.$inject = ['TokenService', '$rootScope', 'User'];
function CurrentUserService(TokenService, $rootScope, User) {
  const self = this;

  self.getUser = () => {
    const decoded = TokenService.decodeToken();
    if (decoded) {
      User
        .get({ id: decoded.id })
        .$promise
        .then(data => {
          console.log(data);
        }, err => {
          console.log(err);
        });
    }
  };
}
