#!/usr/bin/env python3

from gmusicapi import Mobileclient
import json

print('Starting playlist fetch.')

mobile_client = Mobileclient()
mobile_client.oauth_login(Mobileclient.FROM_MAC_ADDRESS)

print('Fetching Playlists....')

playlists = mobile_client.get_all_user_playlist_contents()

print('Writing file...')

playlists_file = open('data/google_music/playlists.json', 'w')
playlists_file.write(json.dumps(playlists))
playlists_file.close()

print('Playlists export complete.')
