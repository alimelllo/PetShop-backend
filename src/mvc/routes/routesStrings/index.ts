export const Routes = {
  user: '/user',
  login: '/login',
  

  register: '/register',
  

  profile: '/profile',
  update: '/update',
  users: '/users',

  getUserInfo:'/getUserInfo',
  getAllProducts : '/getAllProducts/:text?/:productGroup?/:pageNumber?',
  getAllProductGroups : '/getAllProductGroups',
  getAllProductIds:'/getAllProductIds',
  getAllFactorIds:'/getAllFactorIds',
  GetAllProductImages:'/GetAllProductImages/:productId',
  getProductById:'/getProductById/:productId',
  getFactorById:'/getFactorById/:factorId',

  AddProduct : '/AddProduct',
  AddProductGroup:'/AddProductGroup',
  AddProductImage:'/AddProductImage',

  CreateFactor:'/CreateFactor',
  Payment:'/Payment',
  messages:'/messages'
};
