import { Injectable } from '@nestjs/common';

import { SupabaseClient, createClient } from '@supabase/supabase-js';
import { FileDTO } from 'src/modules/user/dto/user.dto';
import { IStorage } from './storage';

@Injectable()
export class SupabaseStorage implements IStorage {
  private client: SupabaseClient;

  constructor() {
    this.client = createClient(
      process.env.SUPABASE_URL ?? '',
      process.env.SUPABASE_KEY ?? '',
      {
        auth: {
          persistSession: false,
        },
      },
    );
  }

  async upload(file: FileDTO, folder: string): Promise<any> {
    const data = await this.client.storage
      .from('images')
      .upload(`${folder}/` + file.originalname, file.buffer, {
        upsert: true,
      });

    return data;
  }
}
