const express = require('express');
const xvideos = require('@rodrigogs/xvideos');

const app = express();
const PORT = process.env.PORT || 3000;

app.get('/fresh', async (req, res) => {
  try {
    const fresh = await xvideos.videos.fresh({ page: 1 });
    res.json({
      currentPage: fresh.pagination.current,
      videos: fresh.videos
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to fetch videos' });
  }
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
