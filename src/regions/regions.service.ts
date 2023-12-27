import { Inject, Injectable } from '@nestjs/common';
import { PG_CONNECTION } from 'src/constants';

@Injectable()
export class RegionsService {
  constructor(@Inject(PG_CONNECTION) private conn: any) {}

  async findAll() {
    const res = await this.conn.query('SELECT * FROM regions');
    return res.rows;
  }

  async findOne(slug: string) {
    const res = await this.conn.query(
      `SELECT * FROM regions WHERE slug = '${slug}'`,
    );
    return res.rows[0];
  }
}
