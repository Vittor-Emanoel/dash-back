import { Injectable } from '@nestjs/common';
import { FileDTO } from './dto/upload.dto';
import { createClient } from '@supabase/supabase-js';
import { env } from 'src/shared/config/env';

@Injectable()
export class UploadService {
  async upload(file: FileDTO) {
    const supabaseURL = env.supabaseURL;
    const supabaseKEY = env.supabaseKEY;

    console.log(supabaseURL);

    const supabase = createClient(supabaseURL, supabaseKEY, {
      auth: {
        persistSession: false,
      },
    });

    const data = await supabase.storage
      .from('images')
      .upload(file.originalname, file.buffer, {
        upsert: true,
      });

    return data;
  }
}
