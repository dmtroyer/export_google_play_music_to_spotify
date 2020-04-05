#!/usr/bin/env python3

from gmusicapi import Mobileclient
import json

print('Starting playlist fetch.')

mobile_client = Mobileclient()
mobile_client.oauth_login(Mobileclient.FROM_MAC_ADDRESS, '/var/lib/data/credentials')

print('Fetching Playlists....')

playlists = mobile_client.get_all_user_playlist_contents()

print('Writing file...')

playlists_file = open('/var/lib/data/playlists.json', 'w')
playlists_file.write(json.dumps(playlists))
playlists_file.close()

print('Playlists export complete.')
