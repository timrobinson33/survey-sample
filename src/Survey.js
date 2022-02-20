import { Survey as SurveyJs, StylesManager, defaultBootstrapCss } from 'survey-react'
import './Survey.css';
//import 'survey-react/survey.min.css'

StylesManager.applyTheme("bootstrap")

export default function Survey() {

  //Custom styles
  defaultBootstrapCss.navigationButton = "sv-button-link";
  defaultBootstrapCss.progressText = "sv-progress-text show-text";
  defaultBootstrapCss.progressTextInBar = "inbar sv-hidden";
  defaultBootstrapCss.headerText = "sv-header__text";
  defaultBootstrapCss.pageDescription = "sv-description sv-page__description";
  defaultBootstrapCss.rating.root = "sv-rating";
  defaultBootstrapCss.rating.item = "sv-rating__item";
  defaultBootstrapCss.rating.selected = "sv-rating__item--selected";

  const surveyData = {
    //title: `Professional Map assessement tool - Insurance band 2 Underwriting`,
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
      <div class="member-title text-md-center pt-5 pb-3 pb-md-4 mb-0">
        <div class="container container-alt">
          <div class="row">
            <div class="col-12">
              <h2 class="pb-3 pb-md-4 mb-0">Insurance assessment: <strong>Band 2 Underwriting</strong></h2>
              <hr />
            </div>
          </div>
        </div>
      </div>
      <div class="member-text text-md-center pb-5">
        <div class="container container-alt">
          <div class="col-12">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
              tempor incid dunt ut labore et dolore magna aliqu ut enim ad minim veniam,
              quis nostrud exercitation ullamco labo. Lorem ipsum dolor sit ameconsectetur
              adipi scing elit, sed do eiusmod tempor incid dunt ut labore et dolore
              magna aliqu ut <a href="#">enim ad</a>.</p>
          </div>
        </div>
      </div>
      <div className="App">
        <div class="row w-100 m-0">
          <div class="row m-0 p-0 justify-content-center">
            <SurveyJs
              json={surveyData}
              sendResultOnPageNext={true}
            />
          </div>
        </div>
      </div>
    </div>
  )
}