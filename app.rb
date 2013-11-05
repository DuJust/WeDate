require 'sinatra'

get '/' do
  File.read('public/homepage.html')
end
