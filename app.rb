require 'sinatra'

set :bind, '0.0.0.0'
set :port, '9000'

get '/' do
  File.read('public/index.html')
end
