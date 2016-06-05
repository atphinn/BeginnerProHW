class CreateUsers < ActiveRecord::Migration
  def change

    	create_table :user do |t|
  		t.string :username
  		t.string :passsword
  		t.string :email

      t.timestamps null: false
    end
  end
end
