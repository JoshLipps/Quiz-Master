require 'rails_helper'



RSpec.describe QuizController, type: :controller do
  let(:valid_attributes) {
    {
      content: 'Is this an example question?',
      answer: 'yes'
    }
  }

  let(:answer_with_number) {
    {
      content: 'Whats after four',
      answer: 5
    }
  }

  let(:answer_with_ballons) {
    {
      content: 'Whats after four',
      answer: 'five ballons'
    }
  }

  let(:invalid_attributes) {
    {
      question: 'Is this an invalid example question attribute?',
      blah: 'I hope so'
    }
  }

  let(:valid_session) { {} }

  describe "GET #index" do
    it "assigns question as @quiz" do
      question = Question.create! valid_attributes
      get :index, params: {}, session: valid_session
      expect(assigns(:quiz)).to eq([question])
    end
  end


  describe "PUT #update" do
    it "returns correct true when answer matches" do
      question = Question.create! valid_attributes
      put :update, params: {id: question[:id], answer: 'yes'}, session: valid_session
      parsed_body = JSON.parse(response.body)
      expect(parsed_body).to eq({"correct" => true})
    end

    it "correct when answer matches as number" do
      question = Question.create! answer_with_number
      put :update, params: {id: question[:id], answer: 5}, session: valid_session
      parsed_body = JSON.parse(response.body)
      expect(parsed_body).to eq({"correct" => true})
    end

    it " correct when submitted answer is a written-out number" do
      question = Question.create! answer_with_number
      put :update, params: {id: question[:id], answer: 'five'}, session: valid_session
      parsed_body = JSON.parse(response.body)
      expect(parsed_body).to eq({"correct" => true})
    end

    it "incorrect when submitted answer is a written-out number" do
      question = Question.create! answer_with_number
      put :update, params: {id: question[:id], answer: 'six'}, session: valid_session
      parsed_body = JSON.parse(response.body)
      expect(parsed_body).to eq({"correct" => false})
    end

    it "correct when submitted answer is a written-out number and string" do
      question = Question.create! answer_with_ballons
      put :update, params: {id: question[:id], answer: '5 ballons'}, session: valid_session
      parsed_body = JSON.parse(response.body)
      expect(parsed_body).to eq({"correct" => true})
    end

    it "handles floats" do
      skip("nope doesn't do this yet")
    end

  end
end
