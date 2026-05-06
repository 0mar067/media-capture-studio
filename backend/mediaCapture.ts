import { createClientFromRequest } from 'npm:@base44/sdk@0.8.25';

/**
 * Media Capture Backend API
 * Author: Nyarambe Elnabas Eugine
 * 
 * Actions:
 *   health          - API status
 *   save_snapshot   - Save base64 image snapshot metadata
 *   save_video_meta - Save video recording metadata
 *   list_media      - List all media records
 *   delete_media    - Delete by record_id
 */

Deno.serve(async (req) => {
  try {
    const base44 = createClientFromRequest(req);
    const body = await req.json().catch(() => ({}));
    const { action } = body;

    if (action === 'save_snapshot') {
      const { imageData, filename } = body;
      if (!imageData) return Response.json({ error: 'imageData required' }, { status: 400 });
      const base64Data = imageData.replace(/^data:image\/\w+;base64,/, '');
      const bytes = atob(base64Data).length;
      const ts = new Date().toISOString().replace(/[:.]/g, '-').slice(0, 19);
      const fname = filename || `snapshot_${ts}.png`;
      const record = await base44.asServiceRole.entities.MediaCapture.create({
        filename: fname, type: 'snapshot',
        size_bytes: bytes, captured_at: new Date().toISOString(),
      });
      return Response.json({ ok: true, filename: fname, size_bytes: bytes, record_id: record.id });
    }

    if (action === 'save_video_meta') {
      const { filename, size_bytes, duration_seconds } = body;
      const record = await base44.asServiceRole.entities.MediaCapture.create({
        filename: filename || `video_${Date.now()}.webm`,
        type: 'video', size_bytes: size_bytes || 0,
        duration_seconds: duration_seconds || 0, captured_at: new Date().toISOString(),
      });
      return Response.json({ ok: true, record_id: record.id });
    }

    if (action === 'list_media') {
      const records = await base44.asServiceRole.entities.MediaCapture.list();
      return Response.json({ ok: true, count: records.length, media: records });
    }

    if (action === 'delete_media') {
      const { record_id } = body;
      if (!record_id) return Response.json({ error: 'record_id required' }, { status: 400 });
      await base44.asServiceRole.entities.MediaCapture.delete(record_id);
      return Response.json({ ok: true, message: 'Deleted' });
    }

    return Response.json({
      ok: true, service: 'Media Capture API', version: '1.0.0',
      author: 'Nyarambe Elnabas Eugine',
      endpoints: ['health','save_snapshot','save_video_meta','list_media','delete_media'],
      timestamp: new Date().toISOString(),
    });

  } catch (error) {
    return Response.json({ error: error.message }, { status: 500 });
  }
});
