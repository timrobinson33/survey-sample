import { Link } from 'react-router-dom'
import './Intro.css';

export default function Intro({ respondent, competencies }) {
  return (
    <div class="row w-100 m-0">
      <div class="member-title text-md-center pt-5 pb-3 pb-md-4 mb-0">
        <div class="container container-alt">
          <div class="row">
            <div class="col-12">
              <h2 class="pb-3 pb-md-4 mb-0">Introductory page: <strong>Insurance band 2 Underwriting</strong></h2>
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
      <div class="member-button pb-5">
        <div class="container container-alt">
          <div class="row">
            <div class="col-12 text-center">
              <Link class="member-button-link" to='/survey-sample/survey'>do the survey</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}