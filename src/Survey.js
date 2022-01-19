import { Survey as SurveyJs, StylesManager } from 'survey-react'
import 'survey-react/survey.min.css'

StylesManager.applyTheme("bootstrap")

export default function Survey() {

  const surveyData = {
    title: `Professional Map assessement tool - Insurance band 2 Underwriting`,
    showProgressBar: "top",
    pages: [{
      name: "c1",
      title: "Financial Advice and Planning",
      description: "Working as a financial adviser or planner requires technical knowledge and skills that are relevant to this discipline. The scope of the work being covered will be determined by the job being performed and the area of personal finance in which you operate.",
      questions: [{
        type: "panel",
        title: `I am interested in why things are done in certain ways, and question beyond the obvious`,
        elements: [
          { type: "rating", name: `s1.ability`, title: "My ability to perform", },
          { type: "rating", name: `s1.importance`, title: "Importance to my work", },
        ]
      }, {
        type: "panel",
        title: `I am interested in why things are done in certain ways, and question beyond the obvious`,
        elements: [
          { type: "rating", name: `s2.ability`, title: "My ability to perform", },
        ]
      }]
    }, {
      name: "c2",
      title: "Second competency",
      description: "something else.",
      questions: [{
        type: "panel",
        title: `another statement`,
        elements: [
          { type: "rating", name: `s3.ability`, title: "My ability to perform", },
          { type: "rating", name: `s3.importance`, title: "Importance to my work", },
        ]
      }, {
        type: "panel",
        title: `another statement`,
        elements: [
          { type: "rating", name: `s4.ability`, title: "My ability to perform", },
          { type: "rating", name: `s4.importance`, title: "Importance to my work", },
        ]
      }]
    }]
  }


  return (
    <div>
      <div className="App">
        <SurveyJs
          json={surveyData}
          sendResultOnPageNext={true}
        />
      </div>
    </div>
  )
}

