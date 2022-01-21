import { Link } from 'react-router-dom'
import './Intro.css';

export default function Intro({ respondent, competencies }) {
  return (
    <div class="row w-100 m-0">
      <div class="row m-0 p-0 justify-content-center">
        <div class="col-10 pt-4 d-flex justify-content-center">
          <div class="col-10 justify-content-center">
            <h1>Introductory page: <span>Insurance band 2 Underwriting</span></h1>
            <span class="separator"></span>
            <p class="mb-5"><center>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</center></p>
          </div>
        </div>
      </div>
      <div class="row m-0 p-0 justify-content-center">
        <div class="col-10 d-flex justify-content-center">
          <p><Link class="button-link" to='/survey'>do the survey</Link></p>
        </div>
      </div>
    </div>
  );
}
