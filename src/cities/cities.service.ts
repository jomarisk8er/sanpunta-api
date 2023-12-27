import { Inject, Injectable } from '@nestjs/common';
import { PG_CONNECTION } from 'src/constants';

@Injectable()
export class CitiesService {
  constructor(@Inject(PG_CONNECTION) private conn: any) {}
  async findAll() {
    const res = await this.conn.query('SELECT * FROM cities');
    return res.rows;
  }

  async findByRegion(region: string) {
    const res = await this.conn.query(
      `SELECT * FROM cities WHERE region ='${region}'`,
    );
    return res.rows;
  }

  async findOne(slug: string) {
    const res = await this.conn.query(
      `SELECT * FROM cities WHERE slug ='${slug}'`,
    );
    return res.rows[0];
  }
}
