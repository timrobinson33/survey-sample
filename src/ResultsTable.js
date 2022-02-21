import doinggreat from './img/dial_doing_great.svg';
import needswork from './img/dial_needs_work.svg';
import forimprovement from './img/dial_room_for_improvement.svg';
export default function ResultsTable() {
    return <div class="row w-100 mb-5 results-infowrapper">
        <div class="results-inforow mb-5">
            <div class="result-rowheading">
                <h4 class="mb-4 pb-3">Curiosity</h4>
            </div>
            <div class="row result-rowinfo">
                <div class="col-lg-3 col-md-12 mb-4 mb-lg-0 px-2 dial-column text-center">
                    <img src={doinggreat} alt="Doing great dial" title="Doing great" />
                </div>
                <div class="col-lg-3 col-md-4 pe-5">
                    <ul>
                        <li>I am interested in why things are done in certain ways, and question beyond the obvious</li>
                        <li>I am interested in why things are done in certain ways, and question beyond the obvious</li>
                    </ul>                
                </div>
                <div class="col-lg-3 col-md-4 pe-5">
                    <ul>
                        <li>I am interested in why things are done in certain ways, and question beyond the obvious</li>
                        <li>I am interested in why things are done in certain ways, and question beyond the obvious</li>
                    </ul>                
                </div>
                <div class="col-lg-3 col-md-4 pe-5">
                    <ul>
                        <li>I am interested in why things are done in certain ways, and question beyond the obvious</li>
                        <li>I am interested in why things are done in certain ways, and question beyond the obvious</li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="results-inforow mb-5">
            <div class="result-rowheading">
                <h4 class="mb-4 pb-3">Customer focus</h4>
            </div>
            <div class="row result-rowinfo">
                <div class="col-lg-3 col-md-12 mb-4 mb-lg-0 px-2 dial-column text-center">
                    <img src={needswork} alt="Needs work dial" title="Needs work" />
                </div>
                <div class="col-lg-3 col-md-4 pe-5">
                    <ul>
                        <li>I am interested in why things are done in certain ways, and question beyond the obvious</li>
                        <li>I am interested in why things are done in certain ways, and question beyond the obvious</li>
                    </ul>                
                </div>
                <div class="col-lg-3 col-md-4 pe-5">
                    <ul>
                        <li>I am interested in why things are done in certain ways, and question beyond the obvious</li>
                        <li>I am interested in why things are done in certain ways, and question beyond the obvious</li>
                    </ul>                
                </div>
                <div class="col-lg-3 col-md-4 pe-5">
                    <ul>
                        <li>I am interested in why things are done in certain ways, and question beyond the obvious</li>
                        <li>I am interested in why things are done in certain ways, and question beyond the obvious</li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="results-inforow mb-5">
            <div class="result-rowheading">
                <h4 class="mb-4 pb-3">Customer focus</h4>
            </div>
            <div class="row result-rowinfo">
                <div class="col-lg-3 col-md-12 mb-4 mb-lg-0 px-2 dial-column text-center">
                    <img src={forimprovement} alt="Room for improvement dial" title="Room for improvement" />
                </div>
                <div class="col-lg-3 col-md-4 pe-5">
                    <ul>
                        <li>I am interested in why things are done in certain ways, and question beyond the obvious</li>
                        <li>I am interested in why things are done in certain ways, and question beyond the obvious</li>
                    </ul>                
                </div>
                <div class="col-lg-3 col-md-4 pe-5">
                    <ul>
                        <li>I am interested in why things are done in certain ways, and question beyond the obvious</li>
                        <li>I am interested in why things are done in certain ways, and question beyond the obvious</li>
                    </ul>                
                </div>
                <div class="col-lg-3 col-md-4 pe-5">
                    <ul>
                        <li>I am interested in why things are done in certain ways, and question beyond the obvious</li>
                        <li>I am interested in why things are done in certain ways, and question beyond the obvious</li>
                    </ul>
                </div>
            </div>
        </div>        
    </div>
}