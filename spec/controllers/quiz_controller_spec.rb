require 'rails_helper'



RSpec.describe QuizController, type: :controller do
  let(:valid_attributes) {
    {
      content: 'Is this an example question?',
      answer: 'yes'
    }

  }

  let(:invalid_attributes) {
    {
      question: 'Is this an invalid example question attribute?',
      blah: 'I hope so'
    }
  }

  describe "GET #index" do
    it "assigns question as @quiz" do
      question = Question.create! valid_attributes
      get :index, params: {}
      expect(assigns(:quiz)).to eq([question])
    end
  end
end
