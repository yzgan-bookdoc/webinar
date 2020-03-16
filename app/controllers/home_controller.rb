# frozen_string_literal: true

# app/controllers/home_controller.rb
class HomeController < ApplicationController
  def index; end

  def icons; end

  def user_profile; end

  def table_list; end

  def notification; end

  def typography; end

  def user_login; end

  def youtube
    video_id = 'Pi4BtPi8bk8'
    @youtube_link = "https://www.youtube.com/embed/#{video_id}"
    @youtube_chat = "https://www.youtube.com/live_chat?v=#{video_id}&embed_domain=localhost"
  end
end
