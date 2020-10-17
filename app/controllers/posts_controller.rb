class PostsController < ApplicationController
  before_action :move_to_index, except: [:index, :show]
  
  def index
    @post = Post.new
    @posts = Post.includes(:user)
  end

  def create
    @post = Post.create(post_params)
    if @post.save
      respond_to do |format|
        format.html { redirect_to :root }
        format.json { render json: @post}
      end
    else
      flash.now[:alert] = 'メッセージを入力してください。'
      redirect_to action: :index
    end
  end

  def show
    @posts = Post.find(params[:id])
  end
  

  private

  def post_params
    params.require(:post).permit(:content).merge(user_id: current_user.id)
  end

  def move_to_index
    redirect_to action: :index unless user_signed_in?
  end
end
