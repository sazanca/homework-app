class PostsController < ApplicationController
  before_action :move_to_index, except: [:index, :show]
  
  def index
    @posts = Post.all
  end

  def new
    @post = Post.new
  end

  def create
    Post.create(post_params)
    redirect_to root_path
  end

  def show
    @post = Post.new
  end

  private

  def post_params
    params.require(:post).permit(:content).merge(user_id: current_user.id)
  end

  def move_to_index
    redirect_to action: :index unless user_signed_in?
  end
end
