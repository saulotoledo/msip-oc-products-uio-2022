import Env from '@ioc:Adonis/Core/Env'
import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { RequestContract } from '@ioc:Adonis/Core/Request'
import { string } from '@ioc:Adonis/Core/Helpers'

import ProductValidator from 'App/Validators/ProductValidator'
import Product from 'App/Models/Product'

export default class ProductsController {
  public async index({ request }: HttpContextContract) {
    const products = await Product.query().paginate(request.param('page', 1), Env.get('PAGINATION_LIMIT'))
    return products.toJSON()
  }

  public async show({ params }: HttpContextContract) {
    const product = await Product.findOrFail(params.id)
    return product.toJSON()
  }

  public async store({ request, response }: HttpContextContract) {
    const product = await this.save(request)
    return response.created(product.toJSON())
  }

  private async save(request: RequestContract) {
    const payload = await request.validate(ProductValidator)

    const productToSave = new Product()
    productToSave.name = string.escapeHTML(payload.name)
    productToSave.image = string.escapeHTML(payload.image)
    productToSave.description = string.escapeHTML(payload.description)

    return productToSave.save()
  }
}
