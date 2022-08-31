import './Results.css';
import { Link } from 'react-router-dom'
import ResultsRadar from './ResultsRadar';
import ResultsTable from './ResultsTable';

export default function Results() {

  return (
    <>
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
      <div class="row w-100">
        <div class="results-heading">
          <h3>Your results</h3>
        </div>
      </div>
      <div class="row row-alt w-100 mb-3">
        <div class="col-md-6 d-flex justify-content-center">
          <ResultsRadar />
        </div>
        <div class="container container-alt col-md-6 mb-4 px-md-4 results-description">
          <p>Your results are based on the gap between how important something is for 
          your role and how well you think you are performing in that area. The bigger 
          the gap, the larger the development need:</p>
          <ul>
            <li>Needs work indicates areas that are important for your role, in which 
            your performance is weak</li>
            <li>Room for improvement indicates areas that are important for your role, 
            in which your performance is average</li>
            <li>Doing great indicates either areas that are important for your role where 
            your performance is strong, or areas that are not important for your role and 
            as such there is no development need</li>
          </ul>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incid dunt ut labore et dolore magna aliqu ut enim ad minim veniam,
          quis nostrud exercitation ullamco labo. Lorem ipsum dolor sit ameconsectetur
          adipi scing elit, sed do eiusmod tempor incid dunt ut labore et dolore
          magna aliqu ut <a href="#">enim ad</a>.</p>
        </div>
      </div>
      <div class="row w-100 m-0">
        <div class="row m-0 p-0 justify-content-center">
          <div class="col-12 d-flex justify-content-center">
            <ResultsTable />
          </div>
          <div class="row w-100 mb-5 results-subtext">
            <p>Your results are based on the gap between how important something is for 
            your role and how well you think you are performing in that area. The bigger 
            the gap, the larger the development need:</p>
            <ul>
              <li>Needs work indicates areas that are important for your role, in which 
              your performance is weak</li>
              <li>Room for improvement indicates areas that are important for your role, 
              in which your performance is average</li>
              <li>Doing great indicates either areas that are important for your role where 
              your performance is strong, or areas that are not important for your role and 
              as such there is no development need</li>
            </ul>
          </div>
        </div>
      </div>
      <div class="member-button pb-5">
        <div class="container container-alt">
          <div class="row">
            <div class="col-12 text-center">
              <Link class="member-button-link mx-md-3 mb-3" to='/somelink'>New assessment</Link>
              <Link class="member-button-link mx-md-3 mb-3" to='/somelink'>Provide feedback</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}
