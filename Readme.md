# Export Playlists from Google Play Music to Spotify

Word on the street is that Google Play Music is going away eventually. I'm going to prempt that fateful day by exporting my playlists to Spotify, while the programmatic tools still exist to do so.

## Required

* Python 3
* [Google Play Music API](https://github.com/simon-weber/gmusicapi)
  * `pip install gmusicapi`

## Export Google Play Music Playlists

```
./bin/google_music/authenticate.py
./bin/google_music/export.py
```
