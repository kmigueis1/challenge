class CreateUsers < ActiveRecord::Migration[5.1]
  def change
    create_table :users do |t|
      t.string :name, null: false
      t.string :user_name, null: false
      t.string :password_digest, null: false
      t.string :session_token, null: false
    end
  end
end
