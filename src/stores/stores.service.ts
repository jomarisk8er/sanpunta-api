import { Inject, Injectable } from '@nestjs/common';
import { PG_CONNECTION } from 'src/constants';

@Injectable()
export class StoresService {
  constructor(@Inject(PG_CONNECTION) private conn: any) {}

  async findAll() {
    const res = await this.conn.query('SELECT * FROM stores');
    return res.rows;
  }

  async findByCategoryAndCity(category: string, city: string) {
    const res = await this.conn.query(
      `SELECT * FROM stores WHERE location = '${city}' AND  '${category}' = ANY(categories)`,
    );

    return res.rows.map((store) => {
      const storeHours = `${store.store_hours[new Date().getDay()].from} - ${
        store.store_hours[new Date().getDay()].to
      }`;
      let lowestPrice = 9999999;

      store.menus.map((menu) => {
        menu.dishes.map((dish) => {
          if (dish.price < lowestPrice) {
            lowestPrice = dish.price;
          }
        });
      });

      let highestPrice = 0;

      store.menus.map((menu) => {
        menu.dishes.map((dish) => {
          if (dish.price > highestPrice) {
            highestPrice = dish.price;
          }
        });
      });

      return {
        name: store.name,
        store_hours: storeHours,
        price_range: `₱ ${lowestPrice} - ${highestPrice}`,
        description: store.description,
        location: store.location,
        slug: store.slug,
        image: store.images[0],
        tags: store.tags,
      };
    });
  }

  async findOne(slug: string) {
    const res = await this.conn.query(
      `SELECT * FROM stores WHERE slug='${slug}'`,
    );
    return res.rows[0];
  }
}
