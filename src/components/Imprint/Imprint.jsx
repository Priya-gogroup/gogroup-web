import '../DataProttection/data-protection.scss';
import './imprint.scss';

const Imprint = () => {

    return (
        <>
            <div className="container">
                <div className="center-cont">
                    <div className="top-cont">
                        <div className="data-protection-image">
                            <div className="inner-cont">
                                <h2 className="title">Impression</h2>
                                <p className="text-block">Last updated: March 18th, 2022</p>
                            </div>
                        </div>
                        
                    </div>
                </div>
                <div className="center-cont">
                    <div className="mid-cont">
                        <p className="text-block">
                            Kite Tech GmbH<br/>
                            Maximiliankorso 70, 13465 Berlin,<br/> 
                            Deutschland Amtsgericht Charlottenburg (Berlin)<br/> HRB 213309 B<br/>
                            USt Nr.: DE334907255<br/>
                            Geschäftsführer: Sascha Weiler, Nico Weiler<br/>
                            Contact: hello@gogroup.co<br/>
                        </p>
                        <br/>
                        <p className="text-block">
                            The EU Commission has set up an internet platform for the online settlement of disputes ("OS platform") between entrepreneurs and consumers. The OS platform can be reached at https://ec.europa.eu/consumers/odr/. We are not willing and not obliged to participate in a dispute settlement procedure before a consumer arbitration board.
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Imprint;