import { Inject, Injectable } from '@nestjs/common';
import { PG_CONNECTION } from 'src/constants';

@Injectable()
export class ReviewsService {
  constructor(@Inject(PG_CONNECTION) private conn: any) {}

  async findAll() {
    const res = await this.conn.query('SELECT * FROM reviews');
    return res.rows;
  }

  async findBySlug(slug: string) {
    const res = await this.conn.query(
      `SELECT * FROM reviews WHERE store_slug='${slug}'`,
    );
    return res.rows;
  }

  findOne(id: number) {
    return `This action returns a #${id} review`;
  }
}
