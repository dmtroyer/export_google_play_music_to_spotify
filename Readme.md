# Export Playlists from Google Play Music to Spotify

Word on the street is that Google Play Music is going away eventually. I'm going to prempt that fateful day by exporting my playlists to Spotify, while the programmatic tools still exist to do so.

## Required

* Docker Engine 18.06.0+
* docker-compose 1.22.0+

## Export Google Play Music Playlists

```
docker-compose build
docker-compose run export ./authenticate.py && ./export.py
```
