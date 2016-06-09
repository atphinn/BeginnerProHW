class ChangeTrainerToUserls < ActiveRecord::Migration
  def change
  	rename_column(:events, :trainer_id, :user_id)
  end
end
