import React from 'react';
import '../App.css';

function Home() {
    return (
        <div>
            <img className="record_player_img" src="./record_player.jpg" />
            <div className='home_music'>
                <div className="record_store_day">
                    <h2>Record Store Day</h2>
                    <h4>Record Store Day was conceived in 2007 at a gathering of independent record store owners and employees as a way to celebrate and spread the word about the unique culture surrounding nearly 1400 independently owned record stores in the US and thousands of similar stores internationally. The first Record Store Day took place on April 19, 2008. Today there are Record Store Day participating stores on every continent except Antarctica.</h4>
                </div>
                <div className="save_our_stages">
                    <h2>Save Our Stages</h2>
                    <h4>Rave reviews of #SOSFEST are pouring in from all over the world. But don’t worry if you missed it, we have you covered. You can still watch – or re-watch – the performances and snag some merch. All donations will still continue to benefit the NIVA Emergency Relief, which directly supports our most vulnerable venues experiencing catastrophic revenue loss.</h4>
                </div>
            </div>
        </div>
    )
}

export default Home