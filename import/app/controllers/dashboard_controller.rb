class DashboardController < ApplicationController

  def index
    file = File.open "/var/lib/data/playlists.json"
    @playlists = JSON.load(file)
    file.close
  end
end
