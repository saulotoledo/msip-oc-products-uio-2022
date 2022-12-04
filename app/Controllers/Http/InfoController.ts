import Env from '@ioc:Adonis/Core/Env'

export default class ProductsController {
  public async index() {
    return Env.get('POD_NAME')
  }
}
