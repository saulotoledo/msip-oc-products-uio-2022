import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'

import Product from 'App/Models/Product'
import { DateTime } from 'luxon'

export default class extends BaseSeeder {
  public async run () {
    await Product.createMany([
      {
        name: 'Forks',
        image: 'https://picsum.photos/id/23/200/300',
        description: 'Collection of forks',
        createdAt: DateTime.now(),
      },
      {
        name: 'Coffee cup',
        image: 'https://picsum.photos/id/30/200/300',
        description: 'A nice coffee cup',
        createdAt: DateTime.now(),
      },
      {
        name: 'Wall clock',
        image: 'https://picsum.photos/id/175/200/300',
        description: 'A nice and old wall clock',
        createdAt: DateTime.now(),
      },
      {
        name: 'Beach painting',
        image: 'https://picsum.photos/id/350/200/300',
        description: 'A painting for you to add wherever you want at home',
        createdAt: DateTime.now(),
      },
      {
        name: 'Strawberries pack',
        image: 'https://picsum.photos/id/1080/200/300',
        description: 'A pack with strawberries',
        createdAt: DateTime.now(),
      },
      {
        name: 'Manual typewriter',
        image: 'https://picsum.photos/id/403/200/300',
        description: 'A typewriter for antique collectors',
        createdAt: DateTime.now(),
      },
    ])
  }
}
