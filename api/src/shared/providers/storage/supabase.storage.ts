import { Injectable } from '@nestjs/common';
import { FileDTO } from 'src/modules/users/dto/users.dto';

import { IStorage } from './storage';
import { SupabaseClient, createClient } from '@supabase/supabase-js';

@Injectable()
export class SupabaseStorage implements IStorage {
  private client: SupabaseClient;

  constructor() {
    this.client = createClient(
      'https://ebawimowasvtgwigflfp.supabase.co',
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im92eXR4a21laHR0c3pvY3hmZnVmIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTE2MzQ4NjQsImV4cCI6MjAwNzIxMDg2NH0.eRKZUo8b10_2UPIB_bepbDADxbga0mJ7k6tnRWPZ6Z0',
    );
  }

  async upload(file: FileDTO, folder: string): Promise<any> {
    const data = await this.client.storage
      .from('admsa')
      .upload(`${folder}/` + file.originalname, file.buffer, {
        upsert: true,
      });

    return data;
  }
}
