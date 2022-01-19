import { Link } from 'react-router-dom'

export default function Intro({ respondent, competencies }) {
  return (
    <div>
      <h1>Introductory page - Insurance band 2 Underwriting</h1>
      <p><Link to='/survey'>do the survey</Link></p>
    </div>
  );
}
