import { Injectable } from '@nestjs/common';
import { createClient } from '@supabase/supabase-js';
import { UserRepository } from 'src/shared/repositories/users.respositories';
import { FileDTO } from './dto/upload.dto';

@Injectable()
export class UserService {
  constructor(private readonly usersRepo: UserRepository) {}

  async upload(editFile: FileDTO) {
    const supabaseURL = '';
    const supabaseKEY = '';

    const supabase = createClient(supabaseURL, supabaseKEY, {
      auth: {
        persistSession: false,
      },
    });

    const uploadResquest = await supabase.storage
      .from('images')
      .upload(editFile.originalname, editFile.buffer, {
        upsert: true,
      });

    const { data, error } = await supabase.storage
      .from('images')
      .createSignedUrl(uploadResquest.data.path, 10000);

    return data;
  }
}
